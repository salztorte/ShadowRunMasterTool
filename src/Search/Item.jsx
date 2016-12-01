import React, { PropTypes } from 'react';

import ListItem from 'grommet/components/ListItem';


const Item = ({
    item,
    }) =>
    (
        <ListItem
            justify='between'
        >
            <span>
                {item.term}
            </span>
            <span className='secondary'>
                {item.pages}
            </span>
        </ListItem>
    );


Item.propTypes = {
    item: PropTypes.any.isRequired,
};

export default Item;
