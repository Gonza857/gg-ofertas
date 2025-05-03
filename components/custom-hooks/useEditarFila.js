import {useEffect, useState} from 'react';

export default function useModoEdicionPorFila(dataInicial, claveId = 'id') {
    const [items, setItems] = useState(
        dataInicial.map(item => ({...item, modoEdicion: false}))
    );

    useEffect(() => {
        console.log("actualizados los items", items)
    }, [items])

    const editar = (item) => {
        setItems(prev =>
            prev.map(p =>
                p[claveId] === item[claveId]
                    ? {...p, modoEdicion: true}
                    : p
            )
        );
    };

    const cambiarModoEdicionItem = (id) => {
        setItems(prev => prev.map(p =>
            p.id === id
                ? {...p, modoEdicion: !p.modoEdicion}
                : p))
    }

    const eliminarItem = (id) => {
        setItems(prev => prev.filter(p => (p.id !== id)));
    }

    const cancelar = (id) => {
        setItems(prev =>
            prev.map(p =>
                p[claveId] === id
                    ? {...p, modoEdicion: false}
                    : p
            )
        );
    };

    const actualizarItem = (nuevosDatos) => {
        const copiaItems = [...items].map(i => {
            if (i.id === nuevosDatos.id) {
                return {...i, ...nuevosDatos, modoEdicion: false};
            }
            return i;
        })
        setItems(copiaItems);
        return copiaItems
    };

    return {
        items,
        eliminarItem,
        editar,
        cancelar,
        actualizarItem,
        cambiarModoEdicionItem,
        setItems, // opcional, por si querés modificar manualmente
    };
}
