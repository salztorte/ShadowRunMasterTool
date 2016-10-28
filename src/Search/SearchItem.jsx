import { Row, Col, ListItem } from 'react-onsenui';

const SearchItem = ({
    select,
    }) => (
    <ListItem style={{ borderTop: 'none' }}>
        <Row className="myListItem">
            <Col width="50%" verticalAlign="center"> {select.term} </Col>
            <Col width="50%" verticalAlign="center">
                    {select.pages}
            </Col>
        </Row>
    </ListItem>
);

export default SearchItem;
