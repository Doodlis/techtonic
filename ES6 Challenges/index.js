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