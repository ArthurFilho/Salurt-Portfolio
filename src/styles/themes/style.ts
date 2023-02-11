import styled from "styled-components";

export const ContainerBody = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ul {
        margin-top: 50px;
        font-size: 20px;
        margin-bottom: 50px;
        
        li {
            display: flex;
            margin-bottom: 15px;
            list-style: none;
            align-items: center;
    }
    }

    p {
        margin-top: 50px;
        color: white;
        text-align: center;
        font-family: 'Corbel', sans-serif;
        font-size: 25px;
    }
`

export const BodyImage = styled.img`
    opacity: 0.1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    z-index: -1;
    @media (max-width: 768px) {
        display: flex;
    }
`
export const Search = styled.input`
    width: 40%;
    background-color: black;
    color: white;
    border: none;
    border-bottom: 2px solid white;
    padding: 15px;
    margin-top: 100px;
`

export const ContainerSearch = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    img {
        margin-top: 120px;
    }
`

export const ContainerScreens = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 100px;
    flex-wrap: wrap;
    width: 100%;
    height: 580px;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
    
    

    div {
        cursor: pointer;
        box-shadow:  0 0 1em rgba(255,255,255, 0.5);
        position: relative;
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    div:after{
        content:"";
        position:absolute;
        width:100%;
        height:100%;
        background-color:#0CF;
        border-radius:5px;
        box-shadow:0 5px 15px 0 rgba(0,0,0,0.3);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: -1;
    }

    div:hover{
      transform:scale(1.09,1.09);
    }

    img {
        width: 400px;
        height: 200px;
    }

    @media (max-width: 768px) {
        height: 1450px;
    }
`

export const MouseImage = styled.img`
    width: 500px; 
    height: 500px;    
    position: absolute;
    z-index: -1;
    display: flex;
    left: 1000px;
    top: 1300px;
    @media (max-width: 768px) {
        left: 100px;
        top: 2280px;
    }
`

export const ContainerContacts = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    img {
        background: white;
        border-radius: 100%;
    }
`

export const NotFound = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`