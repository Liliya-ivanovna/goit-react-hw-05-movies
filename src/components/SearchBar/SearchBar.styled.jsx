import styled from 'styled-components';

export const Div = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  padding-bottom: 50px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 88px;
  height: 46px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  border: none;
  font-size: 18px;
  color: black;
  &:is:hover {
    background-color: white;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 600px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 10px;
  border: 1px solid #060505;
  &:placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
