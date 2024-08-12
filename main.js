const form = document.getElementById("form-comparacao");
const mensagem = document.getElementById("success-message");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA){
        mensagem.textContent = "O número B é maior que o número A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "O número B deve ser maior que o A.";
        mensagem.style.color = "red";
    }
})