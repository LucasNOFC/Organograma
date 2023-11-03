import styled from "styled-components";
import TextCamp from "../TextCamp";
import DropdownList from "../DropdownList";
import Button from "../Button";


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

const Form = () => {

    const teams = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return(
        <SectionContainer>
            <FormContainer>
                <TitleComponent>Preencha os dados para criar o card do colaborador</TitleComponent>
                <TextCamp label="Nome" placeholder="Digite o nome"/>
                <TextCamp label="Cargo" placeholder="Digite o cargo"/>
                <TextCamp label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropdownList label="Time" itens={teams}/>
                <Button text="Criar Card"/>
            </FormContainer>
        </SectionContainer>
    )
}

export default Form;