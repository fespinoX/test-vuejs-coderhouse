const productos = [
    {
        "nombre": 'remera',
        "cantidad": 5,
        "precio": 300
    },
    {
        "nombre": 'medias',
        "cantidad": 0,
        "precio": 100
    },
    {
        "nombre": 'pantalon',
        "cantidad": 10,
        "precio": 400
    },
]

const productosEnStock = productos.filter(elem => elem.cantidad > 0)
console.log(productosEnStock);

const totalCarrito = productos.reduce((acumulador, elem) => {
    return acumulador += elem.precio * elem.cantidad
}, 0)
console.log(totalCarrito);

const productosConImpuesto = productos.map(elem => {
    return {
        ...elem,
        precioConImpuesto: elem.precio * 1.1
    }
})
console.log(productosConImpuesto);