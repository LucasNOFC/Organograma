import styled from "styled-components"

const HeaderComponent = styled.header`
    text-align:center;
    background-color:#6278f7;
`

const ImageComponent = styled.img`
    max-width:100%;
`
const Banner = () => {
    return (
        <HeaderComponent>
            <ImageComponent src="/imgs/banner.png"
            alt="Banner prnicipal da página do Organo"/>
        </HeaderComponent>
    )
}

export default Banner;