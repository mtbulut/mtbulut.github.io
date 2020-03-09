// Basic line plot 
var trace1 = {
    x: [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 11, 12, 13, 14],
    y: [65, 61, 57, 70, 65, 65, 47, 12, 52, 64, 58, 89, 88, 62],
    type: 'bar',
    mode: "markers"
  };
  
  
  var data = [trace1];

  var layout = {
    title: 'Line Graph f Grades'
  }
  
  Plotly.plot('myDiv', data);