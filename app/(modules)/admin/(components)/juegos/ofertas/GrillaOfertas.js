import OfertaCard from "@/components/page-components/admin/ofertas/OfertaCard";


function GrillaOfertas({ofertas}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ofertas.data.map((oferta) => (<OfertaCard oferta={oferta} key={oferta.id}/>))}
        </div>
    )
}

export default GrillaOfertas;