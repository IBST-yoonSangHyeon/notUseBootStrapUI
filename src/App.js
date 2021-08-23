import React, { Component } from 'react';
import './app.css';
import Customer from './components/customer';

// const customer = {
//   id: 1,
//   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png',
//   name: '홍길동',
//   birthday: '961222',
//   gender: '남자',
//   job : '학생',
// }

const customer = [
  {
    id: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png',
    name: '홍길동',
    birthday: '961222',
    gender: '남자',
    job : '학생',
  },
  {
    id: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png',
    name: '임윤아',
    birthday: '961222',
    gender: '여자',
    job : '가수',
  },
  {
    id: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png',
    name: '마크로',
    birthday: '961222',
    gender: '남자',
    job : '텔런트',
  },
];

class  App extends Component {
  render() {
    return (
      <div>
        {
          customer.map((customer) => {
            return <Customer
                    id={customer.id}
                    image={customer.image}
                    name={customer.name}
                    birthday={customer.birthday }
                    gender={customer.gender }
                    job={customer.job }
                  />
          })
        }
      
      
      </div>
    );
}
}

export default App;
