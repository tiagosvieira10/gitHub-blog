import styled from "styled-components";

export const PostContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${props => props.theme['azul-700']};
  
  border-radius: 6px;

  margin-top: -5rem;

  header{
    color: ${props => props.theme['azul-100']};
  }

`