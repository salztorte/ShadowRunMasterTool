import React, { PropTypes } from 'react';

import ListItem from 'grommet/components/ListItem';


const SearchItem = ({
    item,
    }) =>
    (
        <ListItem
            justify="between"
            style={{
                backgroundPosition : 'initial',
            }}
        >
            <span>
                {item.term}
            </span>
            <span className="secondary">
                {item.pages}
            </span>
        </ListItem>
    );


//const SearchItem = ({
//    item,
//    }) =>
//    (
//        <Box
//            separator="bottom"
//            direction="row"
//            texture={false}
//            pad={{
//                vertical: 'small',
//                horizontal: 'small',
//            }}
//        >
//            <Columns>
//
//            </Columns>
//        </Box>
//    );
//
//<Box
//>
//    {item.term}
//</Box>
//<Box
//texture={""}
//    >
//
//    {item.pages}
//</Box>


SearchItem.propTypes = {
    item: PropTypes.any.isRequired,
};

export default SearchItem;
