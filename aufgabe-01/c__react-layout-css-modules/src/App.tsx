import React from 'react';

import { DummyBlock }      from 'Components/DummyBlock/DummyBlock';
import { HolyGrailLayout } from 'Components/HolyGrailLayout/HolyGrailLayout';

export const App = () => {
    
    const Top    = () => <DummyBlock bg={ 'red' }>Content-Top</DummyBlock>;
    const Bottom = () => <DummyBlock bg={ 'red' }>Content-Bottom</DummyBlock>;
    const Left   = () => <DummyBlock bg={ 'cornflowerblue' } maxHeight={ true }>Content-Left</DummyBlock>;
    const Right  = () => <DummyBlock bg={ 'royalblue' } maxHeight={ true }>Content-Right</DummyBlock>;
    const Center = () => <DummyBlock bg={ 'powderblue' } maxHeight={ true }>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center<br/>
        Content-Center
    </DummyBlock>
    
    return <HolyGrailLayout
        top={ <Top/> }
        centerLeft={ <Left/> }
        centerCenter={ <Center/> }
        centerRight={ <Right/> }
        bottom={ <Bottom/> }
    />;
}

export default App;
