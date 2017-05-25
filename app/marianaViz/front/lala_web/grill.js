 var scales = d3.selectAll("div.scale")
    .data(d3.range(0,11))
  scales.enter().append("div")
    .attr("class","scale")
    .attr("id",function(d){
      return "mod" + d
    })
    .append("span")
      .text(function(d){
        return parseFloat(d)/10
      })
      .style("opacity",function(d){
        return .5 * (10/d)
      })
  scales.selectAll("div.color")
    .data(d3plus.color.scale.range().concat(["#000000"]))
    .enter().append("div")
      .attr("class","color")
      .style("background-color",function(d){
        var mod = parseInt(this.parentNode.id.slice(3))/10
        return d3plus.color.lighter(d,mod)
      })