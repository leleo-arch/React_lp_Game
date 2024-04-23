import React from 'react';

import {
    Conteiner,
    Imagem,
    ConteinerItens,
    H1,
    Button,
    User,
    Imagemfantasma,
    Conteinerimg,
    Conteinertxt,
    Conteinermenu,
    Conteinerbutton,
    Button3,
    P,
    Video,
    Imput,
    Conteinerinput,

    
  } from "./Style";

  import logo from "../../asset/logo-header.png"
  import MarioLogo from "../../asset/logo.png"
  import backgroundVideo from "../../asset/video.mp4"
  

  function LP (){

    return (

    <Conteiner>
     
    <ConteinerItens>
    <Imagem alt="img-Logo" src={logo}/>

    <Conteinermenu>
     <ul>
    <User>
    <a>Login</a>
    <a>Home</a>
    <a>Sobre</a>
    <a>Contato</a>
   </User>
    </ul>
    </Conteinermenu>

      <Video autoPlay muted loop id="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </Video>


    <Conteinerimg>
    <Imagemfantasma alt="img-Logo" src={MarioLogo}/>
    </Conteinerimg>


    <Conteinertxt>
    <H1>Pixel Games </H1>
    <P>A história dos jogos digitais teve início quando os acadêmicos começaram a projetar jogos simples, simuladores e programas de inteligência artificial.
    </P>
    </Conteinertxt>

    <Conteinerbutton>
    <Button>Enviar</Button>
    <Imput placeholder=' Seu melhor e-mail aqui'></Imput>
    </Conteinerbutton>

<Conteinerinput>
   <Button3>Dowload</Button3>
</Conteinerinput>

    </ConteinerItens>
    
    </Conteiner>
    )
  }

  export default LP