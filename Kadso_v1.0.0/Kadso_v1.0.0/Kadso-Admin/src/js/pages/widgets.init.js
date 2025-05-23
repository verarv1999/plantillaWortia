/*
Template Name: Kadso - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Widgets Js
*/

// Sale Chart
var options = {
    series: [{
        name: 'Sale',
        data: [5, 4, 5, 3, 6, 7, 3]
    }],
    chart: {
        height: 100,
        type: 'bar',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 3,
            columnWidth: "45%",
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
        }
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: [
            "Mon", 
            "Tue", 
            "Wed", 
            "Thu", 
            "Fri", 
            "Sat", 
            "Sun"
        ],
        position: 'bottom',
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
                    colorFrom: '#f2c94c',
                    colorTo: '#d63384',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
            offsetY: -35,
        }
    },
    colors: ['#4a98f5'],
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
    tooltip: {
        theme: "dark",
        fillSeriesColor: false,
    },
};

var chart = new ApexCharts(document.querySelector("#sale_chart"), options);
chart.render();

// View Chart
var options = {
    series: [{
        name: 'Views',
        data: [
            {
                x: new Date("2018-01-01").getTime(),
                y: 5
            },
            {
                x: new Date("2018-01-02").getTime(),
                y: 4
            },
            {
                x: new Date("2018-01-03").getTime(),
                y: 5
            },
            {
                x: new Date("2018-01-04").getTime(),
                y: 4
            },
            {
                x: new Date("2018-01-05").getTime(),
                y: 5
            },
            {
                x: new Date("2018-01-06").getTime(),
                y: 6
            },
            {
                x: new Date("2018-01-07").getTime(),
                y: 4
            }
        ]
    }],
    chart: {
        type: 'area',
        height: 100,
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
        },
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        }
    },
    colors: ["#4a98f5"],

    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [
                0, 90, 100
            ]
        },
    },
    yaxis: {
        labels: {
            formatter: function (val) {
                return val + "%";
            },
        },
        title: {
            text: 'Price',
            style: {
                fontWeight: 500
            }
        },
    },
    xaxis: {
        type: 'datetime',
    },
    tooltip: {
        shared: false,
        theme: "dark",
        fillSeriesColor: false,
        y: {
            formatter: function (val) {
                return val + "%";
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#view_chart"), options);
chart.render();


// Order Chart
var options = {
    series: [{
        name: 'New Orders',
        data: [4, 3, 4, 3, 5, 7, 3]
    }],
    chart: {
        height: 100,
        type: 'bar',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 3,
            columnWidth: "45%",
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
        }
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: [
            "Mon", 
            "Tue", 
            "Wed", 
            "Thu", 
            "Fri", 
            "Sat", 
            "Sun"
        ],
        position: 'bottom',
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
                    colorFrom: '#f2c94c',
                    colorTo: '#d63384',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
            offsetY: -35
        }
    },
    colors: ["var(--bs-danger)"],
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
    tooltip: {
        theme: "dark",
        fillSeriesColor: false,
    },
};

var chart = new ApexCharts(document.querySelector("#order_chart"), options);
chart.render();


// Revenue Chart
var options = {
    series: [{
        name: 'Revenue',
        data: [
            {
                x: new Date("2018-01-01").getTime(),
                y: 3
            },
            {
                x: new Date("2018-01-02").getTime(),
                y: 2
            },
            {
                x: new Date("2018-01-03").getTime(),
                y: 5
            },
            {
                x: new Date("2018-01-04").getTime(),
                y: 4
            },
            {
                x: new Date("2018-01-05").getTime(),
                y: 8
            },
            {
                x: new Date("2018-01-06").getTime(),
                y: 7
            },
            {
                x: new Date("2018-01-07").getTime(),
                y: 12
            }
        ]
    }],
    chart: {
        type: 'area',
        height: 100,
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
        },
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        }
    },
    colors: ["#23c093"],

    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [
                0, 90, 100
            ]
        },
    },
    yaxis: {
        labels: {
            formatter: function (val) {
                return val + "%";
            },
        },
        title: {
            text: 'Price',
            style: {
                fontWeight: 500
            }
        },
    },
    xaxis: {
        type: 'datetime',
    },
    tooltip: {
        shared: false,
        theme: "dark",
        fillSeriesColor: false,
        y: {
            formatter: function (val) {
                return val + "%";
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#revenue_chart"), options);
chart.render();


// Saving Goal
var options = {
    series: [80],
    chart: {
        height: 280,
        type: 'radialBar',
    },
    colors: ["#6610f2"],
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            track: {
                margin: 5,
            },
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: "#343a40",
                    offsetY: 15
                },
                value: {
                    offsetY: 25,
                    fontSize: '15px',
                    color: "#6c757d",
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4
    },
    labels: ['$1,052.98'],
    tooltip: {
        theme: "dark",
        fillSeriesColor: false,
    }
};

var chart = new ApexCharts(document.querySelector("#saving_goal_chart"), options);
chart.render();


// Repeat Customer Rate
var optionsLine = {
    chart: {
        height: 231,
        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    colors: ["#6c757d", '#4a98f5', '#836ccb'],
    series: [{
        name: "Online Store",
        data: [5, 15, 26, 20, 33, 27]
    },
    {
        name: "Facebook",
        data: [9, 33, 21, 42, 19, 32]
    },
    {
        name: "Other",
        data: [8, 39, 52, 11, 29, 43]
    }],
    
    grid: {
        show: false,
        padding: {
            bottom: 0
        }
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    xaxis: {
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetY: 7
    }
}
  
var chartLine = new ApexCharts(document.querySelector('#repeat_customer_rate'), optionsLine);
chartLine.render();


// =====================================
// Image Storage
// =====================================
var options = {
    color: "#4a98f5",
    series: [75, 25],
    labels: ["2024"],
    chart: {
        width: 150,
        type: "donut",
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            customScale: 1,
            donut: {
                size: "75%",
                
            },
        }
    },
    stroke: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ["#4a98f5", "#dee2e6"],
    responsive: [
        {
            breakpoint: 991,
            options: {
                chart: {
                    width: 100,
                },
            },
        },
    ],
    tooltip: {
        theme: "light",
        fillSeriesColor: false,
    },
};

var chart = new ApexCharts(document.querySelector("#image_storage"), options);
chart.render();


// =====================================
// Video Storage
// =====================================
var options = {
    color: "#fa7d7b",
    series: [85, 15],
    labels: ["2024"],
    chart: {
        width: 150,
        type: "donut",
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            customScale: 1,
            donut: {
                size: "75%",
                
            },
        }
    },
    stroke: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ["#fa7d7b", "#dee2e6"],
    responsive: [
        {
            breakpoint: 991,
            options: {
                chart: {
                    width: 100,
                },
            },
        },
    ],
    tooltip: {
        theme: "light",
        fillSeriesColor: false,
    },
};

var chart = new ApexCharts(document.querySelector("#video_storage"), options);
chart.render();

// =====================================
// Music Storage
// =====================================
var options = {
    color: "#6610f2",
    series: [60, 40],
    labels: ["2024"],
    chart: {
        width: 150,
        type: "donut",
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            customScale: 1,
            donut: {
                size: "75%",
                
            },
        }
    },
    stroke: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ["#6610f2", "#dee2e6"],
    responsive: [
        {
            breakpoint: 991,
            options: {
                chart: {
                    width: 100,
                },
            },
        },
    ],
    tooltip: {
        theme: "light",
        fillSeriesColor: false,
    },
};

var chart = new ApexCharts(document.querySelector("#music_storage"), options);
chart.render();

// =====================================
// Document Storage
// =====================================
var options = {
    color:  ["var(--bs-success)"],
    series: [60, 40],
    labels: ["2024"],
    chart: {
        width: 150,
        type: "donut",
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            customScale: 1,
            donut: {
                size: "75%",
                
            },
        }
    },
    stroke: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ["var(--bs-success)", "#dee2e6"],
    responsive: [
        {
            breakpoint: 991,
            options: {
                chart: {
                    width: 100,
                },
            },
        },
    ],
    tooltip: {
        theme: "light",
        fillSeriesColor: false,
    },
};

var chart = new ApexCharts(document.querySelector("#document_storage"), options);
chart.render();


// Projects Progress
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 310,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    legend:{
        show:true,
        position: 'bottom'
    },
    plotOptions: {
        pie: {
            donut: {
                size: '75%'
            }
        }
    },
    labels: ['In Progess', 'Pending', 'Completed'],
    series: [50, 20, 30],
    colors: ['#4a98f5', '#fd7e14', '#23c093'],
    responsive: [{
        breakpoint: 480,
            options: {
                chart: {
                    width: 150
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

var chart = new ApexCharts(document.querySelector("#project_chart"), options);
chart.render();


// Audience Overview
var options = {
    series: [{
        data: [44, 55, 41, 64, 22, 43, 21]
    }, {
        data: [53, 32, 33, 52, 13, 44, 32]
    }],
    chart: {
        type: 'bar',
        height: 250,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: "top",
            },
            endingShape: "rounded",
            borderRadius: 5,
        }
    },
    dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
            fontSize: "12px",
            colors: ["#fff"],
        },
    },
    legend: {
        show: false,
    },
    stroke: {
        show: true,
        width: 1,
        colors: ["transparent"]
    },
    grid: {
        borderColor: "#f1f1f1",
    },
    colors: ["#836ccb", "#dee2e6"],
    tooltip: {
        shared: false,
        intersect: false
    },
    xaxis: {
        categories: ["Jan", "Feb", "March", "April", "May", "June", "July"],
        labels: {
            show: true
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
    },
    yaxis: {
        labels: {
          show: true
        },
    },
};

var chart = new ApexCharts(document.querySelector("#audience_chart"), options);
chart.render();