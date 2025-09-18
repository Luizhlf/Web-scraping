// Site usado para exercício: Cinemark

// Verifico se estou puxando corretamente os dados do título do filme
document.querySelector('.css-qivzgb')

// Crio uma variável 'name' para armazenar o elemento de título dos filme
let name = document.querySelectorAll('.css-qivzgb')

// Faço um for para percorrer a lista 'name' e exibir o título do filme no console
for (i = 0; i < name.length; i++) {
    console.log(name[i].innerText)
}

// Verifico se consigo acessar um elemento com a descrição do filme
document.querySelector('.chakra-text.css-1albev8')

// Crio uma variável 'text' para armazenar todos os elementos de descrição dos filmes
let text = document.querySelectorAll('.chakra-text.css-1albev8')

// Faço um for para percorrer a lista 'text' e exibir cada descrição no console
for (i = 0; i < text.length; i++) {
    console.log(text[i].innerText)
}

// Finalizo usando um for para exibir o título e a descrição do filme, cada um em uma linha separada
for (let i = 0; i < name.length; i++) {
    console.log(name[i].innerText + "\n\n" + text[i].innerText
    );
}

