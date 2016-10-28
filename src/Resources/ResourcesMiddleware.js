import { reduxSearch } from 'redux-search';

import { resourceName, searchIndex } from './BookIndex';

export const searchTool = reduxSearch({
    resourceIndexes: {
        [resourceName]: searchIndex,
    },
    resourceSelector: (_resourceName, state) => (
        state.resources.get(_resourceName)
    ),
});