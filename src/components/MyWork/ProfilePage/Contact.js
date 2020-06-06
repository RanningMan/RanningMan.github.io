import React from 'react';

import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';

import classes from './Contact.module.css';
import GitHubImg from '../../../asset/GitHub.png';
import LinkedInImg from '../../../asset/linkedin.png';

const contact = () => (
    <div className={classes.Contact}>
        <h3>Contact</h3>
        <div><p><b>Name:</b></p> <p>Ran Xia</p></div>
        <div><p><b>E-mail:</b></p> <p>xiaranforusa [at] gmail [dot] com</p></div>
        <p><strong>My links:</strong></p>
        <Row className={classes.Media}>
            <Media as="li" className={classes.List}>
                <img
                    src={GitHubImg}
                    alt="GitHub"
                />
                <Media.Body>
                    <a href='https://github.com/RanningMan' className={classes.MediaList}>GitHub</a>
                </Media.Body>
            </Media>
            <Media as="li" className={classes.List}>
                <img
                    src={LinkedInImg}
                    alt="LinkedIn"
                />
                <Media.Body>
                    <a href='https://www.linkedin.com/in/ran-xia' className={classes.MediaList}>LinkedIn</a>
                </Media.Body>
            </Media>
        </Row>
    </div>
);

export default contact;