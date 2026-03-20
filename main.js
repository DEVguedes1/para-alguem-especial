document.body.addEventListener('click', () => {
    // Remove a classe que pausa as animações no CSS
    document.body.classList.remove('container');
    
    // Esconde a instrução de clique
    const hint = document.getElementById('hint');
    if (hint) {
        hint.style.display = 'none';
    }
});