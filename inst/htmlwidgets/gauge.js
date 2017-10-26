HTMLWidgets.widget({
  name: 'gauge',
  type: 'output',
  factory: function(el, width, height) {
    // create an empty chart
    var chart = null;
    return {
      renderValue: function(x) {
        // check if the chart exists
        if(chart === null){
          chart = c3.generate({
            bindto: el,
            data: {
              json: x,
              type: 'gauge',
              onclick: function(d, element) { Shiny.onInputChange(el.id,d) }
            },
            gauge: {
              label:{
                format: function(value,ratio){ return value;}
              },
              min: 0,
              max: 100,
              width: 15,
              units: '%'
            }
          });
          el.chart = chart;
        }
        el.chart.load({json: x});
      },

      resize: function(width, height) {
        // TODO: code to re-render the widget with a new size
      }
    };
  }
});
