import ICommandObject from "../../../abstract/ICommandObject";
import Socket from "../../Socket";

/** @class BoaLoginCommand */
export default class BoaLoginCommand implements ICommandObject {
    
    constructor() { console.log( "constructing BoaLoginCommand..." ); }

    execution_type = "execute_and_process";
    id = 0;
    command_stringified = "";
    command_name = "server_running_command";
    properties = new Array<ICommandObject>();
    processedOutput: unknown;
    executable = "ps ";
    args = " -ef ";
    description = "checks server running on this machine";
    targetMachine = "thispc";
    commandObject = "CommandExecutor";
    output = new Array<string>();
    commandMethod = "execute";
    regex_map_filename = "commands/server_running/BoaLoginRegex.txt";
    outputProcessor = "commands/server_running/BoaLoginOutputProcessor";
    emitter = new Socket();
    status = {
        statusBlock: {
            led: {
                "background-color": "red",
                color: "white",
            },
        },
    };

}
