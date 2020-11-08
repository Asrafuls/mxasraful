import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './Contact.css'

const Contact = () => {
    return (
        <section style={{ paddingTop: '150px' }} className='contactMain bg_dark_blue'>
            <div className="container">
                <div className="row">
                    <br /><br /><br />
                    <h2 className="pageTitle text-info">Get In Touch</h2>
                    <div class="sectionTitlesBackLine"></div>
                    <div className="contactSectionMain">
                        <form className='contactForm' noValidate autoComplete="off">
                            <h3 className='text-center text-light'>Send me a Message</h3><br />
                            <TextField
                                className='text-light contactInputBox'
                                id="filled-basic"
                                label="Your Name"
                                variant="filled"
                                color='secondary'
                                type='name'
                            />
                            <TextField
                                className='text-light contactInputBox'
                                id="filled-basic"
                                label="Your Email"
                                variant="filled"
                                color='secondary'
                                type='email'
                                required
                            />
                            <TextField
                                className='text-light contactInputBox'
                                id="filled-basic" label="Your Message"
                                multiline
                                rows={4}
                                variant="filled"
                                color='secondary'
                                type='message'
                                required
                            />
                            <Button variant="contained" color="secondary" type='submit' >SEND MESSAGE</Button>
                        </form>
                        <div className="col-2 contactSpace"></div>
                        <div className="contactInfo">
                            <div className="text-light">
                                <span className=''>Email:</span><br />
                                <a className="text-light" href="mailto: mxasraful@outlook.com">mxasraful@outlook.com</a>
                            </div>
                            <div className="text-light">
                                <span className=''>Phone:</span><br />
                                <a className="text-light" href="tel: +8801865430932">+8801865430932</a>
                            </div>
                            <div className="text-light">
                                <span className=''>Address:</span><br />
                                <a href>135 Abdullahpur, Tongibari, Munshiganj-1500</a>
                            </div>
                            <div style={{width: '250px'}} className="text-light">
                                <span className=''>Social:</span><br />
                                <a href>Facebook / @asrafulfb</a><br />
                                <a href>Twitter / @mxasraful</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </section>
    );
};

export default Contact;