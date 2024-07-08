async function listarPastas() {
    const pastaAlvo = './src/assets'; // Substitua pelo caminho real da sua pasta
    try {
        const response = await fetch(pastaAlvo);
        const pastas = await response.json();
        const lista = document.getElementById('lista-pastas');
        pastas.forEach(pasta => {
            const item = document.createElement('li');
            item.textContent = pasta;
            lista.appendChild(item);
        });
    } catch (erro) {
        console.error('Erro ao listar pastas:', erro.message);
    }
}

listarPastas();