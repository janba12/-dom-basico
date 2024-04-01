
const telefonos = [{
    modelo: "Pro max 14s",
    memoria: 64000,
    camara: 200,
    precio: 1000
},{
    modelo: "s24 Plus",
    memoria: 8000,
    camara: 120,
    precio: 300
}, {
    modelo: "Note 12s",
    memoria: 4000,
    camara: 80,
    precio: 200
}];

const encuentraArticulo = telefonos.find(function (articulo) {
    return articulo.modelo === "Note 12s"
});

telefonos.forEach(function(articulo) {
    console.log(articulo.modelo);
});

const articulosBaratos = telefonos.some(function(articulo){
    return articulo.precio <= 300;
})
const articulosfiltrados = telefonos.filter(function(articulo){
    return articulo.precio <= 300;
})