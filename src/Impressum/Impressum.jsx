import { PropTypes } from 'react';

import { connector } from '../tools';

const Impressum = ({
    translate,
    }) =>
    (
        <section style={{ textAlign: 'center' }}>
            <h1> Shadowrun Mastertool</h1>
            <p> Version 0.1.0 </p>
            <br />
            <h2> {`${translate.DEVELOPER}:`} </h2>
            <p>Oliver Franzen</p>
        </section>
    );

Impressum.propTypes = {
    translate: PropTypes.object,
};

const mapStateToProps = state => ({
    translate: state.translation.translate.IMPRESSUM,
});


export default connector(mapStateToProps)(Impressum);
