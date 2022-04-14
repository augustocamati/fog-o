
 var sec = document.getElementById("sec")
 var min = document.getElementById("min")
 var hora = document.getElementById("hora")

 for(var i=0; i<=60; i++){



     hora.innerHTML += ' <option value='+i+'>'+i+'</option>'
     min.innerHTML += ' <option value='+i+'>'+i+'</option>'
     sec.innerHTML += ' <option value='+i+'>'+i+'</option>'
 }





    


    

var comecar = document.getElementById("comecar")
var parar = document.getElementById("parar")






comecar.addEventListener("click",  function(){
    var minute,seconds,hour

    seconds = sec.value
    minute = min.value
    hour = hora.value

   
    
   var interval= setInterval(() => {
       
    

    min.value = minute
    sec.value =  seconds
    hora.value =  hour
  

    seconds--

    if(seconds < 0)
    {
       // console.log(seconds)
       minute--
       seconds=59
        if(minute < 0){
            --hour
            minute=59
            if(hour < 0){
                console.log(seconds)
                clearInterval(interval)
                // document.getElementById("alarm").play()
                alert("dd"+seconds)
            }
       
        }

        
      
    }
}, 5);

parar.addEventListener("click",  function(){
    clearInterval(interval)
})


}) 

