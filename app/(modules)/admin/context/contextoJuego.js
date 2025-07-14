// store/useStockStore.js
import { create } from 'zustand'

export const useStockStore = create((set) => ({
    juegos: [],
    setJuegos: (juegos) => set({ juegos }),
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
