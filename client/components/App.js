import React, { Component } from 'react';
import './App.css';

class App extends Component { 
    constructor() {
        super();
        this.state = {
            countryOpt0: ['us', 'United States'],
            countryOpt1: ['us', 'United States'],
            countryOpt2: ['us', 'United States'],
            countryOpt3: ['us', 'United States'],
            randomNum: 0,
            answered: 0,
            correct: 0,
            score: 0,
            usedFlags: []
        };

        this.changeFlag = this.changeFlag.bind(this);
        this.buttonOnePushed = this.buttonOnePushed.bind(this);
        this.buttonTwoPushed = this.buttonTwoPushed.bind(this);
        this.buttonThreePushed = this.buttonThreePushed.bind(this);
        this.buttonFourPushed = this.buttonFourPushed.bind(this);
    }

    //bind the changeFlag method here\\
    changeFlag() {

        if (this.state.usedFlags.length === 246) {
            alert(`You've now seen every Flag in the world!`)
        }

        let randoNum = Math.floor(Math.random() * 4);

        console.log(this.state.usedFlags.length)

        // let countryRepeats = (randoNum === 0 && this.state.usedFlags.includes(this.state.countryOpt0[1])) || (randoNum === 1 && this.state.usedFlags.includes(this.state.countryOpt1[1])) || (randoNum === 2 && this.state.usedFlags.includes(this.state.countryOpt2[1])) || (randoNum === 3 && this.state.usedFlags.includes(this.state.countryOpt3[1]));

        // console.log(countryRepeats)
        // console.log(this.state.usedFlags.length)

        // if (countryRepeats) return this.changeFlag();


        const temp2 = { randomNum: randoNum };

        this.setState(temp2);
        
        const countryArr = [['af', 'Afghanistan'],
            ['al', 'Albania'],
            ['dz', 'Algeria'],
            ['as', 'American Samoa'],
            ['ad', 'Andorra'],
            ['ao', 'Angola'],
            ['ai', 'Anguilla'],
            ['aq', 'Antarctica'],
            ['ag', 'Antigua and Barbuda'],
            ['ar', 'Argentina'],
            ['am', 'Armenia'],
            ['aw', 'Aruba'],
            ['au', 'Australia'],
            ['at', 'Austria'],
            ['az', 'Azerbaijan'],
            ['bs', 'Bahamas'],
            ['bh', 'Bahrain'],
            ['bd', 'Bangladesh'],
            ['bb', 'Barbados'],
            ['by', 'Belarus'],
            ['be', 'Belgium'],
            ['bz', 'Belize'],
            ['bj', 'Benin'],
            ['bm', 'Bermuda'],
            ['bt', 'Bhutan'],
            ['bo', 'Bolivia'],
            ['bq', 'Bonaire, Sint Eustatius and Saba'],
            ['ba', 'Bosnia and Herzegovina'],
            ['bw', 'Botswana'],
            ['bv', 'Bouvet Island'],
            ['br', 'Brazil'],
            ['io', 'British Indian Ocean Territory'],
            ['bn', 'Brunei Darussalam'],
            ['bg', 'Bulgaria'],
            ['bf', 'Burkina Faso'],
            ['bi', 'Burundi'],
            ['cv', 'Cabo Verde'],
            ['kh', 'Cambodia'],
            ['cm', 'Cameroon'],
            ['ca', 'Canada'],
            ['ky', 'Cayman Islands'],
            ['cf', 'Central African Republic'],
            ['td', 'Chad'],
            ['cl', 'Chile'],
            ['cn', 'China'],
            ['cx', 'Christmas Island'],
            ['cc', 'Cocos (Keeling) Islands'],
            ['co', 'Colombia'],
            ['km', 'Comoros'],
            ['cd', 'Democratic Republic of Congo'],
            ['cg', 'Congo'],
            ['ck', 'Cook Islands'],
            ['cr', 'Costa Rica'],
            ['hr', 'Croatia'],
            ['cu', 'Cuba'],
            ['cw', 'Curaçao'],
            ['cy', 'Cyprus'],
            ['cz', 'Czechia'],
            ['ci', "Côte d'Ivoire"],
            ['dk', 'Denmark'],
            ['dj', 'Djibouti'],
            ['dm', 'Dominica'],
            ['do', 'Dominican Republic'],
            ['ec', 'Ecuador'],
            ['eg', 'Egypt'],
            ['sv', 'El Salvador'],
            ['gq', 'Equatorial Guinea'],
            ['er', 'Eritrea'],
            ['ee', 'Estonia'],
            ['sz', 'Eswatini'],
            ['et', 'Ethiopia'],
            ['fk', 'Falkland Islands'],
            ['fo', 'Faroe Islands'],
            ['fj', 'Fiji'],
            ['fi', 'Finland'],
            ['fr', 'France'],
            ['gf', 'French Guiana'],
            ['pf', 'French Polynesia'],
            ['tf', 'French Southern Territories'],
            ['ga', 'Gabon'],
            ['gm', 'Gambia'],
            ['ge', 'Georgia'],
            ['de', 'Germany'],
            ['gh', 'Ghana'],
            ['gi', 'Gibraltar'],
            ['gr', 'Greece'],
            ['gl', 'Greenland'],
            ['gd', 'Grenada'],
            ['gp', 'Guadeloupe'],
            ['gu', 'Guam'],
            ['gt', 'Guatemala'],
            ['gg', 'Guernsey'],
            ['gn', 'Guinea'],
            ['gw', 'Guinea-Bissau'],
            ['gy', 'Guyana'],
            ['ht', 'Haiti'],
            ['hm', 'Heard Island and McDonald Islands'],
            ['va', 'Holy See'],
            ['hn', 'Honduras'],
            ['hk', 'Hong Kong'],
            ['hu', 'Hungary'],
            ['is', 'Iceland'],
            ['in', 'India'],
            ['id', 'Indonesia'],
            ['ir', 'Iran'],
            ['iq', 'Iraq'],
            ['ie', 'Ireland'],
            ['im', 'Isle of Man'],
            ['il', 'Israel'],
            ['it', 'Italy'],
            ['jm', 'Jamaica'],
            ['jp', 'Japan'],
            ['je', 'Jersey'],
            ['jo', 'Jordan'],
            ['kz', 'Kazakhstan'],
            ['ke', 'Kenya'],
            ['ki', 'Kiribati'],
            ['kp', 'North Korea'],
            ['kr', 'South Korea'],
            ['kw', 'Kuwait'],
            ['kg', 'Kyrgyzstan'],
            ['la', 'Laos'],
            ['lv', 'Latvia'],
            ['lb', 'Lebanon'],
            ['ls', 'Lesotho'],
            ['lr', 'Liberia'],
            ['ly', 'Libya'],
            ['li', 'Liechtenstein'],
            ['lt', 'Lithuania'],
            ['lu', 'Luxembourg'],
            ['mo', 'Macao'],
            ['mg', 'Madagascar'],
            ['mw', 'Malawi'],
            ['my', 'Malaysia'],
            ['mv', 'Maldives'],
            ['ml', 'Mali'],
            ['mt', 'Malta'],
            ['mh', 'Marshall Islands'],
            ['mq', 'Martinique'],
            ['mr', 'Mauritania'],
            ['mu', 'Mauritius'],
            ['yt', 'Mayotte'],
            ['mx', 'Mexico'],
            ['fm', 'Micronesia'],
            ['md', 'Moldova'],
            ['mc', 'Monaco'],
            ['mn', 'Mongolia'],
            ['me', 'Montenegro'],
            ['ms', 'Montserrat'],
            ['ma', 'Morocco'],
            ['mz', 'Mozambique'],
            ['mm', 'Myanmar'],
            ['na', 'Namibia'],
            ['nr', 'Nauru'],
            ['np', 'Nepal'],
            ['nl', 'Netherlands'],
            ['nc', 'New Caledonia'],
            ['nz', 'New Zealand'],
            ['ni', 'Nicaragua'],
            ['ne', 'Niger'],
            ['ng', 'Nigeria'],
            ['nu', 'Niue'],
            ['nf', 'Norfolk Island'],
            ['mp', 'Northern Mariana Islands'],
            ['no', 'Norway'],
            ['om', 'Oman'],
            ['pk', 'Pakistan'],
            ['pw', 'Palau'],
            ['ps', 'Palestine'],
            ['pa', 'Panama'],
            ['pg', 'Papua New Guinea'],
            ['py', 'Paraguay'],
            ['pe', 'Peru'],
            ['ph', 'Philippines'],
            ['pn', 'Pitcairn'],
            ['pl', 'Poland'],
            ['pt', 'Portugal'],
            ['pr', 'Puerto Rico'],
            ['qa', 'Qatar'],
            ['mk', 'Republic of North Macedonia'],
            ['ro', 'Romania'],
            ['ru', 'Russia'],
            ['rw', 'Rwanda'],
            ['re', 'Réunion'],
            ['bl', 'Saint Barthélemy'],
            ['sh', 'Saint Helena'],
            ['kn', 'Saint Kitts and Nevis'],
            ['lc', 'Saint Lucia'],
            ['mf', 'Saint Martin'],
            ['pm', 'Saint Pierre and Miquelon'],
            ['vc', 'Saint Vincent and the Grenadines'],
            ['ws', 'Samoa'],
            ['sm', 'San Marino'],
            ['st', 'Sao Tome and Principe'],
            ['sa', 'Saudi Arabia'],
            ['sn', 'Senegal'],
            ['rs', 'Serbia'],
            ['sc', 'Seychelles'],
            ['sl', 'Sierra Leone'],
            ['sg', 'Singapore'],
            ['sx', 'Sint Maarten'],
            ['sk', 'Slovakia'],
            ['si', 'Slovenia'],
            ['sb', 'Solomon Islands'],
            ['so', 'Somalia'],
                ['ss', 'South Sudan'],
                ['es', 'Spain'],
                ['lk', 'Sri Lanka'],
                ['sd', 'Sudan'],
                ['sr', 'Suriname'],
                ['sj', 'Svalbard and Jan Mayen'],
                ['se', 'Sweden'],
                ['ch', 'Switzerland'],
                ['sy', 'Syrian Arab Republic'],
                ['tw', 'Taiwan'],
                ['tj', 'Tajikistan'],
                ['tz', 'Tanzania'],
                ['th', 'Thailand'],
                ['tl', 'Timor-Leste'],
                ['tg', 'Togo'],
                ['tk', 'Tokelau'],
                ['to', 'Tonga'],
                ['tt', 'Trinidad and Tobago'],
                ['tn', 'Tunisia'],
                ['tr', 'Turkey'],
                ['tm', 'Turkmenistan'],
                ['tc', 'Turks and Caicos Islands'],
                ['tv', 'Tuvalu'],
                ['ug', 'Uganda'],
                ['ua', 'Ukraine'],
                ['ae', 'United Arab Emirates'],
                ['gb', 'United Kingdom'],
                ['um', 'United States Minor Outlying Islands'],
                ['us', 'United States of America'],
                ['uy', 'Uruguay'],
                ['uz', 'Uzbekistan'],
                ['vu', 'Vanuatu'],
                ['ve', 'Venezuela'],
                ['vn', 'Viet Nam'],
                ['vg', 'British Virgin Islands'],
                ['vi', 'U.S. Virgin Islands'],
                ['wf', 'Wallis and Futuna'],
                ['eh', 'Western Sahara'],
                ['ye', 'Yemen'],
                ['zm', 'Zambia'],
                ['zw', 'Zimbabwe'],
                ['ax', 'Åland Islands']
        ];
        

        let fourNumsArr = [];

        function fourRandomNums() {
            fourNumsArr = [];
            let firstNum = Math.floor(Math.random() * 247);

        
            fourNumsArr.push(firstNum)

            let secondNum = Math.floor(Math.random() * 247);

            function randomSecondNumGen(num) {
                if (!fourNumsArr.includes(num)) return;
                secondNum = Math.floor(Math.random() * 247);
                return randomSecondNumGen(secondNum);
            };

            randomSecondNumGen(secondNum);
            fourNumsArr.push(secondNum);

            let thirdNum = Math.floor(Math.random() * 247);

            function randomThirdNumGen(num) {
                if (!fourNumsArr.includes(num)) return;
                thirdNum = Math.floor(Math.random() * 247);
                return randomThirdNumGen(thirdNum);
            };

            randomThirdNumGen(thirdNum);
            fourNumsArr.push(thirdNum);

            let fourthNum = Math.floor(Math.random() * 247);

            function randomFourthNumGen(num) {
                if (!fourNumsArr.includes(num)) return;
                fourthNum = Math.floor(Math.random() * 247);
                return randomFourthNumGen(fourthNum);
            };

            randomSecondNumGen(fourthNum);
            fourNumsArr.push(fourthNum);
        }

        fourRandomNums();


        const temp = { countryOpt0: countryArr[fourNumsArr[0]], countryOpt1: countryArr[fourNumsArr[1]], countryOpt2: countryArr[fourNumsArr[2]], countryOpt3: countryArr[fourNumsArr[3]]};

 
        this.setState(temp);


    }

    buttonOnePushed() {
        this.changeFlag();
        let correctAnswer;

        if (this.state.randomNum === 0) {
            let increasedCorrect = (this.state.correct) += 1;
            const temp5 = { correct: increasedCorrect };
            this.setState(temp5);

            correctAnswer = this.state.countryOpt0[1];

        }
        else {
            if (this.state.randomNum === 1){
                correctAnswer = this.state.countryOpt1[1];
            }
            else if (this.state.randomNum === 2) {
                correctAnswer = this.state.countryOpt2[1];
            }
            else correctAnswer = this.state.countryOpt3[1]

            alert(`Uh oh, Explorer, the correct answer was ${correctAnswer}`)
        }
        const updatedAnswered = this.state.answered += 1;

        const temp3 = { answered: updatedAnswered }
        this.setState(temp3);

        const newScore = Math.round((this.state.correct / updatedAnswered) * 100);

        const temp6 = { score: newScore };
        this.setState(temp6);

        // const usedFlagsArr = this.state.usedFlags;
        // const flagToPush = correctAnswer;
        // if (!usedFlagsArr.includes(flagToPush)) {
        //     usedFlagsArr.push(flagToPush);
        // };
        // let temp4 = { usedFlags: usedFlagsArr };
        // this.setState(temp4);           
    }

    buttonTwoPushed() {
        this.changeFlag();
        let correctAnswer;

        if (this.state.randomNum === 1) {
            let increasedCorrect = (this.state.correct) += 1;
            const temp5 = { correct: increasedCorrect };
            this.setState(temp5);

            correctAnswer = this.state.countryOpt1[1];

        }
        else {
            if (this.state.randomNum === 0) {
                correctAnswer = this.state.countryOpt0[1];
            }
            else if (this.state.randomNum === 2) {
                correctAnswer = this.state.countryOpt2[1];
            }
            else correctAnswer = this.state.countryOpt3[1]

            alert(`Nice try, Explorer, the correct answer was ${correctAnswer}`)
        }
        const updatedAnswered = this.state.answered += 1;

        const temp3 = { answered: updatedAnswered }
        this.setState(temp3);

        const newScore = Math.round((this.state.correct / updatedAnswered) * 100);

        const temp6 = { score: newScore };
        this.setState(temp6);

        // const usedFlagsArr = this.state.usedFlags;
        // const flagToPush = correctAnswer;
        // if (!usedFlagsArr.includes(flagToPush)) {
        //     usedFlagsArr.push(flagToPush);
        // };
        // let temp4 = { usedFlags: usedFlagsArr };
        // this.setState(temp4);
    }

    buttonThreePushed() {
        this.changeFlag();
        let correctAnswer;

        if (this.state.randomNum === 2) {
            let increasedCorrect = (this.state.correct) += 1;
            const temp5 = { correct: increasedCorrect };
            this.setState(temp5);

            correctAnswer = this.state.countryOpt2[1];
        }
        else {
            if (this.state.randomNum === 0) {
                correctAnswer = this.state.countryOpt0[1];
            }
            else if (this.state.randomNum === 1) {
                correctAnswer = this.state.countryOpt1[1];
            }
            else correctAnswer = this.state.countryOpt3[1]

            alert(`Not quite, Explorer, the correct answer was ${correctAnswer}`)
        }
        const updatedAnswered = this.state.answered += 1;

        const temp3 = { answered: updatedAnswered }
        this.setState(temp3);

        const newScore = Math.round((this.state.correct / updatedAnswered) * 100);

        const temp6 = { score: newScore };
        this.setState(temp6);

        // const usedFlagsArr = this.state.usedFlags;
        // const flagToPush = correctAnswer;
        // if (!usedFlagsArr.includes(flagToPush)) {
        //     usedFlagsArr.push(flagToPush);
        // };
        // let temp4 = { usedFlags: usedFlagsArr };
        // this.setState(temp4);
    }

    buttonFourPushed() {
        this.changeFlag();
        let correctAnswer;
        if (this.state.randomNum === 3) {
            let increasedCorrect = (this.state.correct) += 1;
            const temp5 = { correct: increasedCorrect };
            this.setState(temp5);

            correctAnswer = this.state.countryOpt3[1];
        }
        else {
            if (this.state.randomNum === 1) {
                correctAnswer = this.state.countryOpt1[1];
            }
            else if (this.state.randomNum === 2) {
                correctAnswer = this.state.countryOpt2[1];
            }
            else correctAnswer = this.state.countryOpt0[1]

            alert(`Sorry, Explorer, the correct answer was ${correctAnswer}`)
        }
        const updatedAnswered = this.state.answered += 1;

        const temp3 = { answered: updatedAnswered }
        this.setState(temp3);

        const newScore = Math.round((this.state.correct / updatedAnswered) * 100);

        const temp6 = { score: newScore };
        this.setState(temp6);

        // const usedFlagsArr = this.state.usedFlags;
        // const flagToPush = correctAnswer;
        // if (!usedFlagsArr.includes(flagToPush)) {
        //     usedFlagsArr.push(flagToPush);
        // };
        // let temp4 = { usedFlags: usedFlagsArr };
        // this.setState(temp4);
    }


    componentDidMount() {
        this.changeFlag();
    }




    render() {

        
        const img1 = `https://flagcdn.com/h240/${this.state.countryOpt0[0]}.jpg`;
        const img2 = `https://flagcdn.com/h240/${this.state.countryOpt1[0]}.jpg`;
        const img3 = `https://flagcdn.com/h240/${this.state.countryOpt2[0]}.jpg`;
        const img4 = `https://flagcdn.com/h240/${this.state.countryOpt3[0]}.jpg`;

        const testImgArr = [img1, img2, img3, img4];


        const testImg = testImgArr[this.state.randomNum];
        
        return (
            <section id='sectional'>
                <div>
                    <img src={testImg} />
                </div>
                <container>
                    <div>
                        <button onClick={this.buttonOnePushed} >{this.state.countryOpt0[1]}</button>
                    </div>       
                    <div>
                        <button onClick={this.buttonTwoPushed} >{this.state.countryOpt1[1]}</button>
                    </div>
                    <div>
                        <button onClick={this.buttonThreePushed} >{this.state.countryOpt2[1]}</button>
                    </div>
                    <div>
                        <button onClick={this.buttonFourPushed} >{this.state.countryOpt3[1]}</button>
                    </div>
                </container>
                <div>
                    <p>Score = {this.state.score}</p>
                </div>


            </section>

        );
    }
}


// render(<App />, document.querySelector('#root'));

export default App;


//declare a changeFlag method