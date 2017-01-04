// @flow waek
import React, { PropTypes } from 'react';
import InfiniteScroll from 'react-infinite';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Add from 'grommet/components/icons/base/Add';
import Subtract from 'grommet/components/icons/base/Subtract';

import { Entry as EntryType } from './Reducer';

const iniList:Function = ({
    entrys,
    increaseIni,
    decreaseIni,
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
                            colorIndex={cur.iniValue === 0 ? 'grey-3-a' : ''}
                        >
                            <span>
                                {`${cur.name} (${cur.iniValue}, Pass ${cur.pass})`}
                            </span>
                            <span className='secondary'>
                                <Button
                                    icon={<Add />}
                                    onClick={() => increaseIni(i)}
                                    primary
                                />
                                <Button
                                    style={{
                                        marginLeft: '10px',
                                    }}
                                    icon={<Subtract />}
                                    onClick={() => decreaseIni(i)}
                                    primary
                                />
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
    entrys: PropTypes.arrayOf(EntryType),
    increaseIni: PropTypes.func,
    decreaseIni: PropTypes.func,
};

export default iniList ;
