/*
 * ServerRunningOutputProcessor
 */
import OutputProcessor from "../../commands/OutputProcessor";

class ServerRunningOutputProcessor extends OutputProcessor {
    server_running( matchedRegex: { [ x: string ]: any; matchedString: string }, _index: unknown ) {
        console.log( "found this process: " + matchedRegex.regex[ 1 ] + " so it must be running." ); }}
module.exports = ServerRunningOutputProcessor; // don't forget this!
