function useExportToSharACodeBlock(){
    const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  export {uppercaseString, lowercaseString};
}


function ReuseJavascriptCodeUsingImport() {
    import { uppercaseString, lowercaseString} from './string_functions.js'
  
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
    
    subtract(7,4);
    
}

function createAJavaScriptPromise() {
    const makeServerRequest = new Promise((resolve, reject) => {

    });
}