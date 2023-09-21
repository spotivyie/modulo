$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault()
        const inserirTarefa = $('#tarefa').val()
        $(`<li>${inserirTarefa}</li>`).appendTo('ul');
        $(novoItem).appendTo(li).click()
    })
        
    $('ul').on('click','li',function(){
        event.target.style.textDecoration = 'line-through';
    })
})