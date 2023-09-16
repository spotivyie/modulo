const form = document.getElementById('form-deposito');
let formEValido = true;

function validaCampo (campob, campoa) {
    if (validaCampo === campob > campoa){
        return false;
    } else{
        return true;
}}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const campoB = document.getElementById('campo-b');
    const campoA = document.getElementById('campo-a');
    const mensagemSucesso = `O campo B=${campoB.value} é maior que o campo A=${campoA.value}`;

    formEValido = validaCampo(campoB>campoA.value);
    if (!formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        campoB.value = '';
        campoA.value = '';
    } else{
        campoB.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
})

campoB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaCampo(e.target.value);
    if (!formEValido){
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else{
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
