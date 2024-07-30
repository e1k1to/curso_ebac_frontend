var form = document.getElementById('form-teste');

function validaBA(campoA,campoB) {
    return campoB > campoA;
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    cA = document.querySelector('#campoA').value
    cB = document.querySelector('#campoB').value

    bMaiorQueA = validaBA(cA,cB)

    if (bMaiorQueA) {
        alert("Sucesso, o número do campo B é maior que o número do campo A.")
    }
    else {
        alert("Erro, o número do campo A é maior ou igual ao número do campo B")
    }

})