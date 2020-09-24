import React from 'react';
import { Button, Jumbotron } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>Covid Info</h1>
        <p className='lead'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <hr className='my-2'></hr>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
          dignissimos omnis? Optio repudiandae quasi at, praesentium molestiae
          doloribus, voluptatem quod deleniti laudantium labore odit doloremque
          ab deserunt quidem natus! Possimus! Ea voluptas voluptatibus, quaerat
          ipsum assumenda accusamus ab ex nobis.
        </p>
        <Button color='primary'>Get Info</Button>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
