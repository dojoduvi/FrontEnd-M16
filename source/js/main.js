$(document).ready(function(){
    $('#txtFone').mask('(00) 00000-0000',{
        placeholder: '(__) _____-____'

    })

    $('#frmContato').validate({
        rules: {
            txtNome: {
                required: true
            },
            txtEmail: {
                required: true,
                email: true
            },
            txtFone: {
                required: true
            },
            txtMensagem: {
                required: true
            }
        },
        messages: {
            txtNome: 'Nome obrigatório!',
            txtFone: 'Telefone é obrigatório!',
            txtEmail: 'E-mail é obrigatório!',
            txtMensagem: 'Você precisa digitar uma mensagem!'
        },
        submitHandler: function(form){
            alert('Mensagem enviada com sucesso!');

            txtNome.value = '';
            txtEmail.value = '';
            txtFone.value = '';
            txtMensagem.value = '';
        },
        invalidHandler: function(e,validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem "${camposIncorretos}" campos incorretos! Por favor, corrija antes de prosseguir.`);
            }
        }
    })
});