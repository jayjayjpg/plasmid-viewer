// if you don't specify a html file, the sniper will generate a div with id "rootDiv"
var app = require("biojs-vis-plasmid-viewer");
//var parsedJSON = require('dna');
// instance = new app({el: "containerDiv", plasmidData: parsedJSON});
 function loadJSON(callback) {   
    console.log("start request....");
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'dna.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
loadJSON(function(response){
  var plasmidData = JSON.parse(response);
  var instance = new app({el: "containerDiv", plasmidData: plasmidData});
});


