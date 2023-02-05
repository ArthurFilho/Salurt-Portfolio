import styled from "styled-components";

export const ContainerBody = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    gap: 20px;
    margin-top: 100px;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    div {
        box-shadow: 0px 10px -14px 14px #FFF;
    }

    img {
        width:  400px;
        height: 200px;
    }
`