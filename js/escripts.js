// SIDEBAR TOGGLE

var sidebaropen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar () {
    if (!sidebaropen) {
        sidebar.classList.add("sidebar-responsive");
        sidebaropen = true;
    }
}

function closeSidebar() {
    if (sidebaropen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebaropen = false;
    }
}

//-------------CHART--------------

//----------BAR CHART

var barChartOptions = {
  series: [{
    data: [5, 16, 14, 12, 10, 8]
  }],
  chart: {
    type: 'bar',
    height: 360,
    toolbar: {
      show: false
    },
    colors:[
      "#246dec",
      "#cc3c43",
      "#367952",
      "#4f35a1"
    
    ],
  },
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columunWidth:'48%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show: false
  },
  xaxis: {
    categories: ["Sal", "Milho ", "Monitor", "Headphones", "Camera",  ],
  },
  
  yaxis:{
    title: {
      Text:"conunt"
    }
  }

};

var barchart = new ApexCharts(document.querySelector(".bar-chart"), barChartOptions);
barchart.render();



//------------area chart---

var areachartoptions = {
  series: [{
  name: 'Inflation',
  data: [10.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
 }],
  chart: {
  height: 350,
  type: 'bar',
 },
 plotOptions: {
  bar: {
    borderRadius: 10,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
 },
 dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val + "%";
  },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#304758"]
  }
 },

 xaxis: {
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  position: 'top',
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#D8E3F0',
        colorTo: '#BED1E6',
        stops: [0, 100],
        opacityFrom: 0.4,
        opacityTo: 0.5,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
 },
 yaxis: {
   axisBorder: {
    show: false
   },
  
  axisTicks: {
    show: false,
  },
  labels: {
    show: false,
    formatter: function (val) {
      return val + "%";
    }
  }

 },
 title: {
   text: 'Produção Max Sal Armazem poçoverdense, 2025',
   floating: true,
   offsetY: 330,
   align: 'center',
   style: {
    color: '#444'
   }
  }
};

var areachart = new ApexCharts(document.querySelector(".area-chart"), areachartoptions);
areachart.render();

