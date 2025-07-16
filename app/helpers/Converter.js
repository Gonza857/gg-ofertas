export class Convertidor {
  convertir(cadena) {
    let separados = this.#splitString(cadena);
    let limpios = [];
    separados.forEach((e) => {
      let borrarIniciales = this.#deleteInitial(e);
      let juegoSeparadoDePrecio = this.#separeteGameAndPrice(borrarIniciales);
      let juegoLimpio = this.#deleteSpacesFromArray(juegoSeparadoDePrecio);
      limpios.push(this.#cleanGame(juegoLimpio));
    });
    return limpios;
  }

  #splitString(string) {
    return string.split("\n");
  }

  #deleteInitial(string) {
    return string.slice(2);
  }

  #separeteGameAndPrice(string) {
    return string.split("$");
  }

  #deleteSpacesFromArray(array) {
    return array.map((e) => e.trim());
  }

  #cleanGame(game) {
    return {
      nombre: "💎 " + game[0],
      precioBase: parseInt(game[1].replace(".", ""), 10),
    };
  }
}
