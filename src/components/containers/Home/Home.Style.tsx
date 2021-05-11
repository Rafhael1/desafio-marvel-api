import styled from 'styled-components';

import Image from '../../../assets/images/marvel.jpeg'

export const Wrapper = styled.div`
        overflow-y: hidden;
        overflow-x: hidden;
        max-height: 100vh;
        background-image: url(${Image});
        background-repeat: no-repeat;
        background-size: cover;     
        height: 100vh;
    `;

export const Container = styled.div`
        margin: 0vh auto;
        text-align: center;
    `;

export const Logo = styled.h1`
        position: relative;
        font-size: 60px;
        font-family: 'Luckiest Guy';
        color: #ffffff;
        margin: 100px auto 20% auto;
        text-shadow: -1px 1px 0 #000,
        0 0 3px #252525, 0 0 5px #ffffff,
            1px 1px 0 #000,
            1px -1px 0 #000,
            -1px -1px 0 #000;
    `;

export const CR = styled.p`
    text-align: center;
    font-size: 12px;
    position: relative;
    bottom: 1vh;
    top: 25vh;
    color: white;
    text-shadow: -1px 1px 0 #000,
        0 0 3px #252525, 0 0 5px #ffffff,
            1px 1px 0 #bdbdbd,
            1px -1px 0 #757575,
            -1px -1px 0 #000;
`;