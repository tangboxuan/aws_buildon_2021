//a way to create usable components
//can pass in different values, and can update design of website without having to hard-code in the properties --> reusable

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'TEAM RETYPE\'S GOAL',
    headline: 'Understanding The Problem',
    description: "The perennial issue to provide a safe and welcoming social marketplace for the community remains an important challenge that C2C ecommerce platforms must solve. Ensuring mutual trust among members through will in turn boost the consumers’ trust in and loyalty to the platform provider, key to staying relevant in the cut-throat ecommerce space.",
    buttonLabel: 'Our Document',
    imgStart: false,
    img: require('../../images/undraw_mobile_prototyping_grmd.svg'),
    alt: 'image',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'low-balling',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Solution 1',
    headline: 'Our Anti Low-Balling Feature',
    description: "The anti low-balling feature prevents buyers from making a ridiculously low offer to the seller (e.g. 10% of the original price), regardless of the buyer’s intention (e.g.trolling, genuine offer). This prevents the seller from responding with a strong rebuke which may potentially spark a hostile conversation",
    buttonLabel: 'lowball test',
    imgStart: true,
    img: require('../../images/undraw_mobile_prototyping_grmd.svg'),
    alt: 'image',
    dark: false,
    primary: false,
    darkText: true
};


export const homeObjThree = {
    id: 'sentiment',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Solution 2',
    headline: 'Sentiment Analysis Feature',
    description: "Explanation of sentiment analysis",
    buttonLabel: 'Our Document',
    imgStart: false,
    img: require('../../images/undraw_mobile_prototyping_grmd.svg'),
    alt: 'sentiment test',
    dark: true,
    primary: true,
    darkText: false
};