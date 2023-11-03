import styled from "styled-components";
import TextCamp from "../TextCamp";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";


const SectionContainer = styled.section`
    justify-content:center;
    margin:80px 0;
    display:flex;
`

const FormContainer = styled.form`
    box-shadow: 8px 8px 16px rgba(0,0,0,0.08);
    background-color:#F2F2F2;
    border-radius:20px;
    padding:36px 64px;
    max-width:80%;
`

const TitleComponent = styled.h1`
`

const Form = (props) => {

    const teams = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [hole, setHole] = useState('')
    const [team, setTeam] = useState('')


    const onSubmit = (event) => {
        event.preventDefault();
        props.newRegisteredWorker({
            name,
            hole,
            image,
            team
        })
    }

    return(
        <SectionContainer>
            <FormContainer onSubmit={onSubmit}>
                <TitleComponent>Preencha os dados para criar o card do colaborador</TitleComponent>
                <TextCamp 
                essential={true} 
                label="Nome" 
                placeholder="Digite o nome"
                value={name}
                onChanged={value => setName(value)}/>

                <TextCamp 
                essential={true}
                label="Cargo" 
                placeholder="Digite o cargo"
                value={hole}
                onChanged={value => setHole(value)}/>

                <TextCamp 
                essential={true} 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                value={image}
                onChanged={value => setImage(value)}/>

                <DropdownList
                     label="Time" 
                     essential={true} 
                     itens={teams}
                     value={team}
                     onChanged={value => setTeam(value)}/>
                <Button text="Criar Card"/>
            </FormContainer>
        </SectionContainer>
    )
}

export default Form;