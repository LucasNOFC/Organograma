import styled from "styled-components";

const CardContainer = styled.div`
    width:200px;
`

const CardComponentLogo = styled.div`
    background-color: #F0F0F0;
    border-radius: 10px 10px 0 0;
`

const CardComponentInformation = styled.div`
background: #FFFFFF;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
border-radius: 0px 0px 10px 10px;
padding-top: 90px;
padding-bottom: 40px;
`

const CardComponentImage = styled.img`
    width:100px;
    border-radius:50%;
    position:relative;
    botton: -50px;
`

const NameTextComponent = styled.h4`
color: #6278F7;
font-size: 18px;
line-height: 22px;
font-weight: bold;
margin-bottom: 8px;
`

const HoleTextComponent = styled.h5`
font-size: 18px;
line-height: 22px;
color: #212121;
padding: 0 16px;
`


const Card = (props) => {
    return(
        <CardContainer>
            <CardComponentLogo style= {{backgroundColor: props.color}}>
                <CardComponentImage src={props.image} alt={props.name}/>
            </CardComponentLogo>

            <CardComponentInformation>
                <NameTextComponent>
                    {props.name}
                </NameTextComponent>

                <HoleTextComponent>
                    {props.hole}
                </HoleTextComponent>
            </CardComponentInformation>
        </CardContainer>
    )
}

export default Card;