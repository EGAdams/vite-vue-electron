import ISubject from '../abstract/ISubject';
import ITestable from '../abstract/ITestable';
import ObserverFactory from './ObserverFactory';
import IObserver from '../abstract/IObserver';
import FreshToolBox from '../concrete/FreshToolBox';
/**
 *  @class MonitoredObject
 * 
 *  @description
 * 
 *  This is an object that we want to watch.  Hence the implementation of
 *  <b>ISubject</b> (GoF p.328) where observers are attached and updated.  
 * 
 *  In the original design, only one database observer is attached so that 
 *  changes in the objects' state can be "observed" by anything that has 
 *  access the database.
 * 
 * 
 *  @implements {ISubject}
 *  @implements {ITestable}
 * 
 */

export default class MonitoredObject implements ISubject, ITestable {
    private observerFactory  = new ObserverFactory();
    public observers         = new Array< IObserver >();

    constructor() { 
        console.log( "creating a monitored object observer..." );
        this.attach( this.observerFactory.createMonitoredObjectObserver( this )); }

    attach( observer: IObserver ): void { 
        console.log( "attaching an observer for this monitored object..." );
        this.observers.push( observer ); }

    detach( observer: IObserver ): void { 
        FreshToolBox.removeSpecificObjectFromArray( observer, this.observers ); }
    
    notify(): void {
        console.log( "calling update() for each observer..." );
        for ( const observer in this.observers ) {
            this.observers[ observer ].update();
        }}

    testMe (): void {
        const errors: unknown[] = [];
        if ( errors.length == 0 ) {
            console.log( "Object passed all tests." );
        } else {
            errors.forEach( ( error ) => {
                console.error( error );
            });
        }}
}

if ( typeof process != "undefined" ) {  // node MonitoredObject.js testMe
    const theArguments = process.argv.slice( 2 );
    if ( theArguments.includes( "testMe" ) ) {
        const monitoredObject = new MonitoredObject();
        monitoredObject.testMe(); }}
