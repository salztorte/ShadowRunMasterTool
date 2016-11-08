import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import ReactList from 'react-list';


import { createSelector } from 'reselect';

import { connector } from '../tools';
import { resourcesActions } from '../Resources';
import { filteredIdArray, bookSelector } from './SearchAction';
import SearchInput from './SearchInput.jsx';
import SearchItem from './SearchItem.jsx';

const Search = ({
    _bookSelector,
    _filteredIdArray,
    searchData,
    }) => {
    const filteredSize = _filteredIdArray.size || _filteredIdArray.length;
    return (
        <Box
            full="horizontal"
        >
            <SearchInput
                onChange={event => searchData(event.target.value)}
                style={{ width: '100%' }}
            />
            <div style={{ overflow: 'auto' }}>

            </div>
        </Box>
    );
};

//<ReactList
    //                    itemRenderer={(index, key) => (
    //                        <SearchItem
    //                            key={key}
    //                            item={_bookSelector[_filteredIdArray[index]]}
    //                        />
    //                    )}
    //                    length={filteredSize}
    //                    type="uniform"
    //                />


//<section style={{ textAlign: 'center' }}>
//    <SearchInput
//        onChange={event => searchData(event.target.value)}
//    />
//    <LazyList
//        className="myList"
//        length={filteredSize}
//        renderRow={index => (
//                    <SearchItem key={index} select={_bookSelector[_filteredIdArray[index]]} />
//                )}
//        calculateItemHeight={() => 44}
//    />
//</section>


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

export default connector(mapStateToProps, actionList)(Search);
