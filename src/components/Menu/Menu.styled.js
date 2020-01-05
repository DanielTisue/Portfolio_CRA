import styled from 'styled-components';

export const StyledMenu = styled.nav`

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000;
  height: 100vh;
  text-align: right;
  padding-right: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  z-index: 5;
  
 ul{
    list-style: none;

   li {
    text-transform: uppercase;
    padding: 2rem 2rem;
    color: #fff;
    transition: all 0.3s linear;
     
    p{
      font-family: 'fjallaone', sans-serif !important;
      font-size: 1.8rem !important;
    }

    p:hover {
      font-family: 'fjallaone', sans-serif !important;
      transform: scale(1.2) !important;
      font-weight: 400 !important; 
      cursor: pointer;
      color:  #83d0f2;
      transition: all 0.3s linear;
    }
    i.fas {
      padding-right: .6rem;
    }
    i.fas:hover { 
      color:  #83d0f2;
      transition: all 0.3s linear;
    }

  }

 }

    `;