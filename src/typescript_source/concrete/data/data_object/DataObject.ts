/*
 *  The DataObject
 */
import mysql from 'mysql';
import util  from  'util';
import io from "socket.io-client";
import ISshConfig from "../../../abstract/ISshConfig";
import BasicConfig from "../../../config/BasicConfig";
import MonitoredObject from "../../MonitoredObject";
import ICommandFinishedEmitter from "../../../abstract/ICommandFinishedEmitter";

class DataObject {
    //pool: mysqlObject.Pool;
    emitter: ICommandFinishedEmitter;
    io: unknown;
    connection!: mysql.Connection;
 
    constructor( config: ISshConfig ) {
        this.emitter = io( "http://localhost:3000" );
        try {
            console.log( "***** DATA OBJECT CONNECTING *****" );
            this.connection = mysql.createConnection( config );
        } catch ( error ) {
            console.log(
                "*** ERROR: Database connection error.  calling dataObject.connect()... ***"
            );
        }
        
        console.log( "new DataObject created." );
    }

    connect (): void {
        // console.log( "*** creating database connection... ***" );
        // const pool = mysqlObject.createPool( new BasicConfig() ); // Recreate the connection, since
        // pool.on( "error", ( err: { code: string; message: string } ) => {
        //     console.log( "db error", err );
        //     if ( err.code === "PROTOCOL_CONNECTION_LOST" ) {
        //         // Connection to the MySQL server is usually
        //         this.connect(); // lost due to either server restart, or a
        //     } else {
        //         // connection idle timeout (the wait_timeout
        //         console.log( "*** ERROR: " + err.code + ": " + err.message );
        //         throw err; // server variable configures this)
        //     }
        // } );

        // pool.on( "close", function () { console.log( "SQL CONNECTION CLOSED." ); } );
    }

    async getLogs ( queryArg: string ): Promise<void> {
        try {
            const monitoredObject = new MonitoredObject();
            //   monitoredObject.screen_html = "";
            try {
                // this.pool.query( queryArg, ( _err, rows, _fields ) => {
                //     for ( const row in rows ) {
                //         const time = rows[ row ].time;
                //         const class_method = rows[ row ].class_method;
                //         const message = rows[ row ].message;
                //         const log = time + " " + class_method + " " + message + "<br>";
                //         // monitoredObject.screen_html += log;
                //     }
                //     console.log( _fields ); // hush eslint
                //     this.emitter.emit( "gotResults", monitoredObject );
                // } );
            } catch ( error ) {
                console.log( "*** ERROR: problem executing query to get logs. ***" );
            }
        } catch ( error ) {
            console.log( "*** ERROR: problem in DataObject.getLogs... ***" );
        }
    }

    updateObject ( objectName: string ): void {
        try {
            console.log( "executing await query in updateObject..." );
            const monitoredObject = new MonitoredObject();
            //   monitoredObject.screen_html = "";
            let dataQuery =
                "select object_data from monitored_objects where object_view_id='";
            dataQuery += objectName + "'";
            try {
                //this.pool.query( dataQuery, ( _err, rows, _fields ) => {
                    //   monitoredObject.object_data = rows[0];
                    //   if (monitoredObject.object_data) {
                    //     this.emitter.emit("gotResults", monitoredObject);
                    //   } else {
                    //     console.log("*** ERROR: no object data! ***");
                    //   }
                    //console.log( _fields ); // hush eslint
                //} );
            } catch ( error ) {
                console.log( "*** ERROR: problem while updatingObject() ***" );
            }
        } catch ( e ) {
            console.log( "*** ERROR: problem while updatingObject() ***" );
        }
    }

    async insertObject ( objectName: string, objectData: string ): Promise< void >{
        try {
            console.log( "executing await query in insertObject..." );
            let object_string = JSON.stringify( objectData );
            console.log( "object_string: " + object_string );
            let dataQuery = "insert into monitored_objects (object_view_id, object_data) values ('";
            dataQuery += objectName + "', '" + object_string + "')";
            let results: any;
            const query = util.promisify( this.connection.query ).bind( this.connection );
            try {
                results = await query( dataQuery );
            } catch ( error :any ) {
                throw Error( "error: " + error.toString() );
            }
            return results;
        } catch ( e ) {
            throw Error( "*** ERROR: problem while insertingObject() ***" );
        }
    }

    async getObject ( object_view_id: string ): Promise< void > {
        let dataQuery = "select object_data from monitored_objects where object_view_id='";
        dataQuery += object_view_id + "'";
        console.log( "running query: " + dataQuery );
            try {
                this.connection.query( dataQuery, function (_err, result, _fields) {
                    if (_err) throw _err;
                    console.table( result );
                    // callback( result );
                  });
            } catch ( error :any ) { console.log( "*** ERROR: problem while selectingObject(): " +
                                                  error.message + " ***" ); }}

    deleteObject ( object_view_id: string, callback: any ): void {
            let dataQuery = "delete from monitored_objects where object_view_id='";
            dataQuery += object_view_id + "'";
            console.log( "running query: " + dataQuery );
            try {
                this.connection.query( dataQuery, function (_err, delete_result, _fields) {
                    if (_err) throw _err;
                    console.table( delete_result );
                    callback( delete_result );
                  });
            } catch ( error :any ) { console.log( "*** ERROR: problem while deletingObject(): " +
                                                  error.message + " ***" ); }}

    async runSyncQuery( queryArg :string ) {
        try {
            let results: any;
            const query = util.promisify( this.connection.query ).bind( this.connection );
            try {
                console.log( "executing await query in runSyncQuery..." );
                results = await query( queryArg );
            } catch ( error :any ) {
                throw Error( "error: " + error.toString() );
            }
            return results;
        } catch ( e ) {
            throw Error( "*** ERROR: running query: " + queryArg + " ***" );
        }
    }
}

export default DataObject;
