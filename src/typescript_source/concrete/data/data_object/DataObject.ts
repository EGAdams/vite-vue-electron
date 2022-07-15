/*
 *  The DataObject
 */
import * as mysqlObject from "mysql";
import io from "socket.io-client";
import ISshConfig from "../../../abstract/ISshConfig";
import BasicConfig from "../../../config/BasicConfig";
import MonitoredObject from "../../MonitoredObject";
import ICommandFinishedEmitter from "../../../abstract/ICommandFinishedEmitter";

class DataObject {
    pool: mysqlObject.Pool;
    emitter: ICommandFinishedEmitter;
    io: unknown;
 
    constructor( config: ISshConfig ) {
        this.pool = mysqlObject.createPool( config );
        this.emitter = io( "http://localhost:3000" );
        try {
            console.log( "***** DATA OBJECT CONNECTING *****" );
            this.connect();
        } catch ( error ) {
            console.log(
                "*** ERROR: Database connection error.  calling dataObject.connect()... ***"
            );
            this.connect();
        }
        console.log( "new DataObject created." );
    }

    connect (): void {
        console.log( "*** creating database connection... ***" );
        const pool = mysqlObject.createPool( new BasicConfig() ); // Recreate the connection, since
        pool.on( "error", ( err: { code: string; message: string } ) => {
            console.log( "db error", err );
            if ( err.code === "PROTOCOL_CONNECTION_LOST" ) {
                // Connection to the MySQL server is usually
                this.connect(); // lost due to either server restart, or a
            } else {
                // connection idle timeout (the wait_timeout
                console.log( "*** ERROR: " + err.code + ": " + err.message );
                throw err; // server variable configures this)
            }
        } );

        pool.on( "close", function () { console.log( "SQL CONNECTION CLOSED." ); } );
    }

    async getLogs ( queryArg: string ): Promise<void> {
        try {
            const monitoredObject = new MonitoredObject();
            //   monitoredObject.screen_html = "";
            try {
                this.pool.query( queryArg, ( _err, rows, _fields ) => {
                    for ( const row in rows ) {
                        const time = rows[ row ].time;
                        const class_method = rows[ row ].class_method;
                        const message = rows[ row ].message;
                        const log = time + " " + class_method + " " + message + "<br>";
                        // monitoredObject.screen_html += log;
                    }
                    console.log( _fields ); // hush eslint
                    this.emitter.emit( "gotResults", monitoredObject );
                } );
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
                this.pool.query( dataQuery, ( _err, rows, _fields ) => {
                    //   monitoredObject.object_data = rows[0];
                    //   if (monitoredObject.object_data) {
                    //     this.emitter.emit("gotResults", monitoredObject);
                    //   } else {
                    //     console.log("*** ERROR: no object data! ***");
                    //   }
                    console.log( _fields ); // hush eslint
                } );
            } catch ( error ) {
                console.log( "*** ERROR: problem while updatingObject() ***" );
            }
        } catch ( e ) {
            console.log( "*** ERROR: problem while updatingObject() ***" );
        }
    }

    insertObject ( objectName: string, objectData: string ): void {
        try {
            console.log( "executing await query in insertObject..." );
            //  const monitoredObject = new MonitoredObject();
            //   monitoredObject.screen_html = "";
            let object_string = JSON.stringify( objectData );
            console.log( "object_string: " + object_string );
            let dataQuery =
                "insert into monitored_objects (object_view_id, object_data) values ('";
            dataQuery += objectName + "', '" + object_string + "')";
            try {
                this.pool.query( dataQuery, ( _err, _rows, _fields ) => {
                    //   monitoredObject.object_data = rows[0];
                    //   if (monitoredObject.object_data) {
                    //     this.emitter.emit("gotResults", monitoredObject);
                    //   } else {
                    //     console.log("*** ERROR: no object data! ***");
                    //   }
                    console.log( _fields ); // hush eslint
                } );
            } catch ( error ) {
                console.log( "*** ERROR: problem while insertingObject() ***" );
            }
        } catch ( e ) {
            console.log( "*** ERROR: problem while insertingObject() ***" );
        }
    }

    selectObject ( object_view_id: string ): void {
        try {
            console.log( "executing await query in selectObject..." );
            let dataQuery =
                "select object_data from monitored_objects where object_view_id='";
            dataQuery += object_view_id + "'";
            try {
                this.pool.query( dataQuery, ( _err, rows, _fields ) => {
                    let object_data = rows[ 0 ][ "object_data" ];
                    let object_view = JSON.parse( object_data );
                    console.log( "object view name: " + object_view.name );
                    if( object_view.name == "test" ) {
                        console.log( "tests passed." );
                    } else {
                        console.log( "tests failed." );
                    }
                });
            } catch ( error ) {
                console.log( "*** ERROR: problem while selectingObject() ***" );
            }
        } catch ( e ) {
            console.log( "*** ERROR: problem while selectingObject() ***" );
        }
    }
}

export default DataObject;
