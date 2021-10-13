import styled from 'styled-components'
import elese from '../../img/elese.svg'


export const Hero = styled.div`

`

export const MyImage = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)), url(${elese});
    background-repeat: no-repeat;
    margin: 12rem 0 5rem 0;
    background-size: cover;
    height: 25vw;
    
    @media screen and (max-width:450px){
        margin: 11rem 0 4rem 0;
    }
    @media screen and (max-width:380px){
        margin: 7rem 0 3rem 0;
    }
`

