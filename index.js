/* const noEncontrado = 'Producto no encontrado';

const productos =[ "aceite de oliva extra virgen x500cc $800",
                "nueces californianas peladas por kilogramo $1800",
                "vino uva bonarda cosecha 2022 $1200",
]

let producto = prompt("¡Hola, Bienvenido a Finca Tierras Catamarqueñas! Tenemos aceite de oliva, vinos y nueces. Que desea comprar?");

if(producto === "aceite"){
    alert(productos[0]);
}else if(producto === "nueces"){
    alert(productos[1]);;
}else if(producto === "vino"){
    alert(productos[2]);;
}else{
    alert("Producto no encontrado");
} */

const noEncontrado = 'Producto no encontrado';

const productos =[ "aceite de oliva extra virgen x500cc $800",
                "nueces californianas peladas por kilogramo $1800",
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

let eleccion = prompt("¡Hola, Bienvenido a Finca Tierras Catamarqueñas! Desea comprar, contactarnos o iniciar un reclamo?");

if(eleccion === "comprar"){
    let producto = prompt("Tenemos aceite, nueces y vinos. Que desea comprar?")
        if(producto === "aceite"){
            alert(productos[0]);
        }else if(producto === "nueces"){
            alert(productos[1]);;
        }else if(producto === "vino"){
            alert(productos[2]);;
        }else{
            alert("Producto no encontrado");
        }
}else if(eleccion = "contactar"){
    alert(contactos);
}else if(eleccion = "reclamo"){
    alert(reclamos);
}
/* }else if(producto === "nueces"){
    alert(productos[1]);;
}else if(producto === "vino"){
    alert(productos[2]);;
}else{
    alert("Producto no encontrado");
} */





