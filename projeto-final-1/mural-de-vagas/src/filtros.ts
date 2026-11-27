import type { Filtros, Vaga } from "./tipos";

function normalizar(texto: string): string {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

export function aplicarFiltros(
    vagas: Vaga[],
    filtros: Filtros,
    favoritos: number[]
): Vaga[] {
    return vagas.filter(vaga => {
        const termo = normalizar(filtros.busca);

        const correspondeBusca =
            normalizar(vaga.titulo).includes(termo) ||
            normalizar(vaga.empresa).includes(termo);

        const correspondeArea =
            filtros.area === "todas" ||
            vaga.area === filtros.area;

        const correspondeModalidade =
            filtros.modalidade === "todas" ||
            vaga.modalidade === filtros.modalidade;

        const correspondeFavorito =
            !filtros.soFavoritos ||
            favoritos.includes(vaga.id);

        return (
            correspondeBusca &&
            correspondeArea &&
            correspondeModalidade &&
            correspondeFavorito
        );
    });
}
