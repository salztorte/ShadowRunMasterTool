import { reduxSearch } from 'redux-search';

import { searchIndexName, searchIndex } from './BookIndex';

export const searchTool = reduxSearch({
    resourceIndexes: {
        [searchIndexName]: searchIndex,
    },
    resourceSelector: (name, state) => (
        state.resources.get(name)
    ),
});
