import ITestable from "../abstract/ITestable";
import LogObjectContainer from "../concrete/LogObjectContainer";
import LogObjectFactory from "../concrete/LogObjectFactory";
import LogObjectProcessor from "../concrete/LogObjectProcessor";

/**
 * @description
 * 
 * 
 * @class LogObjectProcessorTest
 * @implements {I}
 */
export default class LogObjectProcessorTest implements ITestable {
    constructor() { console.log( 'constructing LogObjectProcessorTest object...' ); }
    testMe (): void {
        const logObjectContainer = new LogObjectContainer();
        const logObjectFactory   = new LogObjectFactory( this );

        for ( let i = 0; i < 10; i++ ) {
            logObjectContainer.addLog( logObjectFactory.createLogObject( "message_" + i )); 
        }
        
        const logObjectProcessor = new LogObjectProcessor( logObjectContainer );
        logObjectProcessor.processLogObjects();
    }
}
