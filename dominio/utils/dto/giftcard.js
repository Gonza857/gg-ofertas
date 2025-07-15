class MainGiftCard {
    nombre;
    id;
    region;
    imagenUrl;
    editado;

    constructor({nombre, region, id, imagenUrl, editado}) {
        this.nombre = nombre;
        this.region = region;
        this.id = id;
        this.imagenUrl = imagenUrl;
        // this.editado = this.#transformarFecha(editado)
        this.editado = editado;
    }

    #transformarFecha(fechaEditado = null) {
        return fechaEditado ? new Date(fechaEditado.toDate()) : "-"
    }
}

export class GiftCardClienteDTO extends MainGiftCard {
    precio;

    constructor({nombre, precioCliente, region, id, imagenUrl, editado}) {
        super({nombre, region, id, imagenUrl, editado});
        this.precio = Number(precioCliente);
    }
}

export class GiftCardRevendedorDTO extends MainGiftCard {
    precio;

    constructor({nombre, precioReventa, region, id, imagenUrl, editado}) {
        super({nombre, region, id, imagenUrl, editado});
        this.precio = Number(precioReventa);
    }
}

export class GiftCardAdminDTO extends MainGiftCard {
    precioCliente;
    precioReventa;
    mostrarCliente;

    constructor({nombre, precioReventa, precioCliente, id, region, imagenUrl, mostrarCliente, editado}) {
        super({nombre, id, region, imagenUrl, editado});
        this.mostrarCliente = mostrarCliente;
        this.precioCliente = Number(precioCliente);
        this.precioReventa = Number(precioReventa);
    }
}

