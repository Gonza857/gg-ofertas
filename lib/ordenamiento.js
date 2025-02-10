class Ordenador {
    ordenarSegunParametro (parametro, arrayJuegos) {
        let sortedGames = [...arrayJuegos];
        switch (parametro) {
            case "price-asc":
                sortedGames.sort((a, b) => a.precioReventa - b.precioReventa);
                break;
            case "price-desc":
                sortedGames.sort((a, b) => b.precioReventa - a.precioReventa);
                break;
            case "name-asc":
                sortedGames.sort((a, b) => a.nombre.localeCompare(b.nombre));
                break;
            case "name-desc":
                sortedGames.sort((a, b) => b.nombre.localeCompare(a.nombre));
                break;
            default:
                sortedGames = [...arrayJuegos];
                break;
        }
        return sortedGames;
    }
}

const ordenador = new Ordenador();

export default ordenador;