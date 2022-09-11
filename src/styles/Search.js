import styled from 'styled-components';

const ContainerHeaderAndSearch = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Libre+Baskerville&display=swap');

    height: 100vh;
    width: 100vw;
    font-family: 'Libre Baskerville';
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.9220063025210083) 0%, 
    rgba(11,12,32,0.9304096638655462) 35%, rgba(8,8,59,0.9304096638655462) 100%);
    color: white;
`;

const ContainerSearch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.9220063025210083) 0%, 
    rgba(11,12,32,0.9304096638655462) 35%, rgba(8,8,59,0.9304096638655462) 100%);

    .headphone {
        width: 8%;
        margin-top: 0.5%;
    }

    form {
        display: flex;
        justify-content: flex-end;
        width: 95%;
    }

    input {
        width: 16%;
        height: 12px;
        border-radius: 8px;
        margin: 1%;
        padding: 0.4%;
        font-size: 16px;
        font-family: 'Libre Baskerville';
        box-shadow: 1px 1px 2px gray;
    }

    .search {
        margin-top: 1.2%;
    }
    
    section {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 2%;
        margin-left: 2.5%;
    }

    .containerAlbum {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3%;
        font-family: 'Libre Baskerville';
    }

    .containerAlbum p {
        font-size: 1.2em;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 1%;
        font-size: 0.7em;
        color: black;
        width: 17%;
        heigth: 13%;
        background: rgba(101, 105, 140, 0.7);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.2px);
        -webkit-backdrop-filter: blur(5.2px);
        border: 1px solid rgba(255, 255, 255, 0.27);
    }


    img {
        width: 100%;
        height: 70%;
        border-radius: 8px;
    }
`;

export default ContainerHeaderAndSearch;
export { ContainerSearch };
