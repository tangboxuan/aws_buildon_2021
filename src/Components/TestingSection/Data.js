//a way to create usable components
//can pass in different values, and can update design of website without having to hard-code in the properties --> reusable

import LowBall from '../Query/LowBall';
import Retype from '../Query/Retype';
import Sentiment from '../Query/Sentiment';

export const testObjOne = {
    id: 'low-balling',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Solution 1',
    headline: 'Our Anti Low-Balling Feature',
    description: "The anti low-balling feature prevents buyers from making a ridiculously low offer to the seller (e.g. 10% of the original price), regardless of the buyer’s intention (e.g.trolling, genuine offer). This prevents the seller from responding with a strong rebuke which may potentially spark a hostile conversation",
    buttonLabel: 'lowball test',
    imgStart: true,
    ModelForm: LowBall,
    alt: 'image',
    dark: false,
    primary: false,
    darkText: true
};


const friendlinessModels = () => {
    return (
        <div style={{color: "white", fontFamily: "Encode Sans Expanded"}}>
            
            <div style={{marginBottom: "30px"}}>
                <h2 style={{marginBottom: "10px", color:"#01BF71"}} >AWS Comprehend Model</h2>
                <Sentiment />
            </div>
            <div>
                <h2 style={{marginBottom: "10px", color:"#01BF71"}} >Our Comprehend Model</h2>
                <Retype />
            </div>
        </div>
    )
}


export const testObjTwo = {
    id: 'sentiment',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Solution 2',
    headline: 'Sentiment Analysis Feature',
    description: "Explanation of sentiment analysis",
    buttonLabel: 'Our Document',
    imgStart: false,
    ModelForm: friendlinessModels,
    alt: 'sentiment test',
    dark: true,
    primary: true,
    darkText: false
};