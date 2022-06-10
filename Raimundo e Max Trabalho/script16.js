function NAY(){
  
    let login = document.getElementById("nome").value;
    if(login == ""){
        alert('informe seu nome');

    }

    else{
        sessionStorage.setItem("usuario",login);
        alert(sessionStorage.getItem("usuario"));
        window.location = "filmes/indexxx.html";
    }

    // function olapai(){
    //     document.getElementById('nome').value = "seja bem-vindo(a)" +
    //     sessionStorage.getItem('login');
    // }

}

    function olapai(){

        //alert(sessionStorage.getItem("usuario"));
        document.getElementById('max').value = sessionStorage.getItem("usuario");

    }
        



    












