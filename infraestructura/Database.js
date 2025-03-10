import {
    addDoc,
    arrayUnion,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    limit,
    query,
    runTransaction,
    setDoc,
    updateDoc,
    where
} from 'firebase/firestore';
import {FirebaseError} from "@/dominio/errors/FirebaseError";

class MiFirebase {
    BASE_DE_DATOS;

    constructor(appPrincipal) {
        this.BASE_DE_DATOS = getFirestore(appPrincipal);
    }

    async guardarConUID(coleccion, objeto) {
        console.log('OBTJETO: ', objeto)
        console.log('COLECCION: ', coleccion)
        try {
            const referenciaDocumento = doc(this.BASE_DE_DATOS, coleccion, objeto.uid)
            delete objeto.uid;
            return await setDoc(referenciaDocumento, objeto); // setDoc usa el id que le doy
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }

    async guardar(coleccion, objeto) {
        try {
            const referenciaDocumento = collection(this.BASE_DE_DATOS, coleccion)
            const resultado = await addDoc(referenciaDocumento, objeto);
            return resultado.id// addDoc genera un id él
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }

    async actualizar(coleccion, objeto, id) {
        try {
            const referenciaDocumento = doc(this.BASE_DE_DATOS, coleccion, id);
            await updateDoc(referenciaDocumento, objeto);
            return true;
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }

    async actualizar_o_agregar(coleccion, objeto, id) {
        try {
            const referenciaDocumento = doc(this.BASE_DE_DATOS, coleccion, id);
            await setDoc(referenciaDocumento, objeto, {merge: true});
            return true;
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }



    async invertirValorBooleano(coleccion, idDocumento, campo) {
        const referenciaDocumento = doc(this.BASE_DE_DATOS, coleccion, idDocumento);
        try {
            await runTransaction(this.BASE_DE_DATOS, async (transaction) => {
                const snapshotDocumento = await transaction.get(referenciaDocumento)
                if (!snapshotDocumento.exists()) {
                    throw "No existe el documento"
                }
                const valorCampoActual = snapshotDocumento.data()[campo]

                transaction.update(referenciaDocumento, {
                    [campo]: !valorCampoActual
                })

                console.log("Valor de campo invertido")
            })
        } catch (e) {
            console.error("No se pudo realizar la operación para invertir el valor del campo")
        }
    }

    async actualizarUnificandoArrays(coleccion, objeto, id, campo) {
        try {
            const referenciaDocumento = doc(this.BASE_DE_DATOS, coleccion, id);
            await updateDoc(referenciaDocumento, {
                [campo]: arrayUnion(objeto)
            });
            return true;
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }

    async eliminar(coleccion, id) {
        try {
            const referenciaParaEliminar = doc(
                this.BASE_DE_DATOS,
                coleccion,
                id
            );
            await deleteDoc(referenciaParaEliminar);
            return true;
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }


    async obtenerTodos(coleccion) {
        try {
            const referenciaColeccion = collection(this.BASE_DE_DATOS, coleccion);
            const snapshot = await getDocs(referenciaColeccion);
            return snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }

    async obtenerTodasLasCategorias(coleccion) {
        try {


            const referenciaParaBuscar = doc(
                this.BASE_DE_DATOS,
                coleccion,
            );

            const docSnapshot = await getDoc(referenciaParaBuscar);
            if (docSnapshot.exists()) {
                console.log("docSnapshot.data():", docSnapshot.data())
                console.log("docSnapshot.data().categorias:", docSnapshot.data().categorias)
                return docSnapshot.data().categorias || [];
            } else {
                throw new Error('Documento inexistente');
            }
        } catch (error) {

        }
    }

    async obtenerPorId(coleccion, id) {
        try {
            const referenciaDocumento = doc(this.BASE_DE_DATOS, coleccion, id);
            const docSnapshot = await getDoc(referenciaDocumento);
            if (!docSnapshot.exists()) return null
            return {...docSnapshot.data(), id: docSnapshot.id};
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }

    async guardarCategoria(coleccion, documentoId, objeto) {
        try {
            const referenciaDocumento = doc(
                this.BASE_DE_DATOS,
                coleccion,
                documentoId
            );
            await setDoc(referenciaDocumento, objeto);
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }

    async obtenerDatosDocumentoCategorias(coleccion, documentoId) {
        try {
            const referenciaParaBuscar = doc(
                this.BASE_DE_DATOS,
                coleccion,
                documentoId
            );

            const docSnapshot = await getDoc(referenciaParaBuscar);
            if (docSnapshot.exists()) {
                return docSnapshot.data().categorias || [];
            } else {
                throw new Error('Documento inexistente');
            }
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }

    async obtenerCategoriaPorId(coleccion, documentoId, idCategoria) {
        try {
            const docRef = doc(this.BASE_DE_DATOS, coleccion, documentoId);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                throw new Error('No existe el documento de categorías');
            }

            const categorias = docSnap.data().categorias || [];

            const categoriaFiltrada = categorias.filter(categoria =>
                Number(categoria.id) === Number(idCategoria)
            );

            if (categoriaFiltrada.length === 0) {
                throw new Error('No se encontró la categoría especificada');
            }

            return categoriaFiltrada;
        } catch (error) {
            console.error('Error al obtener la categoría:', error);
            throw error;
        }
    }

    async buscarVariosPorAtributo(coleccion, atributo, dato) {
        /*  OPERADORES
            < menos que
            <= menor o igual a
            == igual a
            > mayor que
            >= mayor o igual a
            != no igual a
            array-contains
            array-contains-any
            in
            not-in
        */
        try {
            const referenciaDocumento = collection(
                this.BASE_DE_DATOS,
                coleccion
            );
            const consulta = query(
                referenciaDocumento,
                where(atributo.toString(), '==', dato.toString())
            );
            const resultados = await getDocs(consulta);
            return resultados.docs.map((d) => ({...d.data(), id: d.id}));
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }

    async actualizarEstadoProductos(coleccion, productosEnRevision) {
        try {
            const actualizarPromises = productosEnRevision.map(producto =>
                updateDoc(doc(this.BASE_DE_DATOS, coleccion, producto.id), {estado: 'revision'})
            );
            return await Promise.all(actualizarPromises);
        } catch (e) {
            console.log(e)
        }
    }

    async buscarUnoPorAtributo(coleccion, atributo, dato) {
        /*  OPERADORES
            < menos que
            <= menor o igual a
            == igual a
            > mayor que
            >= mayor o igual a
            != no igual a
            array-contains
            array-contains-any
            in
            not-in
        */
        try {
            const referenciaDocumento = collection(
                this.BASE_DE_DATOS,
                coleccion
            );
            const consulta = query(
                referenciaDocumento,
                where(atributo.toString(), '==', dato.toString()),
                limit(1)
            );

            const resultado = await getDocs(consulta);

            if (!resultado.empty) {
                const doc = resultado.docs[0];
                return {...doc.data(), id: doc.id};
            } else {
                return null;
            }
        } catch (e) {
            throw new FirebaseError(e.message);
        }
    }


    async filtrarProductosConDescuento(coleccion) {
        try {
            const referenciaDocumento = collection(this.BASE_DE_DATOS, coleccion);

            const consulta = query(
                referenciaDocumento,
                where('descuento', '>', 0),
                where('estado', '==', 'disponible'),
                limit(10)
            );

            const resultados = await getDocs(consulta);

            return resultados.docs.map((doc) => ({...doc.data(), id: doc.id}));
        } catch (e) {
            console.error('Error al filtrar productos con descuento:', e);
            throw new FirebaseError("Error al filtrar productos con descuento", e);
        }
    }


    async obtenerProductosRelacionados(coleccion, id, subcategoria) {
        try {
            const coleccionRef = collection(this.BASE_DE_DATOS, coleccion);

            const consulta = query(
                coleccionRef,
                where("subcategoria", "==", subcategoria),
                where("id", "!=", id),
                where('estado', '==', 'disponible'),
            );

            const querySnapshot = await getDocs(consulta);

            const productosRelacionados = [];
            querySnapshot.forEach((doc) => {
                productosRelacionados.push({id: doc.id, ...doc.data()});
            });

            return productosRelacionados;
        } catch (error) {
            console.error("Error al obtener productos relacionados: ", error);
            throw new FirebaseError("Error al obtener productos relacionados");
        }
    }


}

export default MiFirebase;
