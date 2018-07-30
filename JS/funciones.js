//function
var a = true;
var b = true;
(function(){
  // se obtiene el elemento boton del DOM por su Id
  var btnInicio = document.getElementById("idBtnInicio");
  var usuario = document.getElementById("idInputUsuario");
  var contra = document.getElementById("idInputPass");
  var btnAct = document.getElementById("idBtnInicio");
  var formulario = document.getElementById("idformularioLogIn");


  var comparar = function(){

    var compar = new RegExp(
      /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/
    )
    var correo = document.getElementById("idInputUsuario").value;


      if (compar.test(correo)){

        var err = document.getElementById("errorEmail").innerHTML = "";
        a = true;
        console.log(a);

        document.getElementById("errorEmail").style.display = "none";

      } else{
        document.getElementById("errorEmail").style.display = "inline-block";
        document.getElementById("errorEmail").innerHTML = "correo invalido";
        a = false;

      }
  }

  var compContra = function(){
    var comparContra = new RegExp(
     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/
    )

    var pass = document.getElementById("idInputPass").value;

    if (comparContra.test(pass)){

      var err = document.getElementById("errorPass").innerHTML = "";

      b = true;
      console.log(b);

      document.getElementById("errorPass").style.display = "none";
      final();

    } else{
      document.getElementById("errorPass").style.display = "inline-block";
      document.getElementById("errorPass").innerHTML = "contraseña invalida";
      document.getElementById("idBtnInicio").style.cursor="not-allowed";
      document.getElementById("idBtnInicio").disabled = true;
      b = false;

    }
  }

  var confirmInput =  function (e) {
    e.preventDefault();
    compContra();
    comparar();
    var msj = "Bienvenido";
    console.log('hola');
    document.getElementById("idformularioLogIn").innerHTML = msj;
    var nuevoColor = document.querySelector("#idformularioLogIn");
    nuevoColor.className = "cambiaColor";
    document.getElementById("parr").style.display="none";
    document.getElementById("olvido").style.display="none";
  }


  function final(){
    if (b && a ){
      console.log(5);
      document.getElementById("idBtnInicio").style.cursor="pointer";
      document.getElementById("idBtnInicio").disabled = false;
    }else{
      document.getElementById("idBtnInicio").style.cursor="not-allowed";
      document.getElementById("idBtnInicio").disabled = true;
    }
  }

  var resetUsuario=function(){
    var err = document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorEmail").style.display = "none";
    usuario.addEventListener("keyup",comparar);
  }
  var resetPass=function(){
    var err = document.getElementById("errorPass").innerHTML = "";
    document.getElementById("errorPass").style.display = "none";
    usuario.addEventListener("keyup",comparar);
  }


  // se agrega el evento click a los botones correspondientes tomando como accion llamar a una funcion
  usuario.addEventListener("keyup",comparar);
  usuario.addEventListener("click", resetUsuario)
  contra.addEventListener("keyup",compContra);
  contra.addEventListener("click",resetPass);
  contra.addEventListener("keyup", function(){

    let valor = contra.value;

    if(valor.length >= 6){
      compContra();
      final();
      console.log('Completado');
    }else if(valor.length < 6) {
      valor = "";
      console.log('Hola');
      document.getElementById("idBtnInicio").style.cursor="not-allowed";
      document.getElementById("idBtnInicio").disabled = true;
    }
  });

  formulario.addEventListener("submit",confirmInput);
  }())
//mis cambios
