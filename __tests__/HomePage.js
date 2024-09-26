import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

const sumar = (a, b) => {
  return a + b;
};

// it("renders homepage", () => {
//   render(<Home />);
//   expect(screen.getByText("Read our docs")).toBeInTheDocument();
// });

/*
toBe: Compara valores primitivos (números, strings).
toEqual: Compara objetos o arrays.
toBeTruthy / toBeFalsy: Verifica si un valor es verdadero o falso.

Si funcion tira error usamos
expect().toThrow(text)

RENDERIZAR ALGO ANTES DE CADA TES

Dentro de describe
beforeEach(()=>{
    render(Elemento)
})

it ("",()=>{
    expect()...
})

seber si esta en una etiqueta
expect(render().getByRole("heading",{
  name: "/deploy/i" <--- mayusculas o no
})).toBeInTheDocument();

*/

describe("prueba sumar", () => {
  beforeEach(() => {
    render(<Home />);
  });

  test("sumar 1+1 y que me de 2", () => {
    //given
    let a = 1,
      b = 1;
    // when
    expect(sumar(a, b)).toBe(2);
  });

  test("debe decirme en que posicion esta el signo $", () => {
    let test = "🦊Grand Theft Auto V PS4 & PS5 $ 16.000";
    let posicion = test.indexOf("$");
    expect(posicion).toBe(31);
  });

  test("debe borrarme el primer signo", () => {
    let test = "🦊Grand Theft Auto V PS4 & PS5 $ 16.000";
    let resultado = test.slice(2);
    expect(resultado).toBe("Grand Theft Auto V PS4 & PS5 $ 16.000");
  });

  test("debe separarme el juego del precio y sin signo", () => {
    let test = "🦊Grand Theft Auto V PS4 & PS5 $ 16.000";
    let resultado = test.slice(2);
    resultado = resultado.split("$");
    console.log(resultado);
    expect(resultado.length).toBe(2);
  });

  test("debe borrarme el espacio del juego al final", () => {
    let test = "🦊Grand Theft Auto V PS4 & PS5 $ 16.000";
    let resultado = test.slice(2);
    resultado = resultado.split("$");
    let juegoConEspacio = resultado[0].length;
    let juegoSinEspacio = resultado[0].slice(0, -1);
    expect(juegoSinEspacio.length).toBe(resultado[0].length - 1);
  });

  test("debe limpiarme los juegos", () => {
    let test = `🦊A Way Out   $ 6.200 
🦊ACE COMBAT™ 7: SKIES UNKNOWN   $ 9.000 
🦊Alan Wake 2 PS5 $ 23.500
🦊Assassin's Creed Valhalla Ragnarök Edition ESPAÑOL LATINO $ 20.000 
🦊Assassin's Creed® III Remastered   $ 9.000 
🦊Assassin's Creed® Mirage ESPAÑOL   $ 20.000 
🦊Assassin's Creed® Odyssey - DELUXE EDITION ESPAÑOL   $ 14.000 
🦊Assassin's Creed® Odyssey - DELUXE EDITION INGLÉS    $ 5.000 
🦊Assassin's Creed® Odyssey - GOLD EDITION ESPAÑOL   $ 16.000 
🦊Assassin's Creed® Odyssey - GOLD EDITION INGLÉS    $ 5.700 
🦊Assassin's Creed® Origins - DELUXE EDITION   $ 9.900 
🦊Assetto Corsa   $ 7.300 
🦊Back 4 Blood: Deluxe Edition    $ 4.400
🦊Batman: Return to Arkham   $ 5.400 
🦊Battlefield™ 1 Revolution   $ 6.200 
🦊Battlefield™ Hardline Ultimate Edition    $ 3.700
🦊Borderlands 3 Next Level Bundle    $ 3.400 
🦊Borderlands 3: Ultimate Edition    $ 20.000 
🦊Borderlands: Game of the Year Edition    $ 3.300
🦊Borderlands: The Handsome Collection   $ 9.000 
🦊Call of Duty®: Advanced Warfare Gold Edition    $ 17.000 
🦊Call of Duty®: Ghosts Gold Edition   $ 17.000 
🦊Call of Duty®: Modern Warfare® 2 Campaign Remastered    $ 4.400
🦊Call of Duty®: Modern Warfare® III ESPAÑOL LATINO    $ 27.500 
🦊Call of Duty®: Modern Warfare® Remastered    $ 4.300
🦊Call of Duty®: Vanguard PS4 & PS5    $ 9.200 
🦊Call of Duty®: WWII - Gold Edition INGLÉS    $ 4.300 
🦊Diablo III: Eternal Collection    $ 4.800 
🦊Diablo® IV - Standard Edition   $ 23.500 
🦊Diablo® II + III    $ 5.900 
🦊DOOM   $ 4.700 
🦊DOOM Eternal Standard Edition    $ 5.300 
🦊DRAGON BALL FighterZ - FighterZ Edition   $ 12.800 
🦊DRAGON BALL XENOVERSE 2 Deluxe Edition   $ 14.000 
🦊Dying Light 2 Stay Human    $ 20.000 
🦊Far Cry 5   $ 6.200 
🦊God of War Ragnarök ESPAÑOL LATINO PS4   $ 23.500 
🦊God of War Ragnarök ESPAÑOL LATINO PS5    $ 31.000 
🦊Grand Theft Auto V PS4 & PS5 $ 16.000 
🦊Hogwarts Legacy: Digital Deluxe Edition ESPAÑOL LATINO   $ 20.000 
🦊Just Cause 3: XXL Edition    $ 2.500 
🦊Just Cause 4 - Gold Edition   $ 8.400 
🦊LEGO® Batman™ 3: Beyond Gotham Deluxe Edition   $ 5.600
🦊LEGO® DC Super-Villains Deluxe Edition    $ 9.000 
🦊LEGO® Marvel Collection   $ 11.000 
🦊LEGO® Marvel's Avengers   $ 5.400 
🦊LEGO® Star Wars™:The Skywalker Saga Deluxe Edition   $ 15.100
🦊Lies of P   $ 30.000
🦊Mafia II: Definitive Edition   $ 7.300 
🦊Mafia III: Definitive Edition   $ 7.300
🦊Marvel's Spider-Man: Miles Morales ESPAÑOL LATINO   $ 16.000 
🦊Marvel's Spider-Man: Miles Morales INGLÉS    $ 8.900
🦊Middle-earth™: Shadow of Mordor™    $ 6.300 
🦊Middle-earth™: Shadow of War™   $ 7.300 
🦊Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle ESPAÑOL LATINO   $ 9.000 
🦊Mortal Kombat 11 Ultimate ESPAÑOL LATINO   $ 8.400
🦊Mortal Kombat 11 Ultimate SUBTITULADO    $ 3.700
🦊Mortal Kombat XL ESPAÑOL LATINO   $ 5.400
🦊NARUTO SHIPPUDEN: Ultimate Ninja STORM 4 Road to Boruto ESPAÑOL LATINO   $ 9.000 
🦊NARUTO TO BORUTO: SHINOBI STRIKER   $ 5.400
🦊Need for Speed™   $ 3.900 
🦊Need for Speed™ Heat Deluxe Edition   $ 9.900
🦊Need for Speed™ Hot Pursuit Remastered    $ 3.600
🦊Need for Speed™ Payback - Deluxe Edition   $ 3.900 
🦊Need for Speed™ Rivals   $ 4.700`;
    let separados = test.split("\n");
    let limpios = [];
    separados.forEach((e) => {
      // BORRADO ICON
      let borrarIniciales = e.slice(2);
      // SEPARACION JUEGO/PRECIO
      let juegoSeparadoDePrecio = borrarIniciales.split("$");
      // BORRADO DE ESPACIOS
      let juegoLimpio = juegoSeparadoDePrecio.map((a) => a.trim());
      limpios.push({
        name: "💎 " + juegoLimpio[0],
        price: juegoLimpio[1],
      });
    });
    expect(limpios.length).toBe(65);
    limpios.forEach((a) => {
      expect(a.name.includes("💎")).toBeTruthy();
    });
  });
});
