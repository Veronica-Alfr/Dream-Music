import styled from 'styled-components';

const ContainerLogin = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Libre+Baskerville&display=swap');

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

    h1 {
        font-family: 'Dancing Script';
        font-size: 60px;
    }

    img {
        heigth: 60%;
        width: 60%;
    }

    input {
        height: 30px;
        width: 290px;
        padding: 8px;
        margin: 6%;
        margin-left: 20%;
        margin-top: 5%;
        border-radius: 16px;
        font-size: 20px;
        font-family: 'Libre Baskerville';
        box-shadow: 2px 2px 4px gray;
    }
    
    input::placeholder {
        padding: 4px;
        font-size: 20px;
        color: gray;
        font-family: 'Libre Baskerville';
    }

    button {
        width: 250px;
        height: 55px;
        border-radius: 20px;
        background-color: black;
        color: rgb(223, 245, 247);
        font-size: 28px;
        margin-left: 26%;
        font-family: 'Libre Baskerville';
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
