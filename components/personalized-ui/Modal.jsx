import {Dialog, DialogTitle, Transition} from "@headlessui/react";

const ModalCustomizado = ({estaAbierto, children}) => {
    return (

        <Animacion estaAbierto={estaAbierto}>
            <Dialog
                open={estaAbierto}
                onClose={function () {
                }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 gap-4">
                <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 flex flex-col gap-4">
                    {children}
                </div>
            </Dialog>
        </Animacion>
    )
}

ModalCustomizado.Titulo = ({children}) => {
    return <DialogTitle className="text-lg font-bold">{children}</DialogTitle>;
};

ModalCustomizado.Titulo.displayName = "ModalCustomizado.Titulo";

const Animacion = ({estaAbierto, children}) => {
    return (
        <Transition
            show={estaAbierto}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >{children}</Transition>
    )
}

export default ModalCustomizado