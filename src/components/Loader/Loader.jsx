import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderDiv>
      <ThreeCircles
        height="70"
        width="70"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </LoaderDiv>
  );
}
