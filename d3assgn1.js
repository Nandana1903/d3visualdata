var data1= [39, 199, 47, 13, 8, 40, 114, 180, 87, 166];

var svgWidth= 700, svgHeight= 350, barPadding= 5;
var barWidth=(svgWidth/ data1.length);

var availableWidth = svgWidth;
var svg= d3.select('svg')
.attr('width', availableWidth)
.attr('height', svgHeight)

var barchart= svg.selectAll("rect")
.data(data1)
.enter()
.append("rect")
.style("fill", "rgba(19, 45, 205, 25)")
.attr("y", function(d)
{
    return svgHeight-d
})
.attr("height", function(d)
{
    return d;
})
.attr("width", barWidth- barPadding)
.attr("transform", function(d, i)
{
    var translate= [barWidth*i, 0];
    return "translate("+translate+")";
})
var labels = svg.selectAll("text")
  .data(data1)
  .enter()
  .append("text")
  .text(function (d) {
    return d;
  })
  .attr("x", function (d, i) {
    return barWidth * i + barWidth / 2;
  })
  .attr("y", function (d) {
    return svgHeight - d - 5;
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "15px")
  .attr("fill", "blue")
  .attr("text-anchor", "middle");