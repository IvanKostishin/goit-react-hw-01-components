import './Statistics.css';
import PropTypes from 'prop-types';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title ? <h2 className="title">{title}</h2> : null}

    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
            style={{ backgroundColor: getRandomColor() }}
            className="stat-item"
            key={id}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;
