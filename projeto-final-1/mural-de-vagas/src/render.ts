import type { Modalidade, Vaga } from "./tipos";

const MODALIDADES: Record<Modalidade, string> = {
    remota: "Remota",
    presencial: "Presencial",
    "híbrida": "Híbrida"
};

export function formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function formatarData(data: string): string {
    const [ano, mes, dia] = data.split("-").map(Number);

    const publicada = new Date(ano, mes - 1, dia);
    const hoje = new Date();

    hoje.setHours(0, 0, 0, 0);

    const dias = Math.floor(
        (hoje.getTime() - publicada.getTime()) / 86400000
    );

    if (dias < 0) return "Publicação futura";
    if (dias === 0) return "Publicada hoje";

    return `Publicada há ${dias} ${dias === 1 ? "dia" : "dias"}`;
}

export function cardVaga(
    vaga: Vaga,
    favorita: boolean
): string {
    const salario = vaga.salario !== undefined
        ? formatarMoeda(vaga.salario)
        : "Salário a combinar";

    return `
        <article class="card-vaga">

            <div class="card-topo">
                <h3>${vaga.titulo}</h3>

                <button
                    class="btn-favorito"
                    data-id="${vaga.id}"
                    aria-label="${favorita ? "Remover dos favoritos" : "Adicionar aos favoritos"}"
                    aria-pressed="${favorita}"
                    title="${favorita ? "Remover favorito" : "Adicionar favorito"}"
                >
                    ${favorita ? "★" : "☆"}
                </button>
            </div>

            <p class="empresa">${vaga.empresa}</p>

            <div class="etiquetas">
                <span class="etiqueta area-${vaga.area.toLowerCase().replace(" ", "-")}">
                    ${vaga.area}
                </span>

                <span class="etiqueta modalidade">
                    ${MODALIDADES[vaga.modalidade]}
                </span>
            </div>

            <p class="salario">${salario}</p>

            <p class="data-vaga">
                ${formatarData(vaga.publicadaEm)}
            </p>

        </article>
    `;
}

export function renderizarLista(
    lista: HTMLElement,
    vagas: Vaga[],
    verificarFavorito: (id: number) => boolean
): void {
    if (vagas.length === 0) {
        lista.innerHTML = `
            <div class="sem-vagas">
                <span>🔎</span>
                <h3>Nenhuma vaga encontrada</h3>
                <p>Tente alterar os filtros da sua pesquisa.</p>
            </div>
        `;
        return;
    }

    lista.innerHTML = vagas
        .map(vaga => cardVaga(vaga, verificarFavorito(vaga.id)))
        .join("");
}
