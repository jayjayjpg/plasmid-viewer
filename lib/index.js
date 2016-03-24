/*
 * biojs-vis-plasmid-viewer
 * https://github.com/jessica-jordan/biojs-vis-plasmid-viewer
 *
 * Copyright (c) 2016 Jessica Jordan
 * Licensed under the MIT license.
 */

/**
@class biojsvisplasmidviewer
 */


var  biojsvisplasmidviewer;
var d3 = require("d3");
module.exports = biojsvisplasmidviewer = function(opts){
  this.el = opts.el;
  //this.el.textContent = biojsvisplasmidviewer.bye(opts.text, opts.el);
  biojsvisplasmidviewer.render(opts.plasmidData, opts.el);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     biojsvisplasmidviewer.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojsvisplasmidviewer.hello = function (name) {

  return 'hello ' + name;
};

/*
  @example

  biojsvisplasmidviewer.bye('everyone');
  @method bye
  @param {String} group Name of a person
  @return {String} Returns hello group
*/



biojsvisplasmidviewer.render = function(dataSet, el){
  console.log(dataSet);
  console.log("edit");
  var featureSet = [];
  function configureData(data){
    var dnaFeatures = [];
    var featurename;
    var featureseq;
    var featurelen;
    var featurearc;
    for (var i = 0; i < data.dnafeatures.length; i += 1){
      featurename = data.dnafeatures[i].dnafeature.category.name;
      featureseq = data.dnafeatures[i].dnafeature.pattern.bases;
      featurelen = data.dnafeatures[i].dnafeature.length;
      featurearc = d3.svg.arc()
    .innerRadius(50)
    .outerRadius(70)
    .startAngle(45 * (Math.PI/180)) //converting from degs to radians
    .endAngle(3)
      // console.log("arc " + featurearc);
      dnaFeatures.push({ name: featurename, seq: featureseq, len: featurelen, arc: this});
    } 
    // console.log("DNA Features ARC:    " + dnaFeatures[0].arc);
    console.log("dnafeatureslen " + dnaFeatures[0].len);
    return dnaFeatures;
    //return featurearc;
  }

  function drawPlasmid(drawData,el){
   // console.log("console log dataSet draw plasmid" + dataSet.featurearc);
    
    testarc =  d3.svg.arc()
    .innerRadius(50)
    .outerRadius(70)
    .startAngle(45 * (Math.PI/180)) //converting from degs to radians
    .endAngle(3)
    //console.log("testarc:   " + testarc);

    d3.select("#" + el)
      .append("svg")
      .attr("width","400")
      .attr("height","300")
      .selectAll("svg")
      .data(drawData)
      .enter().append("path")
      .attr("d", 
      d3.svg.arc()
        .innerRadius(50)
        .outerRadius(70)
        .startAngle(45 * drawData.len * (Math.PI/180)) //how to pass in the length of the bases to calculate radii?
        .endAngle(3)
       )
        .attr("fill","red")
        .text(function(d) { return "I’m number " + testarc + "!"; });
      console.log("datasetlength: " + drawData[0].len);
  }
  var featureSet = configureData(dataSet);
  console.log("console log featureset" + featureSet);
  drawPlasmid(featureSet,el);
   return 1;
};
