import ILogObject from "../abstract/ILogObject";
/**
 * @description
 * creates log objects
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
        const time_now              = Date.now();
        const random_number         = Math.floor( Math.random() * 10000000000000 );
        const logObject: ILogObject = {
            timestamp: time_now,
            id:        this.someObject.constructor.name + "_" + random_number + '_' + time_now,
            message:   messageArg,
            method:    this.getCallingMethod() };
        return logObject; }

    getCallingMethod(): string {
        var obj:any = {};
        Error.captureStackTrace( obj, this.getCallingMethod );
        return obj.stack.split( '\n' )[ 2 ].match( /at\s+\w+.(\w+)/ )[ 1 ]; }
}
