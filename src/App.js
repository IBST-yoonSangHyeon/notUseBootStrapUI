import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </div>
    );
}
}

export default App;
