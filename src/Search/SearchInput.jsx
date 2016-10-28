import { PropTypes } from 'react';
import { Input } from 'react-onsenui';

//<div>
//
//</div>

const SearchInput = ({
    onChange,
    }) => (

    <Input
        placeholder="Suche"
        type="Text"
        className="mySearch search-input"
        onChange={onChange}
    />
);


SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default SearchInput;

