/* Su mayor diferencia es la no persistencia de los datos, es decir
la información que almacenamos en localStorage se guardan hasta
que los eliminemos, pero para sessionStorage la información se
almacena en la pestaña actual, no se puede consultar en otra o una
vez se haya cerrado la pestaña o navegador */

localStorage.setItem('variable_local', 'Hola, soy algo almacenado en el localStorage')
/* console.log(localStorage['variable_local']) */
sessionStorage.setItem('variable_sesion', 'Hola, soy algo almacenado en el sessionStorage')
/* console.log(sessionStorage['variable_sesion']) */
