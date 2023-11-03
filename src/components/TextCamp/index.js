import styled from 'styled-components';

const MainContainer = styled.div`
    margin:24px 0;
`

const LabelComponent = styled.label`
    margin-bottom: 8px;
    font-size: 24px;
    display: block;
`

const InputComponent = styled.input`
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    box-sizing:  border-box;    
    background-color: #fff;
    font-size:24px;
    padding: 24px;
    border: none;
    width:100%;
`

const TextCamp = (props) => {
    
    const onTyped = (event) => {
        props.onChanged(event.target.value)
    }


    const modifiedPlaceholder = `${props.placeholder}...` 

    return(
        <MainContainer>
            <LabelComponent>{props.label}</LabelComponent>
            <InputComponent value = {props.value} onChange={onTyped} required={props.essential} placeholder={modifiedPlaceholder}/>
        </MainContainer>
    )
}

export default TextCamp