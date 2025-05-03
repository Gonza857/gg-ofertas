import {GiftCardClienteDTO, GiftCardRevendedorDTO} from "@/dominio/utils/dto/giftcard";
import GestorImagen from "@/infraestructura/GestorImagen";
import {v4 as uuidv4} from 'uuid'


class ModeloTarjeta {
    repositorioTarjetas
    repositorioImagenes

    constructor(repositorioTarjetas, repositorioImagenes) {
        this.repositorioTarjetas = repositorioTarjetas;
        this.repositorioImagenes = repositorioImagenes;
    }

    async obtenerTodas(solicitante = null, usuario) {
        solicitante = solicitante ?? "customer"

        const tarjetas = await this.repositorioTarjetas.obtenerTodas();
        tarjetas.sort((a, b) => a.nombre.localeCompare(b.nombre))
        tarjetas.forEach(t => {
            t.precioCliente = Number(t.precioCliente);
            t.precioReventa = Number(t.precioReventa);
            t.mostrarCliente = t.mostrarCliente === "true"
            this.#transformarFecha(t)
        })

        console.log("solicitante", solicitante)

        // admin
        if (solicitante === "admin" && !usuario) throw new Error("No autorizado.")
        if (solicitante === "admin" && usuario) return tarjetas;

        // revendedor
        if (solicitante === "reseller") return tarjetas.map(t => new GiftCardRevendedorDTO(t))
        console.log("Me saltié el reseller")

        // cliente
        return tarjetas.filter(t => t.mostrarCliente).map(t => new GiftCardClienteDTO(t))

    }

    async guardar(inputTarjeta, usuario) {
        if (!usuario || !inputTarjeta) throw new Error("Sin permisos.")

        const {imagen} = inputTarjeta;
        const id = uuidv4()

        const urlImagen = await this.repositorioImagenes.guardar(
            imagen,
            id,
            "/tarjetas",
        );

        delete inputTarjeta.imagen

        const tarjetaLista = {
            uid: id,
            imagenUrl: urlImagen,
            ...inputTarjeta
        };

        const resultadoGuardarTarjeta = await this.repositorioTarjetas.guardar(tarjetaLista);

        console.log("urlImagen", urlImagen);
        console.log("resultadoGuardarTarjeta", resultadoGuardarTarjeta)

        return {exito: true, id: resultadoGuardarTarjeta}

        // if (typeof urlImagen === "string" && resultadoGuardarTarjeta) {
        //
        // }
        // throw new Error("No se pudo guardar la tarjeta.")

    }

    #transformarFecha(objeto) {
        objeto.editado = objeto.editado ? new Date(objeto.editado.toDate()) : "-"
    }

    async eliminar(id, usuario) {
        if (!usuario || !id) throw new Error("Sin permisos.")
        const resultado = await this.repositorioTarjetas.eliminar(id, usuario);
        if (!resultado) throw new Error("No se pudo eliminar.")
    }

    async actualizar(inputTarjeta, usuario) {
        console.log("input tarjeta", inputTarjeta)
        console.log("usuario", usuario)
        if (!usuario || !inputTarjeta) throw new Error("Sin permisos.")
        const pudoActualizar = await this.repositorioTarjetas.actualizar(inputTarjeta);
        if (!pudoActualizar) throw new Error("No se pudo actualizar.")

    }

}

export default ModeloTarjeta;