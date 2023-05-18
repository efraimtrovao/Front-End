function menuCadastroAbrir(){
    var menuCad = document.querySelector('.cadastromenu')
    if(menuCad.classList.contains('abrircadastro')) {
        menuCad.classList.remove('abrircadastro')
    } else {
        menuCad.classList.add('abrircadastro')
    }

}

function menuLoginAbrir(){
    var menuLog = document.querySelector('.loginmenu')
    if(menuLog.classList.contains('abrirlogin')) {
        menuLog.classList.remove('abrirlogin')
    } else {
        menuLog.classList.add('abrirlogin')
    }

}
