import styled from "styled-components";

export const Conteiner = styled.div `
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
min-height: 100vh;

`;

export const Conteinerimg = styled.div `
    display: inline-block;
    width: 0px;
    margin-left: 90px;
    margin-top: 10px;
    position: static;

`;

export const Conteinertxt = styled.div `
display: inline-block;
margin-left: -70px;
width: 40%;
align-items: center;
margin-top: 40px;
background-color: rgb(255, 255, 255);
border-radius:20px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: linear-gradient(142.97deg, rgba(0, 240, 255, 0.3) 17.43%, rgba(239, 60, 146, 0.22) 73.23%);
margin-bottom: 20px;

`;
export const Conteinermenu = styled.div `
display: flex;
justify-content: end;
background-color: rgb(255, 255, 255);
border-radius:20px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
margin-top: -32px;

`;

export const Conteinerbutton = styled.div `
display: flex;
justify-content: start;
gap:1px;
margin-left: 30px;

`;

export const Conteinerinput = styled.div `
display: flex;
justify-content: start;
gap:1px;
margin-left: 30px;

`;

export const Imagem = styled.img `
width: 20px;
margin-left: 80px;
margin-top: auto;
background-color: rgb(255, 255, 255);
border-radius:20px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);

`; 

export const Imagemfantasma = styled.img `
    margin-top: 80px;
    width: 400px;
    margin-left: 330px;

`; 



export const ConteinerItens = styled.div `
background-color: rgb(255, 255, 255);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
border-radius: 31px;
margin-top: 20px;
padding: 50px 36px;
width: 90%;

`;

export const H1 = styled.h1 `
color: rgba(48, 48, 86, 1);
font-size: 70px;
display: flex;
justify-content: center;
`;

export const Button = styled.button `
font-size: 15px;
margin-right: 20px;
width: 107px;
height: 48px;
border-radius: 10px;
background: rgba(255, 91, 121, 1);

color: white;


&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}

img {
    transform: rotate(180deg);
}

`;

export const User = styled.li `
display: flex;
margin-right: 15px;
gap:55px;
font-size: 30px;

`
export const P = styled.p `
color: aliceblue;
font-size: 24px;
align-content: center;
align-items: center;
margin-bottom: 50px;
margin-left: 5px;
`;

export const Button3 = styled.button `
font-size: 15px;
color: aliceblue;
margin-top: 10px;
width: 107px;
height: 48px;
border-radius: 10px;
background-color: black;
border: 1px solid rgba(248, 211, 235, 1);

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}

`;

export const Imput = styled.input `
font-size: 15px;
color: aliceblue;
display: flex;
align-items: center;
width: 300px;
height: 48px;
border-radius: 10px;
background-color: black;
border: 1px solid rgba(248, 211, 235, 1);

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}

`;

export const Video = styled.video `
width: 100vh;
position: fixed;
right: 0;
bottom: 0;
min-width: 100%;
min-height: 100%;
z-index: -1;

`;
