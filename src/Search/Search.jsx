import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import { createSelector } from 'reselect';

import { searchIndexActions } from '../SearchIndex';
import { filteredIdArray, bookSelector } from './SearchAction';
import SearchInput from './SearchInput.jsx';
import SearchList from './SearchList.jsx';

const Search = ({
    _bookSelector,
    _filteredIdArray,
    searchData,
    }) =>
    (
        <Box>
            <SearchInput
                onChange={event => searchData(event.target.value)}
                style={{ width: '100%' }}
            />
            <SearchList
                bookSelector={_bookSelector}
                filteredIdArray={_filteredIdArray}
            />
        </Box>
    );

Search.propTypes = {
    _bookSelector: PropTypes.object.isRequired,
    _filteredIdArray: PropTypes.arrayOf(PropTypes.any).isRequired,
    searchData: PropTypes.func.isRequired,
}
;

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
    searchData: searchIndexActions.searchData,
};

export default connect(mapStateToProps, actionList)(Search);
