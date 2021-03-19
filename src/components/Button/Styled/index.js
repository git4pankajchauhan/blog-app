import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid transparent;
  background-color: ${({ color }) => color || 'transparent'};
  color: #fff;
  padding: 0.7rem 2rem;
  transition: 0.3s ease-in;
  cursor: pointer;
  height: 35px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 2px;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    border: 1px solid ${({ color }) => color || 'transparent'};
    color: ${({ color }) => color || 'none'};
    background-color: transparent;
  }
`;
