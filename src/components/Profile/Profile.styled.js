import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.space[6]}px;
  width: 300px;
  border-radius: ${props => props.theme.radii.second};
  box-shadow: ${props => props.theme.shadows.first};
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: ${props => props.theme.space[5]}px;
  padding-bottom: ${props => props.theme.space[5]}px;
`;

export const UserPhoto = styled.img`
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const UserName = styled.p`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.heading};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primaryText};
  margin: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[2]}px;
`;

export const UserTag = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.darkGrey};
  margin: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[2]}px;
`;

export const UserLocation = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.heading};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.darkGrey};
  margin: ${props => props.theme.space[0]}px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  border-top: ${props => props.theme.borders.normal}
    ${props => props.theme.colors.darkGrey};
  background: ${props => props.theme.colors.lightGray};
`;

export const Stats = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100px;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  &:not(:last-child) {
    border-right: ${props => props.theme.borders.normal}
      ${props => props.theme.colors.darkGrey};
  }
`;

export const Label = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.darkGrey};
  margin: ${props => props.theme.space[0]}px;
`;

export const Quantity = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primaryText};
`;
