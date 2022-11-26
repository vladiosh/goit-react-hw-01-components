// import PropTypes from 'prop-types';

import { Title, List, Item } from './Statistics.styled';

export default function Statistics({ stats, title = null }) {
  return (
    <section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(el => {
          return (
            <Item key={el.id}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}</span>
            </Item>
          );
        })}
      </List>
    </section>
  );
}

// Statistics.propTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };
