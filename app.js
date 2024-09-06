function pesquisar() {
    
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let instagram = "";
    let tags = "";

    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        instagram = dado.Instagram.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || instagram.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.Instagram}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}