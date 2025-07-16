class ServicioJuegoOferta {

    static parsearJuegoOferta(juego) {
        juego.precioBase = Number(juego.precioBase);
        juego.precioReventa = Number(juego.precioReventa);
        juego.precioClienteLista = Number(juego.precioClienteLista);
        juego.precioClienteTransferencia = Number(juego.precioClienteTransferencia);
    }

}

export default ServicioJuegoOferta;