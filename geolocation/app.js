function geoFindMe() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");

    mapLink.href='';
    mapLink.innerHTML = '';

    function success(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.innerHTML = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.innerHTML = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error(){
        status.textContent = 'Unable to retrieve your location';
    }

    if(!navigator.geolocation){
        status.innerHTML = 'La Geolocalización no está disponible en tu navegador';
    }else{
        status.innerHTML ='Localizando...';
        navigator.geolocation.getCurrentPosition(success,error);
    }
}

document.querySelector("#find-me").addEventListener('click',geoFindMe);