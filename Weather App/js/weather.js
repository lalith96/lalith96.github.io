$('#search').click(() => {
    const cityname = $("#cname").val();
    $.ajax({
        type: 'GET',
        url:`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=d14c83dc1f84f75137ecb3c8a6c78fde`,
        success: (data) => {
            const curtemp=Math.round(data.main.temp-270);
            const curhumidity=data.main.humidity;
            const curpressure=data.main.pressure;
            $("#curtemp").html(curtemp);
            $("#curhumidity").html(curhumidity);
            $("#curpressure").html(curpressure);
        }
    });
    $('.table').show();
});

$(document).ready(()=>{
    $('.table').hide();
});
