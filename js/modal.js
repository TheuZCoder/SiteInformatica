$(document).ready(function() {
    $('.btn-comprar').on('click', function() {
        var targetModal = $(this).data('target');
        var nome = $(this).data('nome');
        var preco = $(this).data('preco');
        var imagem = $(this).data('imagem');

        // Atualizar o conteúdo do modal com base nos atributos de dados
        $(targetModal).find('.modal-nome').text(nome);
        $(targetModal).find('.modal-preco').text(preco);
        $(targetModal).find('.modal-imagem').attr('src', imagem);

        // Abrir o modal correspondente
        $(targetModal).modal('show');
    });
});
