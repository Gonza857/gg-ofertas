class JuegoPreventa {
    titulo;
    precioBase;
    precioClienteTransferencia;
    precioClienteLista;
    precioReventa;
    fechaLanzamiento;
    plataforma;
    region;

    constructor(input) {
        this.titulo = input.titulo;
        this.precioBase = input.precioBase;
        this.precioClienteTransferencia = input.precioClienteTransferencia;
        this.precioClienteLista = input.precioClienteLista;
        this.precioReventa = input.precioReventa;
        this.fechaLanzamiento = input.fechaLanzamiento;
        this.plataforma = input.plataforma;
        this.region = input.region;
    }
}

export default JuegoPreventa;