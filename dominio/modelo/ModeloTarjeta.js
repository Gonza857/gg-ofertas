import {GiftCardAdminDTO, GiftCardClienteDTO, GiftCardRevendedorDTO} from "@/dominio/utils/dto/giftcard";
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

        let tarjetas = [];
        if (solicitante === "customer") {
            tarjetas = await this.repositorioTarjetas.obtenerParaCliente();
            tarjetas = tarjetas.map(t => new GiftCardClienteDTO(t))
        } else if (solicitante === "admin" || solicitante === "reseller") {
            if (solicitante === "admin" && !usuario) throw new Error("No autorizado.")
            tarjetas = await this.repositorioTarjetas.obtenerTodas();
            tarjetas =
                solicitante === "admin" ?
                    tarjetas.map(t => new GiftCardAdminDTO(t))
                    :
                    tarjetas.map(t => new GiftCardRevendedorDTO(t))
        }

        tarjetas.sort((a, b) => a.nombre.localeCompare(b.nombre))
        return tarjetas;
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

        return {exito: true, id: resultadoGuardarTarjeta}

        // if (typeof urlImagen === "string" && resultadoGuardarTarjeta) {
        //
        // }
        // throw new Error("No se pudo guardar la tarjeta.")

    }



    async eliminar(id, usuario) {
        if (!usuario || !id) throw new Error("Sin permisos.")
        const resultado = await this.repositorioTarjetas.eliminar(id, usuario);
        if (!resultado) throw new Error("No se pudo eliminar.")
    }

    async actualizar(inputTarjeta, usuario) {

        if (!usuario || !inputTarjeta) throw new Error("Sin permisos.")
        const pudoActualizar = await this.repositorioTarjetas.actualizar(inputTarjeta);
        if (!pudoActualizar) throw new Error("No se pudo actualizar.")

    }

}

export default ModeloTarjeta;