import ILogObject from "../abstract/ILogObject";

/**
 * @description
 * 
 * 
 * @class LogObjectFactory
 * @implements {I}
 */
export default class LogObjectFactory {
    someObject: any;

    constructor( someObjectArg: any ) { 
        console.log( 'constructing LogObjectFactory object...' ); 
        this.someObject = someObjectArg; }
    
    createLogObject( messageArg: string ): ILogObject {
        const time_now = Date.now();
        const logObject: ILogObject = {
            timestamp: time_now,
            id:        this.someObject.method + '_' + time_now,
            message:   messageArg,
            method:    this.someObject.method
        };
        return logObject;
    }   
}
