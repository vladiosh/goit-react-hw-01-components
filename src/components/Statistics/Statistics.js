import PropTypes from 'prop-types';

import {
  Title,
  List,
  Item,
  Card,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ stats, title = null }) {
  return (
    <Card>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(el => {
          return (
            <Item key={el.id}>
              <Label>{el.label}</Label>
              <Percentage>{el.percentage}</Percentage>
            </Item>
          );
        })}
      </List>
    </Card>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
