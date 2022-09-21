function aplicarDesconto(valor,desconto){
    if(desconto > valor) return 0
    return valor - desconto
}
function aplicarDescontoTest(){
    return aplicarDesconto(10,2) == 8
}
console.log('A plicaçao de desconto estar funcionando?')
console.log(aplicarDescontoTest())