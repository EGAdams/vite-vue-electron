/*
 * StartCommandManagerOutputProcessor
 */
import OutputProcessor from "../../commands/OutputProcessor";

class StartCommandManagerOutputProcessor extends OutputProcessor {
    server_js_size ( matchedRegex: { matchedString: string }, _index: unknown ) {
        console.log(
            "the size of cdrul.sh is: " + matchedRegex.matchedString + " bytes"
        );
        console.log( _index ); // hush eslint
    }
}
module.exports = StartCommandManagerOutputProcessor; // dont forget this!
