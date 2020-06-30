function SenhaYasmin() {
    var pass = prompt("Do que sua lindíssima irmã te chamava quando era criança?","");
    if (pass.toLowerCase() == "tila" || pass.toLowerCase() == "tila " || pass.toLowerCase() == " tila" || pass.toLowerCase() == " tila " || pass.toLowerCase() == "tíla" || pass.toLowerCase() == "tíla " || pass.toLowerCase() == " tíla" || pass.toLowerCase() == " tíla ") {
        window.location = "videoyasmin.html";
    } else if (pass.toLowerCase() == "siri" || pass.toLowerCase() == "siri " || pass.toLowerCase() == " siri" || pass.toLowerCase() == " siri ") {
        alert("Hey Siri");
        SenhaYasmin();
    } else if (pass.toLowerCase() == "sirí" || pass.toLowerCase() == "sirí " || pass.toLowerCase() == " sirí" || pass.toLowerCase() == "sirí cascudo"|| pass.toLowerCase() == " sirí cascudo" || pass.toLowerCase() == "sirí cascudo " || pass.toLowerCase() == " sirí cascudo " || pass.toLowerCase() == "siri cascudo"|| pass.toLowerCase() == " siri cascudo" || pass.toLowerCase() == "siri cascudo " || pass.toLowerCase() == " siri cascudo "){
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