/*
 *  interface IChangeManager
 *
 *   GoF page 333:
 * 
 *   ChangeManager has three responsibilities:
 * 
 *  1. It maps a subject to its observers and provides an interface
 *      to maintain this mapping. This eliminates the need for subjects to
 *      maintain references to their observers and vice versa.
 *
 *  2. It defines a particular update strategy.
 * 
 *  3. It updates all dependent observers at the request of a subject. 
 * 
 */
import IObserver from "./IObserver";
import ISubject from "./ISubject";

interface IChangeManager {
    register( subject: ISubject, observer: IObserver ): void;
    unregister( subject: ISubject, observer: IObserver ): void;
    notify(): void;
}

export default IChangeManager;
