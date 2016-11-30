import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import { createSelector } from 'reselect';

import { searchIndexActions } from '../SearchIndex';
import { filteredIdArray, bookSelector } from './SearchAction';
import SearchInput from './SearchInput.jsx';
import SearchList from './SearchList.jsx';

import Toolbar from '../Componets/Toolbar.jsx';

const Search = ({
    _bookSelector,
    _filteredIdArray,
    searchData,
    translate,
    }) =>
    (
        <Box>
            <Toolbar
                title={translate.TITLE}
                showMenuIcon
            />
            <SearchInput
                onChange={event => searchData(event.target.value)}
                style={{ width: '100%' }}
                translate={translate}
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
    translate: PropTypes.object,
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
        translate: state.translation.translate.SEARCH,
    };
};

const actionList = {
    searchData: searchIndexActions.searchData,

};

export default connect(mapStateToProps, actionList)(Search);
