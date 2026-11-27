const CHAVE_FAVORITOS = "mural-vagas-favoritos";

export function obterFavoritos(): number[] {
    try {
        const dados = localStorage.getItem(CHAVE_FAVORITOS);

        if (!dados) return [];

        const ids: unknown = JSON.parse(dados);

        return Array.isArray(ids)
            ? ids.filter((id): id is number => typeof id === "number")
            : [];
    } catch {
        return [];
    }
}

export function alternarFavorito(id: number): number[] {
    const favoritos = obterFavoritos();

    const atualizados = favoritos.includes(id)
        ? favoritos.filter(item => item !== id)
        : [...favoritos, id];

    localStorage.setItem(
        CHAVE_FAVORITOS,
        JSON.stringify(atualizados)
    );

    return atualizados;
}
