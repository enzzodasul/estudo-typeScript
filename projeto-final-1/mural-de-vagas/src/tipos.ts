export type Area =
    | "Frontend"
    | "Backend"
    | "Data Science"
    | "FullStack";

export type Modalidade =
    | "remota"
    | "presencial"
    | "híbrida";

export interface Vaga {
    readonly id: number;
    titulo: string;
    empresa: string;
    area: Area;
    modalidade: Modalidade;
    salario?: number;
    publicadaEm: string;
}

export type Filtros = {
    busca: string;
    area: Area | "todas";
    modalidade: Modalidade | "todas";
    soFavoritos: boolean;
};

export const AREAS: Area[] = [
    "Frontend",
    "Backend",
    "Data Science",
    "FullStack"
];
