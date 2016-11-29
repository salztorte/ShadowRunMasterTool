import React, { PropTypes } from 'react';

import List from 'grommet/components/List';

import SearchItem from './SearchItem.jsx';

import InfiniteScroll from 'react-infinite';

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
                        <SearchItem
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
