function toggleMode() {
    const html =  document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // se tiver sem light mode, mannter a imagem normal
        img.setAttribute("src", "./assets/Avatar.png")
    }

    if(html.classList.contains('light')) {
        img.setAttribute("alt", "Foto do Kauã bertini, pulando para bloquear no centro olimpico de treinamento.")
    } else {
        img.setAttribute("alt", " Foto do Kauã Bertini, jogando seu esporte favorito com uniforme da faculdade no Centro Olimpico de Treinamento e Pesquisa de São Paulo.")
    }
}

