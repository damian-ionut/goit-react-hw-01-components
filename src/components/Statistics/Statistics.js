import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const generateColor = () => {
  const color = {
    red: Math.round(Math.random() * 255),
    green: Math.round(Math.random() * 255),
    blue: Math.round(Math.random() * 255),
    alpha: 0.5
  };

  return `rgba(${color.red},${color.green},${color.blue},${color.alpha})`;
};

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.container}>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stats_list}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={css.stats}
                key={id}
                style={{ backgroundColor: generateColor() }}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
};