import React, { PropTypes } from 'react';
import InfiniteScroll from 'react-infinite';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';


const iniList= ({
    entrys,
    }) =>
    (
        <List>
            <InfiniteScroll
                useWindowAsScrollContainer
                elementHeight={40}
            >
                {
                    entrys.map((cur, i) => (
                        <ListItem
                            justify='between'
                            key={i}
                        >
                            <span>
                                {cur.name}
                            </span>

                        </ListItem>
                    ))
                }
            </InfiniteScroll>
        </List>
    );


//<span className='secondary'>
//                                {cur.pages}
//                            </span>

iniList.propTypes = {
    entrys: PropTypes.any,
};

export default iniList ;
