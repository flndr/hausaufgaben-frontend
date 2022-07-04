import styled from '@emotion/styled';
import React  from 'react';

interface Props {
    bg : string;
    maxHeight? : boolean;
    children? : React.ReactNode;
}

export const DummyBlock = styled.div<Props>`
  padding : 2rem;
  color   : white;
  height  : ${ p => p.maxHeight ? '100%' : 'auto' };
  background-color:  ${ p => p.bg || 'none' };
`;
