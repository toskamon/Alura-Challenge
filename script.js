function encryptText() {
    let inputText = document.querySelector(".encriptar").value;
    if (!inputText.match(/^[a-z\s]*$/)) {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos.");
        return;
    }

    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    updateCard(encryptedText);
}

function decryptText() {
    let inputText = document.querySelector(".encriptar").value;
    if (!inputText.match(/^[a-z\s]*$/)) {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos.");
        return;
    }

    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    updateCard(decryptedText);
}

function updateCard(text) {
    const errorImage = document.querySelector(".error");
    const resultTextArea = document.querySelector(".evaluar");
    const textOne = document.querySelector(".texto-uno");
    const textTwo = document.querySelector(".texto-dos");
    const copyButton = document.querySelector(".btn-copiar");

    if (text.length > 0) {
        errorImage.style.display = "none";
        textOne.style.display = "none";
        textTwo.style.display = "none";
        
        resultTextArea.value = text;
        resultTextArea.classList.remove("hidden");
        copyButton.classList.remove("hidden");
    } else {
        errorImage.style.display = "block";
        textOne.style.display = "block";
        textTwo.style.display = "block";

        resultTextArea.value = "";
        resultTextArea.classList.add("hidden");
        copyButton.classList.add("hidden");
    }
}

function copyText() {
    const resultTextArea = document.querySelector(".evaluar");
    
    resultTextArea.select(); 
    resultTextArea.setSelectionRange(0, 99999); 
    
    document.execCommand("copy");
}