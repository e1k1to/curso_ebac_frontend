$(document).ready(function() {

    $('form').submit(function(e) {
        e.preventDefault();
        const texto = $('#input-tarefa').val();
        const tarefaNova = $(`<li>${texto}</li>`);
        tarefaNova.appendTo($("ul"))
        $("#input-tarefa").val("");
    })

    $("ul").on("click", "li", function(e) {
        e.preventDefault();
        $(this).addClass("marcador-feito");
    })
})