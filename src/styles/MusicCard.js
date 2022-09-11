import styled from 'styled-components';

const ContainerMusicCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2%;

    .audioAndCheckbox {
        display: flex;
        width: 110%;
        justify-content: space-between;
        padding: 1%;
    }

    label {
        margin-top: 5%;
    }
`;

export default ContainerMusicCard;