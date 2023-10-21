function simular() {
    let valorInicial = Number(document.getElementById('valorApp').value)
    let aporte = Number(document.getElementById('aporteMensal').value);
    let prazo = Number(document.getElementById('prazo').value);
    let medida = document.querySelector('select').value;
    let juros = Number(document.getElementById('juros').value);
    let valorFinal = valorInicial;
    if (medida == "1") {
        for (let i = 0; i < prazo; i++) {
            valorFinal += valorFinal * (juros / 100);
            valorFinal += aporte;
        }
    }
    else {
        prazo *= 12;
        for (let i = 0; i < prazo; i++) {
            valorFinal += valorFinal * (juros / 100);
            valorFinal += aporte;
        }
    }
    document.getElementById('resultado').innerHTML = 'R$' + valorFinal.toFixed(2).replace('.',',')
}