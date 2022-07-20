const noEncontrado = 'Producto no encontrado';

const productos =[ "aceite de oliva extra virgen x500cc $650",
                "nueces californianas peladas por kilogramo $1500",
                "vino uva bonarda cosecha 2022 $1200",
]

const contactos =[
    "Instagram: @fincatierras",
    "Facebook.com/FincaTierrasC",
    "MercadoLibre: Origen Catamarca",
]

const reclamos =[
    "Para iniciar el reclamo, contactese a reclamos@fincatierras.com"
]

let seccion = prompt("¡Hola, Bienvenido a Finca Tierras Catamarqueñas! Desea comprar, contactar o reclamar?");
/* let imgContainer = document.getElementById("imagenContainer");

if(eleccion === "comprar"){
    let producto = prompt("Tenemos aceite, nueces y vinos. Que desea comprar?");
        if(producto === "aceite"){
            alert(productos[0]);
        }else if(producto === "nueces"){
            alert(productos[1]);;
        }else if(producto = "vino"){
            alert(productos[2]);;
        }else{
            alert("Producto no encontrado");
        }
}else if(eleccion = "contactar"){
    alert(contactos);
}else if(eleccion = "reclamo"){
    alert(reclamos);
}  
if(producto === "aceite"){
    imagenContainer.className = "imgcontainergreen";
};
 */
let bienvenida = document.getElementById("bienvenida");
if(seccion === "comprar"){
    bienvenida.innerHTML = "<h4>Tenemos aceite de oliva extra virgen y nueces californianas de la mas alta calidad</h4>";
    bienvenida.className = "h4green";
}else if(seccion === "contactar"){
    bienvenida.innerHTML = "<h4>Podes contactarnos en instagram @fincatierras, facebook.com/fincatierrasc o nuestra tienda en mercadolibre</h4>";
    bienvenida.className = "h4black";
}else if(seccion === "reclamar"){
    bienvenida.innerHTML = "<h4>Para reclamos, devoluciones o sugerencias, por favor contactanos en info@fincatierras.com.ar con el asunto reclamo</h4>";
    bienvenida.className = "h4"
}else {
    bienvenida.innerHTML = "<h4>Bienvenido, que estas buscando?</h4>";
}





