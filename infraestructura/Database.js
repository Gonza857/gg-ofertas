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

    async guardarConUID(coleccion, objeto) {
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
                where(atributo.toString(), '==', dato),
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
}

export default MiFirebase;
