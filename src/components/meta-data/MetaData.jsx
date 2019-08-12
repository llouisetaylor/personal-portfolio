import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = () => (
    <Helmet>
        <meta charSet="utf-8" lang="en-gb" />
        <meta content="ie=edge" http-equiv="x-ua-compatible" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta content="Full stack developer at BBC Sounds." name="description"></meta>
        <title>Louise Taylor | Full Stack Developer</title>
        <link rel="canonical" href="https://llouisetaylor.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@llouisetaylor" />
        <meta name="twitter:creator" content="@llouisetaylor" />
        <meta name="twitter:title" content="Louise Taylor" />
        <meta name="twitter:description" content="Full stack developer at BBC Sounds." />

        <meta property="og:title" content="Louise Taylor" />
        <meta property="og:type" content="Full stack developer at BBC Sounds." />
        <meta property="og:url" content="https://llouisetaylor.com" />
    </Helmet>
);

export default MetaData;