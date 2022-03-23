/*
 *  class ObserverFactory
 */
import IObserver from '../abstract/IObserver';
import DatabaseObserver from './data/DatabaseObserver';
import ISubject from '../abstract/ISubject';
class ObserverFactory {
    createMonitoredObjectObserver( subject: ISubject ): IObserver {
        console.log( "creating monitored object observer");
        return new DatabaseObserver( subject );
    }
}

export default ObserverFactory;
