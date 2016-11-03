//import styles
import 'grommet/scss/vanilla/index';

import { PropTypes } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

const toolbar = ({
    title,
    leftToolbar,
    }) =>
    (
        <Header>
            <Title>
                {Title}
            </Title>
        </Header>
    );

//<Toolbar>
//    <div className="left">
//        {leftToolbar}
//    </div>
//    <div className="center">{title}</div>
//</Toolbar>

toolbar.propTypes = {
    title: PropTypes.string.isRequired,
    leftToolbar: PropTypes.element,
};
export default toolbar;
