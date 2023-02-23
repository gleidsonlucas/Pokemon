function Clicou(){
   var p1 = window.document.getElementById('form')
   var p2 = window.document.getElementById('evo')
   var pokemon = window.document.getElementsByName('pokemon')
   var gera = window.document.getElementsByName('numE')
   var pokescolha = ''
   var pgera = ''
   var res = window.document.getElementById('res')
   var imagem = window.document.getElementById('img')
   // Charmander
   if (pokemon[0].checked){ 
      pokescolha = 'Charmander'
      imagem.src = 'imagens/004.png'
      imagem.style.width= '200px'
      imagem.style.height= '200px'
      if (gera[0].checked){
         pgera = '1 evolução'
         res.innerHTML = `Charmander é um pokémon do tipo fogo. Ele é conhecido por sua chama em sua cauda, que indica sua saúde e força. Ele evolui para Charmeleon no nível 16 e depois para Charizard no nível 36. Charizard é um dos pokémons mais populares da primeira geração, com grande velocidade e poder de ataque
         `
      }else if(gera[1].checked){
        pgera = '2 evolução'
        imagem.src = 'imagens/005.png'
        imagem.style.width= '200px'
        imagem.style.height= '200px'
        res.innerHTML = `<p id= "p2">Charmeleon é um Pokérmon reptiliano. Ele tem escamas vermelhas na sua parte inferior. Existe um chifre na parte de trás da cabeça. Ele tem olhos verdes e um focinho comprido. Tem braços relativamente longos com três garras afiadas. Suas pernas curtas têm pés com três garras. A ponta de sua cauda longa, poderosa tem uma chama acesa sobre ele.</p>`
        
      }else if(gera[2].checked){
        pgera = '3 evolução'
        imagem.src = 'imagens/006.png'
        res.innerHTML = `Charizard:
        Charizard é a última evolução de Charmander, e é um pokémon do tipo fogo/voador. Ele é conhecido por suas grandes asas e habilidades de voo, além de sua cauda flamejante. Charizard é um dos pokémons mais populares da primeira geração, com uma combinação de velocidade, poder de ataque e habilidades especiais.
        `

      }
   }
   // bulbassauro
   if (pokemon[1].checked){ 
    pokescolha = 'Bulbassauro'
    imagem.style.width= '200px'
    imagem.style.height= '200px'
    if (gera[0].checked){
       pgera = '1 evolução'
       res.innerHTML = `Bulbasauro é um pokémon do tipo planta/veneno. Ele é conhecido por sua semente em suas costas, que cresce à medida que ele evolui. Ele evolui para Ivysaur no nível 16 e depois para Venusaur no nível 32. Venusaur é um dos pokémons mais poderosos da primeira geração, com alta defesa e ataque especial.
       `
       imagem.style.width= '200px'
        imagem.style.height= '200px'
       imagem.src = 'imagens/001.png'
    }else if(gera[1].checked){
      pgera = '2 evolução'
      res.innerHTML = `vysaur é a evolução de Bulbasaur. Ele é um pokémon do tipo planta/veneno e é conhecido por suas grandes folhas nas costas. Ele evolui para Venusaur no nível 32.`
      imagem.src = 'imagens/002.png'
      imagem.style.width= '200px'
      imagem.style.height= '200px'
    }else if(gera[2].checked){
      pgera = '3 evolução'
      imagem.style.width= '200px'
      imagem.style.height= '200px'
      res.innerHTML = `Venusaur é a última evolução de Bulbasaur, e é um pokémon do tipo planta/veneno. Ele é conhecido por suas grandes pétalas nas costas e por sua habilidade especial, que permite que ele absorva energia solar para aumentar seu poder. Venusaur é um dos pokémons mais fortes e poderosos da primeira geração, com uma combinação de alta defesa, ataques poderosos e habilidades especiais.
      `
      imagem.src = 'imagens/003.png'
    }
    // Squirtle
    }
    if (pokemon[2].checked){ 
    pokescolha = 'Squirtle'
    imagem.style.width= '200px'
    imagem.style.height= '200px'
    if (gera[0].checked){
      pgera = '1 evolução'
      res.innerHTML = `Squirtle é um pokémon do tipo água. Ele é conhecido por sua casca dura em suas costas, que o protege de ataques. Ele evolui para Wartortle no nível 16 e depois para Blastoise no nível 36. Blastoise é um dos pokémons mais fortes da primeira geração, com alta defesa e um poderoso canhão de água em suas costas.
      `
      imagem.src = 'imagens/007.png'
      imagem.style.width= '200px'
      imagem.style.height= '200px'
    }else if(gera[1].checked){
      pgera = '2 evolução'
      res.innerHTML = `Wartortle é a evolução de Squirtle. Ele é um pokémon do tipo água e é conhecido por sua casca dura na parte de trás. Ele evolui para Blastoise no nível 36.
      `
      imagem.src = 'imagens/008.png'
      imagem.style.width= '200px'
      imagem.style.height= '200px'
    }else if(gera[2].checked){
      pgera = '3 evolução'
      res.innerHTML = `Blastoise:
      Blastoise é a última evolução de Squirtle, e é um pokémon do tipo água. Ele é conhecido por seu grande canhão de água nas costas, que pode disparar jatos poderosos de água. Blastoise é um dos pokémons mais fortes da primeira geração, com alta defesa, poderosos ataques de água e habilidades especiais.
      `
      imagem.src = 'imagens/009.png'
      imagem.style.width= '200px'
      imagem.style.height= '200px'
    }
    }
  }

