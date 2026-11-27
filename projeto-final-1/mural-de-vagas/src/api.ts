import type { Vaga } from './tipos.ts'

export async function buscarJson<T>(url: string): Promise<T> {
    const resposta = await fetch(url)

    if (!resposta.ok) {
        throw new Error(`Erro ${resposta.status} ao carregar ${url}`)
    }

    return (await resposta.json()) as T
}

export function carregarVagas(): Promise<Vaga[]> {
    return buscarJson<Vaga[]>('/vagas.json')
}
