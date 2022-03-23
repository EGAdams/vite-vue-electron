import IQueryResultProcessor from "../../abstract/data/IQueryResultProcessor";
import JewelryMachineQueryRunner from './JewelryMachineQueryRunner';
import IApiArgs from '../../abstract/data/IApiArgs';
import DataPacketVerifier from './DataPacketVerifier';

/**
 * @description
 * Handles object returned from an insert
 * query operation.
 * 
 * It is using the DataPacketVerifier for this purpose.
 * 
 * @class QueryInsertProcessor
 * @implements {IQueryResultProcessor}
 */
export default class QueryInsertProcessor implements IQueryResultProcessor {
    constructor() { console.log( 'constructing QueryInsertProcessor object...' ); }
    processQueryResult( queryResult: any ): void {
        console.log( "processing query result..." );
        console.log( "queryResult: " + queryResult );
        console.log( "checking table for inserted object..." );
        // verify object existence
        const queryRunner = new JewelryMachineQueryRunner();
        const apiArgs: IApiArgs = {
            data: undefined,
            queryResultProcessor: new DataPacketVerifier(),
            query: "select * from monitored_objects where object_view_id='test_id_0'"
        };
        console.log( "running query: " + apiArgs.query + "..." );
        queryRunner.runQuery( apiArgs ); }
}
