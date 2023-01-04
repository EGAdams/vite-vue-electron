/*
*  class DeleteHtmlCommand
*/
import EmitterSocket from '../../EmitterSocket';
import ICommandObject from '../../../abstract/ICommandObject';

export default class DeleteHtmlCommand implements ICommandObject  {
    execution_type = "execute_and_process";
    id = 0;
    command_stringified = ""
    command_name = "delete_html_command"
    properties = new Array< ICommandObject >();
    processedOutput: unknown;
    executable = "delete_html_command.sh ";
    args = " ";
    description = "deletes html logs from remote machine";
    targetMachine = "thispc";
    commandObject = "CommandExecutor";
    output = new Array< string >();
    commandMethod = "execute";
    regex_map_filename = "DeleteHtmlCommandRegex.txt";
    outputProcessor = "DeleteHtmlCommandOutputProcessor";
    emitter = "EmitterSocket"
    status =  {
        statusBlock: {
            led: {
                "background-color": "yellow",
                color: "black"
            }
        }        
    }

    constructor() {
        console.log( "constructing DeleteHtmlCommand..." );
    }
    
}
