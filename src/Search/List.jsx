import React, { PropTypes } from 'react';
import InfiniteScroll from 'react-infinite';
import List from 'grommet/components/List';

import Item from './Item.jsx';

const SearchList = ({
    bookSelector,
    filteredIdArray,
    }) =>
    (
        <List>
            <InfiniteScroll
                useWindowAsScrollContainer
                elementHeight={40}
            >
                {
                    filteredIdArray.map(cur => (
                        <Item
                            key={cur}
                            item={bookSelector[cur]}
                        />)
                    )
                }
            </InfiniteScroll>
        </List>
    );

SearchList.propTypes = {
    bookSelector: PropTypes.object.isRequired,
    filteredIdArray: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SearchList;
