import ILogObject from "../abstract/ILogObject";
import FreshToolBox from "./FreshToolBox";
import LogObjectContainer from "./LogObjectContainer";
/**
 * @description
 * 
 * 
 * @class LogObjectProcessor
 * @implements {I}
 */
export default class LogObjectProcessor  {
    logObjectContainer: LogObjectContainer;
    writtenLogs:   Array< ILogObject > = [];
    unwrittenLogs: Array< ILogObject > = [];

    constructor( logObjectContainerArg: LogObjectContainer ) {
        console.log( 'constructing LogObjectProcessor object...' ); 
        this.logObjectContainer = logObjectContainerArg; }
    
    addLog( logToAdd: ILogObject ): void {
        if ( !FreshToolBox.isInArray( logToAdd, this.unwrittenLogs )) {
            this.unwrittenLogs.push( logToAdd ); }}

    processLogObjects(): void { 
        console.log( 'processing log objects...' );
    }    
}
