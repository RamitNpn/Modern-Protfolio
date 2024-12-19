import styled from "styled-components";

export const WorkSliderWrapper = styled.div`
  padding: 20px 0;
  position:relative:
  z-index:1;


  .slider {
    height: 400px;
    ovverflow:hidden;
  }
  .workSliderItem {
    // background: red;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 400px;
  }
  @media (max-width: 1200px) {
    .slider {
      padding: 60px 0;
      padding-bottom: 400px;
    }
  }
  @media (max-width: 840px) {
    .slider {
      padding-top: 100px;
      padding-bottom: 400px;
    }
  }

  @media (max-width: 768px) {
    padding-top:50px;
      padding-bottom: 30px;
    .slider {
      padding-top:px;
      padding-bottom: px;
    }
  }
    @media (max-width: 680px) {
    padding-top:340px;
      padding-bottom: 30px;
    .slider {
      padding-top:px;
      padding-bottom: px;
    }
  }
     @media (max-width: 665px) {
    padding-top:400px;
      padding-bottom: 30px;
    .slider {
      padding-top:px;
      padding-bottom: px;
    }
  }
    
     @media (max-width: 556px) {
    padding-top:440px;
      padding-bottom: 30px;
    .slider {
      padding-top:px;
      padding-bottom: px;
    }
  }

  @media (max-width: 540px) {
      padding-top: 600px;
      padding-bottom: 60px;
    .slider {
      min-height: 240px;
      max-height: 100vh;
       padding-top: 40px;
      padding-bottom: 400px;
    }
  }
`;
