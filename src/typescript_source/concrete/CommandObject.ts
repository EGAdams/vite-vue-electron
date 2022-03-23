/*
 * class CommandObject implements ICommandObject
 */

import ICommandObject from "../abstract/ICommandObject";

class CommandObject implements ICommandObject {
  executable: string;
  args: string;
  description: string;
  targetMachine: string;
  output: string[];
  regex_map_filename: string;
  outputProcessor: string;
  emitter: string;
  status: unknown;
  processedOutput: unknown;
  properties: ICommandObject[];
  execution_type: string;
  id: number;
  command_stringified: string;
  command_name: string;

  constructor(commandObjectArg: ICommandObject) {
    this.command_name = commandObjectArg.command_name;
    this.executable = commandObjectArg.executable;
    this.args = commandObjectArg.args;
    this.description = commandObjectArg.description;
    this.targetMachine = commandObjectArg.targetMachine;
    this.output = commandObjectArg.output;
    this.status = commandObjectArg.status;
    this.regex_map_filename = commandObjectArg.regex_map_filename;
    this.outputProcessor = commandObjectArg.outputProcessor;
    this.emitter = "Socket";
    this.processedOutput = Object; // no processed output yet.
    this.properties = commandObjectArg.properties;
    this.execution_type = commandObjectArg.execution_type;
    this.id = commandObjectArg.id;
    this.command_stringified = commandObjectArg.command_stringified;
  }
}

export default CommandObject;
