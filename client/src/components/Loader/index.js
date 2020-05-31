import React from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Loader = () => (
    <Spinner
      type="ThreeDots"
      color="#13138a"
      height={50}
      width={50}
      timeout={3000}
    />
);