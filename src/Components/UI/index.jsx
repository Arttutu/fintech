import { styled } from "styled-components";
import { Branco, Font, VerdeClaro2, VerdeEscuro2 } from "./variaveis";

export const Box = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`
export const Titulo = styled.h1`
    color: ${VerdeEscuro2};
    font-size: 5em;
    font-style: ${Font};
    
`
export const BotaoPrincipal = styled.button`
    width: 200px;
    padding: 10px;
    background-color: ${VerdeEscuro2};
    border: none;
    border-radius: 1em;
    font-size: 1.2em;
    font-family: ${Font};
    color: ${Branco};
`
export const Lista = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    cursor: pointer;
    gap: 2rem;

    @media (max-width:768px){
        display: none;
      
    }
`
export const Logo = styled.h2`
    font-family: ${Font};
    font-weight: bolder;
    color: ${Branco};
`
   