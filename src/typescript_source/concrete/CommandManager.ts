/*
 *  class CommandManager
 *
 *  start ()        =>  starts interval to check Q every so often.
 *  _executeCommand =>  executes command from Q and then deletes it.
 * 
 */
const CHECK_EVERY = 2000; // milliseconds
const EXEC_PATH = "/mnt/c/Users/EG/monitor/";

import CommandExecutor from "./CommandExecutor";
import DataObject from "./data/data_object/DataObject";
import CommandObject from "./CommandObject";
import ICommandObject from "../abstract/ICommandObject";
import BasicConfig from "../config/BasicConfig";
import IMonitoredObjectRow from "../abstract/IMonitoredObjectRow";
import EmitterSocket from "./EmitterSocket";
const { MonitoredObject } = require( 'monitored-object-ts' );

/**
 *
 *
 * @class CommandManager
 * @extends {MonitoredObject}
 */
class CommandManager extends MonitoredObject {
    private que = new Array< CommandObject >();
    dataObject = new DataObject( new BasicConfig() );

    constructor() { super(); }

    public start(): void {
        setInterval( () => {
            this.getCommands();
            this.processQue();
        }, CHECK_EVERY );
    }

    /**
     * gets commands from the command Q
     *
     * @private
     * @memberof CommandManager
     * @returns { void }
     */
    private getCommands (): void {
        try {
            this.dataObject.connection.query(
                "select * from wp_commands",
                ( _err: unknown, rows: Array< IMonitoredObjectRow >, _fields: unknown ) => {
                    for ( const row in rows ) {
                        const commandObject               = new Object() as ICommandObject;
                        commandObject.executable          = rows[ row ].command_name;
                        commandObject.args                = rows[ row ].command_args;
                        commandObject.id                  = rows[ row ].id;
                        commandObject.targetMachine       = "thispc";
                        commandObject.emitter             = "EmitterSocket";
                        commandObject.command_stringified = rows[ row ].command_stringified;
                        const index = this.que.findIndex(( x ) => x.command_name == commandObject.command_name );
                        if ( index < 0 ) {
                            this.que.push( new CommandObject( commandObject ) );
                        } else {
                            console.log( `command object with name: ${ commandObject.command_name } already exists in Q.` ); }
                    }
                    console.log( _fields ); // hush eslint
                }
            );
        } catch ( error ) {
            if ( error instanceof Error ) {
                console.log( "error: " + error.message );
            } else {
                console.log(
                    "*** ERROR: unknown caught error while CommandManager.getCommands() ***"
                );
            }
        }
    }

    /**
     * executes a command from the command Q
     * @param { CommandObject } commandArg 
     */
    private executeCommand ( commandArg: CommandObject ): void {
        console.log( "executing command: " + commandArg.executable + "..." );
        if ( commandArg.executable == "restart_server" ) {
            console.log( "restarting server on the command line..." );

            // check server command object here

            const commandExecutor = new CommandExecutor( commandArg );
            commandExecutor.execute();
        } else if ( commandArg.command_stringified.length > 0 ) {
            console.log(
                "found command object.  length: " +
                commandArg.command_stringified.length
            );
            console.log( "parsing command object..." );
            const command_json_object = JSON.parse( commandArg.command_stringified ); // string to json object
            command_json_object.executable =
                EXEC_PATH + command_json_object.executable; // work out PATH later.. dam that's a rabbit hole
            const commandExecutor = new CommandExecutor( command_json_object );
            commandExecutor.execute();
        }
    }

    /**
     * Process entire command que
     */
    private processQue (): void {
        for ( let index = 0; index < this.que.length; index++ ) {
            const commandToExecute = this.que[ index ];
            const current_id = this.que[ index ].id;
            this.que.splice( index, 1 );
            try {
                this.dataObject.connection.query(
                    "delete from wp_commands where id='" + current_id + "'",
                    function () {
                        console.log( "deleted id: " + current_id );
                    }
                );
            } catch ( error ) {
                if ( error instanceof Error ) {
                    console.log( "error: " + error.message );
                } else {
                    console.log(
                        "*** ERROR: unknown caught error while CommandManager.getCommands() ***"
                    );
                }
            }
            this.executeCommand( commandToExecute );
        }
    }
}

export default CommandManager;
