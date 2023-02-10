import { DefaultTheme } from "./styles/themes/default";
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/global";
import { BodyImage, 
         ContainerBody, 
         ContainerContacts, 
         ContainerScreens, 
         ContainerSearch, 
         MouseImage, 
         NotFound, 
         Search } from "./styles/themes/style";

import Logo from "../src/assets/logo.png"

import Verify from "../src/assets/list/verificado.png"
import Mouse from "../src/assets/list/mouse.png"

import Face from "../src/assets/contacts/face.png"
import Insta from "../src/assets/contacts/insta.png"

import Venda from "../src/assets/imagesScreen/venda.png"
import Jogos from "../src/assets/imagesScreen/jogos.png"
import Social from "../src/assets/imagesScreen/social.png"
import Moda from "../src/assets/imagesScreen/moda.png"
import Informe from "../src/assets/imagesScreen/informe.png"
import Stream from "../src/assets/imagesScreen/stream.png"

import VendaWhite from "../src/assets/imagesScreen/venda_branco.png"
import JogosWhite from "../src/assets/imagesScreen/jogos_branco.png"
import SocialWhite from "../src/assets/imagesScreen/social_branco.png"
import ModaWhite from "../src/assets/imagesScreen/moda_branco.png"
import InformeWhite from "../src/assets/imagesScreen/informe_branco.png"
import StreamWhite from "../src/assets/imagesScreen/stream_branco.png"

const ImagesBox : any = [
  {
    id: 1,
    imageUrl: Venda,
     imageUrlWhite: VendaWhite,
  },
  {
    id: 2,
    imageUrl: Jogos,
    imageUrlWhite: JogosWhite,
  },
  {
    id: 3,
    imageUrl: Social,
    imageUrlWhite: SocialWhite,
  },
  {
    id: 4,
    imageUrl: Moda,
    imageUrlWhite: ModaWhite,
  },
  {
    id: 5,
    imageUrl: Informe,
   imageUrlWhite: InformeWhite,
  },
  {
    id: 6,
    imageUrl: Stream,
    imageUrlWhite: StreamWhite,
  },
]

import { useState } from "react";
import { ClipboardText } from "phosphor-react";

export function App() {

  const [text, setText] = useState('')

  const [hover, setHover] = useState()

  return (
    <ThemeProvider theme={DefaultTheme}>
      <ContainerSearch>
        <img src={Logo} width="90px" />
        <Search 
          type="text" 
          placeholder="PESQUISE NA SALURT SEU MODELO" 
          onChange={event => setText(event.target.value)} />
      </ContainerSearch>
      <BodyImage src={Logo}/>
       {text === '' ? <ContainerBody>
        
        <p>
          CRIE CONOSCO SEU SITE DE QUALQUER TEMA
             <br />  EXEMPLOS DE SITES
         </p>

         <ContainerScreens>
         
           {ImagesBox.map(InfoImg => {
            return(
              <div onMouseOver={() => {setHover(InfoImg.id)}} onMouseOut={() => {setHover(0)}} key={InfoImg.id}>  {hover == InfoImg.id ? <img src={InfoImg.imageUrlWhite} /> : <img src={InfoImg.imageUrl} />} </div>
            )
           }) } 
          
         </ContainerScreens>

         <p>
             ESSES E OUTROS DIVERSOS TEMAS O QUE SUA
         <br /> CRIATIVIDADE LEVAR É O NOSSO LIMITE
         </p>

         <ul>
        
        <li>

        <img src={Verify} width="50px" height="50px" />

          Site 100% SEGURO e CONFIAVEL
        
        </li>

        <li>

        <img src={Verify} width="50px" height="50px" />

          Artes 100% ORIGINAIS , e bem TRABALHADAS

        </li>

        <li>

        <img src={Verify} width="50px" height="50px" />

          Visamos o conforto do CLIENTE e dos seus Visitantes    
    
        </li>

        <li>

        <img src={Verify} width="50px" height="50px" />

          Mesma equipe previne DEMORA e entrega do seu produto
          mais rapido e acessivel          

          <MouseImage src={Mouse} />

        </li>

        </ul>
         
         

        <div>
        <p> O que ganhamos com isso ? </p>

        <p> Sua confiança e lealdade porque visamos o melhor dos nossos clientes <br /> 
        , para que fiquem 100% tranquilos com seus projetos em nossas mãos , <br /> 
         somos jovens e estamos trazendo nosso estudo para esse mercado <br />
          de trabalho privilegiado  </p> 
        </div>

        <p> Caso tenha gostado entre em contato conosco e faça seu orçamento: </p>
      
        <p> CONTATOS </p> 

        <ContainerContacts> <img src={Face} width="48px" /> <img src={Insta} width="150px" /> </ContainerContacts>

      </ContainerBody> : <NotFound> "{text}" não foi encontrado. <ClipboardText color="white" size={150}/> </NotFound> }

      <GlobalStyle />
      </ThemeProvider>
  )
}

