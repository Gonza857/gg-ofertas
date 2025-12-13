export const formDataToObject = (formData) => {
    const formObject = {};

    for (let [key, value] of formData.entries()) {
        // Si la clave ya existe (por ejemplo en inputs repetidos), agrupamos en array
        if (formObject[key]) {
            if (Array.isArray(formObject[key])) {
                formObject[key].push(value);
            } else {
                formObject[key] = [formObject[key], value];
            }
        } else {
            formObject[key] = value;
        }
    }

    return formObject;
};