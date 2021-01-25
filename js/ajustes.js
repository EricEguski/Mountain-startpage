pillarJson();

function pillarJson() {

    const requestURL = 'http://localhost/Mountain-startpage/datos.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        const datos = request.response;
        saludar( datos['nombre']);
        $('body').css("background-image", "url("+datos['background']+")");

      }

}
