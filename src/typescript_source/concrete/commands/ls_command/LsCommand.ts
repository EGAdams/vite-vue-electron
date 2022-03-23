/*
 *  class LsCommand
 */
import ICommandObject from "../../../abstract/ICommandObject";

export default class LsCommand implements ICommandObject {
  execution_type = "execute_and_process";
  id = 0;
  command_stringified = "";
  command_name = "lscommand";
  properties = new Array< ICommandObject >();
  processedOutput: unknown;
  executable = "ls ";
  args = " -lart ";
  description = "show dir";
  targetMachine = "thispc";
  commandObject = "CommandExecutor";
  output = new Array< string >();
  commandMethod = "execute";
  regex_map_filename = "LsRegex.txt";
  outputProcessor = "LsCommandOutputProcessor";
  emitter = "Socket";
  status = {
    statusBlock: {
      led: {
        "background-color": "yellow",
        color: "black",
      },
    },
  };

  constructor() {
    console.log("constructing LsCommand...");
  }
}
