import styled from "styled-components";

const LabelComponent = styled.label`
    margin-bottom:8px;
    font-size:24px;
    display:block;
`

const SelectComponent = styled.select`
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;    
    background-color:#fff;
    font-size:24px;
    padding: 24px;
    border: none;
    width:100%;
`

const OptionComponent = styled.option`
`


const DropdownList = (props) => {
    return (
        <div>
            <LabelComponent> {props.label} </LabelComponent>
            <SelectComponent onChange={event => props.onChanged(event.target.value)} required={props.required} value={props.value}>
                <option value=''></option>
                {props.itens.map(item => {
                    return <OptionComponent required={props.essential} key={item}>{item}</OptionComponent>
                })}
            </SelectComponent>
        </div>
    )
}

export default DropdownList;