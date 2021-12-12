try {

    alert("Digite 'OK' durante a contagem!!");

    let preparar = prompt("Preparar....").toUpperCase();

    if (preparar != "OK") {
        throw new error(erro);
    }

    let apontar = prompt("Apontar...").toUpperCase();

    if (apontar != "OK") {
        throw new error(erro);
    }

    let fogo = alert("**FOGOOO**");
}

catch (erro) {
    alert("Atenção!! O valor de entrada não está no formato correto.");
}