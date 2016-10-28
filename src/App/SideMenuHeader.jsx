import { PropTypes } from 'react';
import { ListHeader } from 'react-onsenui';
import Toolbar from './Toolbar.jsx';


const SideMenuHeader = ({
    title,
    }) =>
    (
        <ListHeader class="navigation-bar">
            <Toolbar title={title} />
        </ListHeader>
    );

SideMenuHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SideMenuHeader;
