import React, { Component } from 'react';

const menuItems = [{
    label: 'Repositories',
    onClick: () => console.log('click'),
    icon: 'branch',
}, {
    label: 'Followers',
    onClick: () => console.log('click'),
    icon: 'follow',
}];

class SideMenu extends Component {
    render() {
        return (
            <div className="w-side-menu">
                <ul>
                    {
                        menuItems.map((item, idx) => (
                            <li key={`menu-item-${idx}`}><a>{item.label}</a></li>)
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default SideMenu;
