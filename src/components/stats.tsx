import * as React from 'react';
import '../App.css';

let salary = 5200;
let rent = 1800;
let bills = 500;
let money =+ salary;
let wellbeingPoints = 6;
let month = 1;

function Stats() {
    return (
        <div className='Stats'>
          <p className='Paragraph'>Salary: {salary}</p>
          <p className='Paragraph'>Rent: {rent}</p>
          <p className='Paragraph'>Bills: {bills}</p>
          <p className='Paragraph'>Money: {money}</p>
          <p className='Paragraph'>Wellbeing points: {wellbeingPoints}</p>
          <p className='Paragraph'>Month number: {month}</p>
        </div>
      );
}

export default Stats;