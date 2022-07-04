import React from 'react';

import styles from './HolyGrailLayout.module.css';

interface Props {
    top : React.ReactNode;
    centerLeft : React.ReactNode;
    centerRight : React.ReactNode;
    centerCenter : React.ReactNode;
    bottom : React.ReactNode;
}

export const HolyGrailLayout = ( props : Props ) => {
    return <>
        <div className={ styles.Layout_Wrapper }>
            
            <div>
                { props.top }
            </div>
            
            <div className={ styles.Layout_Center }>
                <div className={ styles.Layout_Center_Left }>
                    { props.centerLeft }
                </div>
                <div className={ styles.Layout_Center_Center }>
                    { props.centerCenter }
                </div>
                <div className={ styles.Layout_Center_Right }>
                    { props.centerRight }
                </div>
            </div>
            
            
            <div className="Layout_Bottom">
                { props.bottom }
            </div>
        
        </div>
    
    </>
};
