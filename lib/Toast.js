import {Bounce, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let toastId = null;  // ✅ Declarado globalmente

export const toastSuccess = (texto) => {
    if (toastId && toast.isActive(toastId)) {
        // 🔄 Actualiza el toast existente
        toast.update(toastId, {
            render: texto,
            type: "success",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
            position: "bottom-right",
            transition: Bounce,
        });
    } else {
        // 🚀 Crea un nuevo toast si no existe o ya se cerró
        toastId = toast.success(texto, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
            transition: Bounce,
        });
    }
};

export const newSuccessToast = (texto) => {
    toast.success(texto, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
}


export const toastError = (texto) =>
    toast.error(texto, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });