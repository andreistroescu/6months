import React from 'react';
import Header from './components/header.jsx';
import Button from './components/button.jsx';
// import Stats from './components/stats.jsx';
import { useState } from 'react';

const initialStats = [{
  id: 0,
  name: 'Salary',
  count: 1,
}, {
  id: 1,
  name: 'Wellbeing points',
  count: 5,
}, {
  id: 2,
  name: 'Initiative points',
  count: 2,
}];

function App() {
  // const [salary, setSalary] = 0
  const [stats, setStats] = useState(initialStats)

  function handleIncreaseClick(productId) {
    setStats(stats.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }
  return (
    <>
    <Header/>
    <div>
      {stats.map(product => (
        <div style={{ padding: '20px'}} key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </div>
      ))}
    </div>

    <Button message="Start"/>
    </>

  );

  // return (
  //   <>
  //     <Header/>
  //     <Stats/>
  //     <Button message="Start"/>
  //   </>
  // );
}

export default App;



// export default function ShoppingCart() {
//   const [stats, setStats] = useState(initialStats)

//   function handleIncreaseClick(productId) {
//     setStats(stats.map(product => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           count: product.count + 1
//         };
//       } else {
//         return product;
//       }
//     }))
//   }
//   return (
//     <ul>
//       {stats.map(product => (
//         <li key={product.id}>
//           {product.name}
//           {' '}
//           (<b>{product.count}</b>)
//           <button onClick={() => {
//             handleIncreaseClick(product.id);
//           }}>
//             +
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }