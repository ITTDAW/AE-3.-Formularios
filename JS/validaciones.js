

//aqui le decimos que cuando se cargue la ventana, nos compruebe con la funcion si la funcion de validación es true, si es asi,
//se envia el formulario
window.onload= function(){
    formulario.onsubmit =validacion;
    
    
}

function validacion(){
   

    //AQUI VALIDAMOS QUE LOS CAMPOS TIENEN QUE ESTAR CUBIERTOS
    if (nombre.value.trim() == "" || telefono.value.trim()=="" || direccion.value.trim()=="" || email.value.trim()=="") {
        // Si no se cumple la condicion...
        alert('Los campos nombre, teléfono, dirección y email deben de estar cubiertos');
       
        return false;
    }

     //AQUI IMPLEMENTAMOS CON EXPRESIONES REGULARES QUE LA PRIMERA LETRA DEL NOMBRE EMPIECE POR MAYUSCULAS
     let primeramayuscula = /^[A-Z]/
    
     if (!nombre.value.match(primeramayuscula)){
      alert("El nombre debe de empezar por mayusculas")
          return false;
      }

      //AQUI IMPLEMENTAMOS QUE EL TELEFONO SEA NUMERICO Y SOLO TENGA 9 CARACTERES
    let tel=/^[0-9]{9,9}$/;

    if (!telefono.value.match(tel)){
         alert("El campo teléfono es numerico, 9 números");
         return false;
     }

     //AQUI IMPLEMENTAMOS QUE EL CORREO SEA UN CORREO VALIDO
     //Una implementación válida para la mayoria de correos
     //Empieza con cualquier caracter menos la @ despues debe de llevar una @ seguido de caracteres excepto @ y cuando lleve el punto, puede llevar
    //caracteres letras minimo 2
    let correo=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

    if (!email.value.match(correo)){
        alert("El campo de email debe de llevar una @ y un .");
       return false;
    }



    //AQUI VALIDAMOS QUE ESCOGEMOS AL MENOS UN TAMAÑO DE LA PIZZA
    tamaño=document.getElementsByName("tamaño");
    let check=false;
    let i;
    let preciotamaño;
    let tam;
    for(i=0;i<tamaño.length;i++){

        if (tamaño[i].checked==true){
            check=true;
            break;
        }
    }
    if(check==false){
        alert("Debes de seleccionar un tamaño de pizza");
        return false;
    //SI HEMOS ESCOGIDO UN TAMAÑO, LE ESTABLECEMOS EN UNA VARIABLE SU PRECIO.
    }else{
       switch (i){
    case 0:
             preciotamaño=15;
             tam="grande";
            break;
         case 1:
              preciotamaño=10;
              tam="mediana";
              break;
         case 2:
              preciotamaño=5;
              tam="pequeña";
              break;
     }
    }

 
    
    //AQUI VALIDAMOS QUE ALGUN INGREDIENTE SE ENCUENTRE SELECCIONADO
    if(mozzarella.checked==false && piña.checked==false && bacon.checked==false && anchoas.checked==false && trufa.checked==false && berenjena.checked==false){

        alert("Debes seleccionar al menos un ingrediente");
        return false;

    }


    alert("La pizza pedida es: \n"
    + "Tamaño : "+ tam.toUpperCase() + " " + preciotamaño + " euros" );


    ingredientes=document.getElementsByName("ingredientes");
    let j;
    let precioingredientes=0;
    for(j=0;j<ingredientes.length;j++){
        if(ingredientes[j].checked==true){
            precioingredientes++;
            
        }
    }

    alert("Has añadido :\n"+ 
    precioingredientes + " ingredientes: " + precioingredientes + "euros.")
    alert("El precio total de la pizza es: \n" + 
            "TAMAÑO: "+ preciotamaño+ "EUROS\n" +
            "INGREDIENTES: " + precioingredientes + "EUROS\n"+
            "TOTAL: " +(preciotamaño+precioingredientes) + " EUROS.")


   

     


     
            
}





