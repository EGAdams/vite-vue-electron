/*
 *	JsonObjectManager class
 */

import IObjectView from "../abstract/IObjectView";

class JsonObjectManager {
  constructor() {
    console.log("constructing JsonObjectManager object... ");
  }
  insertIfNotInArray(
    objectToInsert: IObjectView,
    arrayToInsertItTo: Array<IObjectView>
  ): string {
    if (this.isInArray(objectToInsert, arrayToInsertItTo)) {
      console.log(
        "not inserting " +
          objectToInsert["properties"][0].value +
          ".  already exists in the array."
      );
      return "not inserted.";
    } else {
      arrayToInsertItTo.push(objectToInsert);
      return "inserted.";
    }
  }

  /*
   * meat
   */
  isInArray( jsonObjectToSearchFor: IObjectView, arrayToSearch: Array<IObjectView>  ): boolean {
    const name_to_search_for = jsonObjectToSearchFor["properties"][0].value;
    const matched_objects = arrayToSearch.filter(
      (jsonObject) => jsonObject["properties"][0].value == name_to_search_for
    );
    if (matched_objects.length == 1) {
      console.log("found exactly one object in the array.");
      return true;
    } else if (matched_objects.length > 1) {
      console.log(
        "*** WARNING: there is more than one object named " +
          name_to_search_for +
          " in the objects array. ***"
      );
      return true;
    } else {
      console.log(
        "*** ERROR: the object named: " +
          name_to_search_for +
          " is not in the array to search. ***"
      );
      return false;
    }
  }

  insertJsonObject(
    theJsonObject: IObjectView,
    arrayToInsertItTo: Array<IObjectView>
  ): void {
    arrayToInsertItTo.push(theJsonObject);
  }

  testMe(): void {
    const identityJson = {
      value: "Identity",
      construction_name: "Identity",
      dataSource: {},
      isAdmin: false,
      isMonitor: false,
      isKnown: false,
      ID: "1418",
      status: "constructing...",
      identityConstructor: {},
      id: "MessageManager_1418",
      name: "Guest",
      email: "108.190.234.164",
      screen_html:
        "undefinedAnonymous Identity constructed.  starting database sync...<br>",
      subObjects: [],
      properties: [],
      leaf: false,
      expanded: true,
    };
    const testObjectTwo = {
      value: "Identity",
      construction_name: "MessageManager",
      dataSource: {},
      isAdmin: false,
      isMonitor: false,
      isKnown: false,
      ID: "1418",
      status: "constructing...",
      identityConstructor: {},
      id: "Identity_1418",
      name: "Guest",
      email: "108.190.234.164",
      screen_html:
        "undefinedAnonymous Identity constructed.  starting database sync...<br>",
      subObjects: [],
      properties: [],
      leaf: false,
      expanded: true,
    };
    const testObject = {
      value: "Identity",
      construction_name: "TestObject",
      dataSource: {},
      isAdmin: false,
      isMonitor: false,
      isKnown: false,
      ID: "1418",
      status: "constructing...",
      identityConstructor: {},
      id: "TestObject_1418",
      name: "Guest",
      email: "108.190.234.164",
      screen_html:
        "undefinedAnonymous Identity constructed.  starting database sync...<br>",
      subObjects: [],
      properties: [],
      leaf: false,
      expanded: true,
    };

    const errors = [];
    const objects = [];
    objects.push(identityJson);
    objects.push(testObjectTwo);

    console.log("\ntesting isInArray...");
    if (this.isInArray(identityJson, objects)) {
      console.log("*** passed: isJsonObjectInArray ***");
    } else {
      errors.push(
        "*** FAILED: isJsonObjectInArray should be true for identityJson. ***"
      );
    }
    console.log("done testing isInArray. \n");

    console.log("\ntesting insertIfNotInArray... expecting not inserted");
    if (this.insertIfNotInArray(identityJson, objects) == "not inserted.") {
      console.log(
        "*** passed: insertIfNotInArray did not insert already popped identityJson ***"
      );
    } else {
      errors.push(
        "*** FAILED: insertIfNotInArray should not be trying to insert identityJson. ***"
      );
    }
    console.log("done testing insertIfNotInArray. \n");

    console.log("\ntesting insertIfNotInArray... expecting insertion here.");
    if (this.insertIfNotInArray(testObject, objects) == "inserted.") {
      console.log(
        "*** passed: insertIfNotInArray inserted testObject into array ***"
      );
    } else {
      errors.push(
        "*** FAILED: insertIfNotInArray should not be trying to insert identityJson. ***"
      );
    }
    console.log("done testing insertIfNotInArray. \n");

    console.log("\ntesting isInArray...");
    if (this.isInArray(testObject, objects)) {
      console.log(
        "*** passed: testObject is expected to be in the array at this point. ***"
      );
    } else {
      errors.push(
        "*** FAILED: the last test should have put test object into the array. ***"
      );
    }
    console.log("done testing isInArray.\n");

    if (errors.length == 0) {
      console.log("Object passsed all tests.");
    } else {
      errors.forEach((error) => {
        console.error(error);
      });
    }
  }
}

export default JsonObjectManager;
