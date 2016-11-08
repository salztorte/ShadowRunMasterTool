import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';

const SearchItem = ({
    item,
    }) =>
    (
        <Box
            separator="bottom"
            direction="row"
            pad={{
                vertical: 'small',
                horizontal: 'small',
            }}
        >
            <Box
                textAlign="left"
                style={{
                    width: '50%',
                }}
            >
                {item.term}
            </Box>
            <Box
                textAlign="right"
                style={{
                    width: '50%',
                }}
            >
                {item.pages}
            </Box>
        </Box>
    );


//<ListItem style={{ borderTop: 'none' }}>
//    <Row className="myListItem">
//        <Col width="50%" verticalAlign="center"> {item.term} </Col>
//        <Col width="50%" verticalAlign="center">
//            {item.pages}
//        </Col>
//    </Row>
//</ListItem>

SearchItem.propTypes = {
    item: PropTypes.any.isRequired,
};

export default SearchItem;
