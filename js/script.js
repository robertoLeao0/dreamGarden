// Abrir o modal e o overlay
document.getElementById('btnEntrar').addEventListener('click', () => {
    document.getElementsByClassName('modalLogin')[0].style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block'; 
    document.body.classList.add('no-scroll');
});

// Fechar o modal e o overlay
document.getElementById('btnFecharModal').addEventListener('click', () => {
    document.getElementsByClassName('modalLogin')[0].style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none'; 
    document.body.classList.remove('no-scroll');
});
