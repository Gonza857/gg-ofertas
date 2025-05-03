class MainGiftCard {
    nombre;
    precio;
    id;
    region;
    imagenUrl;

    constructor({nombre, precio, region, id, imagenUrl}) {
        this.nombre = nombre;
        this.precio = precio;
        this.region = region;
        this.id = id;
        this.imagenUrl = imagenUrl;
    }
}

export class GiftCardClienteDTO extends MainGiftCard {
    constructor({nombre, precioCliente, region, id, imagenUrl}) {
        super({nombre, precio: precioCliente, region, id, imagenUrl});
    }
}

export class GiftCardRevendedorDTO extends MainGiftCard {
    constructor({nombre, precioReventa, region, id, imagenUrl}) {
        super({nombre, precio: precioReventa, region, id, imagenUrl});
    }
}

