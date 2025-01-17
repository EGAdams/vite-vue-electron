/*
 * class Tester 
 */
import FileManager from "./FileManager";

class Tester {
    testableObjects: Array< string >;
    constructor( testableObjectsArg: Array< string > ) {
        this.testableObjects = testableObjectsArg;
    }

    start(): void {
        this.testableObjects.forEach( async specimen => {
            if ( specimen.length != 0 && !specimen.match( /^#/ )) {
                const Subject = await import( "./" + specimen );
                const subject = new Subject.default();
                console.log( "\nbegin " + specimen + " test..." );
                subject.testMe();
                console.log( "end " + specimen + " test.\n" );
            }
        });
    }   
}

const fileManager = new FileManager();
//const testableObjects = fileManager.populateArray( "C:\\Users\\EG\\Desktop\\2022\\july\\1st_week\\vite-vue-electron\\src\\typescript_source\\concrete\\test_plan.txt" );
const testableObjects = fileManager.populateArray( "src/typescript_source/concrete/test_plan.txt" );
const tester = new Tester( testableObjects );
tester.start();
console.log( "end testing testable objects." );

module.exports = Tester;
