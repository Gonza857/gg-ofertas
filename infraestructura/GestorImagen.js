class GestorImagen {
    static #allowedTypes = ['image/png', 'image/jpeg', 'image/webp', "image/jpg"];

    static validarFormato (tipo) {
        return this.#allowedTypes.includes(tipo);
    }

    static convertir_file_a_base64 (file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(",")[1]);
            reader.onerror = (error) => reject(error);
        });
    }

    static convertir_base64_a_file (base64, contentType = "", sliceSize = 512) {
        const byteCharacters = atob(base64); // Decodificar Base64
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        return new Blob(byteArrays, {type: contentType});
    }
}

export default GestorImagen;