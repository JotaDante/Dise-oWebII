function go(){
    if(document.form.password.value == 'juanjo' && document.form.login.value == 'juanacho13x@hotmail.com'){
        document.form.submit();
    }
    else{
        alert("Nombre de usuario y Contraseña incorrectos");
    }
}