const noEncontrado = 'Producto no encontrado';

const productos =[ "aceite de oliva extra virgen x500cc $800",
                "nueces californianas peladas por kilogramo $1800",
                "vino uva bonarda cosecha 2022 $1200",
]

let producto = prompt('Hola! Tenemos nueces, vino y aceite. Que estas buscando?');

if(producto === "aceite"){
    alert(productos[0]);
}else if(producto === "nueces"){
    alert(productos[1]);;
}else if(producto === "vino"){
    alert(productos[2]);;
}else{
    alert("Producto no encontrado");
}





