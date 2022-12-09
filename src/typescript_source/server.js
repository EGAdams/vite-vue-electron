const app = require( "express" )();            // app is used to build the http object
const http = require( "http" ).Server( app );  // http is needed for the main io socket
const io = require( "socket.io" )( http );      // the main socket

const FileManager = require( '../../out/typescript_source/concrete/FileManager' );
const Regex = require( '../../out/typescript_source/concrete/Regex' );
const CommandExecutor = require( '../../out/typescript_source/concrete/CommandExecutor' );

let users = [];
let messages = [];
let output = [];
let index = 0;

io.on( "connection", socket => {
    console.log( "someone connected." );
    socket.emit( 'loggedIn', {
        users: users.map( s => s.username ),
        messages: messages
    });

    socket.on( 'newuser', username => {
        console.log( `${username} has arrived at the party.` );
        socket.username = username;

        users.push( socket );
        console.log( "emitting user on line..." );
        io.emit( 'userOnline', socket.username );
    });

    socket.on( 'processCommand', commandObject => {
        console.log( commandObject.outputPath + "  was used as a path for processing a command" );
        console.log( "processing command... " );

        // var filename = "/mnt/c/Users/eg197/tools/vue_projects/vue-node-chatapp/alertCheck_1615899731770.txt";
        var fileManager = new FileManager();
        var freshArray = fileManager.populateArray( commandObject.outputPath );


        console.log( "array populated.  size is: " + freshArray.length );

        var regexMapFile = "./parsingTools/customerAlertRegex.txt"

        // set up populator for regex

        var populator = new ArrayPopulator( fileManager, regexMapFile );


        // regex needs a populator to fill it's clip
        // populators have a populateArray() method

        var regex = new Regex( populator );
        var alertCheckPopulator = new AlertPopulator();

        var customers = alertCheckPopulator.populateAlerts( freshArray, regex );

        console.log( customers.acp.numberOfAlerts );


        // emit result object
        console.log( "emitting got data in the console!" );
        io.emit( 'gotData', customers );
        console.log( "done with emit." );

    });

    socket.on( 'msg', msg => {
        let message = {
            index: index,
            username: socket.username,
            msg: msg
        }
        console.log( "pushing message..." )
        messages.push( messages );
        io.emit( 'msg', message );
        index++;
    });

    socket.on( 'sendCommand', function command( commandObject ) {
        if ( commandObject == null || commandObject == undefined ) {
            console.error( "*** ERROR: the command object is invalid here! " +
                " exiting socket on send command handler... *** " );
            return;
        }
        console.log( 'catching send command in server.js ...' );
        console.log( "getting regex map from server..." );

        var fileManager = new FileManager();

        var regexMapFile = "./parsingTools/" + commandObject.regex_map_filename

        // set up populator for regex

        var populator = new ArrayPopulator( fileManager, regexMapFile );

        // populate regexmap

        commandObject.regex_map = new Regex( populator );

        // execute command...

        var executor = new CommandExecutor( commandObject );
        executor.executeCommand();

        // process output here or in the Vue component

        // let's do it here until we find out how vue components can use the code on this machine easier

    });

    socket.on( 'commandFinished', function ( commandObject ) {
        console.log( "commandObject output length in commandFinished handler: " + commandObject.output.length );

        // this is where we process the output for the command object.

        // all output processors need this initialization

        // need a populator to create a regex

        // a file manager is a populator

        // set up populator for regex

        var populator = new ArrayPopulator( new FileManager, "parsingTools/" + commandObject.regex_map_filename );

        // regex needs a populator to fill it's clip

        // populators have a populateArray() method

        var regex = new Regex( populator );
        var OutputProcessor = require( "./parsingTools/" + commandObject.outputProcessor );
        console.log( "creating new output processor..." );
        var outputProcessor = new OutputProcessor();
        outputProcessor.processOutput( commandObject, regex );

            // to update the view...

        io.emit( "gotData", commandObject );        
    });

    socket.on( 'checkRunStatus', command => {
        var storage = new Storage( "checkRunStatus" );
        console.log( 'catching check run status command...' );
        // stream.end('ls\nexit\n');
        conn.exec( 'ls -lart', function ( err, stream ) {
            if ( err ) {
                console.log( 'SECOND :: exec error: ' + err );
                return conn.end();
            }
            stream.on( 'end', function () {
                // conn.end(); // close parent (and this) connection
            }).on( 'data', function ( data ) {
                console.log( data.toString() );
                output.push( data.toString() );
                let message = {
                    index: index,
                    username: socket.username,
                    msg: data.toString(),
                }
                console.log( "processing output..." );
                console.log( "output length: [" + output.length + "]" );
                console.log( output[ 0 ].toString() );
                storage.store( output[ 0 ].toString() );
                console.log( "done storing text to " + storage.getFilename() );
            });
        });
    });

    socket.on( 'alertCheck', function command( commandObject ) {
        var storage = new Storage( "alertCheck" );

        var command = new Command( commandObject );

        console.log( command.name + " command..." );

        conn.exec( './alertCheck.sh', function ( err, stream ) {
            if ( err ) {
                console.log( 'SECOND :: exec error: ' + err );
                return conn.end();
            }
            stream.on( 'end', function () {
                // conn.end(); // close parent (and this) connection
            }).on( 'data', function ( data ) {
                console.log( data.toString() );
                output.push( data.toString() );
                storage.store( data.toString() );
                let message = {
                    index: index,
                    username: socket.username,
                    msg: data.toString(),
                }
                console.log( "processing output..." );
                console.log( "output length: [" + output.length + "]" );
                console.log( output[ 0 ].toString() );
                console.log( "done storing text to " + storage.getFilename() );
                commandObject.output = output[ 0 ].toString();
                commandObject.process();
            });
        });
    });

    socket.on( 'blotterCheck', command => {
        var storage = new Storage( "blotterCheck" );
        console.log( 'catching blotter check command...' );

        conn.exec( './blotterCheck.sh', function ( err, stream ) {
            if ( err ) {
                console.log( 'SECOND :: exec error: ' + err );
                return conn.end();
            }
            stream.on( 'end', function () {
                // conn.end(); // close parent (and this) connection
            }).on( 'data', function ( data ) {
                console.log( data.toString() );
                output.push( data.toString() );
                storage.store( data.toString() );
                let message = {
                    index: index,
                    username: socket.username,
                    msg: data.toString(),
                }
                console.log( "processing output..." );
                console.log( "output length: [" + output.length + "]" );
                console.log( output[ 0 ].toString() );
                console.log( "done storing text to " + storage.getFilename() );
            });
        });
    });

    // Disconnect
    socket.on( "disconnect", () => {
        console.log( `${socket.username} has left the party.` );
        io.emit( "userLeft", socket.username );
        users.splice( users.indexOf( socket ), 1 );
    });
});



http.listen( process.env.PORT || 3000, () => {
    console.log( "Listening on port %s", process.env.PORT || 3000 );
});