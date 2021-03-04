function tipo (lado1,lado2,lado3){
    //falta implementar o calculo da area para que seja calculado corretamento o 'none'
    //assim, comparando se a soma dos lados for menor que 180 apareça 'none'.
    if(lado1 === lado2 && lado2 === lado3){
        return 'triangulo equilatero';
    }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        return 'triangulo isoceles';
    }else if(lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
        return 'triangulo escaleno';
    }else{
        return 'none';
    }
}

export default tipo;