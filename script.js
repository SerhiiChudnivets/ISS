var k=0;
var current_pos=setInterval(function initMap() {
    $.getJSON('http://api.open-notify.org/astros.json', function(data) {    
    if (k!=data.people.langth){
    for (var i=0;i<data.people.length;i++){
            if (data.people[i].craft=='ISS'){
                $('#persons').append('<div id="unit_'+i+'">');
                $('#unit_'+i).append('<div class="img">');
                $('#unit_'+i).append('<div id="name_'+i+'">'); 
                $('#unit_'+i).attr('class','d-flex unit'); 
                $('#name_'+i).attr('class','_align');
                $('#name_'+i).text(data.people[i].name);
                $('#unit_'+i).css('padding','4px');
                $('#unit_'+i).css('border','2px solid black');
                $('#unit_'+i).css('margin-bottom','15px');
                $('#unit_'+i).css('border-radius','5px');
                
            }
        }
        k=data.people.langth;
    }
        $('#total').text('Total amount: '+data.people.length+' people on ISS')
    });
    $.getJSON('http://api.open-notify.org/iss-now.json', function(data) {
        var myLatLng = {lat: -25.363, lng: 131.044};
            myLatLng.lat=Number(data.iss_position.latitude);
            $('#latitude').text('Latitude: '+myLatLng.lat);
            $('#longitude').text('Longitude: '+myLatLng.lng)
        var date = new Date(data.timestamp*1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var year = date.getFullYear();
        var day = date.getDay();
        var week_day = date.getUTCDay();
            if (week_day==0){
                week_day='Sunday';
            }
            else if (week_day==1){
                week_day='Monday';
            }
            else if (week_day==2){
                week_day='Tuesday';
            }
            else if (week_day==3){
                week_day='Wednesday';
            }
            else if (week_day==4){
                week_day='Thursday';
            }
            else if (week_day==5){
                week_day='Friday';
            }
            else {
                week_day='Saturday';
            }
        var month = date.getMonth();
            if (month==1){
                month='Jan.';
            }
            else if (month==2){
                month='Feb.';
            }
            else if (month==3){
                month='Mar.';
            }
            else if (month==4){
                month='Apr.';
            }
            else if (month==5){
                month='May';
            }
            else if (month==6){
                month='June';
            }
            else if (month==7){
                month='July';
            }
            else if (month==8){
                month='Aug.';
            }
            else if (month==9){
                month='Sept.';
            }
            else if (month==10){
                month='Oct.';
            }
            else if (month==11){
                month='Nov.'
            }
            else{
                month='Dec.'
            }
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        var formattedDay =week_day+', '+day + ' ' +month+ ' '+year;
            $('#time').text(' Current UTC time: '+formattedTime);
            $('#date').text(' Date: '+formattedDay);
            myLatLng.lng=Number(data.iss_position.longitude);
            var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: myLatLng
            });
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Current location ISS'
        });});
  },5000);