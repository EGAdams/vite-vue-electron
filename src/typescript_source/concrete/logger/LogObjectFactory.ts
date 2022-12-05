import MonitoredObject from "../../../../node_modules/monitored-object-ts";
import IMonitoredObject from "../../abstract/IMonitoredObject";

/**
 *  @class LogObjectFactory
 * 
 *  @description
 *  a factory for log objects.
 * 
 */
 export default class LogObjectFactory {
    constructor( objectName: string ) { console.log( "creating a log object from " + objectName + "..." ); }
    /**
     * @method getLogger
     * @description
     * removes an object from an array of any type of objects.
     *
     * @param {string} objectName
     * @param {Array< unknown >} arrayToRemoveItFrom
     * @return { IMonitoredObject }
     * @memberof LogObjectFactory
     */

	factory_id = "2022";

    static getLogger ( objectName: string ): IMonitoredObject {
        console.log( "getting logger for " + objectName + "..." );
		let monitoredObject = new [ objectName ](); 

	}
    
    static capitalizeFirstLetter ( stringToUppercase: string ): string {
        return stringToUppercase.charAt( 0 ).toUpperCase() + stringToUppercase.slice( 1 ); }

    static isInArray ( objectToSearchFor: any, arrayToSearch: Array< any > ): boolean {
        return( arrayToSearch.indexOf( objectToSearchFor ) > -1 ); }
    
    static assert( condition: any, msg?: string ): asserts condition {
        if ( !condition ) {
            throw new Error( msg )
        }}
}