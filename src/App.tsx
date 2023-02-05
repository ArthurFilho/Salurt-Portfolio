import { DefaultTheme } from "./styles/themes/default";
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/global";
import { BodyImage, ContainerBody, ContainerScreens, ContainerSearch, MouseImage, Search } from "./styles/themes/style";

import Logo from "../src/assets/logo.png"
import Venda from "../src/assets/imagesScreen/venda.png"
import Verify from "../src/assets/list/verificado.png"
import Mouse from "../src/assets/list/mouse.png"

export function App() {


  return (
    <ThemeProvider theme={DefaultTheme}>
      <BodyImage src={Logo}/>
      <ContainerBody>
        <ContainerSearch>
        <img src={Logo} width="90px" />
        <Search type="text" placeholder="PESQUISE NA SALURT SEU MODELO" />
        </ContainerSearch>
        <p>
          CRIE CONOSCO SEU SITE DE QUALQUER TEMA
             <br />  EXEMPLOS DE SITES
         </p>

         <ContainerScreens>
         
           <div>  <img src={Venda} />  </div> 
           <div>  <img src={Venda} />  </div>
           <div>  <img src={Venda} />  </div>
           <div>  <img src={Venda} />  </div>
           <div>  <img src={Venda} />  </div>
           <div>  <img src={Venda} />  </div>
         
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

        <div>  </div>

      </ContainerBody>

      

      <GlobalStyle />
      </ThemeProvider>
  )
}

