document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cepForm');
    const logradouro = document.getElementById('logradouro');
    const bairro = document.getElementById('bairro');
    const localidade = document.getElementById('localidade');
    const uf = document.getElementById('uf');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Previne o envio padrão do formulário

        try {
            const cep = document.getElementById('cep').value

            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();


            logradouro.textContent = data.logradouro;
            bairro.textContent = data.bairro;
            localidade.textContent = data.localidade;
            uf.textContent = data.uf;

        } catch (error) {
            alert("Erro, coloque no maximo 8 números")
        }


    });
});
