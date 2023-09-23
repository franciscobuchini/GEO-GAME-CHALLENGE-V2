let countriesList = ["Andorra", "United Arab Emirates", "Afghanistan", "Antigua and Barbuda", "Anguilla", "Albania", "Armenia", "Angola", "Zambia", "Argentina", "American Samoa", "Austria", "Australia", "Aruba", "South Africa", "Azerbaijan", "Bosnia-Herzegovina", "Barbados", "Bangladesh", "Belgium", "Burkina Faso", "Bulgaria",
    "Bahrain", "Burundi", "Benin", "Saint-Bartholomew", "Bermuda", "Brunei", "Bolivia", "Bonaire", "Brazil", "Yemen", "Bhutan", "Samoa", "Botswana", "Belarus", "Belize", "Canada", "Cocos", "Democratic Republic of the Congo", "Central African Republic", "Congo", "Switzerland", "Ivory Coast", "Vanuatu", "Chile",
    "Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cabo Verde", "Curacao", "Christmas Island", "Cyprus", "Czech Republic", "Germany", "Djibouti", "Denmark", "Dominica", "Dominican Republic", "Algeria", "Ecuador", "Estonia", "Egypt", "Occidental Sahara", "Eritrea", "Spain", "Ethiopia", "Finland",
    "Fiji", "Malvinas", "Faroe", "France", "Gabon", "United Kingdom", "Grenada", "Georgia", "French Guiana", "Guernsey", "Ghana", "Gibraltar", "Greenland", "Gambia", "Guinea", "Guadeloupe", "Equatorial Guinea", "Greece", "South Georgia and the South Sandwich", "Guatemala", "Guam", "Guinea Bissau", "Guyana",
    "Hong Kong", "Heard and McDonald", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel", "Isle Of Man", "India", "British Indian", "Iraq", "Iran", "Iceland", "Italy", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", "Vietnam", "Comoros", "Saint Kitts and Nevis",
    "North Korea", "South Korea", "Kuwait", "Cayman Islands", "Kazakhstan", "Laos", "Lebanon", "Saint Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Monaco", "Moldova", "Montenegro", "Saint Martin", "Madagascar", "Macedonia", "Mali",
    "Myanmar", "Mongolia", "Macao", "Martinique", "Mauritania", "Montserrat", "Malta", "Mauritius", "British Virgin Islands", "Malawi", "Mexico", "Peninsular Malaysia", "Mozambique", "Namibia", "New Caledonia", "Niger", "Norfolk Island", "Nigeria", "Nicaragua", "Netherlands", "Norway", "Nepal", "Nauru",
    "Niue", "New Zealand", "Oman", "Panama", "Peru", "French Polynesia", "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Saint Pierre and Miquelon", "Venezuela", "Puerto Rico", "Portugal", "Saint Vincent and the Grenadines", "Paraguay", "Qatar", "Reunion", "Romania", "Serbia", "Russia", "Saudi Arabia",
    "Vatican City", "Solomon Islands", "Seychelles", "Sudan", "Sweden", "Singapore", "Saint Helena", "Slovenia", "Svalbard", "Slovakia", "Sierra Leone", "San Marino", "Senegal", "Somalia", "Suriname", "South Sudan", "Sao Tome and Principe", "El Salvador", "Sint Maarten", "Syria", "Swaziland", "Uzbekistan",
    "Chad", "French Southern and Antarctic Lands", "Togo", "Thailand", "Tajikistan", "Uruguay", "East Timor", "Turkmenistan", "Tunisia", "Tonga", "Turkey", "Trinidad and Tobago", "Taiwan", "Tanzania", "Ukraine", "United States"];

//selectors
const startSection = document.querySelector(".startSection");
const nextButton = document.querySelector(".nextButton");
const finalSection = document.querySelector(".finalSection");
let gameSection = document.querySelector(".gameSection");
let finalText = document.querySelector(".finalText");
let glassScreenStart = document.querySelector(".glassScreenStart");
let pointsHTML = document.querySelector(".points");
let timerHTML = document.querySelector(".timer");
let numberQuestHTML = document.querySelector(".numberQuest");
let countryImage = document.querySelector(".countryImage");
let guessTheCountry = document.querySelector(".guessTheCountry");
let option0 = document.querySelector(".option0");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let gameLogo = document.querySelector(".gameLogo");

let pressButton = false;
let isCorrect = false;
let pointsJS = 0;
let numberQuestJS = 0;

startSection.removeAttribute("hidden", "y");
nextButton.addEventListener("click", (pressNext));

function pressNext() {
    gameLogo.setAttribute("hidden", "y");
    gameSection.removeAttribute("hidden", "y");
    guessTheCountry.textContent = "Guess the country:";
    let timerJS = 20;
    let countdown = setInterval(countdownFunction, 1000);
    numberQuestJS = numberQuestJS + 1;
    numberQuestHTML.innerHTML = `${numberQuestJS}/20`;
    startSection.setAttribute("hidden", "y");
    isCorrect = false;
    pressButton = false;

    option0.classList.remove("redButton", "greenButton");
    option1.classList.remove("redButton", "greenButton");
    option2.classList.remove("redButton", "greenButton");
    option3.classList.remove("redButton", "greenButton");

    //random order list & set countries in the options
    countriesList = countriesList.sort(function () { return Math.random() - 0.5 });
    option0.innerHTML = (`${countriesList[0]}`);
    option1.innerHTML = (`${countriesList[1]}`);
    option2.innerHTML = (`${countriesList[2]}`);
    option3.innerHTML = (`${countriesList[3]}`);

    //set te correct country and image
    let randomNumber = Math.random() * 3;
    randomNumber = Math.round(randomNumber);
    countryImage.setAttribute("src", `images/countries/${countriesList[randomNumber]}.svg`);
    let correctOption = document.querySelector(`.option${randomNumber}`);
    correctOption.classList.replace(`option${randomNumber}`, "correct");
    correctOption.classList.remove("greenButton");

    option0.addEventListener("click", (e) => {

        if (option0.classList.contains("option0")) {
            guessTheCountry.textContent = `Incorrect! Is ${countriesList[randomNumber]}`;
            pressButton = true;
            isCorrect = false;
            option0.classList.add("redButton");
        };
    });
    option1.addEventListener("click", (e) => {

        if (option1.classList.contains("option1")) {
            guessTheCountry.textContent = `Incorrect! Is ${countriesList[randomNumber]}`;
            pressButton = true;
            isCorrect = false;
            option1.classList.add("redButton");
        };
    });
    option2.addEventListener("click", (e) => {

        if (option2.classList.contains("option2")) {
            guessTheCountry.textContent = `Incorrect! Is ${countriesList[randomNumber]}`;
            pressButton = true;
            isCorrect = false;
            option2.classList.add("redButton");
        };
    });
    option3.addEventListener("click", (e) => {

        if (option3.classList.contains("option3")) {
            guessTheCountry.textContent = `Incorrect! Is ${countriesList[randomNumber]}`;
            pressButton = true;
            isCorrect = false;
            option3.classList.add("redButton");
        };
    });

    correctOption.addEventListener("click", (e) => {
        guessTheCountry.textContent = "Correct!";
        pressButton = true;
        isCorrect = true;
        correctOption.classList.add("greenButton");
    });

    function countdownFunction() {

        if (timerJS === 0) {
            clearInterval(countdown);
            guessTheCountry.textContent = `Time Out! Is ${countriesList[randomNumber]}`;
            startSection.removeAttribute("hidden");
            correctOption.classList.replace("correct", `option${randomNumber}`);
            correctOption.classList.add("greenButton");

        } else {
            timerJS--;
            timerHTML.textContent = (`${timerJS}`);
        }

        if (pressButton == true) {
            clearInterval(countdown);
            startSection.removeAttribute("hidden");
            correctOption.classList.replace("correct", `option${randomNumber}`);

            if (isCorrect == true) {
                pointsJS = pointsJS + timerJS + 10;
                console.log(pointsJS);
                pointsHTML.innerHTML = `${pointsJS}pts`;
            }
        }
    }

    if (numberQuestJS == 21) { //es 21
        finalSection.removeAttribute("hidden");
        finalText.innerHTML = `You made ${pointsJS} points!`;
        clearInterval(countdown);
        gameSection.setAttribute("hidden", "y");
    }
}