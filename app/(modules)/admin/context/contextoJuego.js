// store/useStockStore.js
import { create } from 'zustand'
import ServicioJuegoStock from "@/app/(modules)/admin/context/ServicioJuegoStock";

export const useStockStore = create((set) => ({
    juegos: [],
    setJuegos: (juegos) => set({ juegos }),

    eliminarJE: (id) => {
        set((anterior) => ({
            juegos: anterior.juegos.filter(s => s.id !== id)
        }))
    },
    updateStockJE: (idJuego, cantidad) => {
        set((anterior) => {
            const juegosActualizados = ServicioJuegoStock.actualizarStock(idJuego, cantidad, anterior.juegos)
            const juegoActualizado = ServicioJuegoStock.obtenerPorId(juegosActualizados, idJuego);
            ServicioJuegoStock.actualizarJuegoBD(juegoActualizado)
            return {
                juegos: juegosActualizados
            }
        })
    },
    actualizarJE: (juegoActualizado) => {
        ServicioJuegoStock.formatearJuego(juegoActualizado)
        set((anterior) => ({
            juegos: ServicioJuegoStock.reordenar(
                anterior.juegos.map((j) => {
                    if (j.id === juegoActualizado.id) {
                        return {
                            ...j,
                            ...juegoActualizado
                        }
                    }
                    return j;
                })
            )
        }))
    },
    actualizarStock: (id, plataforma, nuevoStock) =>
        set((state) => ({
            juegos: state.juegos.map((juego) =>
                juego.id === id
                    ? {
                        ...juego,
                        stock: {
                            ...juego.stock,
                            [plataforma]: nuevoStock,
                        },
                    }
                    : juego
            ),
        })),
}))


