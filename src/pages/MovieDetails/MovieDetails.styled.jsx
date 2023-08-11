import { BsFillPersonVcardFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NoPoster = styled(BsFillPersonVcardFill)`
  width: 450px;
  height: auto;
  object-fit: cover;
  color: #a8cee7;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;
`;
export const Button = styled.button`
  width: 400px;
  border: none;
  background: #dddbdb;
  font-weight: 500;
  font-size: 20px;
`;
export const Flex = styled.div`
  display: flex;
  column-gap: 30px;
  background: #dddbdb;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  border: 1px solid #797c7c;
  background: #f4f7f8;
`;
export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 900;
  font-size: 20px;
  &.active {
    color: red;
  }
`;
