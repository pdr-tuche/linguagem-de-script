function criar (param1,param2 = 'Texto'){
    let linha = `<ul>
    ${`<li>${param2}</li>\n`.repeat(param1)}
</ul>`;
    return linha;
}


console.log(criar(3));