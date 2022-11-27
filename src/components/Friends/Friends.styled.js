import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  padding-top: 32px;
  padding-bottom: 32px;
  width: 300px;
  background-color: white;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  padding: 8px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${props =>
    props.isOnline ? props.theme.colors.green : props.theme.colors.red};
  margin-right: 10px;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Name = styled.p`
  margin: 0;
  font-family: ${props => props.theme.fonts.body};
  font-size: 25px;
  font-weight: 700;
  line-height: 1.5;
`;
