import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert'
import {CheckCircle, AlertTriangle, Info, Lock} from 'lucide-react'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import {insPlusPs4, insPlusPs5, insPriPs4, insPriPs5, insSecPs4, insSecPs5} from '@/static-data/data'
import BtnCopiarInstructivo from '@/components/page-components/consumidores/instructivos/BtnCopiarInstructivo'

// eslint-disable-next-line react/no-unescaped-entities,camelcase
export function Instructivo_Primaria_PS4() {
    return (<section>
        <h1
            className='text-2xl font-bold text-center mb-6 pt-4'
        >
            🎮 Instructivo de instalación para CUENTA PRIMARIA PS4 🎮
        </h1>
        <AlertaLeerTodo/>
        <AlertaQR/>
        <CondicionesDeUso/>
        <AlertaRespetarCondicionesDeUso/>

        <Accordion type='single' collapsible className='w-full space-y-2'>
            <AccordionItem value='installation' className={'bg-gray-200 rounded-xl border border-cyan-800 px-4'}>
                <AccordionTrigger>
                    Pasos para Instalar el Juego en PS4
                </AccordionTrigger>
                <AccordionContent className={'text-cyan-800'}>
                    <ol className='list-decimal pl-6 space-y-2'>
                        <li>Tocar el botón de PS (entre las dos palancas).</li>
                        <li>Dirigirse a &quot;alimentación&quot;.</li>
                        <li>Seleccionar &quot;Usuario nuevo&quot;.</li>
                        <li>Seleccionar &quot;Crear un usuario&quot;.</li>
                        <li>Aceptar acuerdos de usuario.</li>
                        <li>Seleccionar &quot;Siguiente&quot;.</li>
                        <li>Seleccionar &quot;Iniciar sesión manualmente&quot;</li>
                        <li>Colocar los datos enviados a continuación.</li>
                        <li>Seleccionamos &quot;Iniciar sesión&quot;</li>
                        <li>En caso de que se solicite código de verificación, introducir el siguiente o solicitar al
                            vendedor.
                        </li>
                        <li>Seleccionar &quot;Verificar&quot;.</li>
                        <li>En caso de que solicite &quot;Cambiar PS4 como principal&quot;,
                            seleccionamos <strong>&quot;Cambiar a esta PS4&quot;</strong>.
                        </li>
                        <p><em><strong>🔴 Si no le aparece la opción del paso (12), en el paso (19) se va a detallar cómo
                            solucionarlo 🔴</strong></em></p>
                        <li>Si se muestra un texto &quot;Tus datos de inicio de sesión para PlayStation
                            Network...&quot;, seleccionamos &quot;Aceptar&quot;.
                        </li>
                        <li>Aceptar bienvenida al usuario.</li>
                        <li>Dirigirse a &quot;Biblioteca&quot;.</li>
                        <li>Dirigirse a la última opción, &quot;Comprado&quot;.</li>
                        <li>Seleccionar el juego y seleccionar la opción &quot;Descargar&quot;.</li>
                        <p><em><strong>🔴 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no
                            se descarga. 🔴</strong></em></p>
                        <li>Volver a la pantalla principal.</li>
                        <li>Dirigirse a &quot;Ajustes&quot; o &quot;Configuración&quot; (Signo de la maleta o caja con
                            manija).
                        </li>
                        <li>Seleccionar &quot;Gestión de cuentas&quot;.</li>
                        <li>Seleccionar &quot;Activar PS4 como principal&quot;.</li>
                        <li>Si se muestra en la parte inferior central de la pantalla la leyenda &quot;Esta PS4 está
                            activada como tu PS4 principal&quot;, pasar al siguiente paso. Caso contrario, seleccionar
                            la opción &quot;Activar&quot;.
                        </li>
                        <li>Volver al menú anterior.</li>
                        <li>Seleccionar &quot;Restaurar licencias&quot;.</li>
                        <li>Seleccionar &quot;Restaurar&quot; y esperar. (no se borra ningún dato ni nada). Una vez
                            finalizado, seleccionamos &quot;Aceptar&quot;.
                        </li>
                        <li>Volver al menú anterior.</li>
                        <li>Seleccionar &quot;Cerrar sesión&quot;.</li>
                        <li>Ahora debe volver a su usuario personal y esperar a la finalización de la descarga</li>
                        <li>¡A divertirse!</li>
                    </ol>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value='unlock' className='bg-gray-200 rounded-xl border border-cyan-800 px-4'>
                <AccordionTrigger>
                    <p className={'flex gap-2 items-center'}>
                        ¿Cómo Quitar el Candado? <Lock className={'h-4 w-4'}/>
                    </p>
                </AccordionTrigger>
                <AccordionContent className='text-cyan-800'>
                    <p className='mb-2'>
                        En caso de aparición del mismo o de la leyenda &quot;No se puede usar el contenido&quot;, al
                        intentar
                        abrir el
                        juego, realizar los siguientes pasos:
                    </p>
                    <ol className='list-decimal pl-5 space-y-2'>
                        <li>Dirigirse a &quot;Configuración&quot; o &quot;Ajustes&quot; del usuario enviado.</li>
                        <li>Seleccionar &quot;Gestión de cuentas&quot;.</li>
                        <li>Seleccionar &quot;Activar PS4 como principal&quot;.</li>
                        <li>Si se muestra en la parte inferior central de la pantalla la leyenda &quot;Esta PS4 está
                            activada como tu PS4 principal&quot;, pasar al siguiente paso. Caso contrario, seleccionar
                            la opción &quot;Activar&quot;.
                        </li>
                        <li>Volver al menú anterior.</li>
                        <li>Seleccionar &quot;Restaurar licencias&quot;.</li>
                        <li>Seleccionar &quot;Restaurar&quot; y esperar. (no se borra ningún dato ni nada). Una vez
                            finalizado, seleccionamos &quot;Aceptar&quot;.
                        </li>
                        <li>Volver al menú anterior.</li>
                        <li>Seleccionar &quot;Cerrar sesión&quot;.</li>
                        <li>Volver a su usuario personal y jugar</li>
                    </ol>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <GraciasPorConfiar/>
        <BtnCopiarInstructivo data={insPriPs4}/>
    </section>)
}

// eslint-disable-next-line react/no-unescaped-entities,camelcase
export function Instructivo_Secundaria_PS4() {
    return (<section>
        <h1
            className='text-2xl font-bold text-center mb-6 pt-4'
        >
            🎮 Instructivo de instalación para CUENTA SECUNDARIA PS4 🎮
        </h1>
        <AlertaLeerTodo/>
        <AlertaQR/>
        <AlertaJugarDesdeUsuarioEnviado/>
        <CondicionesDeUso/>
        <AlertaRespetarCondicionesDeUso/>

        <Accordion type='single' collapsible className='w-full space-y-2'>
            <AccordionItem value='installation' className={'bg-gray-200 rounded-xl border border-cyan-800 px-4'}>
                <AccordionTrigger>
                    Pasos para Instalar el Juego en PS4
                </AccordionTrigger>
                <AccordionContent className='text-cyan-800'>
                    <ol className='list-decimal pl-6 space-y-2'>
                        <li>Tocar el botón de PS (entre las dos palancas).</li>
                        <li>Dirigirse a &quot;alimentación&quot;.</li>
                        <li>Seleccionar &quot;Usuario nuevo&quot;.</li>
                        <li>Seleccionar &quot;Crear un usuario&quot;.</li>
                        <li>Aceptar acuerdos de usuario.</li>
                        <li>Seleccionar &quot;Siguiente&quot;.</li>
                        <li>Seleccionar &quot;Iniciar sesión manualmente&quot;</li>
                        <li>Colocar los datos enviados a continuación.</li>
                        <li>Seleccionamos &quot;Iniciar sesión&quot;</li>
                        <li className={'font-semibold'}>
                            En caso de que se solicite código de verificación, introducir el siguiente o solicitar
                            al vendedor.
                        </li>
                        <li>Seleccionar &quot;Verificar&quot;.</li>
                        <li>
                            IMPORTANTE: En caso de que solicite &quot;Cambiar PS4 como principal&quot;,
                            seleccionamos
                            <span className={'font-semibold px-1'}>
        &quot;NO Cambiar a esta PS4&quot;.
    </span>
                        </li>
                        <p className={'italic font-semibold'}>
                            🔴 Si no le aparece la opción del paso (12), en el paso (19) se va a detallar cómo
                            solucionarlo 🔴
                        </p>
                        <li>
                            Si se muestra un texto &quot;Tus datos de inicio de sesión para PlayStation
                            Network...&quot;,
                            seleccionamos &quot;Aceptar&quot;.
                        </li>
                        <li>Aceptar bienvenida al usuario.</li>
                        <li>Dirigirse a &quot;Biblioteca&quot;.</li>
                        <li>Dirigirse a la última opción, &quot;Comprado&quot;.</li>
                        <li>Seleccionar el juego y seleccionar la opción &quot;Descargar&quot;.</li>
                        <p className={'italic font-semibold'}>
                            🔴 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no se
                            descarga. 🔴
                        </p>
                        <li>Volver a la pantalla principal.</li>
                        <li>Dirigirse a &quot;Ajustes&quot; o &quot;Configuración&quot;. (Signo de la maleta o caja
                            con manija)
                        </li>
                        <li>Seleccionar &quot;Gestión de cuentas&quot;.</li>
                        <li>Seleccionar la opción &quot;Activar PS4 como principal&quot;.</li>
                        <li>
                            Si se muestra en la parte inferior central de la pantalla la leyenda
                            <span className={'font-semibold px-1'}>
                                    &quot;Esta PS4 no está activada como tu PS4 principal&quot;
                            </span>
                            , pasar al siguiente paso. Caso contrario, seleccionar la opción
                            <span className={'font-semibold px-1'}>
                                &quot;Desactivar&quot;.
                            </span>
                        </li>
                        <li>Volver al menú anterior.</li>
                        <li>Seleccionar &quot;Restaurar licencias&quot;.</li>
                        <li>
                            Seleccionar &quot;Restaurar&quot; y esperar. (no se borra ningún dato ni nada). Una vez
                            finalizado,
                            seleccionamos &quot;Aceptar&quot;.
                        </li>
                        <li>Ahora debe esperar a la finalización de la descarga.</li>
                        <li>¡A divertirse!</li>
                    </ol>
                    <Alert className='mt-4 bg-yellow-100 border-yellow-400 text-yellow-700'>
                        <Info className='h-4 w-4'/>
                        <AlertTitle className={'font-semibold'}>Importante</AlertTitle>
                        <AlertDescription>
                            Se solicita enviar una foto donde se visualice que el usuario está
                            <span className={'font-semibold px-1'}>
                                    &quot;desactivado como principal&quot;
                                </span>
                            . Es OBLIGATORIO para poder brindar la garantía correspondiente. Caso contrario se
                            perderá.
                        </AlertDescription>
                    </Alert>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value='unlock' className='bg-gray-200 rounded-xl border border-cyan-800 px-4'>
                <AccordionTrigger>
                    <p className={'flex gap-2 items-center'}>
                        ¿Cómo Quitar el Candado? <Lock className={'h-4 w-4'}/>
                    </p>
                </AccordionTrigger>
                <AccordionContent className='text-cyan-800'>
                    <p className='mb-2'>
                        En caso de aparición del mismo o de la leyenda &quot;No se puede usar el contenido&quot;, al
                        intentar
                        abrir el
                        juego, realizar los siguientes pasos:
                    </p>
                    <ol className='list-decimal pl-5 space-y-2'>
                        <li>Dirigirse a &quot;Configuración&quot; o &quot;Ajustes&quot; del usuario enviado.</li>
                        <li>Seleccionar &quot;Gestión de cuentas&quot;.</li>
                        <li>Seleccionar &quot;Restaurar licencias&quot;.</li>
                        <li>
                            Seleccionar &quot;Restaurar&quot; y esperar. (no se borra ningún dato ni nada). Una vez
                            finalizado,
                            seleccionamos &quot;Aceptar&quot;.
                        </li>
                        <li>Volver a la pantalla principal.</li>
                        <li>Abrir nuevamente el juego.</li>
                    </ol>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <GraciasPorConfiar/>
        <BtnCopiarInstructivo data={insSecPs4}/>
    </section>)
}

// eslint-disable-next-line camelcase
export function Instructivo_Primaria_PS5() {
    return (<section>
        <h1
            className='text-2xl font-bold text-center mb-6 pt-4'
        >
            🎮 Instructivo de instalación para CUENTA PRIMARIA PS5 🎮
        </h1>
        <AlertaLeerTodo/>
        <AlertaQR/>
        <CondicionesDeUso/>
        <AlertaRespetarCondicionesDeUso/>

        <Accordion type='single' collapsible className='w-full space-y-2'>
            <AccordionItem value='installation' className={'bg-gray-200 rounded-xl border border-cyan-800 px-4'}>
                <AccordionTrigger>
                    Pasos para instalar el juego en PS5
                </AccordionTrigger>
                <AccordionContent className='text-cyan-800'>
                    <ol className='list-decimal pl-6 space-y-2'>
                        <li>Crear usuario</li>
                        <li>Seleccionar &quot;Iniciar sesión manualmente&quot;</li>
                        <li>Colocar los datos enviados a continuación.</li>
                        <li>Seleccionamos &quot;Iniciar sesión&quot;</li>
                        <li>
                            En caso de que se solicite código de verificación, introducir el siguiente o solicitar
                            al vendedor.
                        </li>
                        <li>Seleccionar &quot;Verificar&quot;.</li>
                        <li>En caso de que solicite &quot;Compartir consola y jugar offline&quot;,
                            seleccionamos &quot;Activar&quot;.
                        </li>
                        <p className={'italic font-semibold'}>
                            🔴 Si no le aparece la opción del paso (7), en el paso (12) se va a detallar cómo
                            solucionarlo 🔴
                        </p>
                        <li>Dirigirse a &quot;Biblioteca&quot;.</li>
                        <li>Dirigirse al último icono, en &quot;Tu colección&quot; o &quot;Comprado/s&quot;.</li>
                        <li>Seleccionar el juego y seleccionar la opción &quot;Descargar&quot;.</li>
                        <p className={'italic font-semibold'}>
                            🔴 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no se
                            descarga. 🔴
                        </p>
                        <li>Volver a la pantalla principal.</li>
                        <li>Dirigirse a &quot;Ajustes&quot; o &quot;Configuración&quot;. (Signo de la maleta o caja con
                            manija)
                        </li>
                        <li>Seleccionar &quot;Usuarios y cuentas&quot;.</li>
                        <li>Seleccionar &quot;Otros&quot;.</li>
                        <li>Seleccionar &quot;Uso compartido de consola y juego offline&quot;.</li>
                        <li>Seleccionar &quot;Activar&quot;</li>
                        <li>Una vez activado, volver al menú seleccionar &quot;Restaurar licencias&quot;.</li>
                        <li>
                            Seleccionar &quot;Restaurar&quot; y esperar. (no se borra ningún dato ni nada). Una vez
                            finalizado,
                            seleccionamos &quot;Aceptar&quot;.
                        </li>
                        <li>Seleccionar &quot;Cerrar sesión&quot;</li>
                        <li>Ahora debe volver a su usuario personal y esperar a la finalización de la descarga</li>
                        <li>¡A divertirse!</li>
                    </ol>
                </AccordionContent>
            </AccordionItem>

            <SacarCandado_PS5/>
        </Accordion>
        <GraciasPorConfiar/>
        <BtnCopiarInstructivo data={insPriPs5}/>
    </section>)
}

export function Instructivo_Secundaria_PS5() {
    return (<section>
        <h1
            className='text-2xl font-bold text-center mb-6 pt-4'
        >
            🎮 Instructivo de instalación para CUENTA SECUNDARIA PS5 🎮
        </h1>
        <AlertaLeerTodo/>
        <AlertaQR/>
        <AlertaJugarDesdeUsuarioEnviado/>
        <CondicionesDeUso/>
        <AlertaRespetarCondicionesDeUso/>

        <Accordion type='single' collapsible className='w-full space-y-2'>
            <AccordionItem value='installation' className={'bg-gray-200 rounded-xl border border-cyan-800 px-4'}>
                <AccordionTrigger>
                    Pasos para instalar el juego en PS5
                </AccordionTrigger>
                <AccordionContent className='text-cyan-800'>
                    <ol className='list-decimal pl-6 space-y-2'>
                        <li>Crear usuario</li>
                        <li>Seleccionar &quot;Iniciar sesión manualmente&quot;</li>
                        <li>Colocar los datos enviados a continuación.</li>
                        <li>Seleccionamos &quot;Iniciar sesión&quot;</li>
                        <li>
                            En caso de que se solicite código de verificación, introducir el siguiente o solicitar
                            al vendedor.
                        </li>
                        <li>Seleccionar &quot;Verificar&quot;.</li>
                        <li>En caso de que solicite &quot;Compartir consola y jugar offline&quot;,
                            <span className={'font-semibold pl-1'}>seleccionar &quot;No activar&quot;</span>.
                        </li>
                        <p className={'italic font-semibold'}>
                            🔴 Si no le aparece la opción del paso (7), en el paso (12) se va a detallar cómo
                            solucionarlo 🔴
                        </p>
                        <li>Dirigirse a &quot;Biblioteca&quot;.</li>
                        <li>Dirigirse al último icono, en &quot;Tu colección&quot; o &quot;Comprado/s&quot;.</li>
                        <li>Seleccionar el juego y seleccionar la opción &quot;Descargar&quot;.</li>
                        <p className={'italic font-semibold'}>
                            🔴 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no se
                            descarga. 🔴
                        </p>
                        <li>Volver a la pantalla principal.</li>
                        <li>Dirigirse a &quot;Ajustes&quot; o &quot;Configuración&quot;.</li>
                        <li>Seleccionar &quot;Usuarios y cuentas&quot;.</li>
                        <li>Seleccionar &quot;Otros&quot;.</li>
                        <li>Seleccionar &quot;Uso compartido de consola y juego offline&quot;.</li>
                        <li>Seleccionar &quot;No activar&quot;</li>
                        <li>Una vez activado, volver al menú seleccionar &quot;Restaurar licencias&quot;.</li>
                        <li>
                            Seleccionar &quot;Restaurar&quot; y esperar. (no se borra ningún dato ni nada). Una vez
                            finalizado,
                            seleccionamos &quot;Aceptar&quot;.
                        </li>

                        <li>Ahora debe esperar a la finalización de la descarga.</li>
                        <li>¡A divertirse!</li>
                    </ol>
                    <Alert className='mt-4 bg-yellow-100 border-yellow-400 text-yellow-700'>
                        <Info className='h-4 w-4'/>
                        <AlertTitle className={'font-semibold'}>Importante</AlertTitle>
                        <AlertDescription>
                            Se solicita enviar una foto donde se visualice la opción
                            <span className={'font-semibold px-1'}>
                                    &quot;Compartir consola y jugar offline&quot;
                                </span>esta desactivada.
                            Es OBLIGATORIO para poder brindar la garantía correspondiente. Caso contrario se
                            perderá.
                        </AlertDescription>
                    </Alert>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value='unlock' className='bg-gray-200 rounded-xl border border-cyan-800 px-4'>
                <AccordionTrigger>
                    <p className={'flex gap-2 items-center'}>
                        ¿Cómo Quitar el Candado? <Lock className={'h-4 w-4'}/>
                    </p>
                </AccordionTrigger>
                <AccordionContent className='text-cyan-800'>
                    <p className='mb-2'>
                        En caso de aparición del mismo o de la leyenda
                        <span className={'font-semibold italic px-1'}>&quot;No se puede usar el contenido&quot;,</span>
                        al intentar abrir el juego, realizar los siguientes pasos:
                    </p>
                    <ol className='list-decimal pl-5 space-y-2'>
                        <li>Dirigirse a &quot;Configuración&quot; o &quot;Ajustes&quot; del usuario enviado.</li>
                        <li>Dirigirse a &quot;Ajustes&quot; o &quot;Configuración&quot;. (Signo de la maleta o caja con
                            manija)
                        </li>
                        <li>Seleccionar &quot;Usuarios y cuentas y/o gestión de cuentas&quot;.</li>
                        <li>Seleccionar &quot;Otros&quot;.</li>
                        <li>Seleccionar &quot;Restaurar licencias&quot;.</li>
                        <li>Seleccionar &quot;Restaurar&quot; y esperar. (no se borra ningún dato ni nada). Una vez
                            finalizado, seleccionamos &quot;Aceptar&quot;.
                        </li>

                        <li>Volver a la pantalla principal.</li>
                        <li>Abrir nuevamente el juego.</li>
                    </ol>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <GraciasPorConfiar/>
        <BtnCopiarInstructivo data={insSecPs5}/>
    </section>)
}

export function Instructivo_Plus_PS4() {
    return (<section>
        <h1
            className='text-2xl font-bold text-center mb-6 pt-4'
        >
            🎮 Instructivo de instalación para PlayStation Plus PS4 🎮
        </h1>
        <AlertaLeerTodo/>
        <AlertaQR/>
        <CondicionesDeUso/>
        <AlertaRespetarCondicionesDeUso/>

        <Accordion type='single' collapsible className='w-full space-y-2'>
            <AccordionItem value='installation' className={'bg-gray-200 rounded-xl border border-cyan-800 px-4'}>
                <AccordionTrigger>
                    Pasos para activar la membresía en PS4
                </AccordionTrigger>
                <AccordionContent className={'text-cyan-800'}>
                    <ol className='list-decimal pl-6 space-y-2'>
                        <li>Tocar el botón de PS (entre las dos palancas).</li>
                        <li>Dirigirse a &quot;alimentación&quot;.</li>
                        <li>Seleccionar &quot;Usuario nuevo&quot;.</li>
                        <li>Seleccionar &quot;Crear un usuario&quot;.</li>
                        <li>Aceptar acuerdos de usuario.</li>
                        <li>Seleccionar &quot;Siguiente&quot;.</li>
                        <li>Seleccionar &quot;Iniciar sesión manualmente&quot;</li>
                        <li>Colocar los datos enviados a continuación.</li>
                        <li>Seleccionamos &quot;Iniciar sesión&quot;</li>
                        <li>
                            En caso de que se solicite código de verificación, introducir el siguiente o solicitar
                            al vendedor.
                        </li>
                        <li>Seleccionar &quot;Verificar&quot;.</li>
                        <li>En caso de que solicite &quot;Cambiar PS4 como principal&quot;,
                            seleccionamos
                            <span className={'font-semibold px-1'}>
        &quot;Cambiar a esta PS4&quot;
    </span>.
                        </li>
                        <p className={'italic font-semibold'}>
                            🔴 Si no le aparece la opción del paso (12), en el paso (20) se va a detallar cómo
                            solucionarlo 🔴
                        </p>
                        <li>
                            Si se muestra un texto &quot;Tus datos de inicio de sesión para PlayStation
                            Network...&quot;,
                            seleccionamos &quot;Aceptar&quot;.
                        </li>
                        <li>Aceptar bienvenida al usuario.</li>
                        <li>Dirigirse el cuadro &quot;PS PLUS&quot;.</li>
                        <li>Seleccionar el tipo de membresía</li>
                        <li>Descargar los juegos desde este apartado</li>
                        <li>Seleccionar el juego y seleccionar la opción &quot;Descargar&quot;.</li>
                        <p className={'italic font-semibold'}>
                            🔴 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no se
                            descarga. 🔴
                        </p>
                        <li>Volver a la pantalla principal.</li>
                        <li>Dirigirse a &quot;Ajustes&quot; o &quot;Configuración&quot;. (Signo de la maleta o caja con
                            manija)
                        </li>
                        <li>Seleccionar &quot;Gestión de cuentas&quot;.</li>
                        <li>Seleccionar &quot;Activar PS4 como principal&quot;.</li>
                        <li>
                            Si se muestra en la parte inferior central de la pantalla la leyenda &quot;Esta PS4 está
                            activada como tu PS4 principal&quot;, pasar al siguiente paso. Caso contrario, seleccionar
                            la opción
                            &quot;Activar&quot;.
                        </li>
                        <li>Volver al menú anterior.</li>
                        <li>Seleccionar &quot;Restaurar licencias&quot;.</li>
                        <li>
                            Seleccionar &quot;Restaurar&quot; y esperar. (no se borra ningún dato ni nada). Una vez
                            finalizado, seleccionamos &quot;Aceptar&quot;.
                        </li>
                        <li>Volver al menú anterior.</li>
                        <li>Seleccionar &quot;Cerrar sesión&quot;</li>
                        <li>Ahora debe volver a su usuario personal y esperar a la finalización de la descarga</li>
                        <p className={'italic font-semibold'}>
                            🔴 Si se activó la opción &quot;Activar PS4 como principal&quot; y restauró licencias, ya
                            puede
                            jugar ONLINE. 🔴
                        </p>
                        <li>¡A divertirse!</li>
                    </ol>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value='unlock' className='bg-gray-200 rounded-xl border border-cyan-800 px-4'>
                <AccordionTrigger>
                    <p className={'flex gap-2 items-center'}>
                        ¿Cómo Quitar el Candado? <Lock className={'h-4 w-4'}/>
                    </p>
                </AccordionTrigger>
                <AccordionContent className='text-cyan-800'>
                    <p className='mb-2'>
                        En caso de aparición del mismo o de la leyenda &quot;No se puede usar el contenido&quot;, al
                        intentar
                        abrir el
                        juego, realizar los siguientes pasos:
                    </p>
                    <ol className='list-decimal pl-5 space-y-2'>
                        <li>Dirigirse a &quot;Configuración&quot; o &quot;Ajustes&quot; del usuario enviado.</li>
                        <li>Seleccionar &quot;Gestión de cuentas&quot;.</li>
                        <li>Seleccionar &quot;Activar PS4 como principal&quot;.</li>
                        <li>Si se muestra en la parte inferior central de la pantalla la leyenda &quot;Esta PS4 está
                            activada como tu PS4 principal&quot;, pasar al siguiente paso. Caso contrario, seleccionar
                            la
                            opción &quot;Activar&quot;.
                        </li>
                        <li>Volver al menú anterior.</li>
                        <li>Seleccionar &quot;Restaurar licencias&quot;.</li>
                        <li>
                            Seleccionar &quot;Restaurar&quot; y esperar. (no se borra ningún dato ni nada). Una vez
                            finalizado, seleccionamos &quot;Aceptar&quot;.
                        </li>
                        <li>Volver al menú anterior.</li>
                        <li>Seleccionar &quot;Cerrar sesión&quot;.</li>

                        <li>Volver a su usuario personal y jugar</li>
                    </ol>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <GraciasPorConfiar/>
        <BtnCopiarInstructivo data={insPlusPs4}/>
    </section>)
}

export function Instructivo_Plus_PS5() {
    return (<section>
        <h1
            className='text-2xl font-bold text-center mb-6 pt-4'
        >
            🎮 Instructivo de instalación para PlayStation Plus PS5 🎮
        </h1>
        <AlertaLeerTodo/>
        <AlertaQR/>
        <CondicionesDeUso/>
        <AlertaRespetarCondicionesDeUso/>

        <Accordion type='single' collapsible className='w-full space-y-2'>
            <AccordionItem value='installation' className={'bg-gray-200 rounded-xl border border-cyan-800 px-4'}>
                <AccordionTrigger>
                    Pasos para activar la membresía en PS5
                </AccordionTrigger>
                <AccordionContent className={'text-cyan-800'}>
                    <ol className='list-decimal pl-6 space-y-2'>

                        <li>Crear usuario</li>
                        <li>Seleccionar &quot;Iniciar sesión manualmente&quot;</li>
                        <li>Colocar los datos enviados a continuación.</li>
                        <li>Seleccionamos &quot;Iniciar sesión&quot;</li>
                        <li>
                            En caso de que se solicite código de verificación, introducir el siguiente o solicitar
                            al vendedor.
                        </li>
                        <li>Seleccionar &quot;Verificar&quot;.</li>
                        <li>En caso de que solicite &quot;Compartir consola y jugar offline&quot;,
                            seleccionamos &quot;Activar&quot;.
                        </li>
                        <p className={'italic font-semibold'}>
                            🔴 Si no le aparece la opción del paso (7), en el paso (12) se va a detallar cómo
                            solucionarlo 🔴
                        </p>
                        <li>Una vez en el menú principal, dirigirse a la Tienda o PS Store.</li>
                        <li>Seleccionar la pestaña &quot;PS Plus&quot;</li>
                        <li>Seleccionar el/los juego/s y seleccionar la opción &quot;Descargar&quot;.</li>
                        <p className={'italic font-semibold'}>
                            🔴 El juego se puede seguir descargando en modo reposo. Con la consola apagada, no se
                            descarga. 🔴
                        </p>
                        <li>Volver a la pantalla principal.</li>
                        <li>Dirigirse a &quot;Ajustes&quot; o &quot;Configuración&quot;. (Signo de la maleta o caja con
                            manija)
                        </li>
                        <li>Seleccionar &quot;Usuarios y cuentas&quot;.</li>
                        <li>Seleccionar &quot;Otros&quot;.</li>
                        <li>Seleccionar &quot;Uso compartido de consola y juego offline&quot;.</li>
                        <li>Seleccionar &quot;Activar&quot;</li>
                        <li>Una vez activado, volver al menú seleccionar &quot;Restaurar licencias&quot;.</li>
                        <li>
                            Seleccionar &quot;Restaurar&quot; y esperar. (no se borra ningún dato ni nada). Una vez
                            finalizado, seleccionamos &quot;Aceptar&quot;.
                        </li>
                        <li>Seleccionar &quot;Cerrar sesión&quot;</li>
                        <li>Ahora debe volver a su usuario personal y esperar a la finalización de la descarga</li>
                        <li>¡A divertirse!</li>
                    </ol>
                </AccordionContent>
            </AccordionItem>
            <SacarCandado_PS5/>
        </Accordion>
        <GraciasPorConfiar/>
        <BtnCopiarInstructivo data={insPlusPs5}/>
    </section>)
}

// Componentes
const SacarCandado_PS5 = () => {
    return (<AccordionItem value='unlock' className='bg-gray-200 rounded-xl border border-cyan-800 px-4'>
        <AccordionTrigger>
            <p className={'flex gap-2 items-center'}>
                ¿Cómo Quitar el Candado? <Lock className={'h-4 w-4'}/>
            </p>
        </AccordionTrigger>
        <AccordionContent className='text-cyan-800'>
            <p className='mb-2'>
                En caso de aparición del mismo o de la leyenda
                <span className={'font-semibold italic px-1'}>&quot;No se puede usar el contenido&quot;</span>
                al intentar abrir el juego, realizar los siguientes pasos:
            </p>
            <ol className='list-decimal pl-5 space-y-2'>
                <li>Dirigirse al usuario enviado (el del juego que se le envió).</li>
                <li>Dirigirse a &quot;Configuración&quot; o &quot;Ajustes&quot;</li>
                <li>Seleccionar &quot;Usuarios y cuentas y/o Gestión de cuentas&quot; (depende el idioma).</li>
                <li>Seleccionar &quot;Otros&quot;.</li>
                <li>Seleccionar &quot;Uso compartido de consola y juego offline&quot;.</li>
                <li>Seleccionar &quot;Activar&quot;.</li>

                <li>Una vez activado, volver al menú seleccionar &quot;Restaurar licencias&quot;.</li>
                <li>Seleccionar &quot;Restaurar&quot; y esperar. (no se borra ningún dato ni nada). Una vez
                    finalizado, seleccionamos &quot;Aceptar&quot;.
                </li>
                <li>Seleccionar &quot;Cerrar sesión&quot;</li>

                <li>Volver a su usuario personal y jugar.</li>
            </ol>
        </AccordionContent>
    </AccordionItem>)
}

const GraciasPorConfiar = () => {
    return (<Alert className='mt-6 bg-green-900 border-green-700 text-white'>
        <CheckCircle className='h-4 w-4'/>
        <AlertTitle>¡Gracias por confiar en Garret Games!</AlertTitle>
        <AlertDescription>¡Que disfrute su juego!</AlertDescription>
    </Alert>)
}

const AlertaLeerTodo = () => {
    return (<Alert variant='destructive' className='mb-4 bg-red-900 border-red-700 text-white'>
        <AlertTriangle className='h-4 w-4'/>
        <AlertTitle>Atención</AlertTitle>
        <AlertDescription>¡Lea todo el instructivo!</AlertDescription>
    </Alert>)
}

const AlertaQR = () => {
    return (<Alert className='mb-4 bg-blue-300 border-blue-700'>
        <Info className='h-4 w-4'/>
        <AlertTitle>Importante</AlertTitle>
        <AlertDescription>NO iniciar sesión ESCANEANDO código QR.</AlertDescription>
    </Alert>)
}

const AlertaJugarDesdeUsuarioEnviado = () => {
    return (<Alert className='mb-4 bg-yellow-300 border-yellow-700 text-dark'>
        <AlertTriangle className='h-4 w-4'/>
        <AlertTitle>Advertencia</AlertTitle>
        <AlertDescription>
            Debe
            <span className={'font-semibold px-1'}>JUGAR SIEMPRE DESDE EL USUARIO QUE LE ENVIAMOS.</span>
            Caso contrario se anula la garantía
            sin derecho a reclamo.
        </AlertDescription>
    </Alert>)
}

const CondicionesDeUso = () => {
    return (<Card className='mb-4 border-gray-700'>
        <CardHeader>
            <CardTitle>Condiciones de uso</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className='list-disc pl-5 space-y-2'>
                <li>Respetar las mayúsculas y minúsculas al escribir la contraseña o el código de
                    verificación.
                </li>
                <li className={'font-semibold'}>NO ingresar a la cuenta desde ningún dispositivo o navegador
                    externo.
                </li>
                <li className={'font-semibold'}>NO compartir la cuenta con nadie NI tampoco colocarla en otra
                    consola.
                </li>
                <li className={'font-semibold'}>NO cambiar ningún dato de la cuenta, tal como nombre,
                    contraseña, correo, etc.
                </li>
                <li>Una vez instalado, NO colocar la cuenta en otra consola.</li>
                <li>NO hacer compras en la cuenta de juegos/adicionales/packs con costo alguno.</li>
                <li>Solo se debe descargar los juegos/adicionales/packs correspondientes al JUEGO ADQUIRIDO.
                </li>
                <li>NO borrar la cuenta brindada, si lo hace el juego se bloquea automáticamente.</li>
                <li>
                    En caso de mantenimiento por parte de Sony pueden ocurrir fallos o bugs en las cuentas.
                    Estos mismos
                    serán resueltos automáticamente cuando termine dicho mantenimiento.
                </li>
                <li>NO está permitida la reventa una vez instalado el juego.</li>
                <li>La garantía estará dada, siempre y cuando, sea posible realizar las cuentas.</li>
                <li>
                    Si no presenta ningún tipo de queja durante las primeras 24 horas, damos por hecho que usted
                    acepta las
                    CONDICIONES DE USO.
                </li>
            </ul>
        </CardContent>
    </Card>)
}

const AlertaRespetarCondicionesDeUso = () => {
    return (<Alert variant='destructive' className='mb-4 bg-red-900 border-red-700 text-white'>
        <AlertTriangle className='h-4 w-4'/>
        <AlertTitle>Advertencia</AlertTitle>
        <AlertDescription>
            En caso de no respetar las condiciones de uso, se pierde la garantía del juego, quedando sin acceso
            a la
            cuenta permanentemente (sin reembolso).
        </AlertDescription>
    </Alert>)
}
