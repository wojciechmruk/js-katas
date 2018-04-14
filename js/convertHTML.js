/*

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

*/
function convertHTML(str) {
return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/\"/g, "&quot;")
              .replace(/\'/g, "&apos;");
              // add more if needed
  
}

convertHTML("Dolce & Gabbana");
