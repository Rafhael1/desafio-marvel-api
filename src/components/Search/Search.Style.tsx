import styled from "styled-components"

export const Wrapper = styled.div `
    `;

export const Placer = styled.div `
      position: relative;
`;

export const SearchContainer = styled.form`
        border-radius: 15px;
        width: 250px;
        display: flex;
        background-color: rgb(235, 235, 235, 0.9);
        position: relative;
        padding: 5px 15px;
        margin: 0 auto;
    `;

export const SearchInput = styled.input `
        border: 0px;
        font-size: 16px;
        width: 100%;
        background: transparent;
        font-family: Balsamiq Sans;
        :focus{
            outline: none;
        }
    `;

export const Icon = styled.img `
        height: 25px;
        width: 25px;
        border: 2px solid rgba(43, 43, 43, 0.308);
        padding: 5px;
        border-radius: 50px;
        position: relative;
        transform: rotate(280deg);
        transition: 0.5s;
        :hover {
            border: 2px solid rgb(43, 43, 43);
            cursor: pointer;
        }
    `;