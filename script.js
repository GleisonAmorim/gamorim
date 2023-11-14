function enviarWhatsApp() {
    // Substitua o número abaixo pelo seu número no formato internacional
    var numeroWhatsApp = "55016991659459";

    // Coleta os valores dos campos de formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    // Monta a mensagem formatada com quebras de linha
    var mensagemFormatada = " Nome: " + nome + "\nEmail: " + email + "\nAssunto: " + assunto + "\n\n Mensagem: " + mensagem;

    // Substitui espaços em branco por caracteres mais amigáveis
    mensagemFormatada = mensagemFormatada.replace(/ /g, "");

    // Monta o link do WhatsApp
    var linkWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagemFormatada);

    // Abre o link no navegador para iniciar a conversa no WhatsApp
    window.open(linkWhatsApp, "_blank");

    // Exibe um popup de confirmação
    alert("Mensagem enviada para o WhatsApp!");
}
