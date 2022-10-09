var vg_1 = "chloroplethandline.vl.json"; 
vegaEmbed("#map_chart", vg_1).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);    

var vg_2 = "scatterplotcondomvsinfected.vl.json"; 
vegaEmbed("#second_chart", vg_2).then(function(result) 
{ // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);