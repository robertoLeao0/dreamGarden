
function abrirModal(modal, overlay) {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    document.body.classList.add('no-scroll');
    document.getElementsByClassName('help-button')[0].style.display = 'none';
}


function fecharModal(modal, overlay) {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    document.body.classList.remove('no-scroll');
    document.getElementsByClassName('help-button')[0].style.display = 'block';
    const inputsLogin = document.querySelectorAll('.modalLogin input');
    inputsLogin.forEach(input => input.value = '');
    const inputsCadastro = document.querySelectorAll('#modalCadastro input');
    inputsCadastro.forEach(input => input.value = '');
}

if (localStorage.getItem('usuarios') === null) {
    localStorage.setItem('usuarios', JSON.stringify([]));
}


document.getElementById('btnEntrar').addEventListener('click', () => {
    abrirModal(document.getElementsByClassName('modalLogin')[0], document.getElementById('modalOverlay'));
});


document.getElementById('btnFecharModal').addEventListener('click', () => {
    fecharModal(document.getElementsByClassName('modalLogin')[0], document.getElementById('modalOverlay'));
});


document.getElementById('btnNaoTenhoConta').addEventListener('click', (event) => {
    event.preventDefault();
    const modalCadastro = document.getElementById('modalCadastro');
    const modalLogin = document.getElementsByClassName('modalLogin')[0];
    abrirModal(modalCadastro, document.getElementById('modalOverlay'));
    modalLogin.style.display = 'none';
});


document.getElementById('btnFecharModalCadastro').addEventListener('click', () => {
    fecharModal(document.getElementById('modalCadastro'), document.getElementById('modalOverlay'));
});


document.getElementById('btnCadastrarModal').addEventListener('click', () => {
    const usuarioCadastro = document.getElementById('usuarioCadastro').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioJaExiste = usuariosExistentes.find(usuario => usuario.usuario === usuarioCadastro);
    if (usuarioJaExiste) {
        alert('Usuário já existe. Escolha outro nome de usuário.');
        return;
    }


    if (senha !== confirmarSenha) {
        alert('A senha e a confirmação de senha devem ser iguais.');
        return;
    }

    const novoUsuario = {
        nomeCompleto: document.getElementById('nomeCompleto').value,
        email: document.getElementById('email').value,
        usuario: usuarioCadastro,
        senha: senha,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        pais: document.getElementById('pais').value,
        logado: false
    };

    usuariosExistentes.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosExistentes));

    fecharModal(document.getElementById('modalCadastro'), document.getElementById('modalOverlay'));
});


document.getElementById('btnEntrarModal').addEventListener('click', () => {
    const usuarioLogin = document.querySelector('input[name="usuario"]').value;
    const senhaLogin = document.querySelector('input[name="senha"]').value;

    const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioValido = usuariosExistentes.find(usuario => usuario.usuario === usuarioLogin && usuario.senha === senhaLogin);

    if (usuarioValido) {
        usuariosExistentes.forEach(usuario => {
            usuario.logado = false;
        });
        usuarioValido.logado = true;
        localStorage.setItem('usuarios', JSON.stringify(usuariosExistentes));

        const nameUser = document.createElement('h1');
        nameUser.id = "nameUser";
        nameUser.innerText = usuarioValido.usuario;
        document.getElementById('nomeUsuario').appendChild(nameUser);
        document.getElementById('nomeUsuario').style.display = 'inline';
        document.getElementsByClassName('carrinhoCompras')[0].style.right = '34.5%';
        document.getElementById('btnEntrar').style.display = 'none';
        document.querySelector('input[name="usuario"]').value = '';
        document.querySelector('input[name="senha"]').value = '';
        fecharModal(document.getElementsByClassName('modalLogin')[0], document.getElementById('modalOverlay'));
        document.getElementsByClassName('carrinhoComprasMobile')[0].style.top = '12%';
        document.getElementsByClassName('carrinhoComprasTablet')[0].style.right = '57.5%';

    } else {
        alert('Usuário ou senha incorretos');
    }
});

document.getElementById('nomeUsuario').addEventListener('click', () => {
    const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioLogado = usuariosExistentes.find(usuario => usuario.logado === true);

    if (usuarioLogado) {
        usuarioLogado.logado = false;
        localStorage.setItem('usuarios', JSON.stringify(usuariosExistentes));
        document.getElementById('nomeUsuario').innerHTML = '';
        document.getElementById('nomeUsuario').style.display = 'none';
        document.getElementsByClassName('carrinhoCompras')[0].style.right = '2.2%';
        document.getElementsByClassName('carrinhoComprasMobile')[0].style.top = '70%';
        document.getElementById('btnEntrar').style.display = 'inline';
        document.getElementsByClassName('carrinhoComprasTablet')[0].style.right = '5%';
    }
});


const modalContatoLink = document.getElementById('modalContato');
const modalContato = document.getElementById('modalContatoContent');
const closeModal = document.querySelector('.close');


modalContatoLink.addEventListener('click', (e) => {
    e.preventDefault();
    modalContato.style.display = 'flex';
    document.body.classList.add('no-scroll');
});


closeModal.addEventListener('click', () => {
    modalContato.style.display = 'none';
    document.body.classList.remove('no-scroll');
});


window.addEventListener('click', (e) => {
    if (e.target === modalContato) {
        modalContato.style.display = 'none';
    }
});
