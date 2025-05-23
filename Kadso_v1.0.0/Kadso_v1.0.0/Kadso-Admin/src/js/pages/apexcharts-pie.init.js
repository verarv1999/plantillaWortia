/*
Template Name: Kadso - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Apexcharts Pie Charts
*/

//
// Simple Pie Chart
//
var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        height: 300,
        type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    legend: {
        position: "bottom",
    },
    colors: ["var(--bs-primary)", "var(--bs-secondary)", "var(--bs-success)", "var(--bs-info)", "var(--bs-dark)"],
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
};
var chart = new ApexCharts(
    document.querySelector("#simple_pie_chart"),
    options
);
chart.render();

//
// Simple Donut Chart
//
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 300,
        type: "donut",
    },
    legend: {
        position: "bottom",
    },
    colors: ["#4a98f5", "#495057", "#20c997", "#fa7d7b", "#836ccb"],
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
};
var chart = new ApexCharts(
    document.querySelector("#simple_donut_chart"),
    options
);
chart.render();

//
// Monochrome Pie Chart
//
var options = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
        height: 300,
        type: "pie",
    },
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    colors: ["#4a98f5", "#495057"],
    theme: {
        monochrome: {
            enabled: true,
        },
    },
    plotOptions: {
        pie: {
            dataLabels: {
                offset: -5,
            },
        },
    },
    title: {
        text: "Monochrome Pie",
    },
    dataLabels: {
        formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex];
            return [name, val.toFixed(1) + "%"];
        },
    },
    legend: {
        show: false,
    },
};

var chart = new ApexCharts(
    document.querySelector("#monochrome_pie_chart"),
    options
);
chart.render();



// 
// Gradient Donut Pie Charts
// 
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 330,
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 270
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'gradient',
    },
    colors: ["#4a98f5", "#495057", "#23c093", "#fa7d7b", "#facc15"],
    legend: {
        formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
        },
        position: "bottom",
    },
    title: {
        text: 'Gradient Donut With Custom Start-angle'
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#gradient_donut_pie_chart"), options);
chart.render();

// 
// Semi Donut Pie Charts
// 
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 300,
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10
        }
    },
    grid: {
        padding: {
            bottom: -80
        }
    },
    colors: ["var(--bs-primary)", "var(--bs-secondary)", "var(--bs-success)", "var(--bs-info)", "var(--bs-dark)"],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#semi_donut_pie_chart"), options);
chart.render();


// 
// Donut with Pattern Pie Chart
// 

var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        height: 300,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    total: {
                        showAlways: true,
                        show: true
                    }
                }
            }
        }
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
        dropShadow: {
            blur: 3,
            opacity: 0.8
        }
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
        },
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    theme: {
        palette: 'palette2'
    },
    title: {
        text: "Favourite Movie Type"
    },
    colors: ["var(--bs-light)", "var(--bs-warning)", "var(--bs-danger)", "var(--bs-dark)", "var(--bs-primary)"],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#pattern_donut_pie_chart"), options);
chart.render();