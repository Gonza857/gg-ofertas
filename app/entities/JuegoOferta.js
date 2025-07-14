class JuegoOferta {
    id;
    esDestacado;
    nombre;

    constructor(nombre, i) {
        this.id = i;
        this.esDestacado = false;
        this.nombre = nombre;
    }

    redondearCien(num) {
        const resto = num % 100;
        return resto >= 50 ? Math.ceil(num / 100) * 100 : Math.floor(num / 100) * 100;
    }
}

export class JuegoOfertaRevendedor extends JuegoOferta {
    precio;

    constructor(precioDefault, i, nombre) {
        super(nombre, i);
        this.precio = this.#calcularPrecio(precioDefault)
    }

    #calcularPrecio (precioDefault) {
        return Number(this.redondearCien((precioDefault) * 0.95).toFixed(0))
    }

}

export class JuegoOfertaCliente extends JuegoOferta {
    precioTransferencia;
    precioLista
    constructor(precioDefault, i, nombre) {
        super(nombre, i);
        this.#calcularPrecios(precioDefault)
    }

    #calcularPrecios (precioDefault) {
        this.precioLista = Number(this.redondearCien(precioDefault * 1.25).toFixed(0))
        this.precioTransferencia = Number(this.redondearCien(this.precioLista * 0.8).toFixed(0))
    }

}

export class JuegoOfertaAdmin extends JuegoOferta {
    precioClienteTransferencia;
    precioClienteLista;
    precioBase;
    precioReventa;

    constructor(precioDefault, i, nombre) {
        super(nombre, i);
        this.precioBase = precioDefault
    }

    #calcularPrecios (precioDefault) {
        this.precioClienteLista = Number(this.redondearCien(precioDefault * 1.25).toFixed(0))
        this.precioClienteTransferencia = Number(this.redondearCien(this.precioClienteLista * 0.8).toFixed(0))
        this.precioReventa = Number(this.redondearCien((precioDefault) * 0.95).toFixed(0))
    }

}

export default JuegoOferta