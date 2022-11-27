import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.space[6]}px;
  padding-top: ${props => props.theme.space[5]}px;
  padding-bottom: ${props => props.theme.space[5]}px;
  width: 300px;
  background-color: ${props => props.theme.colors.white}; ;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  padding: ${props => props.theme.space[3]}px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.second};
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;

  border-radius: ${props => props.theme.radii.round};
  background-color: ${props =>
    props.isOnline ? props.theme.colors.green : props.theme.colors.red};
  margin-right: ${props => props.theme.space[3]}px;
`;

export const Avatar = styled.img`
  margin-right: ${props => props.theme.space[3]}px;
`;

export const Name = styled.p`
  margin: ${props => props.theme.space[0]}px;
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
`;
