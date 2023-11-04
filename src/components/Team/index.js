import styled from "styled-components";
import Card from "../Card";

const SectionContainer = styled.section`
    text-align:center;
    padding:32px;
    background-color: #D9F7E9;
`

const TitleComponent = styled.h3`
    font-size:32px;
    border-bottom: 4px solid #57c278;
    display:inline-block;
    padding-bottom:8px;
`

const TeamContainer = styled.div`
    display:flex;
    justify-content:space-around;
    margin-top:32p;
    flex-wrap:wrap;
`

//display: inline-block para a borda ficar exatamente do tamanho do texto.

const Team = (props) => {
    return (
        (props.workers.length > 0) ? <SectionContainer style={{backgroundColor: props.secondColor}}>
            <TitleComponent style={{borderColor: props.color }}>
                {props.name}
            </TitleComponent>
            <TeamContainer>{props.workers.map( workers => <Card  color={workers.color} key={workers.name} name={workers.name} hole={workers.hole} image={workers.image}/>)}</TeamContainer>
        </SectionContainer> : ''
    )
}

export default Team;