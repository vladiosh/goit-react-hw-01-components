import styled from 'styled-components';

export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  border-spacing: ${props => props.theme.space[0]}px;
  box-shadow: ${props => props.theme.shadows.second};
`;

export const HeadCell = styled.th`
  font-family:  ${props => props.theme.fonts.body};
  font-size:  ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  text-align: center;
  background-color: ${props => props.theme.colors.tableHeaderColor};
  padding: ${props => props.theme.space[3]}px;
  height: 20px;
  :not(:last-child) {
    border-right: 2px solid ${props => props.theme.colors.white};
    border-top-color: ${props => props.theme.colors.white};
    border-bottom-color: ${props => props.theme.colors.white};
    border-left-color: ${props => props.theme.colors.white};
`;

export const TableRow = styled.tr`
  background-color: ${props => props.theme.colors.white};
  :nth-child(2n + 1) {
    background-color: ${props => props.theme.colors.tableCellColor};
  }
`;

export const TableCell = styled.td`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.darkGrey};
  min-width: 200px;
  text-align: center;
  padding: ${props => props.theme.space[3]}px;
  height: 20px;
  :first-child {
    text-transform: capitalize;
  }

  :not(:last-child) {
    border-right: 2px solid ${props => props.theme.colors.white};
    border-top-color: ${props => props.theme.colors.white};
    border-bottom-color: ${props => props.theme.colors.white};
    border-left-color: ${props => props.theme.colors.white};
  }
`;
