import IObserver from "./IObserver";

/*
 *  interface ISubject
 */
interface ISubject {
    observers: Array< IObserver >;
    attach( observer: IObserver ): void;
    detach( observer: IObserver ): void;
    notify(): void;
}

export default ISubject;
