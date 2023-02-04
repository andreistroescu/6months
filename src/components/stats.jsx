import * as React from 'react';
import '../App.css';
import { useState } from 'react';

const initialStats = [{
  id: 0,
  name: 'Salary',
  count: 5200,
}, {
  id: 1,
  name: 'Wellbeing points',
  count: 5,
}, {
  id: 2,
  name: 'Initiative points',
  count: 2,
}];


function Stats() {
  const [stats, setStats] = useState(initialStats)

  function handleIncreaseClick(itemId) {
    setStats(stats.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          count: item.count + 1
        };
      } else {
        return item;
      }
    }))
  }

  function handleIncreaseSalary(percent) {
    setStats(stats.map(item => {
      if (item.name === 'Salary') {
        return {
          ...item,
          count: item.count + percent/100 * item.count
        };
      } else {
        return item;
      }
    }))
  }

  
  return (
    <div>
      {stats.map(item => (
        <div className='Stats' key={item.id}>
          {item.name}
          {' '}
          (<b>{item.count}</b>)
          <button onClick={() => {
            item.name === 'Salary' ? handleIncreaseSalary(5) : handleIncreaseClick(item.id);
          }}>
            +
          </button>
        </div>
      ))}
    </div>
    );
}

export default Stats;