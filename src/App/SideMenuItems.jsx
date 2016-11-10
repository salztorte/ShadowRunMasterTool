import React, { PropTypes } from 'react';

import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';


const SideMenuItem = ({
    onClick,
    menuItems,
    }) =>
    (
        <Menu primary>
            {menuItems.reduce((res, cur) => {
                res.push(
                    <Anchor
                        label={cur.title}
                        key={cur.title}
                        onClick={() => onClick(cur.path)}
                    />
                );
                return res;
            }, [])}
        </Menu>
    );


SideMenuItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SideMenuItem;
