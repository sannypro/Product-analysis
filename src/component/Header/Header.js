import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css";

const Header = () => {
    return (
        <nav>
            <ul className='d-flex list-style justify-content-center fw-bold fs-5'>
                <CustomLink to="/"><li>HOME <hr /></li></CustomLink>
                <CustomLink to="reviews"><li>REVIEWS<hr /></li></CustomLink>
                <CustomLink to="dashboard"><li>DASHBOARD<hr /></li></CustomLink>
                <CustomLink to="blogs"><li>BLOGS<hr /></li></CustomLink>
                <CustomLink to="about"><li>ABOUT<hr /></li></CustomLink>

            </ul>
        </nav>
    );
};

export default Header;