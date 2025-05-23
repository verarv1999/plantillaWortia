/*
Template Name: Kadso - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: dashboard init Js
*/

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

var chart = new ApexCharts(document.querySelector("#total_space"), options);
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

var chart = new ApexCharts(document.querySelector("#video_space"), options);
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

var chart = new ApexCharts(document.querySelector("#music_space"), options);
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

var chart = new ApexCharts(document.querySelector("#document_space"), options);
chart.render();


// Repeat Customer Rate
var optionsLine = {
    chart: {
        height: 323,
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
  
var chartLine = new ApexCharts(document.querySelector('#customer_rate'), optionsLine);
chartLine.render();

//  Author Sales
var options = {
    series: [
        {
            name: "Author Sales",
            data: [50, 42, 72, 100, 41, 90, 55],
        }
    ],
    chart: {
        type: "bar",
        height: 318,
        toolbar: {
            show: false
        }
    },
    colors: ['#4a98f5'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "45%",
            endingShape: "rounded",
            borderRadius: 5,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
    },
    xaxis: {
        categories: ["Canada", "UK", "USA", "Germany", "India", "Spain", "Italy"],
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: ["#001b2f"],
            }
        }
    },
    grid: {
        borderColor: "#f1f1f1",
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val;
            },
        },
    },
};
var chart = new ApexCharts(
    document.querySelector("#author_chart"),
    options
);
chart.render();