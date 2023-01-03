const app = require( "express" )();            // app is used to build the http object
const http = require( "http" ).Server( app );  // http is needed for the main io socket
const io = require( "socket.io" )( http );      // the main socket
import { MonitoredObject } from "monitored-object-ts";

/** @class LinuxSubsystemServer */
class LinuxSubsystemServer {
    private logger: any;
    
    constructor() {
        let dataSourceLocation = "https://americansjewelry.com/libraries/local-php-api/index.php/";
        this.logger = new MonitoredObject({ new_id: "LinuxSubsystemServer_2022", data_source_location: dataSourceLocation });
        this.logger.logUpdate( "LinuxSubsystemServer object constructed." ); }

    public start() {
        io.on( "connection", (socket: { emit: ( arg0: string, arg1: { connection_message: string; } ) => void; on: ( arg0: string, arg1: { (): void; (): void; } ) => void; toString: () => any; }) => {
            this.logger.logUpdate( "someone connected." );
            socket.emit( 'loggedIn', {
                connection_message: "im logged in" });

            socket.on( 'sendCommand', () => {                       // let's do it here until we find out how vue 
                this.logger.logUpdate( "sending command..." ); });  // components can use the code on this machine easier
        
            // Disconnect
            socket.on( "disconnect", () => {
                this.logger.logUpdate( `disconnecting ${socket.toString()}` );
                io.emit( "userLeft", "user_that_left" );
            }); });
        
        http.listen( process.env.PORT || 3000, () => { 
            let port = process.env.PORT || 3000;
            setTimeout( () => { this.logger.logUpdate( "Server start finished.  Listening on port: " + port + "..." ); }, 1000 ); }); } 
}

export default LinuxSubsystemServer;
