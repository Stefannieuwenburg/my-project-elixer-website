
import { createGlobalStyle } from "styled-components";
import BackgroundImage from "./components/image/background.jpg"

const GlobalStyle = createGlobalStyle`
* {
    @import url("https://fonts.googleapis.com/css2?family=Karla:wght@200;400&display=swap");
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: "Karla", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  

}
body{
   background: url(${BackgroundImage}) no-repeat center center fixed;
   background-size: cover;

}

  :root{
    --Red:'red'
    --Orange:'orange'
    --Yellow:'yellow'
    --Olive:'olive'
    --Green:'green'
    --Teal:'teal'
    --Blue:'blue'
    --Violet:'violet'
    --Purple:'purple'
    --Pink:'pink'
    --Brown:'brown'
    --Grey:'grey'
    --Black:'black'
    --shadow:0 1px 5px rgba(104,104,104,0.8)
}

`;

export default GlobalStyle;


