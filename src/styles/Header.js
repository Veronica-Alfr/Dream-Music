import styled from 'styled-components';

const ContainerHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 5%;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.9220063025210083) 0%, 
    rgba(11,12,32,0.9304096638655462) 35%, rgba(8,8,59,0.9304096638655462) 100%);

    a {
        margin: 2%;
        margin-top: 3.5%;
        color: white;
        font-family: 'Libre Baskerville';
        font-size: 1.2em;
    }

    header {
        margin: 2%;
        margin-top: 0.4%;
        font-family: 'Dancing Script';
        font-size: 1.2em;
    }

    img {
        width: 35%;
        margin: 5%;
    }
`;

export default ContainerHeader;
