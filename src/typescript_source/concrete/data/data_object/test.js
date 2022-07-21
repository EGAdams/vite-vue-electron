/*
 *  Data Object Test
 */
const DataObject = require( '../../../../../out/typescript_source/concrete/data/data_object/DataObject.js' );
const BasicConfig = require( '../../../../../out/typescript_source/config/BasicConfig.js' );
let dataObject = new DataObject.default( new BasicConfig.default());

function check_select_results( these_results ) {
    console.log( "results inside then: " + these_results );
    if ( these_results.length === 0 ) {
        console.log( "test object does not exist." );
        console.log( "inserting test object..." );
            let object_view_id = "test_id_101";
            let insertQuery = "insert into monitored_objects ( object_view_id, object_data ) values ( '"
                               + object_view_id + "', '" + object_string + "' )";
            dataObject.runSyncQuery( insertQuery ).then( function() {
                console.log( "test object inserted." );
                console.log( "selecting test object..." );
                let selectObjectQuery = "select * from monitored_objects where object_view_id='" + object_view_id + "'";
                dataObject.runSyncQuery( selectObjectQuery ).then( check_select_results );
            });
    } else {
        console.log( "test object exists." );
        //dataObject.deleteObject( id, checkExistence );
        //let deleteQuery = "delete from monitored_objects where object_view_id='" + id + "'";
        //dataObject.runSyncQuery( deleteQuery ).then( check_delete_results );
    }
}

function check_delete_results() {
    dataObject.runSyncQuery( selectObjectQuery ).then( function( delete_results ) {
        console.log( "delete_results: " + delete_results );
        if ( delete_results.length === 0 ) {
            console.log( "test object deleted." );
            
        } else {
            console.log( "test object not deleted." );
            throw( Error( "*** ERROR: Can not delete test object. ***" ));
        }
    });
}
// function checkExistence( result ) {
//     if ( result.length === 0 ) {
//         console.log( "test object does not exist." );
//     } else {
//         console.log( "test object exists.  deleting..." );
//         dataObject.deleteObject( id, checkExistence );
//     }
// }

// function checkresult( result ) {
//     console.log( "result: " + result );
//     if ( !result[ 0 ]) { console.log( "result is not defined!" ); return; }
//     let objectView = JSON.parse( result[ 0 ][ "object_data" ] );
//     if ( objectView.name === "test" ) {
//         console.log( "test passed" );
//     } else {
//         console.log( "test failed" );
//     }
    
// }
async function wait_for_insert( this_id, this_test_object ) {
    return dataObject.insertObject( this_id, this_test_object );
}

console.log( "checking for test object existence..." );

//dataObject.getObject( id, checkExistence );
let id = "test_id_101";
let test_object = { name: "test" };

// is it in the database already?

let object_string = JSON.stringify( test_object );
console.log( "object_string: " + object_string );
let selectObjectQuery = "select object_data from monitored_objects where object_view_id='" + id + "'";
console.log( "selectObjectQuery: " + selectObjectQuery );
console.log( "running query for object_data..." );
let results = dataObject.runSyncQuery( selectObjectQuery ).then( check_select_results );



// console.log( "waiting for insert..." );
// result = wait_for_insert( id, test_object ).then( function( result ) {
//     console.log( "result: " + result );
// }).catch( function( error ) {
//     console.log( error );
// });
