import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <section>
            <div className='container'>
                <div className='contact-form'>
                    <div className='text-center'>
                        <h5 style={{ color: '#1cc7c1' }}>Contact</h5>
                        <h1 className='text-white mb-5'>Always Connect With Us</h1>
                    </div>
                    <div className='row'>
                        <form className='col-md-8 offset-md-2' onsubmit="">
                            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"/></div>
                            <br></br>
                            <div class="form-group"><input class="form-control" type="text" name="subject" placeholder="Subject"/></div>
                            <br></br>
                            <div class="form-group"><textarea class="form-control" name="message" placeholder="Message" rows="8"></textarea></div>
                            <br></br>
                            <div class="form-group text-center"><button class="btn btn-primary" type="submit">Submit </button></div>
                        </form>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default ContactForm;