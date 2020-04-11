import React from 'react';
import { Layout as MainBodyAnt} from 'antd';


const MainBody = (props) => {
    return (
        <MainBodyAnt>
            {props.children}
        </MainBodyAnt>
    );
}



export default MainBody;