import { PropTypes } from 'react';
import { Page, SplitterSide, List } from 'react-onsenui';

import SideMenuItem from './SideMenuItem.jsx';
import SideMenuHeader from './SideMenuHeader.jsx';

const SideMenu = ({
    closeMenu,
    isOpen,
    goToRoute,
    menuItems,
    title,
    }) =>
    (
        <SplitterSide
            side="left"
            style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}
            width={200}
            collapse
            isSwipeable
            isOpen={isOpen}
        >
            <Page>
                <List
                    className="myList"
                    dataSource={menuItems}
                    renderHeader={() => <SideMenuHeader title={title} />}
                    renderRow={
                        ({ _title, _path }) => (
                            <SideMenuItem
                                key={_title}
                                title={_title}
                                onClick={() => {
                                    closeMenu();
                                    goToRoute(_path);
                                }}
                                style={{}}
                            />
                        )
                    }
                />
            </Page>
        </SplitterSide>
    );

SideMenu.propTypes = {
    closeMenu: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    goToRoute: PropTypes.func.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
};

export default SideMenu;
