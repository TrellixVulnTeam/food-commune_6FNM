import takeoutpic from '../../Images/takeout.jpg'
import communitypic from  '../../Images/community.jpg'
import localpic from  '../../Images/local.jpg'



export const homeObjOne ={
    id: 'about',
    lightBg:false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'Food. Coomunity. You',
    headline: 'From  your favourite local restaurants',
    description: 'Enjoy Fresh Air, go ahead and get takeout from your favourite restaurant',
    buttonLabel: 'Get started',
    imgStart: false,
    img: takeoutpic,
    alt:'food',
    dark:true,
    primary:true,
    darkText:false,

};

export const homeObjTwo ={
    id: 'restaurants',
    lightBg:true,
    lightText:false,
    lightTextDesc: false,
    topLine: 'Discover Communities',
    headline: 'TakeOut from favourite local restaurants',
    description: 'Enjoy Fresh Air, go ahead and get takeout from your favourite restaurant',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: communitypic,
    alt:'food',
    dark:false,
    primary:false,
    darkText:true,

};

export const homeObjThree ={
    id: "Sign Up",
    lightBg:true,
    lightText:false,
    lightTextDesc: false,
    topLine: 'Join Us',
    headline: '15% off on your first Order',
    description: 'Enjoy Fresh Air, go ahead and get takeout from your favourite restaurant',
    buttonLabel: 'Get started',
    imgStart: false,
    img: localpic,
    alt:'food',
    dark:false,
    primary:false,
    darkText:true,
};