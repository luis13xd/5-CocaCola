jQuery(document).ready(listo);   //$(document) o jQuery se usa document para representar todo el documento que tenemos en html seguido de ready() y dentro de esta una funcion
//cuando toda la web este lista, con la palabra de arriba de ready se pone entre parentesis la funcion que se vaya a usar para que la ejecute 

 /*function listo(){ //funcion en js con nombre listo
 	alert("holaaaa"); //muestra un cuadro al cargar la pagina que dice hola
 }*/

 function listo(){
 	jQuery(".hamb").click(function(e){
 		e.preventDefault(); //prevent anula algo que esta determinado por defecto, antes teniamos que si se daba click en el boton del menu nos mandaba al inicio de la pagina, ahora ya no
 		jQuery("header .container nav").toggleClass("open"); //se usa para agregar o quitar cosas es decir si el elemento tiene la clase que sellalamos en los parentesis luego lo quita y si no lo tiene lo agrega,se usa para mostrar o quitar menus
 	
 		jQuery(".hamb i").toggleClass("fa-times"); //la clase hamb que tenga i va a tener esta imagen al dar click de la X y luego desaparece y aparece la de antes
 	});

 		jQuery("header .container nav a").click(function(){ //vamos a redireccionar los elementos del navegador, cada vez que gamos click nos manda a donde es
	 		
	 		jQuery("header .container nav").removeClass("open"); //quitamos el menu al dar click en los href
 			jQuery(".hamb i").removeClass("fa-times"); //quitamos la x al dar click en los href

	 		var dev = jQuery(this).attr("href"); //this es para seleccionar algo con attr es para trbajar con atributos en este caso el hrf que es el de redireccionar
	 			
	 		jQuery("html,body").animate({ //trabajamos con el html y body
	 			"scrollTop": jQuery(dev).offset().top -76 //usamos para que al dar click nos diriga hacia abajo e los href del menu, -76 es para darle espacio en la parte de arriba
	 			});
 		});

 	
 }
