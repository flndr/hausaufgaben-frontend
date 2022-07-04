import styled from '@emotion/styled';
import React  from 'react';

interface Props {
    top : React.ReactNode;
    centerLeft : React.ReactNode;
    centerRight : React.ReactNode;
    centerCenter : React.ReactNode;
    bottom : React.ReactNode;
}

const Wrapper = styled.div`
  max-width      : 1200px;
  margin         : 0 auto;
  height         : 100%;
  display        : flex;
  flex-direction : column;
`;

const Center = styled.div`
  flex-grow        : 1;
  align-self       : stretch;
  width            : 100%;

  display          : flex;
  justify-content  : stretch;
  align-items      : stretch;
  height           : 100%;
  background-color : orange;
`;

const Column = styled.div`
  align-self : stretch;
  width      : 100%;
  height     : 100%;
`;

export const HolyGrailLayout = ( props : Props ) => {
    return <Wrapper>
        <div>{ props.top }</div>
        <Center>
            <Column>{ props.centerLeft }</Column>
            <Column>{ props.centerCenter }</Column>
            <Column>{ props.centerRight }</Column>
        </Center>
        <div>{ props.bottom }</div>
    </Wrapper>
};

