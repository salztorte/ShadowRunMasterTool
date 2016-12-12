//@flow
import React, { PropTypes } from 'react';
import InfiniteScroll from 'react-infinite';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';


const SearchList: Function = ({
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
                        <ListItem
                            justify='between'
                            key={cur}
                        >
                            <span>
                                {bookSelector[cur].term}
                            </span>
                            <span className='secondary'>
                                {bookSelector[cur].pages}
                            </span>
                        </ListItem>
                    ))
                }
            </InfiniteScroll>
        </List>
    );

SearchList.propTypes = {
    bookSelector: PropTypes.object.isRequired,
    filteredIdArray: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SearchList;
