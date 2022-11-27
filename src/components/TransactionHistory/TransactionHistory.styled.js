import styled from 'styled-components';

export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  border-spacing: 0px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
`;

export const HeadCell = styled.th`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  text-align: center;
  background-color: rgb(90, 163, 211);
  padding: 10px;
  height: 20px;
`;

export const TableRow = styled.tr`
  background-color: rgb(255, 255, 255);
`;

export const TableCell = styled.td`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(134, 131, 131);
  min-width: 200px;
  text-align: center;
  padding: 10px;
  height: 20px;
  :first-child {
    text-transform: capitalize;
  }
`;
