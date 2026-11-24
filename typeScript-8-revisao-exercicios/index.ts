//Veiculo
//Automovel = funçao 'Abrir-porta-mala' retorna texto 'porta-malas-aberto'
//Aeronave = funcao 'contatar-central' retorna texto ' central na linha'

export {}

class Veiculo {
    Modelo!: string
    Combustivel!: number
    qtdpassageiros!: number
}
class Automovel extends Veiculo {
    eFlex!: boolean
    qtdAgua!: number
    sit4rodas!: string[]
    abrirportamalas(): void {
        console.log('port amalas aberto')
    }
}
class Aeronave extends Veiculo {
    sithelice!: string
    qtdaeromocas!: number
    sittdp!: string
    contatarcentral(): void {
        console.log('Central na linha! ')
    }
}
