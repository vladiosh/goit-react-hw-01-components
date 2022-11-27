import styled from 'styled-components';

import { getRandomColor } from 'components/utils/getRandomColor';

export const Card = styled.section`
  background-color: ${props => props.theme.colors.white};
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  box-shadow: ${props => props.theme.shadows.first};
  margin-bottom: ${props => props.theme.space[6]}px;
`;

export const Title = styled.h2`
 font-family:${props => props.theme.fonts.heading};
 font-size: ${props => props.theme.fontSizes.m};
 font-weight: ${props => props.theme.fontWeights.heading};
 line-height: ${props => props.theme.lineHeights.heading};
 color: ${props => props.theme.colors.darkGrey};
 text-transform: uppercase;
 margin: ${props => props.theme.space[0]}px;
 display: flex;
 justify-content: center;
 padding-top: ${props => props.theme.space[5]}px;
 margin-bottom: ${props => props.theme.space[5]}px;
    
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
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[2]}px;
`;

export const Label = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.white};
`;
