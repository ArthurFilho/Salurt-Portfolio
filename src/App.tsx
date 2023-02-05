import { DefaultTheme } from "./styles/themes/default";
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/global";
import { BodyImage, ContainerBody, ContainerScreens, ContainerSearch, Search } from "./styles/themes/style";
import Logo from "../src/assets/logo.png"
import Venda from "../src/assets/imagesScreen/venda.png"

export function App() {


  return (
    <ThemeProvider theme={DefaultTheme}>
      <BodyImage src={Logo}/>
      <ContainerBody>
        <ContainerSearch>
        <img src={Logo} width="90px" />
        <Search placeholder="PESQUISE NA SALURT SEU MODELO" />
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
      </ContainerBody>
      <GlobalStyle />
      </ThemeProvider>
  )
}

