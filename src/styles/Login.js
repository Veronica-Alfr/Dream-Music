import styled from 'styled-components';

const ContainerLogin = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@700&display=swap');

    height: 100vh;
    width: 100vw;  
    display:flex;
    justify-content: center;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, 
    rgba(135,47,166,1) 35%, rgba(191,28,152,1) 100%);

    .containerPageLogin {
        height: 40%;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .containerPageLogin h1 {
        font-family: Steinerlight.ttf;
    }

    input {
        height: 40px;
        width: 290px;
        padding: 8px;
        margin: 10%;
        margin-left: 20%;
        margin-top: 30%;
        border-radius: 16px;
        font-size: 22px;
        font-family: 'Kalam', cursive;
        box-shadow: 2px 2px 4px gray;
    }
    
    input::placeholder {
        padding-left: 4px;
        font-size: 24px;
        color: gray;
        font-family: 'Kalam', cursive;
    }

    button {
        width: 260px;
        height: 66px;
        border-radius: 20px;
        background-color: black;
        color: rgb(223, 245, 247);
        font-size: 40px;
        margin-left: 26%;
        font-family: 'Kalam', cursive;
        border: none;
        user-select: none;
    }

    input:focus {
        outline: none;
        border: 2px solid black;
    }

    button:disabled {
        background-color: gray;
        box-shadow: 1px 1px 10px -2px gray
    }
`;

export default ContainerLogin;
