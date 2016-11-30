import React, { PropTypes } from 'react';

import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';


const SideMenuItems = ({
    onClick,
    menuItems,
    }) =>
    (
        <Menu primary>
            {menuItems.map(cur =>
                <Anchor
                    label={cur.title}
                    key={cur.title}
                    onClick={() => onClick(cur.path)}
                />
            )}
        </Menu>
    );


//{menuItems.reduce((res, cur) => {
//    res.push(
//        <Anchor
//            label={cur.title}
//            key={cur.title}
//            onClick={() => onClick(cur.path)}
//        />
//    );
//    return res;
//}, [])}


SideMenuItems.propTypes = {
    onClick: PropTypes.func,
    menuItems: PropTypes.arrayOf(PropTypes.object),
};


export default SideMenuItems;
