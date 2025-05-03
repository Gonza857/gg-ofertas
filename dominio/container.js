import {initializeApp, getApps} from "firebase/app";
import ModeloTurquia from "@/dominio/modelo/ModeloTurquia";
import ModeloJuegos from "@/dominio/modelo/ModeloJuegos";
import MiFirebase from "@/infraestructura/Database";
import RepositorioJuegos from "@/dominio/repositorio/RepositorioJuegos";
import ModeloPlus from "@/dominio/modelo/ModeloPlus";
import RepositorioPlus from "@/dominio/repositorio/RepositorioPlus";
import ModeloUsuario from "@/dominio/modelo/ModeloUsuario";
import RepositorioUsuario from "@/dominio/repositorio/RepositorioUsuario";
import RepositorioTarjeta from "@/dominio/repositorio/RepositorioTarjeta";
import ModeloTarjeta from "@/dominio/modelo/ModeloTarjeta";
import Almacenamiento from "@/infraestructura/Storage";
import RepositorioImagen from "@/dominio/repositorio/RepositorioImagen";

class Container {
    constructor() {
        this.dependencies = new Map();

        // TODO: pasar a dotenv
        const CONFIGURACION_FIREBASE = {
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        };

        const APP_PRINCIPAL = initializeApp(CONFIGURACION_FIREBASE)

        // Verificar si está inicializado
        if (getApps().length > 0) {
            console.log("Firebase se inicializó correctamente");
        } else {
            throw new Error("No inicializado.")

        }

        this.register('BaseDeDatos', new MiFirebase(APP_PRINCIPAL));
        this.register('Almacenamiento', new Almacenamiento(APP_PRINCIPAL));

        this.register("RepositorioImagen", new RepositorioImagen(
            this.resolve("BaseDeDatos"),
            this.resolve("Almacenamiento"),
        ));
        this.register("RepositorioJuegos", new RepositorioJuegos(this.resolve("BaseDeDatos")));
        this.register("RepositorioPlus", new RepositorioPlus(this.resolve("BaseDeDatos")));
        this.register("RepositorioUsuario", new RepositorioUsuario(this.resolve("BaseDeDatos")));
        this.register("RepositorioTarjeta", new RepositorioTarjeta(this.resolve("BaseDeDatos")));

        this.register('ModeloTurquia', new ModeloTurquia());
        this.register('ModeloJuegos', new ModeloJuegos(
            this.resolve("RepositorioJuegos")
        ));
        this.register('ModeloPlus', new ModeloPlus(
            this.resolve("RepositorioPlus")
        ));
        this.register('ModeloUsuario', new ModeloUsuario(
            this.resolve("RepositorioUsuario")
        ));
        this.register('ModeloTarjeta', new ModeloTarjeta(
            this.resolve("RepositorioTarjeta"),
            this.resolve("RepositorioImagen")
        ));


    }

    register(name, instance) {
        this.dependencies.set(name, instance);
    }

    resolve(name) {
        if (!this.dependencies.has(name)) {
            throw new Error(`La dependencia ${name} no está registrada.`);
        }
        return this.dependencies.get(name);
    }
}

const container = new Container();

export default container;