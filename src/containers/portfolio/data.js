import likeSkin from '../../assets/likeskin.jpg';
import make from '../../assets/make.jpg';
import beeHappy from '../../assets/beehappy.jpg';
import doughUniverse from '../../assets/doughuniverse.jpg';
import electroHero from '../../assets/electro-hero.jpg';

export default {
    professional: [
        {
            url: 'https://make.techwillsaveus.com',
            image: {
                url: make,
                alt: 'A screenshot of a website for kits made by Technology Will Save Us featuring lists of kit projects'
            },
            description: [
                'Led a front-end project to drive sign-ups on our online learning platform.',
                'This involved a design overhaul, building several experiences including a user sharing feature and support for multiple translations.',
                'Technologies: React, Redux, Sass.'
            ]
        },
        {
            url: 'https://play.google.com/store/apps/details?id=com.arnold&hl=en',
            image: {
                url: doughUniverse,
                alt: 'A screenshot from the Dough Universe mobile and tablet with playful illustrations of dough balls'
            },
            description: [
                'Supported the development of a native app.',
                'Technologies: React Native.'
            ]
        },
        {
            url: 'https://make.techwillsaveus.com/electro-hero-kit/',
            image: {
                url: electroHero,
                alt: 'A screenshot of an Iron Man themed toy manual.'
            },
            description: [
                'Built an Avengers themed toy manual for a Tech Will Save Us X Disney collaboration.',
                'This involved building components with complex custom styling.',
                'Technologies: React and Sass.'
            ]
        }
    ],
    personal: [
        {
            url: 'https://llouisetaylor.github.io/JSToys/bee-happy/',
            image: {
                url: beeHappy,
                alt: 'A screenshot of a playful word game for children, with bright colours and a bumble bee character.'
            },
            description: [
                'This web app determines if a text entry is happy, sad or unknown based on a predetermined set of keywords and displays this on a scale.',
                'Technologies: jQuery and VanillaJS.'
            ]
        },
        {
            url: 'https://mljgreer1.github.io',
            image: {
                url: likeSkin,
                alt: 'A screenshot of an online poetry magazine with pastel tones and features.'
            },
            description: [
                'Built an online poetry magazine as part of a competition for Code First: Girls.',
                'Technologies: jQuery and VanillaJS.'
            ]
        }
    ]
}
