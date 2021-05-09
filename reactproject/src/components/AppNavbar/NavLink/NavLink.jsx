import React from 'react';
import PropTypes from 'prop-types';
import {Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
// rscp

const NavLink = props => {
    return (
        <LinkContainer to={props.to} exact>
            <Nav.Link variant='secondary'>
                {props.children}
            </Nav.Link>
        </LinkContainer>
    );
};

NavLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node
};

export default NavLink;