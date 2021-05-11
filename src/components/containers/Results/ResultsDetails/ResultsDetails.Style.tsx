import styled from "styled-components";

export const Wrapper = styled.div`
    overflow-x: hidden;
    min-height: 100vh;
    background-color: #1A202C;
`;

export const Button = styled.button`
    display: flex;
    font-size: 18px;
    padding: 5px;
    background-color: transparent;
    cursor: pointer;
    margin: 10px 5px;
    text-decoration: underline;
    font-family: Balsamiq Sans;
    border: 0px transparent;
    transition: 0.3s;
    color: #ffffff;
    :hover  {
        color: #c5a6fa;
    }
`;

export const HeroContainer = styled.div`
    margin: 15px auto;
    align-items: center;
`;

export const ImgThumbnail = styled.img`
    height: 200px;
    width: 200px;
    border: 3px solid whitesmoke;
    border-radius: 10px;
`;

export const HeroName = styled.h1`
    color: white;
    margin: 20px auto;
    text-align: center;
    font-size: 30px;
    font-family: 'Luckiest Guy';
    color: #ffffff;
    text-shadow: -1px 4px 0 #000;
`;

export const HeroDescription = styled.p`
    font-size: 22px;
    color: white;
    width: 500px;
    margin: 0 auto;
    text-align: center;
    @media (max-width: 560px) {
        width: 350px;
    }
`;

export const NoDescription = styled.h4`
    border-radius: 10px;
    border: 2px solid #ff2d2d;
    background-color: #702f2f;
    color: #f30000;
    width: 210px;
    padding: 10px; 
    margin: 0 auto;
`;

export const CR = styled.p`
    text-align: center;
    font-size: 12px;
    color: white;
    text-shadow: -1px 1px 0 #000,
        0 0 3px #252525, 0 0 5px #ffffff,
            1px 1px 0 #bdbdbd,
            1px -1px 0 #757575,
            -1px -1px 0 #000;
`;