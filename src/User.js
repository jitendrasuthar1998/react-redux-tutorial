import React from 'react';

const User = (props) =>
{
  const { data } = props;
  return (
    <div>
      <h1>User Component</h1>
      <h4>Name is : {data.name}</h4>
      <h4>Age is : {data.age}</h4>
      <h4>City is : {data.city}</h4>
    </div>
  )
};

export default User;
