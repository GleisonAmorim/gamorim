function enviarWhatsApp() {
    // Substitua o número abaixo pelo seu número no formato internacional
    var numeroWhatsApp = "55016991659459";

    // Coleta os valores dos campos de formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    // Monta a mensagem formatada com quebras de linha
    var mensagemFormatada = "Nome: " + nome + "\nEmail: " + email + "\nAssunto: " + assunto + "\nMensagem: " + mensagem;

    // Substitui espaços em branco por caracteres mais amigáveis
    mensagemFormatada = mensagemFormatada.replace(/ /g, "");

    // Codifica a mensagem para o formato de URI
    mensagemFormatada = encodeURIComponent(mensagemFormatada);

    // Monta o link do WhatsApp
    var linkWhatsApp = "https://wa.me/55016991659459" + numeroWhatsApp + "?text=" + mensagemFormatada;

    // Abre o link no navegador para iniciar a conversa no WhatsApp
    window.open(linkWhatsApp, "_blank");
    document.querySelector('a[href="#tipos-sites"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('tipos-sites').scrollIntoView({
            behavior: 'smooth'
        });
    });


}
