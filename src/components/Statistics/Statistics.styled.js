import styled from 'styled-components';

import { getRandomColor } from 'components/utils/getRandomColor';

export const Card = styled.section`
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
    rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  margin-bottom: 60px;
`;

export const Title = styled.h2`
font-family:${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: 500;
    line-height: 1.125;
    color: rgb(134, 131, 131);

    text-transform: uppercase;
    margin: 0px;
    display: flex;
    justify-content: center;
    padding-top: 32px;
    margin-bottom: 32px;
    
}`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  background-color: ${getRandomColor};
  align-items: center;
  flex-direction: column;
  width: calc(80px);
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const Label = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 400;
  line-height: 1.5;
  color: white;
`;

export const Percentage = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 400;
  line-height: 1.5;
  color: white;
`;
