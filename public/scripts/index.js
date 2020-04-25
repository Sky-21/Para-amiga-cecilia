
    const elogio  = document.getElementsByClassName('Elogio')[0]
    
    let contador = 0
  

    const Elogios = ["Seu olho é mais bem desenhado que os animes",
              "Esse sorriso ae brilha mais que sol",
              "MEU DEUS ME DIZ A O NOME DO SEU SHAMPO Q PQP Q CABELO PERFEITO",
              "1,54 de pura gostorusa, mulherão da porra",
              "Mais estilosa que as blogueiras formadas em moda",
              "A Ariana Grande te pede dica de beleza",
              "A auto estida da Gisele Bündchen DESPENCA quando olha pra vc",
              "Da um oi pra Zeus por mim , ja que vc é uma deusa grega",
              "Se vender foto do pé fica rica",
              "Ja disse que seu sorriso é perfeito? , ELE É",
              "Fim , Espero que tinha gostado , volte sempre que quiser"
            ]

    

    const render = () => {
      console.log(Elogios.length)
      elogio.innerHTML = Elogios[contador]
    }
    const CountPlus = () =>{
      if(contador == Elogios.length - 1){
        
        contador = 0
      }else{
        contador++
        
      }
      render()
    }
    const CountLess = () =>{
      if(contador == 0){
        contador = Elogios.length - 1
      }else{
        contador--
      }
      render()
    }

    render()
    
