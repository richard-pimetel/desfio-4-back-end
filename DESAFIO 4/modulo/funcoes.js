
const estadoCidade = require('./estados_cidades.js');

const getListaDeEstados = function() {    //corrigir formatacao
    let siglaEstados = []
        estadoCidade.listaDeEstados.estados.forEach(function(estados) {
            siglaEstados.push(estados.sigla)
    })   
    return{
        uf: siglaEstados,
        quantidade: siglaEstados.length
    }
}

const getDadosDeEstado=function(sigla){
    let dadosEstados=[]

    estadoCidade.listaDeEstados.estados.forEach(function(dados){
        if(String(dados.sigla).toUpperCase()==sigla.toUpperCase()){
            dadosEstados={
                uf: dados.sigla,
                descricao: dados.nome,
                capital: dados.capital,
                regiao: dados.regiao
            }
        }
    })
     return dadosEstados || false
}

const getCapitalEstado=function(sigla){
    let capitaisEstados=[]

    estadoCidade.listaDeEstados.estados.forEach(function(dados){
        if(String(dados.sigla).toUpperCase()==sigla.toUpperCase()){
            capitaisEstados={
                uf: dados.sigla,
                descricao: dados.nome,
                capital: dados.capital
            }
        }
    })
    return capitaisEstados || false
}

const getEstadosRegiao=function(regiao){
    let EstadosRegioes={
        regiao: regiao,
        estado: []
    }
        estadoCidade.listaDeEstados.estados.forEach(function(estado) {
            if(String(estado.regiao).toUpperCase()==regiao.toUpperCase()){
                EstadosRegioes.estado.push({
                    uf: estado.sigla, descricao: estado.nome
                })
                                                
            }
    })
    return EstadosRegioes || false
}


console.log(getEstadosRegiao('Nordeste'))

//console.log(getCapitalEstado('sp'))

//console.log(getDadosDeEstado('SP'))

//console.log(getListaDeEstados())