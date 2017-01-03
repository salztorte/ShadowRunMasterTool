// @flow waek
import React, { PropTypes } from 'react';
import InfiniteScroll from 'react-infinite';
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import { Entry as EntryType } from './Reducer';

//import Add from 'grommet/components/icons/base/Add';
//import Subtract from 'grommet/components/icons/base/Subtract';


const iniList:Function = ({
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
                            <Box>
                                {`${cur.name} (${cur.iniValue}, Pass ${cur.pass})`}
                            </Box>
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
    entrys: PropTypes.arrayOf(EntryType),
};

export default iniList ;
