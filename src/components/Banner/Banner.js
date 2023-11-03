import styled from "styled-components"

const HeaderComponent = styled.header`
    background-color:#6278f7;
    text-align:center;
`

const ImageComponent = styled.img`
    max-width:100%;
`

function Banner() {
    return (
        <HeaderComponent>
            <ImageComponent src="/imgs/banner.png"
            alt="Banner prnicipal da página do Organo"/>
        </HeaderComponent>
    )
}

export default Banner;