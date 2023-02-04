import React from 'react';
import Header from './components/header.jsx';
import Button from './components/button.jsx';
import Stats from './components/stats.jsx';

function App() {
  return (
    <>
    <Header/>
    <Stats />
    <Button message="Start"/>
    </>
  );
}

export default App;













// export default function ShoppingCart() {
//   const [stats, setStats] = useState(initialStats)

//   function handleIncreaseClick(itemId) {
//     setStats(stats.map(item => {
//       if (item.id === itemId) {
//         return {
//           ...item,
//           count: item.count + 1
//         };
//       } else {
//         return item;
//       }
//     }))
//   }
//   return (
//     <ul>
//       {stats.map(item => (
//         <li key={item.id}>
//           {item.name}
//           {' '}
//           (<b>{item.count}</b>)
//           <button onClick={() => {
//             handleIncreaseClick(item.id);
//           }}>
//             +
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }