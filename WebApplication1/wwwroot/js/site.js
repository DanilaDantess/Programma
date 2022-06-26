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
        dota = JSON.parse(data);
        
        let MS1 = [];
        let PKM_Seconds1 = [];
        let thrust_brake1 = [];
        let voltage1 = [];
        let generator_ov_current1 = [];
        let current_compressor_motor1 = [];
        let temperature_B11 = [];
        let temperature_A51 = [];
        let ETD_current1 = [];
        let rail_TNVD1 = [];
        let rotation_frequency1 = [];


        $.each(data, function (Id, Time, MS, PKM_Seconds, thrust_brake, voltage,
            generator_ov_current, current_compressor_motor, temperature_B1, temperature_A5,
            ETD_current, rail_TNVD, rotation_frequency) {
            //MS1.push(MS);
            //PKM_Seconds1.push(PKM_Seconds);
            //thrust_brake1.push(thrust_brake);
            //voltage1.push(voltage);
            //generator_ov_current1.push(generator_ov_current);
            //current_compressor_motor1.push(current_compressor_motor);
            //temperature_B11.push(temperature_B1);
            //temperature_A51.push(temperature_A5);
            //ETD_current1.push(ETD_current);
            //rail_TNVD1.push(rail_TNVD);
            //rotation_frequency1.push(rotation_frequency);
            console.log(MS);

        });
            //console.log(MS1);


            //Highcharts.chart('container', {



            //    title: {
            //        text: 'Solar Employment Growth by Sector, 2010-2016'
            //    },

            //    subtitle: {
            //        text: 'Source: thesolarfoundation.com'
            //    },

            //    yAxis: {
            //        title: {
            //            text: 'Number of Employees'
            //        }
            //    },

            //    xAxis: {
            //        accessibility: {
            //            rangeDescription: 'Range: 2010 to 2017'
            //        }
            //    },

            //    legend: {
            //        layout: 'vertical',
            //        align: 'right',
            //        verticalAlign: 'middle'
            //    },

            //    plotOptions: {
            //        series: {
            //            label: {
            //                connectorAllowed: false
            //            },
            //            pointStart: 2010
            //        }
            //    },


            //    series: [
            //        {
            //            name: 'MS',
            //            data: [MS1]
            //        },
            //        {
            //            name: 'PKM_Seconds',
            //            data: [PKM_Seconds1]
            //        },
            //        {
            //            name: 'thrust_brake',
            //            data: [thrust_brake1]
            //        },
            //        {
            //            name: 'voltage',
            //            data: [voltage1]
            //        },
            //        {
            //            name: 'generator_ov_current',
            //            data: [generator_ov_current1]
            //        },
            //        {
            //            name: 'current_compressor_motor',
            //            data: [current_compressor_motor1]
            //        },
            //        {
            //            name: 'temperature_B1',
            //            data: [temperature_B11]
            //        },
            //        {
            //            name: 'temperature_A5',
            //            data: [temperature_A51]
            //        },
            //        {
            //            name: 'ETD_current',
            //            data: [ETD_current1]
            //        },
            //        {
            //            name: 'rail_TNVD',
            //            data: [rail_TNVD1]
            //        },
            //        {
            //            name: 'rotation_frequency',
            //            data: [rotation_frequency1]
            //        },
            //    ],



            //    responsive: {
            //        rules: [{
            //            condition: {
            //                maxWidth: 500
            //            },
            //            chartOptions: {
            //                legend: {
            //                    layout: 'horizontal',
            //                    align: 'center',
            //                    verticalAlign: 'bottom'
            //                }
            //            }
            //        }]
            //    }

            //})

       

    }
})