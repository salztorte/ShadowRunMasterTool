import { PropTypes } from 'react';
import { ListItem } from 'react-onsenui';


const SideMenuItem = ({
    title,
    onClick,
    }) =>
    (
        <ListItem
            tappable
            onClick={onClick}
        >
            <div className="myListItem">
                {title}
            </div>
        </ListItem>
    );

SideMenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SideMenuItem;
