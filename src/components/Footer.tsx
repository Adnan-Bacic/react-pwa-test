import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral-800 flex justify-center items-center'>
            <p className='text-white'>
                {process.env.REACT_APP_TEST_ENV_VAR}
            </p>
        </div>
    );
};

export default Footer;