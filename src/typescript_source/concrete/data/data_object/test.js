/*
 *  Data Object Test
 */
const DataObject = require( '../../../../../out/typescript_source/concrete/data/data_object/DataObject.js' );
const BasicConfig = require( '../../../../../out/typescript_source/config/BasicConfig.js' );
let dataObject = new DataObject.default( new BasicConfig.default());
let id = "test_id_101";
let test_object = { name: "test" };
dataObject.insertObject( id, test_object );
dataObject.selectObject( id );
