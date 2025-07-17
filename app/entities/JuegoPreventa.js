class JuegoPreventa {
    titulo;
    fechaLanzamiento;
    plataforma;
    region;
    tipo;
    imagenUrl;

    constructor(input) {
        this.titulo = input.titulo;
        this.fechaLanzamiento = input.fechaLanzamiento;
        this.plataforma = input.plataforma;
        this.region = input.region;
        this.tipo = input.tipo;
        this.imagenUrl = input.imagenUrl;
    }
}

export class JuegoPreventaCustomer extends JuegoPreventa {
    precioClienteTransferencia;
    precioClienteLista;

    constructor(j) {
        super(j);
        this.precioClienteTransferencia = j.precioClienteTransferencia;
        this.precioClienteLista = j.precioClienteLista;
    }

}

export class JuegoPreventaReseller extends JuegoPreventa {
    precio;
    constructor(j) {
        super(j);
        this.precio = j.precioReventa
    }
}

export class JuegoPreventaAdmin extends JuegoPreventa {
    precioClienteTransferencia;
    precioClienteLista;
    precioBase;
    precioReventa;
    constructor(j) {
        super(j);
        this.precioClienteTransferencia = j.precioClienteTransferencia;
        this.precioClienteLista = j.precioClienteLista;
        this.precioReventa = j.precioReventa
        this.precioBase = j.precioBase
    }

}

export default JuegoPreventa;