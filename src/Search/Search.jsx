import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import InfiniteScroll from 'react-infinite';

import { createSelector } from 'reselect';

import { resourcesActions } from '../Resources';
import { filteredIdArray, bookSelector } from './SearchAction';
import SearchInput from './SearchInput.jsx';
import SearchItem from './SearchItem.jsx';

const Search = ({
    _bookSelector,
    _filteredIdArray,
    searchData,
    }) =>
    (
        <Box
            full="horizontal"
        >
            <SearchInput
                onChange={event => searchData(event.target.value)}
                style={{ width: '100%' }}
            />
            <InfiniteScroll
                useWindowAsScrollContainer
                elementHeight={40}
            >
                {
                    _filteredIdArray.map(cur => (
                        <SearchItem
                            key={cur}
                            item={_bookSelector[cur]}
                        />)
                    )
                }
            </InfiniteScroll>
        </Box>
    );

Search.propTypes = {
    _bookSelector: PropTypes.object.isRequired,
    _filteredIdArray: PropTypes.arrayOf(PropTypes.any).isRequired,
    searchData: PropTypes.func.isRequired,
};

const selectors = createSelector(
    [filteredIdArray, bookSelector],
    (_filteredIdArray, _bookSelector) => ({
        _filteredIdArray,
        _bookSelector,
    })
);

const mapStateToProps = (state) => {
    const { _filteredIdArray, _bookSelector } = selectors(state);
    return {
        _filteredIdArray,
        _bookSelector,
    };
};

const actionList = {
    searchData: resourcesActions.searchData,
};

export default connect(mapStateToProps, actionList)(Search);
