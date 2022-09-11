import styled from 'styled-components';

const ContainerAlbum = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.9220063025210083) 0%, 
    rgba(11,12,32,0.9304096638655462) 35%, rgba(8,8,59,0.9304096638655462) 100%);

    .album {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 1%;
        font-size: 1em;
        color: black;
        width: 33%;
        heigth: 28%;
        background: rgba(101, 105, 140, 0.7);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.2px);
        -webkit-backdrop-filter: blur(5.2px);
        border: 1px solid rgba(255, 255, 255, 0.27);
    }
`;

export default ContainerAlbum;
