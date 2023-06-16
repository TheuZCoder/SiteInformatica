$(document).ready(function() {
    $('.btn-comprar').on('click', function() {
        var targetModal = $(this).data('target');
        var dadosModal = $(this).data();

        // Atualizar o conteúdo do modal com base nos atributos de dados
        $.each(dadosModal, function(key, value) {
            $(targetModal).find('.modal-' + key).text(value);
        });

        // Abrir o modal correspondente
        $(targetModal).modal('show');
    });
});