function useExportToSharACodeBlock() {
    const uppercaseString = (string) => {
        return string.toUpperCase();
    }

    const lowercaseString = (string) => {
        return string.toLowerCase()
    }

    export { uppercaseString, lowercaseString };
}


function ReuseJavascriptCodeUsingImport() {
    import { uppercaseString, lowercaseString } from './string_functions.js'

    // add code above this line

    uppercaseString("hello");
    lowercaseString("WORLD!");

}

function useToImportEverythingFromAFile() {
    import * as stringFunctions from "./string_functions.js"
    // add code above this line

    stringFunctions.uppercaseString("hello");
    stringFunctions.lowercaseString("WORLD!");

}


function exportADefaultExport() {
    export default function subtract(x, y) {
        return x - y;
    }

}

function importADefaultExport() {
    import subtract from "./math_functions.js"
    // add code above this line

    subtract(7, 4);

}

function createAJavaScriptPromise() {
    const makeServerRequest = new Promise((resolve, reject) => {

    });
}

function completeAPromiseWithResolveAndReject() {
    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer represents a response from a server
        let responseFromServer;

        if (responseFromServer) {
            resolve("We got the data");
            // change this line
        } else {
            reject("Data not received");
            // change this line
        }
    });

}

function handleAFulfilledPromiseWithThen() {
    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer is set to true to represent a successful response from a server
        let responseFromServer = true;

        if (responseFromServer) {
            resolve("We got the data");
        } else {
            reject("Data not received");
        }

        makeServerRequest.then(result => { console.log(result) });
    });

}

function handleARejectedPromiseWithCatch() {
    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer is set to false to represent an unsuccessful response from a server
        let responseFromServer = false;

        if (responseFromServer) {
            resolve("We got the data");
        } else {
            reject("Data not received");
        }
    });

    makeServerRequest.then(result => {
        console.log(result);
    });
    makeServerRequest.catch(error => {
        console.log(error);
    });
}