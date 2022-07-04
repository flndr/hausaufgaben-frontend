import React from 'react';

import styles from './DummyBlock.module.css';

interface Props {
    bg : string;
    maxHeight? : boolean;
    children? : React.ReactNode;
}

export const DummyBlock = ( props : Props ) => {
    
    const bg        = props.bg || false;
    const maxHeight = props.maxHeight || false;
    
    const classNames = [ styles.DummyBlock ];
    let style        = {};
    
    if ( bg ) {
        style = {
            backgroundColor : bg
        };
    }
    
    if ( maxHeight ) {
        classNames.push( styles.DummyBlockMaxHeight );
    }
    
    return <div className={ classNames.join( ' ' ) } style={ style }>
        { props.children }
    </div>
}
