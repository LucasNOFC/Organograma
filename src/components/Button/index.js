import styled from "styled-components";

const ButtonComponent = styled.button`
    background-color: #6278F7;
    border-radius: 10px;
    font-weight:  700;
    font-size:  18px;
    cursor: pointer;
    margin: 32px 0;
    padding: 32px;
    border: none;
    color: #fff;

    &:hover{
        color: #95ffd4;
    }
`

const Button = (props) => {
    return (
        <ButtonComponent>
            {props.text}
        </ButtonComponent>
    )
}

export default Button;