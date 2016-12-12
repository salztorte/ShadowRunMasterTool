// @flow weak
import { reduxSearch } from 'redux-search';

import { searchIndexName, searchIndex } from '../Resources/BookIndex';

export const searchTool = reduxSearch({
    resourceIndexes: {
        [searchIndexName]: searchIndex,
    },
    resourceSelector: (name, state) => (
        state.searchIndex.get(name)
    ),
});
