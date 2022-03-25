

export default class ArrayManager {
    constructor() { console.log( 'constructing ArrayManager object...' ); }
    public static RemoveFromArray( array: Array< any >, element: any ): void {
        const index = array.indexOf( element );
        if ( index > -1 ) {
            array.splice( index, 1 );
        }
    }
}
