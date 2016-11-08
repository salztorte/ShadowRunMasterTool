import React, { PropTypes } from 'react';

import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Sidebar from 'grommet/components/Sidebar';

import Toolbar from './Toolbar.jsx';

const SideMenu = ({
//    closeMenu,
//    isOpen,
    goToRoute,
    menuItems,
    title,
    }) =>
    (
        <Sidebar
            colorIndex="neutral-1"
        >
            <Toolbar
                title={title}
            />
            <Menu
                primary
            >
                {menuItems.reduce((res, { title, path }) => {
                    res.push(
                        <Anchor
                            key={title}
                            onClick={() => {
                                goToRoute(path);
                            }}
                        >
                            {title}
                        </Anchor>
                    );
                    return res;
                }, [])}
            </Menu>
        </Sidebar>
    );

//        <SplitterSide
//            side='left'
//            style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}
//            width={200}
//            collapse
//            isSwipeable
//            isOpen={isOpen}
//        >
//            <Page>
//                <List
//                    className='myList'
//                    dataSource={menuItems}
//                    renderHeader={() => <SideMenuHeader title={title} />}
//                    renderRow={
//                        item => (
//                            <SideMenuItem
//                                key={item.title}
//                                title={item.title}
//                                onClick={() => {
//                                    closeMenu();
//                                    goToRoute(item.path);
//                                }}
//                                style={{}}
//                            />
//                        )
//                    }
//                />
//            </Page>
//        </SplitterSide>


SideMenu.propTypes = {
//    closeMenu: PropTypes.func.isRequired,
//    isOpen: PropTypes.bool.isRequired,
    goToRoute: PropTypes.func.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
};

export default SideMenu;
