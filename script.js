function SenhaYasmin() {
    var pass = prompt("Do que sua lindíssima irmã te chamava quando era criança?\n(Responda apenas um apelido por vez)", "");
    if (pass.toLowerCase() == "tila" || pass.toLowerCase() == "tila " || pass.toLowerCase() == " tila" || pass.toLowerCase() == " tila " || pass.toLowerCase() == "tíla" || pass.toLowerCase() == "tíla " || pass.toLowerCase() == " tíla" || pass.toLowerCase() == " tíla ") {
        window.location = "videoyasmin.html";
    } else if (pass.toLowerCase() == "siri" || pass.toLowerCase() == "siri " || pass.toLowerCase() == " siri" || pass.toLowerCase() == " siri ") {
        alert("Hey Siri");
        SenhaYasmin();
    } else if (pass.toLowerCase() == "sirí" || pass.toLowerCase() == "sirí " || pass.toLowerCase() == " sirí" || pass.toLowerCase() == "sirí cascudo" || pass.toLowerCase() == " sirí cascudo" || pass.toLowerCase() == "sirí cascudo " || pass.toLowerCase() == " sirí cascudo " || pass.toLowerCase() == "siri cascudo" || pass.toLowerCase() == " siri cascudo" || pass.toLowerCase() == "siri cascudo " || pass.toLowerCase() == " siri cascudo ") {
        alert("🦀");
        SenhaYasmin();
    } else if (pass.toLowerCase() == "bagre" || pass.toLowerCase() == "bagre " || pass.toLowerCase() == " bagre" || pass.toLowerCase() == " bagre ") {
        alert("Humm... Não");
        SenhaYasmin();
    }
    else {
        alert("longe ainda!");
        SenhaYasmin();
    }
}

var contLuana = 0;

function SenhaLuana() {
    var pass = prompt("Que dia e mês sua lindíssima cunhada Paula nasceu ?\n(Responda separando os numeros com barra Ex: 02/07)");
    if (pass.toLowerCase() == "08/02" || pass.toLowerCase() == "08/02 " || pass.toLowerCase() == " 08/02" || pass.toLowerCase() == " 08/02 " || pass.toLowerCase() == "8/2" || pass.toLowerCase() == "8/2 " || pass.toLowerCase() == " 8/2" || pass.toLowerCase() == " 8/2 " || pass.toLowerCase() == "0802" || pass.toLowerCase() == "0802 " || pass.toLowerCase() == " 0802" || pass.toLowerCase() == " 0802 ") {
        window.location = "videoluana.html";
    } else if (contLuana == 0) {
        contLuana = contLuana + 1;
        alert("Humm.. Um pouco longe!\n" + (contLuana) + " Tentativa");
        SenhaLuana();
    } else if (contLuana == 1) {
        contLuana = contLuana + 1;
        alert("Eita!\n" + (contLuana) + " Tentativas");
        SenhaLuana();
    } else if (contLuana == 2) {
        contLuana = contLuana + 1;
        alert("Uma dica:\né perto do carnaval\n" + (contLuana) + " Tentativas");
        SenhaLuana();
    } else if (contLuana == 3) {
        contLuana = contLuana + 1;
        alert("Não vale pesquisar!\n" + (contLuana) + " Tentativas");
        SenhaLuana();
    } else if (contLuana == 4) {
        contLuana = contLuana + 1;
        alert("Acho que você ja acertou até aqui, então nem vou me preocupar com oq esta escrito\n" + (contLuana) + " Tentativas");
        SenhaLuana();
    } else if (contLuana == 5) {
        contLuana = contLuana + 1;
        alert("Ah, Feliz aniversario!\n" + (contLuana) + " Tentativas");
        SenhaLuana();
    } else if (contLuana == 6) {
        contLuana = contLuana + 1;
        alert("Na proxima eu falo\n" + (contLuana) + " Tentativas");
        SenhaLuana();
    } else if (contLuana == 7) {
        contLuana = contLuana + 1;
        alert("Vou falar então\n" + (contLuana) + " Tentativas");
        SenhaLuana();
    } else if (contLuana == 8) {
        contLuana = contLuana + 1;
        alert("É dia 08/02\n" + (contLuana) + " Tentativas");
        SenhaLuana();
    } else {
        alert("Tente novamente!");
        SenhaLuana();
    }
}