import { CircularProgress } from '@mui/material';
import React, { Component } from 'react';
import ContainerLoading from '../styles/Loading';

class Loading extends Component {
  render() {
    return (
      <ContainerLoading>
        <CircularProgress color="inherit" />
      </ContainerLoading>
    );
  }
}

export default Loading;
