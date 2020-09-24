import React from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

export default (props) => {
  return (
    <Card style={{ margin: '1vh 0', padding: '50px' }}>
      <CardContent>
        <Typography variant='h2'>WAKI Japanese BBQ Dining</Typography>
        <Typography variant='h4'>Casual Dining - Jepang, Barbekyu</Typography>
      </CardContent>
      <CardActions>
        <Button style={{ backgroundColor: '#3F51B6', color: '#fff' }}>
          Dapatkan potongan 25%
        </Button>
      </CardActions>
    </Card>
  );
};
