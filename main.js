$(document).ready(function() {

    $('form').submit(function(e) {
        e.preventDefault();
        const texto = $('#input-tarefa').val();
        const tarefaNova = $("<li></li>");
        novatf = $(`<a href="#" id="elem-clicavel"> ${texto} </a>`)
        novatf.appendTo(tarefaNova);
        tarefaNova.appendTo($("ul"))
        $("#input-tarefa").val("");
    })

    $("ul").on("click", "a", function(e) {
        e.preventDefault();
        $(this).addClass("marcador-feito");
    })
})