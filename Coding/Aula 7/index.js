function executar(evento){
    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#erro-email");
    if (nome === ""){
        errornome. textContent = "Campo obrigatório";
        errornome.classList.remove("oculto");
        errornome.classList.add("erro");
    }

    const idade = document.querySelector("#idade").value;
    const erroIdade = document.querySelector("#erro-idade");
    if (idade === ""){
        erroIdade.textContent = "Campo obrigatório";
        erroIdade.classList.remove("oculto");
        erroIdade.classList.add("erro");
    } else if (idade < 18){
        erroIdade.textContent = "Você precisa ser maior de idade";
        erroIdade.classList.remove("oculto");
        erroIdade.classList.add("erro");

        const termos = document.querySelector("#termos");
        const erroTermos = document.querySelector("#erro-termos");
        if (!termos.checked){
            erroTermos.textContent = "Você precisa aceitar os termos";
            erroTermos.classList.remove("oculto");
            erroTermos.classList.add("erro");
        }
    }
}

function limparForm(){
  document.getSelectorall("error").forEach((item) => {
    item.classList.add("oculto");
    item.classList.remove("erro");
});
}