function verVariables(){
    let msj = document.getElementById('res')
    alert("Variable local: " + localStorage['variable_local'])
    alert("Variable sesion: " + sessionStorage['variable_sesion'])
    if(sessionStorage.length == 0){
        msj.removeAttribute("hidden")
    }
}
