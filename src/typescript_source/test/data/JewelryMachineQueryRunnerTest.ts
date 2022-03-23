import IRunnableTest from "../../abstract/IRunnableTest";
import DataObjectStatusLed from '../../concrete/data/DataObjectStatusLed';
import MysqlEscapeTool from '../../abstract/data/MysqlEscapeTool';
import IQueryRunner from '../../abstract/data/IQueryRunner';
import IQueryProcessor from '../../abstract/data/IQueryResultProcessor';
import QueryInsertProcessor from '../../concrete/data/QueryInsertProcessor';
/**
 *@description
 * Runs test for the JewelryMachineQueryRunner
 *
 * @class JewelryMachineQueryRunnerTest
 * @implements {IRunnableTest}
 */
 export default class JewelryMachineQueryRunnerTest implements IRunnableTest {
    uut: IQueryRunner;
    queryInsertProcessor: IQueryProcessor;
    mysqlEscapeTool: MysqlEscapeTool;
    constructor( unitUnderTest: any ) {
        console.log( 'constructing JewelryMachineQueryRunnerTest object...' );
        this.uut = unitUnderTest;
        this.mysqlEscapeTool = new MysqlEscapeTool(); 
        this.queryInsertProcessor = new QueryInsertProcessor(); }
    
    /**
     * @method run
     * @description
     * Kicks the whole thing off.  This query processor will
     * be handling the results when runQuery() finishes.
     * 
     * @returns nothing
     *
     * @memberof JewelryMachineQueryRunnerTest
     */
    run (): void { 
        console.log( "running test for JewelryMachineQueryRunner..." );
        const test_object = new DataObjectStatusLed();
        const apiArg = {
            query: "insert into monitored_objects(object_view_id, object_data) values ('test_id_0', '" + 
                    this.mysqlEscapeTool.mysqlEscape( JSON.stringify( test_object )) + "')",
            queryResultProcessor: this.queryInsertProcessor,
            data: {}};
        console.log( "set queryResultProcessor and created query: " + apiArg.query + "." );
        this.uut.runQuery( apiArg ); }
}
