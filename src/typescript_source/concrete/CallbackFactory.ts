/*
 *  class CallbackFactory
 */
export default class CallbackFactory {
    constructor() { console.log( 'constructing CallbackFactory object...' ); } // not sure if this is needed 
                                                                               // it only has a static function.
    static async createCallback( callbackName: string ) {                      // no need to instantiate.
        const Callback = await import ( callbackName );
        return new Callback();
    }
}
