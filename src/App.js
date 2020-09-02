import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any/1',
  'name': '홍길동',
  'birthday': '880822',
  'gender': '남자',
  'job': '직장인'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any/2',
  'name': '아무개',
  'birthday': '801203',
  'gender': '남자',
  'job': '백수'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any/3',
  'name': '김모모',
  'birthday': '940207',
  'gender': '여자',
  'job': '대학생'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
