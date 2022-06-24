// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$.ajax({
    type: 'GET',//тип запроса
    url: '/Home/GetParametrs', //метод, который срабатывает на запрос
    data: {
        'json_param': 'param'//параметр для метода
    },
    success: function (data) {
        alert(data);  
        data = JSON.parse(data);

        var array yyy;
        $.each(data, function (index, value) {
            //alert(index + '  ' + value[0] + '______');
            //for (var i = 0; i < value.length; i++) {
            //alert(index);
            //}
            yyy = yyy + value;
        });

        Highcharts.chart('container', {



            title: {
                text: 'Solar Employment Growth by Sector, 2010-2016'
            },

            subtitle: {
                text: 'Source: thesolarfoundation.com'
            },

            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },

            xAxis: {
                accessibility: {
                    rangeDescription: 'Range: 2010 to 2017'
                }
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
           // $.each(data, function (index, value) { });
            series: [
                {
                    name: 'swdfghjkl',
                    data: [data]
                }
            ],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });

    }
});

