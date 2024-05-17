import React from 'react';
import Card from '../Card/Card';
const Lists = (props) => {
  return (
    <>
      { props.userInfo.length > 0 ?
        (<>
          { props.userInfo.map((user) =>
          (<Card css={ "card-mt" } key={ user.email }>
            <div className='list' >
              <p>Name : { user.name }</p>
              <p>Address : { user.address }</p>
              <p>Email : { user.email }</p>
            </div>
          </Card>
          )) }
        </>)
        :
        <>
          <Card css={ "card-mt" }>
            <p>Add a new user</p>
          </Card>
        </>

      }
    </>
  );
};

export default Lists;
