import { PropTypes } from 'react';
import { Button, ListItem } from 'react-onsenui';

const buttonStyle = {
    marginRight: '15px',
};

const LanguagesSwitcher = ({
    translate,
    changeLang,
    langArray,
    }) =>
    (
        <ListItem>
            <div className="myListItem">
                <p style={{ fontWeight: 'bold' }}>{translate.HEADLINE}</p>
                {langArray.reduce((res, cur) => {
                    res.push(<Button
                        key={cur}
                        style={buttonStyle}
                        onClick={() => changeLang(cur)}
                    >
                        {translate[cur]}
                    </Button>);
                    return res;
                }, [])}
            </div>
        </ListItem>
    );


LanguagesSwitcher.propTypes = {
    translate: PropTypes.object.isRequired,
    changeLang: PropTypes.func.isRequired,
    langArray: PropTypes.arrayOf(PropTypes.string),
};

export default LanguagesSwitcher;
