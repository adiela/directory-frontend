import React, {Component} from 'react';
import Link from 'next/link';

class NavLink extends Component {
    render() {
        const {location, children} = this.props
        return (
            <li className="mx-3 inline-block">
                <Link href={location}>{children}</Link>
            </li>
        );
    }
}

export default NavLink;