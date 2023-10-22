import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponenet extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark header">
                        <Link to={'/employees/list'} style={{ textDecoration: 'none' }}>
                            <div className="navbar-brand" style={{ cursor: 'pointer' }}>Employee Management</div>
                        </Link>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponenet;
