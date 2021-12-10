import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 46px;

  font-weight: 700;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.primary};
  border:1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;

  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 5000;

  transition-duration: .6s;

  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    opacity: 0.4;
  }
`;