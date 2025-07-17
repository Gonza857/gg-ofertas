import {db} from "@/app/firebase/config";
import {addDoc, collection, doc, deleteDoc} from "firebase/firestore";

export class Firebase {


    constructor() {

    }

    async eliminarOfertas (id) {
        try {
            const docRef = doc(db, "ofertas", id);
            await deleteDoc(docRef);
        } catch (e) {
            console.error(e.message);
        }
    }

    async subirJuegos (oferta) {
        try {
            const docRef = collection(db, "ofertas");
            let result = await addDoc(docRef, oferta);
            return result.id;
        } catch (e) {
            console.error(e);
        }
    };

    async obtenerOfertas () {
        let baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
            ? process.env.NEXT_PUBLIC_VERCEL_URL
            : "http://localhost:3000";
        const ofertas = await fetch(`${baseUrl}/api/ofertas`, {
            cache: "no-store",
        }).then((r) => r.json());
        return ofertas;
    };

}