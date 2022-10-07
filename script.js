    function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
  }
  function cal(num){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    }
    
  }

  function limpar(){
    document.getElementById('resultado').innerHTML = '';
  }
  function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
  }
  function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    let adicionar = document.getElementById('resultado');
    adicionar.classList.add('foco')
    setTimeout(()=>{
        adicionar.classList.remove('foco')
    }, 1000);
        
    if(resultado){
      document.getElementById('resultado').innerHTML= eval(resultado);
    }else{
        document.getElementById('resultado').style.color= 'red';
        document.getElementById('resultado').style.background= 'orange';
      document.getElementById('resultado').innerHTML= 'vazio!!!';
      setTimeout(()=>{
        document.getElementById('resultado').style.color= '';
        document.getElementById('resultado').style.background= '';
        document.getElementById('resultado').innerHTML= '';
      }, 1000);
     
      
    }

    }
    
