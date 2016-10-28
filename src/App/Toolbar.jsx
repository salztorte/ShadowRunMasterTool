import { PropTypes } from 'react';
import { Toolbar } from 'react-onsenui';

const toolbar = ({
    title,
    leftToolbar,
    }) => (
    <Toolbar>
        <div className="left">
            {leftToolbar}
        </div>
        <div className="center">{title}</div>
    </Toolbar>
);

toolbar.propTypes = {
    title: PropTypes.string.isRequired,
    leftToolbar: PropTypes.element,
};
export default toolbar;
