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
                const Subject = await import( "../test/" + specimen );
                const subject = new Subject.default();
                console.log( "\nbegin " + specimen + " test..." );
                subject.testMe();
                console.log( "end " + specimen + " test.\n" );
            }
        });
    }   
}

const fileManager = new FileManager();
const testableObjects = fileManager.populateArray( "C:\\Users\\EG\\Desktop\\2022\\march\\4th_week\\wed\\vite-vue-electron\\src\\typescript_source\\test\\test_plan.txt" );
const tester = new Tester( testableObjects );
tester.start();
console.log( "end testing testable objects." );

module.exports = Tester;
