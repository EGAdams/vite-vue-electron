import ITestable from "../abstract/ITestable";
import ArrayManager from "../concrete/ArrayManager";
import FreshToolBox from "../concrete/FreshToolBox";

export default class ArrayManagerTest implements ITestable {
    public testMe() {
        const array = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ];
        ArrayManager.removeFromArray( array, 'a' );
        ArrayManager.removeFromArray( array, 'b' );
        ArrayManager.removeFromArray( array, 'c' );
        ArrayManager.removeFromArray( array, 'd' );
        ArrayManager.removeFromArray( array, 'e' );
        ArrayManager.removeFromArray( array, 'f' );
        ArrayManager.removeFromArray( array, 'g' );
        ArrayManager.removeFromArray( array, 'h' );
        ArrayManager.removeFromArray( array, 'i' );
        ArrayManager.removeFromArray( array, 'j' );
        FreshToolBox.assert( array.length === 0, "array.length === 0" ); 
    }
}
