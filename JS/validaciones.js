
/*El evento onload, se dispara al final del proceso de carga del documento. Es decir, cuando todos los objetos del DOM 
(imágenes, flash, scripts, frames) han terminado de cargarse. Una excepción son las hojas de estilo, que no siempre están 
cargadas al momento de lanzarse este evento. */

window.onload= function(){
    //Cuando pulsemos el boton submit del formulario , activamos la funcion de validacion que tenemos descrita debajo.
    //Si todos en todos los campos que validamos no obtenemos un ningun false, la validacion sera correcta. Si obtenemos algun
    //false, mostraremos un alert y no podremos enviar los datos del formulario
    formulario.onsubmit =validacion;
    
    
}

function validacion(){
   

    //AQUI VALIDAMOS QUE TODOS LOS CAMPOS TIENEN QUE ESTAR CUBIERTOS
    /*Con el  método trim( ) nos devuelve la cadena de texto despojada de los espacios en blanco en ambos extremos. 
    Además el método no afecta al valor de la cadena de texto. Por lo tanto si el valor de los campos que tenemos definidos
    a continuacion quitando los espacios en blanco, estan vacios mostraremos el alert y devolveremos el false en la funcion */
    if (nombre.value.trim() == "" || telefono.value.trim()=="" || direccion.value.trim()=="" || email.value.trim()=="") {
        // Si no se cumple la condicion...
        alert('Los campos nombre, teléfono, dirección y email deben de estar cubiertos');
       
        return false;
    }

     //AQUI IMPLEMENTAMOS CON EXPRESIONES REGULARES QUE LA PRIMERA LETRA DEL NOMBRE EMPIECE POR MAYUSCULAS
     /*Definimos nuestra variable primeramayuscula de tal forma que nuestra palabra tiene que empezar por una letra(^) del rango que 
     establecemos [A-Z]*/
     let primeramayuscula = /^[A-Z]/
    
     /*Con el metodo match nos devuelve todas las ocurrencias que haya dentro de una cadena teniendo en cuenta una expresión regular 
     establecida. Nosotros mediante el condicional if, le decimos que si no existe la ocurrencia de que nuestra palabra empiece por
     mayuscula, enviamos un alert y devolvemos false en la funcion*/
     if (!nombre.value.match(primeramayuscula)){
      alert("El nombre debe de empezar por mayusculas")
          return false;
      }

      //AQUI IMPLEMENTAMOS QUE EL TELEFONO SEA NUMERICO Y SOLO TENGA 9 CARACTERES

      /*De la misma forma que antes, definimos la expresion regular que queremos y la introducimos en nuestra variable
      En este caso le decimos que tiene que empezar por un caracter comprendido entre [0-9] y que la longitud debe de ser de 9 numeros exactos */
    let tel=/^[0-9]{9,9}$/;
      /*El metodo match nos devuele las ocurrencias que haya dentro de la cadena si cumple con nuestra expresion regular, con nuestro 
      condicional if, comprobamos si es falsa esta ocurrencia, pues devolvemos el alert correspondiente y retornamos false en la funcion */
    if (!telefono.value.match(tel)){
         alert("El campo teléfono es numerico, 9 números");
         return false;
     }

     //AQUI IMPLEMENTAMOS QUE EL CORREO SEA UN CORREO VALIDO

     /*Definimos una expresión regular para una implementación válida para la mayoria de correos
     Empieza con cualquier caracter menos la @ despues debe de llevar una @ seguido de caracteres excepto @ y cuando lleve el punto, puede llevar
    caracteres letras minimo 2*/
    let correo=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

    /*Volvemos a analizar con el condicional if y el metodo match si se produce la ocurrencia de nuestra expresion regular */
    if (!email.value.match(correo)){
        /*Si no se produce devolvemos el alert y el false */
        alert("El campo de email debe de llevar una @ y un .");
       return false;
    }



    //-------------------------EN ESTA PARTE VAMOS A ANALIZAR EL PRECIO E INGREDIENTES DE LA PIZZA ----------------------------------

    //AQUI VALIDAMOS QUE ESCOGEMOS AL MENOS UN TAMAÑO DE LA PIZZA

    //Seleccionamos nuestro grupo de input radio mediante el name que le definimos en el html y lo introducimos en la variable tamaño
    tamaño=document.getElementsByName("tamaño");
    //Definimos una variable llamada check y la ponemos a false
    let check=false;
    //Definimos la variable i para el for que despues la utilizaremos para nuestro switch, por esa razon tiene que definirse aqui
    let i;
    //Definimos una variable llamada preciotamaño
    let preciotamaño;
    //Definimos una variable llamada tam
    let tam;

    //Ahora mediante un bucle for, recorremos el tamaño del array que forma nuestra variable tamaño con los elementos agrupados radio por name
    for(i=0;i<tamaño.length;i++){
        //Cuando el elemento correspondiente se encuentre checked ponemos la variable check a true y salimos del bucle
        if (tamaño[i].checked==true){
            check=true;
            break;
        }
    }
    //Si hemos salido del bucle y la variable check no esta a true, devolvemos un alert y enviamos un false.
    if(check==false){
        alert("Debes de seleccionar un tamaño de pizza");
        return false;
    //SI HEMOS ESCOGIDO UN TAMAÑO, LE ESTABLECEMOS EN UNA VARIABLE SU PRECIO.
    /*Si por el contrario check esta a true, mediante el valor de nuestra i, que nos dice cual de nuestros radios esta check , analizamos
    este valor con un switch*/
    }else{
       switch (i){
        case 0:
            //Para el caso de i=0, precio es de 15 y el tam es grande, sucesivamente establecemos los valores para las variables segun el valor de i
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
    //Con checked obligamos a que algun ingrediente se encuentre seleccionado
    if(mozzarella.checked==false && piña.checked==false && bacon.checked==false && anchoas.checked==false && trufa.checked==false && berenjena.checked==false){
        //Si no hay ninguno seleccionado, devolvemos un alert y un false.
        alert("Debes seleccionar al menos un ingrediente");
        return false;

    }

    //SI TODAS LAS VALIDACIONES NO DEVUELVEN NINGUN FALSE, PODEMOS CALCULAR EL PRECIO DE NUESTRA PIZZA

    //Primero mostramos un alert con el tamaño de la pizza pedida y el precio que supone ese tamaño, tenemos los valores en las variables que hemos guardado
    swal("La pizza pedida es: \n"
    + "Tamaño : "+ tam.toUpperCase() + " " + preciotamaño + " euros" );

    /*Despues para saber cuantos ingredientes hemos seleccionado, seleccionamos nuestro grupo checkbox con el name que le establecimos
    en el html y lo recorremos con un bucle for */
    ingredientes=document.getElementsByName("ingredientes");
    let j;
    let precioingredientes=0;
    for(j=0;j<ingredientes.length;j++){
        //Cada vez que un ingrediente se encuentra seleccionado sumamos un ingrediente a precioingredientes
        if(ingredientes[j].checked==true){
            precioingredientes++;
            
        }
    }

    //Con el siguiente alert mostramos el numero total de ingredientes que hemos seleccionado y el precio de los mismos
    swal("Has añadido :\n"+ 
    precioingredientes + " ingredientes: " + precioingredientes + "euros.")

    //Y en el ultimo alert devolvemos el valor total de la pizza desglosando sus apartados
    swal("El precio total de la pizza es: \n" + 
            "TAMAÑO: "+ preciotamaño+ "EUROS\n" +
            "INGREDIENTES: " + precioingredientes + "EUROS\n"+
            "TOTAL: " +(preciotamaño+precioingredientes) + " EUROS.")


   

     


     
            
}





