import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author={faker.name.firstName()} timeAgo="Today at 7:00PM" avatar={faker.image.avatar()} content={faker.lorem.sentence()} />
      <CommentDetail author={faker.name.firstName()} timeAgo="Today at 2:00AM" avatar={faker.image.avatar()} content={faker.lorem.sentence()} />
      <CommentDetail author={faker.name.firstName()} timeAgo="Yesterday at 5:00PM" avatar={faker.image.avatar()} content={faker.lorem.sentence()} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))