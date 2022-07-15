/*
 *  Data Object Test
 */
const DataObject = require( '../../../../../out/typescript_source/concrete/data/data_object/DataObject.js' );

let dataObject = new DataObject.default();
let id = "test_id_101";
let test_object = { name: "test" };
dataObject.insertObject( id, test_object );
