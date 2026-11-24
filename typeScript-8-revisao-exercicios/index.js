//Veiculo
//Automovel = funçao 'Abrir-porta-mala' retorna texto 'porta-malas-aberto'
//Aeronave = funcao 'contatar-central' retorna texto ' central na linha'
class Veiculo {
    Modelo;
    Combustivel;
    qtdpassageiros;
}
class Automovel extends Veiculo {
    eFlex;
    qtdAgua;
    sit4rodas;
    abrirportamalas() {
        console.log('port amalas aberto');
    }
}
class Aeronave extends Veiculo {
    sithelice;
    qtdaeromocas;
    sittdp;
    contatarcentral() {
        console.log('Central na linha! ');
    }
}
export {};
