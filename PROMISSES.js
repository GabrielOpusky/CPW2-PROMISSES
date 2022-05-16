function randoming(){

    var ajax = new XMLHttpRequest();
    return new Promise(function(resolve, reject){

    ajax.open("GET","data.json", true);
    ajax.onreadystatechange = resultado;
    ajax.send();






})

function resultado(){
    requestAnimationFrame.onload = function(){
        if(requestAnimationFrame.status === 200){
            resolve(request.response);
            var strJson = ajax.responseText;
        }
    }

    let randomImg = Math.floor(Math.random() *(14));
    for (var i = 0; i <= randomImg; i++){
        var image = strJson[i];
    }
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){

        document.querySelector('body'.appendChild(image));
        
    }

}

}


