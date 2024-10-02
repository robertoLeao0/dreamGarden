// Abrir o modal de login e o overlay
document.getElementById('btnEntrar').addEventListener('click', () => {
    document.getElementsByClassName('modalLogin')[0].style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block'; 
    document.body.classList.add('no-scroll');
});

// Fechar o modal de login e o overlay
document.getElementById('btnFecharModal').addEventListener('click', () => {
    document.getElementsByClassName('modalLogin')[0].style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none'; 
    document.body.classList.remove('no-scroll');
});

// Abrir o modal de cadastro ao clicar em "Não tenho conta"
document.querySelector('.naoTenhoConta a').addEventListener('click', (event) => {
    event.preventDefault(); // Evitar o comportamento padrão do link
    document.getElementById('modalCadastro').style.display = 'block'; // Exibe o modal de cadastro
    document.getElementById('modalOverlay').style.display = 'block'; // Exibe o overlay
    document.body.classList.add('no-scroll'); // Desabilita o scroll da página
    document.getElementsByClassName('modalLogin')[0].style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none'; 
    document.body.classList.remove('no-scroll');
});

// Fechar o modal de cadastro e o overlay
document.getElementById('btnFecharModalCadastro').addEventListener('click', () => {
    document.getElementById('modalCadastro').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
    document.body.classList.remove('no-scroll');
});

// Armazenar dados no Local Storage ao clicar em "Cadastrar"
document.getElementById('btnCadastrarModal').addEventListener('click', () => {
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const pais = document.getElementById('pais').value;

    // Recuperar a lista de usuários existente ou criar uma nova lista
    const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Criar um novo objeto de usuário
    const novoUsuario = {
        nomeCompleto,
        email,
        senha,
        cep,
        rua,
        cidade,
        estado,
        pais
    };

    // Adicionar o novo usuário à lista
    usuariosExistentes.push(novoUsuario);

    // Armazenar a lista de usuários no Local Storage
    localStorage.setItem('usuarios', JSON.stringify(usuariosExistentes));

    // Fechar o modal de cadastro e o overlay
    document.getElementById('modalCadastro').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
    document.body.classList.remove('no-scroll');

    // Limpar os campos do formulário
    document.getElementById('nomeCompleto').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('confirmarSenha').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('pais').value = '';
});




// contato

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modalContatoContent");
    const btn = document.getElementById("modalContato");
    const closeBtn = modal.querySelector('.close');
    const form = modal.querySelector('form');

    // Abre o modal ao clicar no botão
    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "flex"; // Usa flexbox para centralizar
        document.body.style.overflow = "hidden"; // Desabilita scroll
    }

    // Fecha o modal ao clicar no botão "x"
    closeBtn.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Restaura scroll
    }

    // Fecha o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = ""; // Restaura scroll
        }
    }

    // Envio do formulário
    form.onsubmit = function(event) {
        event.preventDefault();
        alert(`${form.querySelector('h2').innerText} enviado!`);
        modal.style.display = "none"; // Fecha o modal após o envio
        form.reset(); // Reseta o formulário
        document.body.style.overflow = ""; // Restaura scroll
    }
});

