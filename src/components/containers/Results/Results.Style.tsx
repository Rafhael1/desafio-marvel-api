import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #1A202C;
    overflow-x: hidden;
`;

export const HeroContainer = styled.section`
    margin: 25px auto;
    display: flex;
    width: 500px;
    border: none;
    box-shadow: 1px 4px 8px black;
    background-color: rgb(40, 46, 59);
    padding: 30px;
    border-radius: 10px;
    @media (max-width: 560px) {
        max-width: 300px;
        padding: 20px;
        max-height: 180px;
    }
    @media (max-width: 321px) {
        width: 250px;
    }
`;

export const ContentContainer = styled.section`
    display: block;
`;

export const ImgThumbnail = styled.img`
    height: 100px;
    width: 100px;
    border: 3px solid whitesmoke;
    border-radius: 10px;
`;

export const HeroName = styled.h1`
    color: white;
    position: relative;
    margin: 0 auto;
    text-align: center;
    top: 15px;
    left: 15px;
    font-size: 30px;
    font-family: 'Luckiest Guy';
    color: #ffffff;
    text-shadow: -1px 4px 0 #000;
    @media (max-width: 321px) {
        font-size: 22px;
    }
`;

export const LearnMore = styled.button`
    background-color: transparent;
    cursor: pointer;
    position: relative;
    text-decoration: underline;
    margin: 50px 15px 10px 95px;
    font-family: Balsamiq Sans;
    font-size: 20px;
    border: 0px transparent;
    transition: 0.3s;
    color: #ffffff;
    display: flex;
    :hover  {
        color: #baa5df;
    }
    @media (max-width: 560px) {
        margin: 25px 10px 20px 30px;
    }
`;

export const CR = styled.p`
    text-align: center;
    font-size: 12px;
    position: relative;
    top: 20px;
    color: white;
    text-shadow: -1px 1px 0 #000,
        0 0 3px #252525, 0 0 5px #ffffff,
            1px 1px 0 #bdbdbd,
            1px -1px 0 #757575,
            -1px -1px 0 #000;
`;