import React from 'react';
import Head from 'next/head';

export default function Meta({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/logo.svg" />
            <meta name="description" content={description} />
        </Head>
    );
}

Meta.defaultProps = {
    title: 'Directory',
    description: 'Website description'
};
