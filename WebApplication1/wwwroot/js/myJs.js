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

    }
});
