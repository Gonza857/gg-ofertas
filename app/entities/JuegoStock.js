class JuegoStockBase {
    editado;
    consola;
    id;
    idioma;
    mostrarIdioma;
    nombre;
    stock;
    tipo;

    constructor(editado, consola, idioma, mostrarIdioma, id, nombre, stock, tipo) {
        this.editado = editado;
        this.consola = consola;
        this.idioma = idioma;
        this.mostrarIdioma = mostrarIdioma;
        this.nombre = nombre;
        this.stock = Number(stock);
        this.tipo = tipo;
        this.id = id;
    }

}

export class JuegoStockCliente extends JuegoStockBase {
    precio;

    constructor({editado, consola, idioma, mostrarIdioma, id, nombre, stock, tipo}, precio) {
        super(editado, consola, idioma, mostrarIdioma, id, nombre, stock, tipo);
        this.precio = precio;

    }

}

export class JuegoStockAdmin extends JuegoStockBase {
    precioCliente;
    precioReventa;
    constructor({editado, consola, idioma, mostrarIdioma, id, nombre, stock, tipo, precioReventa, precioCliente}) {
        super(editado, consola, idioma, mostrarIdioma, id, nombre, stock, tipo);
        this.precioCliente = precioCliente;
        this.precioReventa = precioReventa;

    }
}