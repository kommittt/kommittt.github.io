document.addEventListener('play', function(e){  
    var audios = document.getElementsByTagName('audio');  
    for(var i = 0, len = audios.length; i < len;i++){  
        if(audios[i] != e.target){  
            audios[i].pause();  
        }  
    }  
}, true);

// ty https://yootheme.com/support/question/95467