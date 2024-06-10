import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// SEO optimization: title and meta
const SEO = ({ title, description }) => {
    return (

        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="restaurants, dietary preferences, vegan, vegetarian, gluten-free" />

                {/* Refresh the page if needed
                <meta http-equiv="refresh" content="30"></meta> */}
            </Helmet>
        </HelmetProvider>
   
    );
};

export default SEO;
