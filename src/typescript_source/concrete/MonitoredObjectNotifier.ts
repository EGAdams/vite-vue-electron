import MonitoredObject from './MonitoredObject';
/*
 *  class MonitoredObjectNotifier
 */
class MonitoredObjectNotifier {
    monitoredObject: MonitoredObject;

    constructor( monitoredObject: MonitoredObject ) { 
        this.monitoredObject = monitoredObject;
        console.log( 'constructing MonitoredObjectNotifier object...' ); }
    
    notify(): void {
        console.log( "executing notify() for monitored object..." );
    }
}

export default MonitoredObjectNotifier;
