function getcube(){  
    var number=document.getElementById("number").value; 
    
    if (number == 37890123){
        console.log(12, 'numero')
        window.location.href = "../../pages/consultas/flujo-caja-personas-d.html";

    } else if(number == 72250730) {
        console.log(14, 'numero')

        window.location.href = "../../pages/consultas/flujo-caja-personas-i.html";

    } else {
       //
        alert(number*number*number);  

    }


    }  