import ICommandObject from "./ICommandObject";
import IRegex from "./IRegex";

/*
 *  interface IOutputProcessor
 */
interface IOutputProcessor {
    processOuput ( commandObjectArg: ICommandObject, regexArg: IRegex ): void;
}

export default IOutputProcessor;
