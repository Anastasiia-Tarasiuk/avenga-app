import styled from "@emotion/styled";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export const Video = styled.video`
  width: 270px;
  height: 150px;

  @media screen and (min-width: 768px) {
    width: 620px;
    height: 350px;
  }
  
  @media screen and (min-width: 1024px) {
    width: 950px;
    height: 540px;
  }
`