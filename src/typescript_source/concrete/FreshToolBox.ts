import IObserver from "../abstract/IObserver";
/**
 *  @class FreshToolBox
 * 
 *  @description
 *  
 *  Trying to reduce clutter by putting re-useable tools in here.  Currently
 *  has methods to remove a specific object from an array of Observers and a 
 *  method to capitalize the first letter of a string.
 * 
 */
export default class FreshToolBox {
    
    constructor() { console.log( "contructing fresh tool box..." ); }

    /*
     *  spent over an hour today trying to do this in typescript.  put this dam thing somewhere safe.
     *  ***uk it.. disabled eslint for line 16
     */
    public removeSpecificObjectFromArray ( ObjectToRemove: IObserver, arrayToRemoveItFrom: Array< unknown >): Array< unknown > {
        
        // find index in your array
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const index = arrayToRemoveItFrom.findIndex( objectInthisArray => ( objectInthisArray as any ) === ObjectToRemove ); 
        if ( index ) {
            return arrayToRemoveItFrom.splice( index, 1 ); //remove element from array
        } else {
            console.log ( "*** WARNING: trying to remove an object from an array that doesn't exist in the array ***" );
            return arrayToRemoveItFrom;
        }
    }

    static capitalizeFirstLetter( stringToUppercase: string ): string { 
        return stringToUppercase.charAt( 0 ).toUpperCase() + stringToUppercase.slice( 1 ); }
    
}
