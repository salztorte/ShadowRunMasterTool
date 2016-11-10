import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import ReactList from 'react-list';
import InfiniteScroll from 'react-infinite';

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
            <InfiniteScroll
                useWindowAsScrollContainer
                elementHeight={40}
            >
                {
                    _filteredIdArray.map( cur =>(
                        <SearchItem
                            key={cur}
                            item={_bookSelector[cur]}
                        />)
                    )

                }
            </InfiniteScroll>
        </Box>
    );
};



//<div style={{ overflow: 'auto' }}>
//
//</div>

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

//const PaginationHelper = function(coll, itemsPerPage) {
//    const collection = coll.slice();
//    const perPage = itemsPerPage;
//    const pages = [];
//    const i = 0;
//    while (collection.length > 0) {
//        pages[i] = collection.splice(0, perPage);
//        i++;
//    }
//    const paginator = {
//        getPage: index => pages[index],
//        getPages: () => pages,
//        itemCount: () => coll.length,
//        pageCount: () => pages.length,
//        pageItemCount: pageIndex => pages[pageIndex]?pages[pageIndex].length: -1,
//        pageIndex: function(itemIndex) {
//            if (itemIndex >= coll.length || itemIndex < 0) return -1;
//            return Math.floor(itemIndex / perPage);
//        }
//    };
//    return paginator;
//};
//
//
//