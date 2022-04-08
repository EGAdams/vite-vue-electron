/*
 *  class ObserverFactory
 */
import IObserver from '../abstract/IObserver';
import DatabaseObserver from './data/DatabaseObserver';
import ISubject from '../abstract/ISubject';
/**
 *  @description
 * This is a factory class that creates observers.  So far, the only observer
 * that is created is the DatabaseObserver.
 *
 * @class ObserverFactory
 */
class ObserverFactory {
    createMonitoredObjectObserver( subject: ISubject ): IObserver {
        console.log( "creating monitored object observer");
        return new DatabaseObserver( subject );
    }
}

export default ObserverFactory;
