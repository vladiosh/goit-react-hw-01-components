import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: white;
  margin-left: auto;
  margin-right: auto;

  width: 300px;
  border-radius: 10px;
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
    rgb(0 0 0 / 30%) 0px 1px 3px -1px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 35px;
  padding-bottom: 35px;
`;

export const UserPhoto = styled.img`
  margin-bottom: 10px;
`;

export const UserName = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: 500;
  line-height: 1.125;
  color: rgb(0, 0, 0);
  margin: 0;
  margin-bottom: 5px;
`;

export const UserTag = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 200;
  line-height: 1.125;
  color: ${props => props.theme.colors.darkGrey};
  margin: 0;
  margin-bottom: 5px;
`;

export const UserLocation = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 500;
  line-height: 1.125;
  color: ${props => props.theme.colors.darkGrey};
  margin: 0;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgb(183, 174, 174);
  background: rgba(177, 212, 215, 0.52);
`;

export const Stats = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100px;
  padding-top: 14px;
  padding-bottom: 14px;
  &:not(:last-child) {
    border-right: 1px solid rgb(183, 174, 174);
  }
`;

export const Label = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: 200;
  line-height: 1.125;
  color: ${props => props.theme.colors.darkGrey};
  margin: 0;
`;

export const Quantity = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: 700;
  line-height: 1.5;
  color: rgb(0, 0, 0);
`;
