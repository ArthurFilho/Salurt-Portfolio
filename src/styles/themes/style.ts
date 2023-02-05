import styled from "styled-components";

export const ContainerBody = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ;

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
    z-index: -1
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
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;

    div {
        box-shadow:  0 0 1em rgba(255,255,255, 0.5);
        position: relative;
    }

    img {
        width: 400px;
        height: 200px;
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
`