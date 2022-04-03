import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <nav>
            <ul className='d-flex list-style justify-content-center fw-bold fs-5'>
                <li>HOME <hr /></li>
                <li>REVIEWS<hr /></li>
                <li>DASHBOARD<hr /></li>
                <li>BLOGS<hr /></li>
                <li>ABOUT<hr /></li>

            </ul>
        </nav>
    );
};

export default Header;