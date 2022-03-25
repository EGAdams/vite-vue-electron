import ITestable from "../abstract/ITestable";
import ArrayManager from "../concrete/ArrayManager";
import FreshToolBox from "../concrete/FreshToolBox";

export default class ArrayManagerTest implements ITestable {
    public testMe() {
        const array = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ];
        ArrayManager.RemoveFromArray( array, 'a' );
        ArrayManager.RemoveFromArray( array, 'b' );
        ArrayManager.RemoveFromArray( array, 'c' );
        ArrayManager.RemoveFromArray( array, 'd' );
        ArrayManager.RemoveFromArray( array, 'e' );
        ArrayManager.RemoveFromArray( array, 'f' );
        ArrayManager.RemoveFromArray( array, 'g' );
        ArrayManager.RemoveFromArray( array, 'h' );
        ArrayManager.RemoveFromArray( array, 'i' );
        ArrayManager.RemoveFromArray( array, 'j' );
        FreshToolBox.assert( array.length === 0, "array.length === 0" ); 
    }
}
