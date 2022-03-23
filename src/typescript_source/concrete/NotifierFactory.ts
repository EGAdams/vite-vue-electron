import MonitoredObjectNotifier from './MonitoredObjectNotifier';
import MonitoredObject from './MonitoredObject';
/*
 *  class NotifierFactory
 */
class NotifierFactory {

    constructor() { console.log( 'constructing NotifierFactory object...' ); }
    
    createMonitoredObjectNotifier( monitoredObject: MonitoredObject ): MonitoredObjectNotifier {
        console.log( "creating monitored object notifier..." );
        return new MonitoredObjectNotifier( monitoredObject );
    }
}

export default NotifierFactory;
