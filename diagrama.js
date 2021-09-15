Highcharts.chart('container', {
    colors: ['#E38881', '#998E98', '#C3A7EB','#7989C7','#81CCDE','#C77C54','#B66B6B'],
    chart: {
      backgroundColor: 'rgb(243, 236, 236)',
      type: 'column',
      inverted: true,
      polar: true
      
    },
    title: {
      text: null  
  },
    tooltip: {
      outside: false
    },
    pane: {
      endAngle: 360
    },
    credits: {
      enabled: false
    },
     xAxis: {
      tickInterval: 1,
      labels: {
        align: 'right',
        useHTML: true,
        allowOverlap: true,
        step: 1,
        y: 3,
        style: {
          fontSize: '13px'
        }
      },
      lineWidth: 0,
      categories: [
        ''
        
      ]
    },
    yAxis: {
      crosshair: {
        enabled: true,
        color: '#333'
      },
      lineWidth: 0,
      /* tickInterval: 25, */
      reversedStacks: false,
      endOnTick: false,
      showLastLabel: true
    },
    plotOptions: {
      column: {
        /* stacking: 'normal', */
        borderWidth: 0,
        pointPadding: 0,
        /* groupPadding: 0.15 */
        dataLabels: {
          enabled: true,
          format: '{point.y:f}%'
        }
      }
    },
    tooltip: {
      pointFormat: '{series.name}: {point.y:f}%'
    },
    series: [{
      name: 'PHP',
      data: [50]
    }, {
      name: 'C#',
      data: [60]
    }, {
      name: 'BD',
      data: [45]
    }, {
      name: 'MOVILES',
      data: [30]
    }, {
      name: 'HTML',
      data: [75]
    }, {
      name: 'CSS',
      data: [70]
    }, {
      name: 'JAVASCRIPT',
      data: [40]
    }]
  });