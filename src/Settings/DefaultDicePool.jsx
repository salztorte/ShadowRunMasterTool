import { PropTypes } from 'react';
import { Input, ListItem } from 'react-onsenui';

const DefaultDicePool = ({
    translate,
    onChange,
    defaultDice,
    }) =>
    (
        <ListItem>
            <div className="myListItem" style={{ width: '100%' }}>
                <p style={{ fontWeight: 'bold' }}>{translate.HEADLINE}</p>
                <Input
                    type="number"
                    value={`${defaultDice}`}
                    modifier="underbar"
                    style={{ width: '100%' }}
                    onChange={onChange}
                />
            </div>
        </ListItem>
    );


DefaultDicePool.propTypes = {
    translate: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultDice: PropTypes.number.isRequired,
};

export default DefaultDicePool;
