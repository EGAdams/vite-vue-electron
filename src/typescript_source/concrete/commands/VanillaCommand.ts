import ICommandObject from "../../abstract/ICommandObject";
import Socket from "../Socket";
/**  @class VanillaCommand */
class VanillaCommand implements ICommandObject {
  execution_type = "";
  id = 0;
  command_stringified = "";
  command_name = "";
  properties = new Array<ICommandObject>();
  processedOutput: unknown;
  executable = "";
  args = "";
  description = "";
  targetMachine = "";
  commandObject = "";
  output = new Array<string>();
  commandMethod = "execute";
  regex_map_filename = "t";
  outputProcessor = "";
  emitter = new Socket();
  status = {
    statusBlock: {
      led: {
        "background-color": "yellow",
        color: "black",
      },
    },
  };

  constructor() { console.log("constructing VanillaCommand..."); }}

export default VanillaCommand;
