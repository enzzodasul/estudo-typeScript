import { carregarVagas } from './api.ts'
import { renderizarLista } from './render.ts'
import { aplicarFiltros } from './filtros.ts'
import { obterFavoritos, alternarFavorito } from './favoritos.ts'

import type { Filtros } from './tipos'
import { AREAS } from './tipos'

// ============================================
// ELEMENTOS HTML
// ============================================

function obterElemento<T extends Element>(seletor: string): T {
    const elemento = document.querySelector<T>(seletor)

    if (!elemento) {
        throw new Error(`Elemento HTML não encontrado: ${seletor}`)
    }

    return elemento
}

const lista = obterElemento<HTMLElement>('#lista')
const status = obterElemento<HTMLParagraphElement>('#status')
const busca = obterElemento<HTMLInputElement>('#busca')
const filtroArea = obterElemento<HTMLSelectElement>('#filtro-area')
const filtroModalidade = obterElemento<HTMLSelectElement>('#filtro-modalidade')
const soFavoritos = obterElemento<HTMLInputElement>('#so-favoritos')
const contadores = obterElemento<HTMLElement>('#contadores')

// ============================================
// ESTADO DA APLICAÇÃO
// ============================================

let vagasCarregadas: Awaited<ReturnType<typeof carregarVagas>> = []

const filtros: Filtros = {
    busca: '',
    area: 'todas',
    modalidade: 'todas',
    soFavoritos: false
}

// ============================================
// CONTADORES DE VAGAS
// ============================================

function renderizarContadores(): void {
    contadores.innerHTML = AREAS.map((area) => {
        const quantidade = vagasCarregadas.filter((vaga) => vaga.area === area).length

        return `
            <span class="contador">
                ${area}: <strong>${quantidade}</strong>
            </span>
        `
    }).join('')
}

// ============================================
// ATUALIZAR INTERFACE
// ============================================

function atualizarTela(): void {
    const favoritos = obterFavoritos()

    const vagasFiltradas = aplicarFiltros(vagasCarregadas, filtros, favoritos)

    status.textContent = `${vagasFiltradas.length} de ${vagasCarregadas.length} vagas`

    renderizarLista(lista, vagasFiltradas, (id) => favoritos.includes(id))
}

// ============================================
// EVENTOS DOS FILTROS
// ============================================

busca.addEventListener('input', () => {
    filtros.busca = busca.value
    atualizarTela()
})

filtroArea.addEventListener('change', () => {
    filtros.area = filtroArea.value as Filtros['area']
    atualizarTela()
})

filtroModalidade.addEventListener('change', () => {
    filtros.modalidade = filtroModalidade.value as Filtros['modalidade']
    atualizarTela()
})

soFavoritos.addEventListener('change', () => {
    filtros.soFavoritos = soFavoritos.checked
    atualizarTela()
})

// ============================================
// EVENTOS DOS FAVORITOS
// ============================================

lista.addEventListener('click', (evento: MouseEvent) => {
    const alvo = evento.target

    if (!(alvo instanceof Element)) {
        return
    }

    const botao = alvo.closest<HTMLButtonElement>('.btn-favorito')

    if (!botao) {
        return
    }

    const id = Number(botao.dataset.id)

    if (!Number.isFinite(id)) {
        return
    }

    alternarFavorito(id)

    atualizarTela()
})

// ============================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ============================================

async function iniciar(): Promise<void> {
    status.textContent = 'Carregando vagas...'

    try {
        vagasCarregadas = await carregarVagas()

        renderizarContadores()

        atualizarTela()
    } catch (erro: unknown) {
        status.textContent = erro instanceof Error ? erro.message : 'Erro ao carregar vagas.'

        console.error('Erro na aplicação:', erro)
    }
}

// Executa a aplicação
iniciar()
