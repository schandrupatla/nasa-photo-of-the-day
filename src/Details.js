import React from 'react';
import styled, { keyframes }from 'styled-components'

const kf = keyframes`
  100% {
    opacity: 1;
  }
`

const StyledDetails = styled.div`
color:${pr => pr.theme.primaryColor};

}

@media (max-width: 550px) {
    width: 100%;
}
`
const Styledh1 = styled.h1`
color:${pr => pr.theme.primaryColor};
    font-size:4rem;
`
const Styledh4 = styled.h4`
color:${pr => pr.theme.dateColor};
    
`

const StyledDiv = styled.div`
width: 90%;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;

`    

const StyledP = styled.p`
color:${pr => pr.theme.secondaryColor};
    font-size:1.5rem;
    text-align: left;
`

const StyledTitle = styled.p`
font-size:1.5rem;
color: red;
`
const StyledImgDiv = styled.div`
    width ="100%";
    height ="600";

`
const StyledImg = styled.img`
    border-radius:1000px;
    &:hover{
        transform: scale(-1);
        transition: all 1s ease-in-out;
    }
    //transition: all .5s ease-in-out;
   // animation: ${kf} 1s ease-in-out forwards;
`


const StyledA = styled.a`
 &:hover{
    background-color: ${pr => pr.theme.hoverColor};
`

const Details = props =>{
    const{date, hdurl, title, explanation, copyright} = props;
    return (
        <StyledDetails>
        <>
        <div className ="Header">
            <Styledh1><span>🚀</span>NASA Astronomy Picture of the Day<span>🚀</span></Styledh1>
            <Styledh4>Date:{date}</Styledh4>
        </div>
        <section>
            <StyledImgDiv >  
                <StyledImg src= {hdurl}   alt="Nasa astronomy picture of the day" ></StyledImg>
                <StyledTitle> {title}</StyledTitle>
            </StyledImgDiv>
        </section>
        <div>
        </div>
        <StyledDiv>
            <StyledP> {explanation}</StyledP>
        </StyledDiv>
        <footer>
            <div>
            <StyledA href="https://www.nasa.gov/">
                <span> Click here for more information </span>
            </StyledA>
            </div>
        </footer>
        </>
        </StyledDetails>
    );

}

export default Details