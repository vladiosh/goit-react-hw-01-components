import styled from 'styled-components';

export const Title = styled.h2`
font-family:${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: 700;
    line-height: 1.125;
    color: rgb(134, 131, 131);
    margin-bottom: 32px;
    text-transform: uppercase;
}`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
`;
