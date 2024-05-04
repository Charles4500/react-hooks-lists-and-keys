import React from 'react';

function Objects() {
  const users = [
    { id: 1, firstName: 'Duane ', lastName: ' Watson' },
    { id: 2, firstName: 'Charles ', lastName: ' Johnson' },
  ];
  const userHeadings = users.map((user) => {
    return (
      <div key={user.id}>
        {user.firstName}
        {user.lastName}
      </div>
    );
  });
  return (
    <div>
      <ul>
        <li>{userHeadings}</li>
      </ul>
    </div>
  );
}

export default Objects;
