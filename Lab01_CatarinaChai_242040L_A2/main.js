/* jshint loopfunc: true */

//target all elements to save as constants
var inFullScreen = false;

//for loading page
const noButton = document.querySelector("#no");
const yesButton = document.querySelector("#yes");
var noAvoidedCounter = 0;
const container = document.querySelector("aside > div");
const enterPg = document.querySelector("aside");
//form
const formBody = document.querySelector("form");
const suggestionInput = document.querySelectorAll("form>input")[0];
const emailInput = document.querySelectorAll("form>input")[1];
var suggestions = [];

//for bgm
const bgm = document.querySelector("#auto");
var musicBarButton = document.querySelector("#musicBar");
var musicSpan = musicBarButton.querySelectorAll("span");
var musicPlaying = true;

// nav for start screen
var homeButton = document.querySelectorAll(".homeButton");
var beansButton = document.querySelectorAll(".beansButton");
var brewingButton = document.querySelectorAll(".brewingButton");
var cafesButton = document.querySelectorAll(".cafesButton");
var gameButton = document.querySelectorAll(".gameButton");
var sectionList = document.querySelectorAll(".Sec");

//for fullscreen n not
const zoomIn_OutButton = document.querySelector("#zoomIn_Out");
const fullScreenThis = document.documentElement;

//for hambuger menu
const hambugerMenu = document.querySelector("#hambugerMenu");
const closeButton = document.querySelector("#closeMenu");
var hambugerDiv = document.querySelectorAll("body>div")[1];
var hambugerMenuDiv = hambugerDiv.getElementsByTagName("div")[0];
var menuOpen = false;
//beans 
var diffTypeBeans = ["#001:Arabica", "#002:Robusta", "#003:Liberica", "#004:Excelsa"];
var beansCounter = 0;
var leftArrowButton = document.querySelectorAll(".left");
var rightArrowButton = document.querySelectorAll(".right");
var leftData = document.querySelector("#goIntoLeft");
var rightData = document.querySelector("#goIntoRight");

//bean cards 
var arabicaContent = document.querySelectorAll("#beans>section:nth-of-type(1)>div:nth-of-type(1)>div");
var arabicaBean = document.querySelector("#beans>section:nth-of-type(1)>div:nth-of-type(1)>img");

var robustaContent = document.querySelectorAll("#beans>section:nth-of-type(2)>div:nth-of-type(1)>div");
var robustaBean = document.querySelector("#beans>section:nth-of-type(2)>div:nth-of-type(1)>img");

var libericaContent = document.querySelectorAll("#beans>section:nth-of-type(3)>div:nth-of-type(1)>div");
var libericaBean = document.querySelector("#beans>section:nth-of-type(3)>div:nth-of-type(1)>img");

var excelsaContent = document.querySelectorAll("#beans>section:nth-of-type(4)>div:nth-of-type(1)>div");
var excelsaBean = document.querySelector("#beans>section:nth-of-type(4)>div:nth-of-type(1)>img");

//brewing 
var diffBrewButton = document.querySelectorAll("#brewing>div>div>button");

//cafe
var cafeDiv = document.querySelector("#cafes>div:nth-of-type(1)");
const cafesBackgrounds = ['images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg', 'images/apartment_1.jpg', 'images/kopiKhoo_2.jpg', 'images/corner_1.jpg', 'images/kopiKhoo_3.jpg', 'images/infusion_1.jpg', 'images/suzuki_2.jpg', 'images/kopiKhoo_1.jpg', 'images/suzuki_1.jpg', 'images/infusion_2.jpg'];
let index = 0;

var cafeButton = document.querySelectorAll("#cafes>div>div>button");

// game
// Change this line:
var diffIngredientBut = document.querySelectorAll("#game>div:nth-of-type(1)>button");
var allIngredientList = ["espresso", "water", "milk", "foam", "ice", "rubbish"];
var Timer = 60;
var Score = 0;
var addedCounter = 0;
var Added = ["none", "none", "none"];
var createButton = document.querySelector("#game>div:nth-of-type(1)>div>button");
var IngrendientAddDiv = document.querySelectorAll("#game>div:nth-of-type(1)>div:nth-last-of-type(1)>div");
var success = false;
const recipe = [
    ["espresso"],//espresso
    ["espresso", "water"],//americano
    ["espresso", "water", "ice"],//ice americano
    ["espresso", "milk"],//latte
    ["espresso", "milk", "ice"],//ice latte
    ["espresso", "milk", "foam"]//cappuchino
];

var makeThis = 0;
var gameDiv = document.querySelector("#game>div:nth-of-type(1)");
var customerHead = document.querySelector("#game>div:nth-of-type(1)>div:nth-of-type(2)");
var drinks = ["espresso", "hotAmericano", "iceAmericano", "hotLatte", "iceLatte", "hotCappuccino"];
var customer = document.querySelector("#game>div:nth-of-type(1)>div:nth-of-type(1)>img");
var recipePgCounter = 0;
var recipePgImg = document.querySelector("#game>aside>div>div>img");
var updateCountDown = document.querySelector("#game>div>aside:nth-of-type(2)");
var updateCustomer = document.querySelector("#game>div>aside:nth-of-type(1)>span");
var gameStarted = false;
var countDownTimer;
var startGameButton = document.querySelector("#game>div:nth-last-of-type(1)>button:nth-of-type(1)");
var restartGameButton = document.querySelector("#game>div:nth-last-of-type(1)>button:nth-of-type(2)");
/* ======================
        FUNCTIONS
========================*/
function hideAll() {
    //go through all section to hide the lise
    for (let oneSec of sectionList) {
        oneSec.style.display = "none";
        //hide the other section in that pg 
        var _sectionList = oneSec.querySelectorAll(":scope > section");
        for (let _peroneSec of _sectionList) {
            _peroneSec.style.display = "none";
        }
    }
    restartGame();
    recipePgCounter = 0;
    recipePgImg.src = "images/recipe" + recipePgCounter + ".jpg";
}

function show(idName, displayType) {
    hideAll();
    let _section = document.querySelector("#" + idName);
    _section.style.display = displayType;
    if (menuOpen) {
        closeMenu();
    }
}

function showOtherSection(sectionID, idName, displayType, buttonSide) {
    if (buttonSide == "left") {
        sectionID--;
        if (sectionID < 0) {
            sectionID = diffTypeBeans.length - 1;

        }
    }
    show(idName, displayType);
    var _article = document.querySelector("#" + idName);
    var _sectionName = _article.querySelectorAll("#" + idName + ">section")[sectionID];
    var _sectionList = _article.querySelectorAll("#" + idName + ">section");
    for (let oneSec of _sectionList) {
        oneSec.style.display = "none";
    }
    _sectionName.style.display = displayType;
}

function fullScreen() {
    if (document.documentElement.clientWidth <= 800) {
    console.log("shld be full screen");
    
}
    if (fullScreenThis.requestFullscreen) {
        fullScreenThis.requestFullscreen();
    }
    else if (fullScreenThis.webkitRequestFullscreen) { /* Safari */
        fullScreenThis.webkitRequestFullscreen();
    }
    else if (fullScreenThis.msRequestFullscreen) { /* IE11 */
        fullScreenThis.msRequestFullscreen();
    }
}

function exitFullScreen() {
    if (document.exitFullScreen) {
        document.exitFullscreen();
    }
    else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    }
    else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

function canFullScreenOrOpp() {
    var changeZoomLogo = zoomIn_OutButton.getElementsByTagName("img")[0];
    if (!inFullScreen) {
        changeZoomLogo.src = "images/zoom_out.png";
        changeZoomLogo.alt = "exit full screen";
        changeZoomLogo.title = "exit full screen";
        inFullScreen = true;
        fullScreen();
    }
    else if (inFullScreen) {
        changeZoomLogo.src = "images/fullScreen.png";
        changeZoomLogo.alt = "enter full screen";
        changeZoomLogo.title = "enter full screen";
        inFullScreen = false;
        exitFullScreen();
    }
}

function openMenu() {
    menuOpen = true;
    hambugerMenu.style.display = "none";
    hambugerMenuDiv.style.display = "grid";
    var changeWidth = "";
    if (document.documentElement.clientWidth <= 800) {
        //For Mobile breakpoint
        changeWidth = "100vw";
    }
    else {
        changeWidth = "35vw";
    }
    setTimeout(function () {
        hambugerMenuDiv.style.width = changeWidth;
        hambugerMenuDiv.style.transition = "width 1s";
        closeButton.style.display = "block";
    }, 10);
}

function closeMenu() {
    menuOpen = false;
    closeButton.style.display = "none";
    hambugerMenu.style.display = "block";
    hambugerMenuDiv.style.width = "0vw";
    hambugerMenuDiv.style.transition = "width 1s";
    setTimeout(function () {
        hambugerMenuDiv.style.display = "none";
    }, 1000);
}

function updateBeanButtons(array) {
    let current = beansCounter; // current right-side index
    let prev = (current - 1 + array.length) % array.length;
    if (document.documentElement.clientWidth > 800) {
        leftData.innerText = array[prev];
    }
    rightData.innerText = array[current];
}

function goRight(array) {
    beansCounter = (beansCounter + 1) % array.length;
    updateBeanButtons(array);
    if (document.documentElement.clientWidth <= 800) {
        showOtherSection(beansCounter, "beans", "grid", "right");
    }
}

function goLeft(array) {
    beansCounter = (beansCounter - 1 + array.length) % array.length;
    updateBeanButtons(array);
    if (document.documentElement.clientWidth <= 800) {
        showOtherSection(beansCounter, "beans", "grid", "right");
    }
}

function autoPlay() {
    if (bgm.paused) {
        bgm.play();
    }
}

function musicController() {
    if (musicPlaying) {
        musicStop();
    }
    else {
        musicStart();
    }
}

function musicStop() {
    bgm.muted = true;
    musicPlaying = false;

    for (let _span of musicSpan) {
        _span.style.backgroundColor = "#201b17ff";
        _span.style.animationName = "mutedMove";
    }
}

function musicStart() {
    bgm.muted = false;
    musicPlaying = true;

    for (let _span of musicSpan) {
        _span.style.backgroundColor = "#eedec0";
        _span.style.animationName = "move";

    }
}

function randomiseLocation() {
    //creating animation using css position
    const maxLeft = container.clientWidth - noButton.offsetWidth;
    const maxTop = container.clientHeight - noButton.offsetHeight;

    const _left = Math.floor(Math.random() * maxLeft);
    const _top = Math.floor(Math.random() * maxTop);

    noButton.style.left = _left + "px";
    noButton.style.top = _top + "px";
}

function rejectNo() {
    randomiseLocation();
    if (noAvoidedCounter == 0) {
        noButton.innerHTML = "are you sure?";
    }
    else if (noAvoidedCounter == 1) {
        noButton.innerHTML = "but its coffee &#128557";
    }
    else if (noAvoidedCounter == 2) {
        noButton.innerHTML = "pls think again :<";
    }
    else if (noAvoidedCounter == 3) {
        noButton.innerHTML = "trust me, u wont regret it";
    }
    else if (noAvoidedCounter == 4) {
        noButton.innerHTML = "are u sure?";
    }
    else if (noAvoidedCounter == 5) {
        noButton.innerHTML = "last chance...";
        noButton.style.width = "10vw";
        yesButton.style.width = "30vw";
        yesButton.style.left = "25%";
    }
    else if (noAvoidedCounter == 6) {
        noButton.innerHTML = "u sure...";
        noButton.style.width = "5vw";
        noButton.style.fontSize = "0.5vw";
        yesButton.style.height = "7.5vh";
        yesButton.style.fontSize = "3.5vw";

    }
    else {
        noButton.style.display = "none";
        yesButton.style.bottom = "0%";
        yesButton.style.top = "0%";
        yesButton.style.right = "0%";
        yesButton.style.left = "0%";
        yesButton.style.fontSize = "7.5vw";
        yesButton.style.height = "100%";
        yesButton.style.width = "100%";

    }
    noAvoidedCounter++;
}

function enterWeb() {
    enterPg.style.display = "none";
    var logoMenu = document.getElementById("menu");
    logoMenu.style.display = "block";
    hambugerDiv.style.display = "block";
    zoomIn_OutButton.style.display = "block";
    var _main = document.querySelector("main");
    _main.style.display = "grid";
    var _footer = document.querySelector("footer");
    _footer.style.display = "grid";
    musicBarButton.style.display = "flex";

}

function showBacking(_whichContent) {
    var contentH3 = _whichContent.querySelector("h3");
    var contentImg = _whichContent.querySelector("img");
    var contentOl = _whichContent.querySelector("ol");
    contentH3.style.display = "none";
    contentImg.style.display = "none";
    contentOl.style.display = "block";
}

function showFront(_whichContent) {
    var contentH3 = _whichContent.querySelector("h3");
    var contentImg = _whichContent.querySelector("img");
    var contentOl = _whichContent.querySelector("ol");
    contentH3.style.display = "block";
    contentImg.style.display = "block";
    contentOl.style.display = "none";
}

function rotateThis(_img, pointWhere) {
    const rotateAngle = ["315deg", "45deg", "225deg", "135deg", "0deg"];
    _img.style.transform = "rotate(" + rotateAngle[pointWhere] + ")";
}

function changeBg() {
    cafeDiv.style.background = "linear-gradient(rgba(70, 33, 35, 0.35), rgba(70, 33, 35, 0.35)), url('" + cafesBackgrounds[index] + "')";
    cafeDiv.style.backgroundSize = "inherit";
    cafeDiv.style.backgroundPosition = "center center";
    index = (index + 1) % cafesBackgrounds.length;
}

function moveThis(_img, whichRow) {
    _img.style.gridRow = whichRow;
}

function ingredientAdded(whichOne) {
    if (whichOne == diffIngredientBut.length - 1) {
        // This is the rubbish/clear button
        if (addedCounter > 0) {
            addedCounter--;
            Added[addedCounter] = "none";
            IngrendientAddDiv[addedCounter].style.background = "none";
            IngrendientAddDiv[addedCounter].style.backgroundColor = "#eedec0";
        }
    }
    else {
        if (addedCounter < 3) {
            Added[addedCounter] = allIngredientList[whichOne];
            IngrendientAddDiv[addedCounter].style.background = "url('images/" + Added[addedCounter] + "Game.jpg')";
            IngrendientAddDiv[addedCounter].style.backgroundSize = "cover";
            IngrendientAddDiv[addedCounter].style.backgroundPosition = "center center";
            addedCounter++;
        }
        else {
            // pop up msg
            alert("Cannot add more ingredients!");
        }
    }
}


function createDrink() {
    var checked = new Array(recipe[makeThis].length).fill(false);
    var checkedCounter = 0;
    var totalIngredientUsed = 0;
    for (let i = 0; i < Added.length; i++) {
        if (Added[i] != "none") {
            totalIngredientUsed++;
        }
    }
    for (let i = 0; i < recipe[makeThis].length; i++) {
        for (let j = 0; j < Added.length; j++) {
            if (Added[j] != "none" && Added[j] == recipe[makeThis][i] && !checked[i]) {
                checked[i] = true;
                checkedCounter++;
                break;
            }
        }
    }

    //make drink correct
    var fontSize = 0.5;
    if (document.documentElement.clientWidth <= 800) {
        fontSize = 0.25;
        console.log("changing size");
    }
    if (checkedCounter === recipe[makeThis].length && totalIngredientUsed === recipe[makeThis].length) {
        success = true;
        Score++;
        updateCustomer.innerHTML = ":" + Score;
        gameDiv.style.outline = fontSize + "rem solid #afffa2ff";
    }
    //make drink wrong
    else {
        success = false;
        gameDiv.style.outline = fontSize + "rem solid #ff8282ff";
    }
    newCustomer();
    setTimeout(function () {
        gameDiv.style.outline = fontSize + "rem solid #eedec0";
    }, 1000);
}

function newCustomer() {
    // reset everything 
    for (let i = 0; i < IngrendientAddDiv.length; i++) {
        IngrendientAddDiv[i].style.background = "none";
        IngrendientAddDiv[i].style.backgroundColor = "#eedec0";
    }
    Added = ["none", "none", "none"];
    addedCounter = 0;
    //newCustomer 
    var customerId = Math.floor(Math.random() * 2);
    customer.src = "images/customer" + customerId + ".png";
    // new order
    makeThis = Math.floor(Math.random() * 6);
    customerHead.style.background = "url('images/" + drinks[makeThis] + "Game.jpg')";
    customerHead.style.backgroundSize = "cover";
    customerHead.style.backgroundPosition = "center center";

}

function recipeRight() {
    recipePgCounter++;
    if (recipePgCounter >= drinks.length) {
        recipePgCounter = 0;
    }
    recipePgImg.src = "images/recipe" + recipePgCounter + ".jpg";
}

function recipeLeft() {
    recipePgCounter--;
    if (recipePgCounter < 0) {
        recipePgCounter = drinks.length - 1;
    }
    recipePgImg.src = "images/recipe" + recipePgCounter + ".jpg";
}

function restartGame() {
    gameStarted = false;
    // reset everything 
    for (let i = 0; i < IngrendientAddDiv.length; i++) {
        IngrendientAddDiv[i].style.background = "none";
        IngrendientAddDiv[i].style.backgroundColor = "#eedec0";
    }
    Added = ["none", "none", "none"];
    addedCounter = 0;
    makeThis = 0;
    Score = 0;
    Timer = 60;
    updateCustomer.innerHTML = ":" + Score;
    updateCountDown.innerHTML = " &#128345; Time Left:" + Timer;
    clearInterval(countDownTimer);

}

//validate email
function validEmail(email) {
    const matchThis = /\S+@\S+\.\S+/;
    return matchThis.test(email);
}

function addSuggestion(e){
    e.preventDefault();
    var _email=emailInput.value;
    var _suggestion=suggestionInput.value;
    // Validate inputs
    if (!suggestionInput || !emailInput) {
        alert("Input both data");
        return;
    }

    if (!validEmail(_email)) {
        alert("Input a valid email");
        return;
    }

    if (_suggestion.length < 5) {
        alert("Please give a more detail suggestion!");
        return;
    }
    
    // create suggestion object
    const newSuggestion = {
        text: _suggestion,
        email: _email,
    };
    alert("Suggestion is sent! We will get back to you asap via email! Thank you!");
    // add to suggestions array
    suggestions.push(newSuggestion);

    // Clear form
    suggestionInput.value = '';
    emailInput.value = '';
}
/* ======================
       EVENT LISTENER
========================*/
formBody.addEventListener("submit", function (e) {
    addSuggestion(e);
});

for (let homeBut of homeButton) {
    homeBut.addEventListener("click", function () {
        show("start", "grid");
    });
}

for (let beanBut of beansButton) {
    beanBut.addEventListener("click", function () {
        show("beans", "grid");
    });
}

for (let brewingBut of brewingButton) {
    brewingBut.addEventListener("click", function () {
        show("brewing", "grid");
    });
}

for (let cafesBut of cafesButton) {
    cafesBut.addEventListener("click", function () {
        show("cafes", "grid");
    });
}

for (let gameBut of gameButton) {
    gameBut.addEventListener("click", function () {
        show("game", "grid");
    });
}

hambugerMenu.addEventListener("click", function () {
    openMenu();
});

closeButton.addEventListener("click", function () {
    closeMenu();
});

// beans 
rightArrowButton[0].addEventListener("click", function () {
    goRight(diffTypeBeans);
});

leftArrowButton[0].addEventListener("click", function () {
    goLeft(diffTypeBeans);
});

rightData.addEventListener("click", function () {
    showOtherSection(beansCounter, "beans", "grid", "right");
});

leftData.addEventListener("click", function () {
    showOtherSection(beansCounter, "beans", "grid", "left");
});

musicBarButton.addEventListener("click", function () {
    musicController();
});

noButton.addEventListener("mousedown", function () {
    rejectNo();
});

yesButton.addEventListener("click", function () {
    enterWeb();
    autoPlay();
});

//cafe
for (let i = 0; i < cafeButton.length; i++) {
    cafeButton[i].addEventListener("click", function () {
        showOtherSection(i, "cafes", "grid", "right");
    });
}
// game
for (let i = 0; i < diffIngredientBut.length; i++) {
    diffIngredientBut[i].addEventListener("click", function () {
        if (gameStarted) {
            ingredientAdded(i);
        }
        else {
            alert("Press Start to start shift!");
        }
    });
}

createButton.addEventListener("click", function () {
    if (gameStarted) {
        createDrink();
    }
    else {
        alert("Press Start to start shift!");
    }

});

rightArrowButton[1].addEventListener("click", function () {
    recipeRight();
});

leftArrowButton[1].addEventListener("click", function () {
    recipeLeft();
});
startGameButton.addEventListener("click", function () {
    gameStarted = true;
    alert("Your shift has started! What are you waiting for?");
    startCountdown();
});
restartGameButton.addEventListener("click", function () {
    restartGame();
    alert("The day has restarted! Press start to begin your shift!");
});
/* ======================
        Interval
========================*/
setInterval(changeBg, 3500);

function startCountdown() {
    countDownTimer = setInterval(function () {
        updateCountDown.innerHTML = " &#128345; Time Left: " + Timer;
        Timer--;
        if (Timer < 0) {
            clearInterval(countDownTimer);
            alert("Shift Over! You have successfully served a total of " + Score + " customer!");
            restartGame();
        }
    }, 1000);
}
/* ======================
          Media
========================*/
const rows = 4;
const cols = 4;
var backingShown = [];
for (var i = 0; i < rows; i++) {
    var row = [];
    for (var j = 0; j < cols; j++) {
        row.push(true);
    }
    backingShown.push(row);
}
// This creates a 4x4 grid filled with true

if (document.documentElement.clientWidth <= 800) {
    document.addEventListener("touchstart", function () {fullScreen();});
    document.addEventListener("click", function () {fullScreen();});
    zoomIn_OutButton.style.display = "none";
    //arabica beans
    for (let i = 0; i < arabicaContent.length; i++) {
        arabicaContent[i].addEventListener("click", function () {
            if (backingShown[0][i]) {
                showFront(arabicaContent[i]);
                backingShown[0][i] = false;
                rotateThis(arabicaBean, 4); // reset rotation
                moveThis(arabicaBean, 1);
            }
            else {
                showBacking(arabicaContent[i]);
                rotateThis(arabicaBean, i);
                moveThis(arabicaBean, i + 1);
                backingShown[0][i] = true;
                for (let j = 0; j < arabicaContent.length; j++) {
                    if (backingShown[0][j] && j != i) {
                        showFront(arabicaContent[j]);
                        backingShown[0][j] = false;
                    }
                }
            }
        });
        robustaContent[i].addEventListener("click", function () {
            if (backingShown[1][i]) {
                showFront(robustaContent[i]);
                backingShown[1][i] = false;
                rotateThis(robustaBean, 4); // reset rotation
                moveThis(robustaBean, 1);
            }
            else {
                showBacking(robustaContent[i]);
                rotateThis(robustaBean, i);
                moveThis(robustaBean, i + 1);
                backingShown[1][i] = true;
                for (let j = 0; j < robustaContent.length; j++) {
                    if (backingShown[1][j] && j != i) {
                        showFront(robustaContent[j]);
                        backingShown[1][j] = false;
                    }
                }
            }
        });
        libericaContent[i].addEventListener("click", function () {
            if (backingShown[2][i]) {
                showFront(libericaContent[i]);
                backingShown[2][i] = false;
                rotateThis(libericaBean, 4); // reset rotation
                moveThis(libericaBean, 1);
            }
            else {
                showBacking(libericaContent[i]);
                rotateThis(libericaBean, i);
                moveThis(libericaBean, i + 1);
                backingShown[2][i] = true;
                for (let j = 0; j < libericaContent.length; j++) {
                    if (backingShown[2][j] && j != i) {
                        showFront(libericaContent[j]);
                        backingShown[2][j] = false;
                    }
                }
            }
        });
        excelsaContent[i].addEventListener("click", function () {
            if (backingShown[3][i]) {
                showFront(excelsaContent[i]);
                backingShown[3][i] = false;
                rotateThis(excelsaBean, 4); // reset rotation
                moveThis(excelsaBean, 1);
            }
            else {
                showBacking(excelsaContent[i]);
                rotateThis(excelsaBean, i);
                moveThis(excelsaBean, i + 1);
                backingShown[3][i] = true;
                for (let j = 0; j < excelsaContent.length; j++) {
                    if (backingShown[3][j] && j != i) {
                        showFront(excelsaContent[j]);
                        backingShown[3][j] = false;
                    }
                }
            }
        });
    }
}
else {
    zoomIn_OutButton.addEventListener("click", function () {
        canFullScreenOrOpp();
    });
    //arabica beans
    for (let i = 0; i < arabicaContent.length; i++) {

        arabicaContent[i].addEventListener("mouseover", function () {
            showBacking(arabicaContent[i]);
            rotateThis(arabicaBean, i);
        });
        arabicaContent[i].addEventListener("mouseout", function () {
            showFront(arabicaContent[i]);
            // Check if mouse is no longer on any item
            var isAnyHover = Array.from(arabicaContent).some(function (el) {
                return el.matches(':hover');
            });

            if (!isAnyHover) {
                rotateThis(arabicaBean, 4); // reset rotation
            }
        });

        robustaContent[i].addEventListener("mouseover", function () {
            showBacking(robustaContent[i]);
            rotateThis(robustaBean, i);
        });
        robustaContent[i].addEventListener("mouseout", function () {
            showFront(robustaContent[i]);
            // Check if mouse is no longer on any item
            var isAnyHover = Array.from(robustaContent).some(function (el) {
                return el.matches(':hover');
            });

            if (!isAnyHover) {
                rotateThis(robustaBean, 4); // reset rotation
            }
        });

        libericaContent[i].addEventListener("mouseover", function () {
            showBacking(libericaContent[i]);
            rotateThis(libericaBean, i);
        });
        libericaContent[i].addEventListener("mouseout", function () {
            showFront(libericaContent[i]);
            // Check if mouse is no longer on any item
            var isAnyHover = Array.from(libericaContent).some(function (el) {
                return el.matches(':hover');
            });

            if (!isAnyHover) {
                rotateThis(libericaBean, 4); // reset rotation
            }
        });

        excelsaContent[i].addEventListener("mouseover", function () {
            showBacking(excelsaContent[i]);
            rotateThis(excelsaBean, i);
        });
        excelsaContent[i].addEventListener("mouseout", function () {
            showFront(excelsaContent[i]);
            // Check if mouse is no longer on any item
            var isAnyHover = Array.from(excelsaContent).some(function (el) {
                return el.matches(':hover');
            });

            if (!isAnyHover) {
                rotateThis(excelsaBean, 4); // reset rotation
            }
        });
    }
    //brewing
    for (let i = 0; i < diffBrewButton.length; i++) {
        diffBrewButton[i].addEventListener("mouseover", function () {
            diffBrewButton[i].classList.add("bounceAnimation");
            diffBrewButton[i].style.fontSize = "4vw";
            diffBrewButton[i].style.transition = "font-size 1s";
        });
        diffBrewButton[i].addEventListener("mouseout", function () {
            diffBrewButton[i].classList.remove("bounceAnimation");
            diffBrewButton[i].style.transition = "font-size 1s";
            diffBrewButton[i].style.fontSize = "2.5vw";
        });
    }
}
//brewing
for (let i = 0; i < diffBrewButton.length; i++) {

    diffBrewButton[i].addEventListener("click", function () {
        showOtherSection(i, "brewing", "grid", "right");
    });
}