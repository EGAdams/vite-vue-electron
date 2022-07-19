/** @interface IOutputProcessor */
import ICommandObject from "./ICommandObject";
import IRegex from "./IRegex";
interface IOutputProcessor {
    processOutput ( commandObjectArg: ICommandObject, regexArg: IRegex ): void; }

export default IOutputProcessor;
