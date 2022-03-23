import ISubject from './ISubject';
import IObserver from './IObserver';
/*
 * interface IMonitoredObject
 */
interface IMonitoredObject extends ISubject {
    monitors: Array< IObserver >
}

export default IMonitoredObject;
