import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Content from '../Componets/Content.jsx';
import Title from 'grommet/components/Title';

import BoxItem from '../Componets/BoxItem.jsx';

const Initative = ({
    translate,
    }) =>
    (
        <Content
            title={translate.TITLE}
        >

            <Button
                type="button"
                onClick={() => {}}
                label={translate.NEXT_BUTTON}
                primary
                fill
                style={{
                    margin: '12px',
                }}
            />
            <BoxItem>
                <Title>{translate.ORDER}</Title>
            </BoxItem>
        </Content>
    );

Initative.propTypes = {
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
    translate: state.translation.translate.INITATIVE,
});


export default connect(mapStateToProps)(Initative);
