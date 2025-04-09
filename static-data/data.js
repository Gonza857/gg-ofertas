import {Banknote, FileText, Gamepad2, MessageCircleQuestion, PlusCircle, Tag} from "lucide-react";
import React from "react";
import {SiSteam} from "react-icons/si";
import {BsPlaystation} from "react-icons/bs";
import {RiDiscountPercentLine} from "react-icons/ri";
import {PsplusLogo} from "@/components/personalized-ui/logos";
import {TbGiftCard} from "react-icons/tb";

const insPriPs5 = `🎮 ¡INSTRUCTIVO de instalación para CUENTA PRIMARIA PS5! 🎮

🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴

🟡 NO iniciar sesión ESCANEANDO código QR  🟡
 
⚠️ Se pide respetar las condiciones de uso para no perder la garantía. Si usted respeta dichas condiciones, va a poder DISFRUTAR SU JUEGO SIN INCONVENIENTES y por mucho tiempo. Cualquier consulta o problema, SIEMPRE consultar al vendedor para que le brinde una solución adecuada.
 
🔴 CONDICIONES DE USO 🔴
 
- Respetar las mayúsculas y minúsculas al escribir la contraseña o el código de verificación.
- NO ingresar a la cuenta desde ningún dispositivo o navegador externo.
- NO compartir la cuenta con nadie NI tampoco colocarla en otra consola.
- NO cambiar ningún dato de la cuenta, tal como nombre, contraseña, correo, etc.
- Una vez instalado, NO colocar la cuenta en otra consola.
- NO hacer compras en la cuenta de juegos/adicionales/packs con costo alguno.
- Solo se debe descargar los juegos/adicionales/packs correspondientes al JUEGO ADQUIRIDO.
- NO borrar la cuenta brindada, si lo hace el juego se bloquea automáticamente.
- En caso de mantenimiento por parte de Sony pueden ocurrir fallos o bugs en las cuentas. Estos mismos serán resueltos automáticamente cuando termine dicho mantenimiento. Dicha solución puede extenderse ya que no corre por nuestra cuenta, sino por SONY. Queda expresamente prohibido el ingreso a las cuentas desde cualquier medio que no sea desde la consola donde se instaló el juego.
- NO está permitida la reventa una vez instalado el juego. Si usted termina el juego y decide venderlo, perderá la garantía y no se podrá acceder a la cuenta.
- La garantía estará dada, siempre y cuando, sea posible realizar las cuentas. Si SONY algún día llega a desestimar esta forma de crear/activar cuentas, no correrá por responsabilidad nuestra.
- Si no presenta ningún tipo de queja durante las primeras 24 horas, damos por hecho que usted acepta las CONDICIONES DE USO.
 
 🟡 ¡Recuerde! En caso de no respetar las condiciones de uso, se pierde la garantía del juego, quedando sin acceso a la cuenta permanentemente (sin reembolso).  

 🟢 PASOS PARA INSTALAR EL JUEGO CORRECTAMENTE 🟢
 
1) Crear usuario
🟡 NO ESCANEAR código QR  🟡
2) Seleccionar "Iniciar sesión manualmente"
3) Colocar los datos enviados a continuación.

USUARIO: 
CONTRASEÑA (respetar carácteres): 

4) Seleccionamos "Iniciar sesión"
5) En caso de que se solicite código de verificación, introducir el siguiente o solicitar al vendedor.

CÓDIGO DE VERIFICACIÓN: 

6) Seleccionar "Verificar".
7) En caso de que solicite "Compartir consola y jugar offline", seleccionamos "Activar". 
🟡 Si no le aparece la opción del paso (7), en el paso (12) se va a detallar cómo solucionarlo  🟡
8) Dirigirse a "Biblioteca".
9) Dirigirse al último icono, en "Tu colección" o "Comprado/s".
10) Seleccionar el juego y seleccionar la opción "Descargar".
🟡 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no se descarga.  🟡
11) Volver a la pantalla principal.
12) Dirigirse a "Ajustes" o "Configuración". (Signo de la maleta o caja con manija)
13) Seleccionar "Usuarios y cuentas".
14) Seleccionar "Otros".
15) Seleccionar "Uso compartido de consola y juego offline".
16) Seleccionar "Activar"
17) Una vez activado, volver al menú seleccionar "Restaurar licencias".
18) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
19) Seleccionar "Cerrar sesión"
🟡 El juego se seguirá descargando sin problema 🟡
20) Ahora debe volver a su usuario personal y esperar a la finalización de la descarga
21) ¡A divertirse!

⚠️ La velocidad de descarga depende de su velocidad de internet.
⚠️ En modo reposo puede continuar la descarga.
 
 🟢 ¿COMO SACAR AL CANDADO? 🟢

En caso de aparición del mismo o de la leyenda "No se puede usar el contenido", realizar los siguientes pasos:

1) Dirigirse al usuario enviado (el del juego que se le envió).
2) Iniciar sesión con los datos dados.
12) Dirigirse a "Ajustes" o "Configuración". (Signo de la maleta o caja con manija)
13) Seleccionar "Usuarios y cuentas".
14) Seleccionar "Otros".
15) Seleccionar "Uso compartido de consola y juego offline".
16) Seleccionar "Activar"
17) Una vez activado, volver al menú seleccionar "Restaurar licencias".
18) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
19) Seleccionar "Cerrar sesión"
11) Volver a su usuario personal y jugar.

  🎖 GRACIAS POR CONFIAR ¡QUE DISFRUTE SU JUEGO! 🎖`

const insPriPs4 = `🎮 ¡INSTRUCTIVO de instalación para CUENTA PRIMARIA PS4! 🎮

🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴

🟡 NO iniciar sesión ESCANEANDO código QR  🟡
 
⚠️ Se pide respetar las condiciones de uso para no perder la garantía. Si usted respeta dichas condiciones, va a poder DISFRUTAR SU JUEGO SIN INCONVENIENTES y por mucho tiempo. Cualquier consulta o problema, SIEMPRE consultar al vendedor para que le brinde una solución adecuada.
 
🔴 CONDICIONES DE USO 🔴
 
- Respetar las mayúsculas y minúsculas al escribir la contraseña o el código de verificación.
- NO ingresar a la cuenta desde ningún dispositivo o navegador externo.
- NO compartir la cuenta con nadie NI tampoco colocarla en otra consola.
- NO cambiar ningún dato de la cuenta, tal como nombre, contraseña, correo, etc.
- Una vez instalado, NO colocar la cuenta en otra consola.
- NO hacer compras en la cuenta de juegos/adicionales/packs con costo alguno.
- Solo se debe descargar los juegos/adicionales/packs correspondientes al JUEGO ADQUIRIDO.
- NO borrar la cuenta brindada, si lo hace el juego se bloquea automáticamente.
- En caso de mantenimiento por parte de Sony pueden ocurrir fallos o bugs en las cuentas. Estos mismos serán resueltos automáticamente cuando termine dicho mantenimiento. Dicha solución puede extenderse ya que no corre por nuestra cuenta, sino por SONY. Queda expresamente prohibido el ingreso a las cuentas desde cualquier medio que no sea desde la consola donde se instaló el juego.
- NO está permitida la reventa una vez instalado el juego. Si usted termina el juego y decide venderlo, perderá la garantía y no se podrá acceder a la cuenta.
- La garantía estará dada, siempre y cuando, sea posible realizar las cuentas. Si SONY algún día llega a desestimar esta forma de crear/activar cuentas, no correrá por responsabilidad nuestra.
- Si no presenta ningún tipo de queja durante las primeras 24 horas, damos por hecho que usted acepta las CONDICIONES DE USO.
 
 🟡 ¡Recuerde! En caso de no respetar las condiciones de uso, se pierde la garantía del juego, quedando sin acceso a la cuenta permanentemente (sin reembolso).  

 🟢 PASOS PARA INSTALAR EL JUEGO CORRECTAMENTE 🟢
 
1) Tocar el botón de PS (entre las dos palancas).
2) Dirigirse a "alimentación".
3) Seleccionar "Usuario nuevo".
4) Seleccionar "Crear un usuario".
5) Aceptar acuerdos de usuario.
6) Seleccionar "Siguiente".
🟡 NO ESCANEAR código QR  🟡
7) Seleccionar "Iniciar sesión manualmente"
8) Colocar los datos enviados a continuación.

USUARIO: 
CONTRASEÑA (respetar carácteres):  

9) Seleccionamos "Iniciar sesión"
10) En caso de que se solicite código de verificación, introducir el siguiente o solicitar al vendedor.

CÓDIGO DE VERIFICACIÓN: 

11) Seleccionar "Verificar".
12) En caso de que solicite "Cambiar PS4 como principal", seleccionamos "Cambiar a esta PS4". 
🟡 Si no le aparece la opción del paso (12), en el paso (16) se va a detallar cómo solucionarlo  🟡
13) Si se muestra un texto "Tus datos de inicio de sesión para PlayStation Network...", seleccionamos "Aceptar".
14) Aceptar bienvenida al usuario.
15) Dirigirse a "Biblioteca".
16) Dirigirse a la última opción, "Comprado".
17) Seleccionar el juego y seleccionar la opción "Descargar".
🟡 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no se descarga.  🟡
18) Volver a la pantalla principal.
19) Dirigirse a "Ajustes" o "Configuración". (Signo de la maleta o caja con manija)
20) Seleccionar "Gestión de cuentas".
21) Seleccionar "Activar PS4 como principal".
22) Si se muestra en la parte inferior central de la pantalla la leyenda "Esta PS4 está activada como tu PS4 principal", pasar al siguiente paso. Caso contrario, seleccionar la opción "Activar".
23) Volver al menú anterior.
24) Seleccionar "Restaurar licencias".
25) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
26) Seleccionar "Cerrar sesión"
🟡 El juego se seguirá descargando sin problema 🟡
27) Ahora debe volver a su usuario personal y esperar a la finalización de la descarga
28) ¡A divertirse!

⚠️ La velocidad de descarga depende de su velocidad de internet.
⚠️ En modo reposo puede continuar la descarga.
 
 🟢 ¿COMO SACAR AL CANDADO? 🟢

En caso de aparición del mismo o de la leyenda "No se puede usar el contenido", realizar los siguientes pasos:

1) Dirigirse al usuario enviado (el del juego que se le envió).
2) Iniciar sesión con los datos dados.
3) Dirigirse a "Configuración" o "Ajustes".
4) Seleccionar "Gestión de cuentas".
5) Seleccionar "Activar PS4 como principal".
6) Si se muestra en la parte inferior central de la pantalla la leyenda "Esta PS4 está activada como tu PS4 principal", pasar al siguiente paso. Caso contrario, seleccionar la opción "Activar".
7) Volver al menú anterior.
8) Seleccionar "Restaurar licencias".
9) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
10) Seleccionar "Cerrar sesión".
11) Volver a su usuario personal y jugar.

  🎖 GRACIAS POR CONFIAR ¡QUE DISFRUTE SU JUEGO! 🎖`

const insSecPs5 = `🎮 ¡INSTRUCTIVO de instalación para CUENTA SECUNDARIA PS5! 🎮

🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴

🟡 NO iniciar sesión ESCANEANDO código QR  🟡
🔴 Debe JUGAR SIEMPRE DESDE EL USUARIO QUE LE ENVIAMOS. Caso contrario se anula la garantía sin derecho a reclamo. 🔴
 
⚠️ Se pide respetar las condiciones de uso para no perder la garantía. Si usted respeta dichas condiciones, va a poder DISFRUTAR SU JUEGO SIN INCONVENIENTES y por mucho tiempo. Cualquier consulta o problema, SIEMPRE consultar al vendedor para que le brinde una solución adecuada.
 
🔴 CONDICIONES DE USO 🔴

- Respetar las mayúsculas y minúsculas al escribir la contraseña o el código de verificación.
- NO ingresar a la cuenta desde ningún dispositivo o navegador externo.
- NO compartir la cuenta con nadie NI tampoco colocarla en otra consola.
- NO cambiar ningún dato de la cuenta, tal como nombre, contraseña, correo, etc.
- Una vez instalado, NO colocar la cuenta en otra consola.
- NO hacer compras en la cuenta de juegos/adicionales/packs con costo alguno.
- Solo se debe descargar los juegos/adicionales/packs correspondientes al JUEGO ADQUIRIDO.
- NO borrar la cuenta brindada, si lo hace el juego se bloquea automáticamente.
- En caso de mantenimiento por parte de Sony pueden ocurrir fallos o bugs en las cuentas. Estos mismos serán resueltos automáticamente cuando termine dicho mantenimiento. Dicha solución puede extenderse ya que no corre por nuestra cuenta, sino por SONY. Queda expresamente prohibido el ingreso a las cuentas desde cualquier medio que no sea desde la consola donde se instaló el juego.
- NO está permitida la reventa una vez instalado el juego. Si usted termina el juego y decide venderlo, perderá la garantía y no se podrá acceder a la cuenta.
- La garantía estará dada, siempre y cuando, sea posible realizar las cuentas. Si SONY algún día llega a desestimar esta forma de crear/activar cuentas, no correrá por responsabilidad nuestra.
- Si no presenta ningún tipo de queja durante las primeras 24 horas, damos por hecho que usted acepta las CONDICIONES DE USO.
 
 🟡 ¡Recuerde! En caso de no respetar las condiciones de uso, se pierde la garantía del juego, quedando sin acceso a la cuenta permanentemente (sin reembolso).  

 🟢 PASOS PARA INSTALAR EL JUEGO CORRECTAMENTE 🟢
 
1) Crear usuario
🟡 NO ESCANEAR código QR  🟡
2) Seleccionar "Iniciar sesión manualmente"
3) Colocar los datos enviados a continuación.

USUARIO: 
CONTRASEÑA (respetar carácteres): 

4) Seleccionamos "Iniciar sesión"
5) En caso de que se solicite código de verificación, introducir el siguiente o solicitar al vendedor.

CÓDIGO DE VERIFICACIÓN: 

6) Seleccionar "Verificar".
7) En caso de que solicite "Compartir consola y jugar offline", seleccionamos "No activar". 
🟡 Si no le aparece la opción del paso (7), en el paso (12) se va a detallar cómo solucionarlo  🟡
8) Dirigirse a "Biblioteca".
9) Dirigirse al último icono, en "Tu colección" o "Comprado/s".
10) Seleccionar el juego y seleccionar la opción "Descargar".
🟡 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no se descarga.  🟡
11) Volver a la pantalla principal.
12) Dirigirse a "Ajustes" o "Configuración". 
13) Seleccionar "Usuarios y cuentas".
14) Seleccionar "Otros".
15) Seleccionar "Uso compartido de consola y juego offline".
16) Seleccionar "No Activar"

🔴 Se solicita enviar una foto donde se visualice que el usuario NO esté con "Uso compartido de consola y juego offline" activado 🔴
🔴 Es OBLIGATORIO para poder brindar la garantía correspondiente. Caso contrario se perderá 🔴

17) Una vez activado, volver al menú seleccionar "Restaurar licencias".
18) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
🟡 El juego se seguirá descargando sin problema 🟡
27) Ahora debe esperar a la finalización de la descarga.
28) ¡A divertirse!

🔴 Debe JUGAR SIEMPRE DESDE EL USUARIO QUE LE ENVIAMOS. Caso contrario se anula la garantía sin derecho a reclamo. 🔴
⚠️ La velocidad de descarga depende de su velocidad de internet.
⚠️ En modo reposo puede continuar la descarga.
 
 🟢 ¿COMO SACAR AL CANDADO? 🟢

En caso de aparición del mismo o de la leyenda "No se puede usar el contenido", realizar los siguientes pasos:

1) Desde el usuario enviado (el del juego que se le envió).
2) Iniciar sesión con los datos dados.
12) Dirigirse a "Ajustes" o "Configuración". (Signo de la maleta o caja con manija)
13) Seleccionar "Usuarios y cuentas".
14) Seleccionar "Otros".
15) Seleccionar "Restaurar licencias".
18) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
10) Volver a la pantalla principal.
11) Abrir nuevamente el juego.

  🎖 GRACIAS POR CONFIAR ¡QUE DISFRUTE SU JUEGO! 🎖`

const insSecPs4 = `🎮 ¡INSTRUCTIVO de instalación para CUENTA SECUNDARIA PS4! 🎮

🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴

🟡 NO iniciar sesión ESCANEANDO código QR  🟡
🔴 Debe JUGAR SIEMPRE DESDE EL USUARIO QUE LE ENVIAMOS. Caso contrario se anula la garantía sin derecho a reclamo. 🔴
 
⚠️ Se pide respetar las condiciones de uso para no perder la garantía. Si usted respeta dichas condiciones, va a poder DISFRUTAR SU JUEGO SIN INCONVENIENTES y por mucho tiempo. Cualquier consulta o problema, SIEMPRE consultar al vendedor para que le brinde una solución adecuada.
 
🔴 CONDICIONES DE USO 🔴

- Respetar las mayúsculas y minúsculas al escribir la contraseña o el código de verificación.
- NO ingresar a la cuenta desde ningún dispositivo o navegador externo.
- NO compartir la cuenta con nadie NI tampoco colocarla en otra consola.
- NO cambiar ningún dato de la cuenta, tal como nombre, contraseña, correo, etc.
- Una vez instalado, NO colocar la cuenta en otra consola.
- NO hacer compras en la cuenta de juegos/adicionales/packs con costo alguno.
- Solo se debe descargar los juegos/adicionales/packs correspondientes al JUEGO ADQUIRIDO.
- NO borrar la cuenta brindada, si lo hace el juego se bloquea automáticamente.
- En caso de mantenimiento por parte de Sony pueden ocurrir fallos o bugs en las cuentas. Estos mismos serán resueltos automáticamente cuando termine dicho mantenimiento. Dicha solución puede extenderse ya que no corre por nuestra cuenta, sino por SONY. Queda expresamente prohibido el ingreso a las cuentas desde cualquier medio que no sea desde la consola donde se instaló el juego.
- NO está permitida la reventa una vez instalado el juego. Si usted termina el juego y decide venderlo, perderá la garantía y no se podrá acceder a la cuenta.
- La garantía estará dada, siempre y cuando, sea posible realizar las cuentas. Si SONY algún día llega a desestimar esta forma de crear/activar cuentas, no correrá por responsabilidad nuestra.
- Si no presenta ningún tipo de queja durante las primeras 24 horas, damos por hecho que usted acepta las CONDICIONES DE USO.
 
 🟡 ¡Recuerde! En caso de no respetar las condiciones de uso, se pierde la garantía del juego, quedando sin acceso a la cuenta permanentemente (sin reembolso).  

 🟢 PASOS PARA INSTALAR EL JUEGO CORRECTAMENTE 🟢
 
1) Tocar el botón de PS (entre las dos palancas).
2) Dirigirse a "alimentación".
3) Seleccionar "Usuario nuevo".
4) Seleccionar "Crear un usuario".
5) Aceptar acuerdos de usuario.
6) Seleccionar "Siguiente".
🟡 NO ESCANEAR código QR  🟡
7) Seleccionar "Iniciar sesión manualmente"
8) Colocar los datos enviados a continuación.

USUARIO:
CONTRASEÑA (respetar carácteres):  

9) Seleccionamos "Iniciar sesión"
10) En caso de que se solicite código de verificación, introducir el siguiente o solicitar al vendedor.

CÓDIGO DE VERIFICACIÓN: 

11) Seleccionar "Verificar".
12) En caso de que solicite "Cambiar PS4 como principal", 🔴 seleccionamos "NO Cambiar a esta PS4". 🔴 
🟡 Si no le aparece la opción del paso (12), en el paso (16) se va a detallar cómo solucionarlo  🟡
13) Si se muestra un texto "Tus datos de inicio de sesión para PlayStation Network...", seleccionamos "Aceptar".
14) Aceptar bienvenida al usuario.
15) Dirigirse a "Biblioteca".
16) Dirigirse a la última opción, "Comprado".
17) Seleccionar el juego y seleccionar la opción "Descargar".
🟡 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no se descarga.  🟡
18) Volver a la pantalla principal.
19) Dirigirse a "Ajustes" o "Configuración". (Signo de la maleta o caja con manija)
20) Seleccionar "Gestión de cuentas".
21) Seleccionar "Activar PS4 como principal".
22) Si se muestra en la parte inferior central de la pantalla la leyenda "Esta PS4 no está activada como tu PS4 principal", pasar al siguiente paso. Caso contrario, seleccionar la opción "Desactivar".

🔴 Se solicita enviar una foto donde se visualice que el usuario está "Desactivado como Principal" 🔴
🔴 Es OBLIGATORIO para poder brindar la garantía correspondiente. Caso contrario se perderá 🔴

23) Volver al menú anterior.
24) Seleccionar "Restaurar licencias".
25) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
🟡 El juego se seguirá descargando sin problema 🟡
27) Ahora debe esperar a la finalización de la descarga.
28) ¡A divertirse!

🔴 Debe JUGAR SIEMPRE DESDE EL USUARIO QUE LE ENVIAMOS. Caso contrario se anula la garantía sin derecho a reclamo. 🔴
⚠️ La velocidad de descarga depende de su velocidad de internet.
⚠️ En modo reposo puede continuar la descarga.

 
 🟢 ¿COMO SACAR AL CANDADO? 🟢

En caso de aparición del mismo o de la leyenda "No se puede usar el contenido", al intentar abrir el juego, realizar los siguientes pasos:

1) Dirigirse a "Configuración" o "Ajustes" del usuario enviado.
4) Seleccionar "Gestión de cuentas".
8) Seleccionar "Restaurar licencias".
9) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
10) Volver a la pantalla principal.
11) Abrir nuevamente el juego.

  🎖 GRACIAS POR CONFIAR ¡QUE DISFRUTE SU JUEGO! 🎖`

const insPlusPs5 = `🎮 ¡INSTRUCTIVO de instalación para PlayStation Plus PS5! 🎮

🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴

🟡 NO iniciar sesión ESCANEANDO código QR  🟡
 
⚠️ Se pide respetar las condiciones de uso para no perder la garantía. Si usted respeta dichas condiciones, va a poder DISFRUTAR SU JUEGO SIN INCONVENIENTES y por mucho tiempo. Cualquier consulta o problema, SIEMPRE consultar al vendedor para que le brinde una solución adecuada.
 
🔴 CONDICIONES DE USO 🔴
 
- Respetar las mayúsculas y minúsculas al escribir la contraseña o el código de verificación.
- NO ingresar a la cuenta desde ningún dispositivo o navegador externo.
- NO compartir la cuenta con nadie NI tampoco colocarla en otra consola.
- NO cambiar ningún dato de la cuenta, tal como nombre, contraseña, correo, etc.
- Una vez instalado, NO colocar la cuenta en otra consola.
- NO hacer compras en la cuenta de juegos/adicionales/packs con costo alguno.
- Solo se debe descargar los juegos/adicionales/packs correspondientes al JUEGO ADQUIRIDO.
- NO borrar la cuenta brindada, si lo hace el juego se bloquea automáticamente.
- En caso de mantenimiento por parte de Sony pueden ocurrir fallos o bugs en las cuentas. Estos mismos serán resueltos automáticamente cuando termine dicho mantenimiento. Dicha solución puede extenderse ya que no corre por nuestra cuenta, sino por SONY. Queda expresamente prohibido el ingreso a las cuentas desde cualquier medio que no sea desde la consola donde se instaló el juego.
- NO está permitida la reventa una vez instalado el juego. Si usted termina el juego y decide venderlo, perderá la garantía y no se podrá acceder a la cuenta.
- La garantía estará dada, siempre y cuando, sea posible realizar las cuentas. Si SONY algún día llega a desestimar esta forma de crear/activar cuentas, no correrá por responsabilidad nuestra.
- Si no presenta ningún tipo de queja durante las primeras 24 horas, damos por hecho que usted acepta las CONDICIONES DE USO.
 
 🟡 ¡Recuerde! En caso de no respetar las condiciones de uso, se pierde la garantía del juego, quedando sin acceso a la cuenta permanentemente (sin reembolso).  

 🟢 PASOS PARA ACTIVAR LA MEMBRESIA CORRECTAMENTE 🟢
 
1) Crear usuario
🟡 NO ESCANEAR código QR  🟡
2) Seleccionar "Iniciar sesión manualmente"
3) Colocar los datos enviados a continuación.

USUARIO: 
CONTRASEÑA (respetar carácteres): 

4) Seleccionamos "Iniciar sesión"
5) En caso de que se solicite código de verificación, introducir el siguiente o solicitar al vendedor.

CÓDIGO DE VERIFICACIÓN: 

6) Seleccionar "Verificar".
7) En caso de que solicite "Compartir consola y jugar offline", seleccionamos "Activar". 
🟡 Si no le aparece la opción del paso (7), en el paso (12) se va a detallar cómo solucionarlo  🟡
8) Una vez en el menú principal, dirigirse la Tienda o PS Store.
9) Seleccionar la pestaña PS Plus".
10) Seleccionar el/los juego/s y seleccionar la opción "Descargar".
🟡 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no se descarga.  🟡
11) Volver a la pantalla principal.
12) Dirigirse a "Ajustes" o "Configuración". (Signo de la maleta o caja con manija)
13) Seleccionar "Usuarios y cuentas".
14) Seleccionar "Otros".
15) Seleccionar "Uso compartido de consola y juego offline".
16) Seleccionar "Activar"
17) Una vez activado, volver al menú seleccionar "Restaurar licencias".
18) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
19) Seleccionar "Cerrar sesión"
🟡 El juego se seguirá descargando sin problema 🟡
20) Ahora debe volver a su usuario personal y esperar a la finalización de la descarga
🟡 Sí se activo la opcion "Compartir consola y jugar offline" y restauró licencias, ya puede jugar ONLINE. 🟡
21) ¡A divertirse!

⚠️ La velocidad de descarga depende de su velocidad de internet.
⚠️ En modo reposo puede continuar la descarga.
 
 🟢 ¿COMO SACAR AL CANDADO? 🟢

En caso de aparición del mismo o de la leyenda "No se puede usar el contenido", realizar los siguientes pasos:

1) Dirigirse al usuario enviado (el del juego que se le envió).
2) Iniciar sesión con los datos dados.
12) Dirigirse a "Ajustes" o "Configuración". (Signo de la maleta o caja con manija)
13) Seleccionar "Usuarios y cuentas".
14) Seleccionar "Otros".
15) Seleccionar "Uso compartido de consola y juego offline".
16) Seleccionar "Activar"
17) Una vez activado, volver al menú seleccionar "Restaurar licencias".
18) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
19) Seleccionar "Cerrar sesión"
11) Volver a su usuario personal y jugar.

  🎖 GRACIAS POR CONFIAR ¡QUE DISFRUTE SU JUEGO! 🎖`

const insPlusPs4 = `🎮 ¡INSTRUCTIVO de instalación para PlayStation Plus PS4! 🎮

🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴
🔴 LEA TODO EL INSTRUCTIVO 🔴

🟡 NO iniciar sesión ESCANEANDO código QR  🟡
 
⚠️ Se pide respetar las condiciones de uso para no perder la garantía. Si usted respeta dichas condiciones, va a poder DISFRUTAR SU JUEGO SIN INCONVENIENTES y por mucho tiempo. Cualquier consulta o problema, SIEMPRE consultar al vendedor para que le brinde una solución adecuada.
 
🔴 CONDICIONES DE USO 🔴
 
- Respetar las mayúsculas y minúsculas al escribir la contraseña o el código de verificación.
- NO ingresar a la cuenta desde ningún dispositivo o navegador externo.
- NO compartir la cuenta con nadie NI tampoco colocarla en otra consola.
- NO cambiar ningún dato de la cuenta, tal como nombre, contraseña, correo, etc.
- Una vez instalado, NO colocar la cuenta en otra consola.
- NO hacer compras en la cuenta de juegos/adicionales/packs con costo alguno.
- Solo se debe descargar los juegos/adicionales/packs correspondientes al JUEGO ADQUIRIDO.
- NO borrar la cuenta brindada, si lo hace el juego se bloquea automáticamente.
- En caso de mantenimiento por parte de Sony pueden ocurrir fallos o bugs en las cuentas. Estos mismos serán resueltos automáticamente cuando termine dicho mantenimiento. Dicha solución puede extenderse ya que no corre por nuestra cuenta, sino por SONY. Queda expresamente prohibido el ingreso a las cuentas desde cualquier medio que no sea desde la consola donde se instaló el juego.
- NO está permitida la reventa una vez instalado el juego. Si usted termina el juego y decide venderlo, perderá la garantía y no se podrá acceder a la cuenta.
- La garantía estará dada, siempre y cuando, sea posible realizar las cuentas. Si SONY algún día llega a desestimar esta forma de crear/activar cuentas, no correrá por responsabilidad nuestra.
- Si no presenta ningún tipo de queja durante las primeras 24 horas, damos por hecho que usted acepta las CONDICIONES DE USO.
 
 🟡 ¡Recuerde! En caso de no respetar las condiciones de uso, se pierde la garantía del juego, quedando sin acceso a la cuenta permanentemente (sin reembolso).  

 🟢 PASOS PARA ACTIVAR LA MEMBRESÍA CORRECTAMANTE 🟢
 
1) Tocar el botón de PS (entre las dos palancas).
2) Dirigirse a "alimentación".
3) Seleccionar "Usuario nuevo".
4) Seleccionar "Crear un usuario".
5) Aceptar acuerdos de usuario.
6) Seleccionar "Siguiente".
🟡 NO ESCANEAR código QR  🟡
7) Seleccionar "Iniciar sesión manualmente"
8) Colocar los datos enviados a continuación.

USUARIO: 
CONTRASEÑA (respetar carácteres):  

9) Seleccionamos "Iniciar sesión"
10) En caso de que se solicite código de verificación, introducir el siguiente o solicitar al vendedor.

CÓDIGO DE VERIFICACIÓN: 

11) Seleccionar "Verificar".
12) En caso de que solicite "Cambiar PS4 como principal", seleccionamos "Cambiar a esta PS4". 
🟡 Si no le aparece la opción del paso (12), en el paso (16) se va a detallar cómo solucionarlo  🟡
13) Si se muestra un texto "Tus datos de inicio de sesión para PlayStation Network...", seleccionamos "Aceptar".
14) Aceptar bienvenida al usuario.
15) Dirigirse al cuadro "PS PLUS".
16) Seleccionar el tipo de membresía y descargar los juegos GRATIS desde este apartado.
17) Seleccionar el/los juego/s y seleccionar la opción "Descargar".
🟡 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no se descarga.  🟡
18) Volver a la pantalla principal.
19) Dirigirse a "Ajustes" o "Configuración". (Signo de la maleta o caja con manija)
20) Seleccionar "Gestión de cuentas".
21) Seleccionar "Activar PS4 como principal".
22) Si se muestra en la parte inferior central de la pantalla la leyenda "Esta PS4 está activada como tu PS4 principal", pasar al siguiente paso. Caso contrario, seleccionar la opción "Activar".
23) Volver al menú anterior.
24) Seleccionar "Restaurar licencias".
25) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
26) Seleccionar "Cerrar sesión"
🟡 El juego se seguirá descargando sin problema 🟡
27) Ahora debe volver a su usuario personal y esperar a la finalización de la descarga
🟡 Sí se activo la opcion "Activar PS4 como principal" y restauró licencias, ya puede jugar ONLINE. 🟡
28) ¡A divertirse!

⚠️ La velocidad de descarga depende de su velocidad de internet.
⚠️ En modo reposo puede continuar la descarga.
 
 🟢 ¿COMO SACAR AL CANDADO? 🟢

En caso de aparición del mismo o de la leyenda "No se puede usar el contenido", realizar los siguientes pasos:

1) Dirigirse al usuario enviado (el del juego que se le envió).
2) Iniciar sesión con los datos dados.
3) Dirigirse a "Configuración" o "Ajustes".
4) Seleccionar "Gestión de cuentas".
5) Seleccionar "Activar PS4 como principal".
6) Si se muestra en la parte inferior central de la pantalla la leyenda "Esta PS4 está activada como tu PS4 principal", pasar al siguiente paso. Caso contrario, seleccionar la opción "Activar".
7) Volver al menú anterior.
8) Seleccionar "Restaurar licencias".
9) Seleccionar "Restaurar" y esperar. (no se borra ningún dato ni nada). Una vez finalizado, seleccionamos "Aceptar".
10) Seleccionar "Cerrar sesión".
11) Volver a su usuario personal y jugar.

  🎖 GRACIAS POR CONFIAR ¡QUE DISFRUTE SU JUEGO! 🎖`

const PREGUNTAS_Y_RESPUESTAS = [
    {
        topic: "Sobre nosotros",
        items: [
            {
                question: "¿Cuál es el horario de atención al cliente?",
                answer:
                    "Nuestro horario de atención al cliente es de lunes a viernes de 10:00 a 21:00 HS. Los días sábados, domingos y feriados de 14:00 a 18:00 HS.",
            },
            {
                question: "¿Hace cuánto tiempo estamos en el mercado?",
                answer: [
                    "Comenzamos en el mercado en el año 2020. Hasta el día de hoy contamos con 5 años de experiencia en el rubro.",
                    "Contamos con +5000 ventas realizadas con éxito."
                ]
            },
            {
                question: "¿Por qué elegirnos?",
                answer: [
                    "Más de 5000 ventas y miles de clientes nos avalan. Contamos con referencias en nuestras historias destacadas de Instagram (@garret.games_ y @garret.games2_).",
                    "Con nosotros tu juego llega SÍ o SÍ.",
                    "No vamos a jugar con tu tiempo ni con tu dinero, SABEMOS lo importante que es, por eso brindamos el mejor servicio posible.",
                    "Sabemos que el mercado esta lleno de gente con malas intenciones a la hora de vender, ya sea estafando o quitando acceso a los juegos digitales.",
                    "Por este motivo, desde Garret Games nos esforzamos por brindar atención y calidad garantizada."
                ]
            },
            {
                question: "¿Qué productos vendemos?",
                answer: [
                    "Principalmente juegos digitales para PS3, PS4 y PS5. Además ofrecemos membresías PlayStation Plus",
                    "Disponemos de tarjetas de regalo de PlayStation Network (PSN) y Steam.",
                    "Contamos con Pavos y Skins para Fortnite.",
                ]
            },
            {
                question: "Aclaraciones importantes",
                answer: [
                    "NO trabajamos para PlayStation. Nosotros vendemos sus productos.",
                ]
            },
            {
                question: "Medios de contacto oficiales",
                answer: [
                    "Contamos con atención al cliente por WhatsApp, Instagram y Facebook.",
                    "NO vendemos por Mercado Libre",
                    "NO vendemos por Facebook Marketplace",
                    "WhatsApp: ÚNICO NÚMERO - 1132001372",
                    "Instagram: @garret.games_ (antiguo) y @garret.games2_ (actual)",
                    "Facebook: Garret Games Digitales",
                    "Cualquier medio no mencionado NO ES OFICIAL."
                ]
            },
        ]
    },
    {
        topic: "Juegos digitales",
        items: [
            {
                question: "¿Qué es un juego digital?",
                answer:
                    "Es una versión descargable de un juego que se compra online y se puede descagar en tu consola sin necesidad de tener el CD o juego físico."
                ,
            },
            {
                question: "¿Es lo mismo un juego digital que uno físico?",
                answer:
                    "La unica diferencia es la forma de obtener el juego. Siendo digital te ahorras el almacenamiento físico que conlleva tener juegos en formato CD. En lo que respecta al juego en sí, es lo mismo. No hay cambios.",
            },
            {
                question: "¿Cómo puedo tener el juego en mi consola?",
                answer:
                    "Nosotros te enviamos un usuario de PlayStation con el juego adquirido. Además te enviamos el instructivo de instalación para que puedas seguir los pasos y así descargar el juego en tu consola.",
            },
            {
                question: "¿Cómo me envian el juego?",
                answer:
                    "Las entregas de nuestros juegos digitales las hacemos mediante correo electrónico, tanto los datos para acceder al usuario como el instructivo.",
            },
            {
                question: "¿Qué es una cuenta primaria de un juego?",
                answer:
                    "En el caso de los juegos que vendemos para PS4 y PS5, se trata de establecer como primario o principal el usuario que enviamos. Esto permite poder jugar al juego desde cualquier otro usuario instalado en la consola.",
            },
            {
                question: "¿Qué es una cuenta secundaria de un juego?",
                answer:
                    "Similar a una cuenta primaria, en este caso NO se activa el usuario como primario o principal. Solo se puede jugar desde el usuario enviado.",
            },
            {
                question: "¿Qué garantía tienen los juegos?",
                answer: "Todos nuestros juegos cuentan con garantía de acceso al usuario por tiempo ilimitado. Esto quiere decir que vas a poder acceder al usuario del juego adquirido siempre y en cuando no se viole los términos y condiciones descriptos en el siguiente punto."

            },
            {
                question: "¿Como mantengo la garantía de mi juego?",
                answer: [
                    "Para mantener el juego por tiempo ilimitado y no tener ningún problema, cumplí las siguientes indicaciones:",
                    "No cambiar datos del usuario. El usuario que enviamos es unicamente para poder descargar el juego.",
                    "No poner la cuenta en otra consola. El juego vendido es válido para 1 consola. Nosotros contamos con la información y control total de nuestras cuentas.",
                    "No acceder a la cuenta desde un dispositivo ajeno a la consola.",
                    "No está permitida la reventa del juego una vez adquirido.",
                    "No descargar contenido no relacionado al juego adquirido. El contenido no relacionado podes descargarlo desde tu cuenta personal.",
                ]

            },
            {
                question: "Características de una cuenta primaria",
                answer: [
                    "Adquiriendo una cuenta primaria, podes jugar al juego desde cualquier usuario. Ideal si compartis la consola y cada uno quiere tener su progreso.",
                    "Además podes jugar sin la necesidad de estar conectado a Wi-Fi o internet.",
                    "Los logros y avances que consigas, se guardan en el usuario que uses para jugar.",
                    "Si tenes membresía a PlayStation Plus, podes jugar online."
                ]

            },
            {
                question: "Características de una cuenta secundaria",
                answer: [
                    "Adquiriendo una cuenta secundaria, solamente podes jugar al juego desde el usuario que te enviamos.",
                    "Necesitas estar conectado SÍ o SÍ a Wi-Fi o internet.",
                    "Los logros y avances que consigas, se guardan en el usuario enviado.",
                    "Si tenes membresía a PlayStation Plus, podes jugar online."
                ]

            },
            {
                question: "Si el juego no es el que quería ¿Cómo puedo acceder a una devolución?",
                answer:
                    "Antes de realizar la compra, se debe confirmar si el juego es el que se desea adquirir. Habiendo confirmado y enviado el juego, no se realizan devoluciones. Solo se realizan devoluciones en casos excepcionales y de juegos en STOCK (no abarca juegos en oferta, PlayStation Plus o tarjetas de regalo).",
            },
            {
                question: "¿Puedo borrar el juego para descargar otros y descargarlo en otro momento?",
                answer:
                    "Sí, el juego se puede borrar para liberar almacenamiento y así descargar otro. También, podes descargarlo nuevamente cuando quieras.",
            },
            {
                question: "¿Puedo borrar el usuario que contiene el juego?",
                answer:
                    "Cualquier usuario se puede borrar, pero automáticamente se te activará un candado en el juego y no podrás jugar. Además deberas iniciar sesión nuevamente en el usuario.",
            },
            {
                question: "¿Qué pasa si hay mantenimiento y no puedo jugar?",
                answer: [
                    "Dichos mantenimientos, corren por cuenta de Sony. Nosotros no podemos hacer nada para acelelarlos o para poder jugar antes. La jugabilidad puede ser afectado debido a los mismos."
                ]
            },
        ]
    },
    {
        topic: "PlayStation Plus",
        items: [
            {
                question: "¿Como funciona el PlayStation Plus?",
                answer: [
                    "Al adquirir dicha membresía, accedes a los beneficios que contiene cada tipo, ya sea Essential, Extra o Deluxe.",
                    "Similar a los juegos digitales, también enviamos los datos para acceder al usuario con el correspondiente instructivo de instalacion para poder seguir los pasos y activar la membresía en tu consola."
                ]
            },
            {
                question: "¿Qué garantía tiene la membresía PlayStation Plus?",
                answer:
                    "Garantizamos el acceso al usuario durante el tiempo adquirido, ya sea 1, 3 o 12 meses. Aplican terminos y condiciones en el siguiente punto. Si se cumplen, podrás disfrutar sin ningún incoveniente de tu membresía.",
            },
            {
                question: "¿Como mantengo la garantía de mi membresía?",
                answer: [
                    "Para mantener la garantía de la membresía durante el tiempo adquirido y no tener ningún problema, cumplí las siguientes indicaciones:",
                    "No cambiar datos del usuario. El usuario que enviamos es unicamente para poder acceder a los beneficios de dicha membresía.",
                    "No poner la cuenta en otra consola. El el usuario enviado es válido para 1 consola. Nosotros contamos con la información y control total de nuestras cuentas.",
                    "No acceder a la cuenta desde un dispositivo ajeno a la consola.",
                    "No está permitida la reventa de la membresía una vez adquirida.",
                    "No descargar contenido no relacionado a dicha membresía (Netflix, Disney, entre otros). El contenido no relacionado podes descargarlo desde tu cuenta personal.",
                ]

            },
            {
                question: "¿Qué pasa si hay mantenimiento y no puedo jugar?",
                answer: [
                    "Dichos mantenimientos, corren por cuenta de Sony. Nosotros no podemos hacer nada para acelelarlos o para poder jugar antes. La jugabilidad puede ser afectado debido a los mismos."
                ]
            },
        ]
    },
    {
        topic: "Tarjetas de regalo (Steam y PSN)",
        items: [
            {
                question: "¿Qué son las tarjetas de regalo?",
                answer: [
                    "Son códigos digitales canjeables en dichas plataformas. Permiten obtener saldo en dicha plataforma para comprar contenido en la misma."
                ]
            },
            {
                question: "¿Cómo se envían?",
                answer: [
                    "Enviamos mediante correo eléctronico las tarjetas de regalo adquiridas. Las mismas son en formato alfanumérico",
                    "Steam Wallet Gift Card: XXXXX-XXXXX-XXXXX",
                    "PlayStation Network (PSN) Gift Card: XXXX-XXXX-XXXX"
                ]
            },
            {
                question: "¿Son originales y legales?",
                answer: [
                    "Sí, todos nuestros códigos se obtienen de manera 100% legal.",
                ]
            },
            {
                question: "¿Qué pasa si un código no funciona?",
                answer: [
                    "Los códigos son testeados previamente a la entrega, asegurandonos que funcionan y son 100% canjeables.",
                ]
            },
            {
                question: "¿En qué regiones funcionan?",
                answer: [
                    "Principalmente ofrecemos códigos canjeables para plataformas donde el saldo es en USD (Dolár Estado Unidense). Siempre en cada producto especificamos la región del mismo.",
                    "Solo se puede canjear en la región indicada.",
                ]
            },
            {
                question: "¿Qué pasa si compré un código para una región incorrecta?",
                answer: [
                    "Por nuestra parte, aclaramos antes de la compra la región de dichos códigos.",
                    "NO se realizan devoluciones de códigos comprados de manera incorrecta o equívoca.",
                ]
            },
        ]
    },
    {
        topic: "Contenido Fortnite (Proximamente)",
        items: []
    }

]

// NAVEGACION

let id = 0;
const opcionesNavbarReventa = [
    {
        id: id++,
        nombre: "Ofertas",
        ruta: "/reventa"
    },
    {
        id: id++,
        nombre: "Stock",
        ruta: "/reventa/juegos/stock"
    },
    {
        id: id++,
        nombre: "PlayStation Plus",
        ruta: "/reventa/playstationplus"
    },
    {
        id: id++,
        nombre: "Tarjetas de regalo",
        ruta: "/reventa/tarjetas-de-regalo"
    },
    {
        id: id++,
        nombre: "PS Plus Liquidación",
        ruta: "/reventa/playstationplus-liquidacion"
    },
]

const opcionesMenuLateralReventa = [
    {
        name: "Juegos en oferta",
        icon: <RiDiscountPercentLine className="mr-2 h-6 w-6"/>,
        href: "/reventa"
    },
    {
        name: "Juegos en stock",
        icon: <Gamepad2 className="mr-2 h-6 w-6"/>,
        href: "/reventa/juegos/stock"
    },
    {
        name: "PlayStation Plus",
        icon: <PsplusLogo/>,
        href: "/reventa/playstationplus"

    },
    {
        name: "Tarjetas de regalo Steam y PSN",
        icon: <TbGiftCard className="mr-2 h-6 w-6"/>,
        href: "/reventa/tarjetas-de-regalo"

    },
    {
        name: "Liquidación PlayStation Plus",
        icon: <Tag  className="mr-2 h-6 w-6"/>,
        href: "/reventa/playstationplus-liquidacion"
    },
    {
        name: "Instructivos",
        icon: <FileText className="mr-2 h-6 w-6"/>,
        href: "/reventa/instructivos"
    },
]

export {
    insPlusPs4,
    insPlusPs5,
    insPriPs5,
    insSecPs5,
    insPriPs4,
    insSecPs4,
    PREGUNTAS_Y_RESPUESTAS,
    opcionesNavbarReventa,
    opcionesMenuLateralReventa
}