$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')
    $('#cpf').mask('000.000.000-00')

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            cpf:{
                required:true
            },
            cep:{
                required:true
            },
            rua:{
                required:true
            },
            bairro:{
                required:true
            },
            numero:{
                required:true
            },
            cidade:{
                required:true
            },
            estado:{
                required:true
            }
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }, //limpa após concluir
        submitHandler: function(form) {
            alert('Enviado com sucesso')
            $('form input').val('');
            $('form textarea').val('');
        }
    })
})