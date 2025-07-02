

async function carregaropcoes() {
    
    try{
        const response = await fetch ('https://api.ipma.pt/open-data/distrits-islands.json')
        const data = await response.json();
        const dropdown = document.getElementById('locais');

        //Limpa opções existentes
        dropdown.innerHTML = '';

        data.forEach(item => {

            const option = document.createElement('option');
            option.value = item.valor;      //Ajsute para a propriedade certa dos dados.
            option.text = item.text;        //Ajuste para a propriedade certa dos dados.
            dropdown.add(option);
        });

        

    }

}