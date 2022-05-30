/*
 * class CommandExecutor ( CommandObject command )
 */
import CommandObject from "./CommandObject";
import Regex from "./Regex";
import ArrayPopulator from "./ArrayPopulator"; 
import FileManager from "./FileManager";
import ICommandObject from '../abstract/ICommandObject';
import exec from 'child_process';
import ICommandFinishedEmitter from '../abstract/ICommandFinishedEmitter';
import ServerRunningCommand from './commands/server_running/ServerRunningCommand';

class CommandExecutor {
    commandObject: ICommandObject;
    io: ICommandFinishedEmitter | undefined;
    CommandFinishedEmitter: Promise< ICommandFinishedEmitter > | undefined;

    constructor( commandObjectArg: ICommandObject ) {
        this.commandObject = commandObjectArg;
    }

    public async executeCommand(): Promise< void > {
        console.log( "requiring this.commandObject.emitter: [" + this.commandObject.emitter + "]" );
        const CommandFinishedEmitter = await import ( "./" + this.commandObject.emitter );
        this.io = new CommandFinishedEmitter();

        console.log( "processing command..." );

        if ( this.commandObject.execution_type == "execute_and_process" ) {
            this.executeAndProcess();
        } else if( this.commandObject.execution_type == "execute_only" ) {
            this.executeOnly();
        } else {
            this._execute();
        }
    }

    private _execute(): void {
        console.log( "executable: " + this.commandObject.executable );
        console.log( "target: [" + this.commandObject.targetMachine + "]" );
        if( this.commandObject.targetMachine == "thispc" ) {            
            const executing = this.commandObject.executable + " " + this.commandObject.args;
            console.log( "executing: " + executing );
            exec( executing, ( error, stdout, stderr ) => {
                if( error ) {
                    console.log( `error in CommandExecutor: ${ error.message }` );
                    return;
                }
                if( stderr ) {
                    console.log( `stderr: ${ stderr }` );
                    return;
                }

                this.commandObject.output = stdout.split( /\r?\n/ );  // populate output here
                console.log( "emitting command finished... " );
                if ( this.io ) { this.io.emit( "commandFinished", this.commandObject ); }
            });
        } else {
            console.log( "execute command on target machine... " );
            console.log( "implement ssh here." );
        }
    }

    private executeAndProcess(): void {
        console.log( "executable: " + this.commandObject.executable );
        console.log( "target: [" + this.commandObject.targetMachine + "]" );
        if( this.commandObject.targetMachine == "thispc" ) {
            const commandToExecute = this.commandObject.executable + " " + this.commandObject.args;
            console.log( "executing: " + commandToExecute );
            exec( commandToExecute, async ( error, stdout, stderr ) => {
                if( error ) {
                    console.log( `error in CommandExecutor: ${ error.message }` );
                    return;
                }
                if( stderr ) {
                    console.log( `stderr: ${ stderr }` );
                    return;
                }

                this.commandObject.output = stdout.split( /\r?\n/ );  // populate output here;
                console.log( "commandObject output length in executeAndProcess: " + this.commandObject.output.length );
                try {
                    const populator = new ArrayPopulator( new FileManager, "parsingTools/" + this.commandObject.regex_map_filename );
                    const regex = new Regex( populator, this.commandObject.regex_map_filename );
                    const OutputProcessor = await import( "./" + this.commandObject.outputProcessor );
                    console.log( "creating new output processor: " + OutputProcessor.name + "..." );
                    const outputProcessor = new OutputProcessor();
                    outputProcessor.processOutput( this.commandObject, regex );
                } catch {
                    console.log( "*** WARNING: trying to require " + this.commandObject.outputProcessor + ", but it does not exist. ***" );
                }
            });
        }
    }

    private executeOnly(): void {
        console.log( "executable: " + this.commandObject.executable );
        console.log( "target: [" + this.commandObject.targetMachine + "]" );
        if ( this.commandObject.targetMachine == "thispc" ) {
            const commandToExecute = this.commandObject.executable + " " + this.commandObject.args;
            console.log( "executing: " + commandToExecute );
            exec( commandToExecute, async ( error, stdout, stderr ) => {
                if( error ) {
                    console.log( `error in CommandExecutor: ${ error.message }` );
                    return;
                }
                if( stderr ) {
                    console.log( `stderr: ${ stderr }` );
                    return;
                }
                this.commandObject.output = stdout.split( /\r?\n/ );  // populate output here;
                console.log( "output: " + this.commandObject.output );
            });
        }        
    }

    public testMe(): void {
        console.log( "inside testMe()" );
        this.commandObject = new CommandObject( new ServerRunningCommand());
        this.executeCommand();
    }
}

export default CommandExecutor;
