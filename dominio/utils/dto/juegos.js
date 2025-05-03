export class JuegoClienteDTO {
    id;
    precioCliente;
    consola;
    idioma;
    mostrarIdioma;
    nombre;
    stock;
    tipo;

    constructor({id, precioCliente, consola, idioma, mostrarIdioma, nombre, stock, tipo}) {
        this.id = id;
        this.precioCliente = precioCliente;
        this.consola = consola;
        this.idioma = idioma;
        this.mostrarIdioma = mostrarIdioma;
        this.nombre = nombre;
        this.stock = stock;
        this.tipo = tipo;
    }
}