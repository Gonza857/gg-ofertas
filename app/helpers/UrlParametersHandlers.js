class UrlParametersHandlers {
    static obtenerParametros (arrayStringParametros, req) {
        const {searchParams} = new URL(req.url);
        const parametros = {}
        arrayStringParametros.forEach((p)=>{
            parametros[p] = searchParams.get(p)
        })
        return parametros
    }
}

export default UrlParametersHandlers;