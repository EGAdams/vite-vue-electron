/*
 *  class ServerRunningCommand
 */
import ICommandObject from "../../../abstract/ICommandObject";

class ServerRunningCommand implements ICommandObject {
  execution_type = "execute_and_process";
  id = 0;
  command_stringified = "";
  command_name = "server_running_command";
  properties = new Array< ICommandObject >();
  processedOutput: unknown;
  executable = "ps ";
  args = " -ef ";
  description = "checks server running on this machine";
  targetMachine = "thispc";
  commandObject = "CommandExecutor";
  output = new Array< string >();
  commandMethod = "execute";
  regex_map_filename = "ServerRunningRegex.txt";
  outputProcessor = "ServerRunningOutputProcessor";
  emitter = "Socket";
  status = {
    statusBlock: {
      led: {
        "background-color": "red",
        color: "white",
      },
    },
  };

  constructor() {
    console.log("constructing ServerRunningCommand...");
  }
}

export default ServerRunningCommand;
