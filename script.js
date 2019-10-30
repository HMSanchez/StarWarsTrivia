var Data;
var request = new XMLHttpRequest();
var x = 0;
// var API = 'https://opentdb.com/api.php?amount=10&category=16';
var API = 'https://swapi.co/api/people';
var selfResults = [];
var quests = [];
var ans = [];
var replaceVal = "people";

var people1 = { category: "People", incorrect_answers: ["brown", "hazel", "black"],  };
var people2 = { category: "People", incorrect_answers: ["droid", "robot", "boy"] };
var people3 = { category: "People", incorrect_answers: ["mixed", "charcoal", "black"]  };
var people4 = { category: "People", incorrect_answers: ["60BBY", "56BBY", "59BBY"] };


var planet1 = { category: "Planets", incorrect_answers: ["366 ", "363 ", "365"] };
var planet2 = { category: "Planets", incorrect_answers: ["5750000", "6500000", "4500000"] };
var planet3 = { category: "Planets", incorrect_answers: ["frozen", "wet", "dry"] };
var planet4 = { category: "Planets", incorrect_answers: ["0", "45", "75"] };

var film1 = { category: "Films", incorrect_answers: ["1980-5-20", "1980-5-15", "1980-5-22"] };
var film2 = { category: "Films", incorrect_answers: ["The Sith Returns", "Return of the Sith", "Revenge of the Jedi"] };
var film3 = { category: "Films", incorrect_answers: ["George Lucas", "Irvin Kershner", "J.J. Abrams"] };
var film4 = { category: "Films", incorrect_answers: ["2015-12-10", "2015-12-15", "2015-5-12"] };

var species1 = { category: "Species", incorrect_answers: ["40", "20", "100"] };
var species2 = { category: "Species", incorrect_answers: ["Other", "Non-Mammal", "Reptile"]};
var species3 = { category: "Species", incorrect_answers: ["English", "Sulletese", "Jibberish"] };
var species4 = { category: "Species", incorrect_answers: ["140", "160", "100"] };

var starship1 = { category: "Starships", incorrect_answers: ["199999", "119999", "129999"] };
var starship2 = { category: "Starships", incorrect_answers: ["3", "2", "5"] };
var starship3 = { category: "Starships", incorrect_answers: ["2.9", "3.5", "5.0"] };
var starship4 = { category: "Starships", incorrect_answers: ["275000", "274899", "274999"] };

var vehicle1 = { category: "Vehicles", incorrect_answers: ["630", "699", "599"]};
var vehicle2 = { category: "Vehicles", incorrect_answers: ["All Transport All Terrain", "Armistice Tank Ammunition Tank", "Air Tatical Armored Torpedo"] };
var vehicle3 = { category: "Vehicles", incorrect_answers: ["10", "2", "5"]};
var vehicle4 = { category: "Vehicles", incorrect_answers: ["55000", "45000", "40000"] };

// var APICOPY = API.replace("27",replaceVal);
var scoreNum = 1;
loadData();

function loadData() {
    request.open('GET', API);
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    // console.log("replace " + replaceVal)


    Data = JSON.parse(request.responseText);
    console.log(Data);

    switch (API) {
        case "https://swapi.co/api/people":
            people1.correct_answer = Data.results[0].eye_color;
            people2.correct_answer = Data.results[2].gender;
            people3.correct_answer = Data.results[3].skin_color;
            people4.correct_answer = Data.results[9].birth_year;
            people1.question = "What are the color of "+ Data.results[0].name +"'s eyes ?";
            people2.question = "What gender is "+ Data.results[2].name +" ?";
            people3.question = "What is "+ Data.results[3].name +"'s skin color ?";
            people4.question = "What is the birth year of "+ Data.results[9].name +" ?";
            selfResults.push(people1);
            selfResults.push(people2);
            selfResults.push(people3);
            selfResults.push(people4);
            break;

        case "https://swapi.co/api/planets":
            selfResults = [];
            planet1.correct_answer = Data.results[0].orbital_period;
            planet2.correct_answer = Data.results[4].population;
            planet3.correct_answer = Data.results[5].climate;
            planet4.correct_answer = Data.results[8].surface_water;
            planet1.question = "What is the orbital period of the planet "+ Data.results[0].name +" ?";
            planet2.question = "What is the population of the planet "+ Data.results[4].name +" ?";
            planet3.question = "What is the climate of the planet "+ Data.results[5].name +" ?";
            planet4.question = "What percentage of the planet "+ Data.results[8].name +"'s surface is made up of water?";            
            selfResults.push(planet1);
            selfResults.push(planet2);
            selfResults.push(planet3);
            selfResults.push(planet4);
            console.log(selfResults);

            break;
        case "https://swapi.co/api/films":
            selfResults = [];
            film1.correct_answer = Data.results[5].release_date;
            film2.correct_answer = Data.results[3].title;
            film3.correct_answer = Data.results[4].director;
            film4.correct_answer = Data.results[6].release_date;
            film1.question = "What was the release date of Star Wars Episode V: " +Data.results[5].title+" ?";
            film2.question = "What was the title of Star Wars Episode III ?";
            film3.question = "Who directed Star Wars Episode IV: "+ Data.results[4].title +" ?";
            film4.question = "What was the release date of Star Wars Episode VII: "+ Data.results[6].title +" ?";            
            selfResults.push(film1);
            selfResults.push(film2);
            selfResults.push(film3);
            selfResults.push(film4);

            break;
        case "https://swapi.co/api/species":
            selfResults = [];
            species1.correct_answer = Data.results[4].average_lifespan;
            species2.correct_answer = Data.results[5].classification;
            species3.correct_answer = Data.results[0].language;
            species4.correct_answer = Data.results[8].average_height;
            species1.question = "What is the average lifespan of an "+ Data.results[4].name +" ?";            
            species2.question = "What is the classification of a "+ Data.results[5].name +" ?";            
            species3.question = "What language does a "+ Data.results[0].name +" speak?";            
            species4.question = "What is the average height of a "+ Data.results[8].name +" ?";                        
            selfResults.push(species1);
            selfResults.push(species2);
            selfResults.push(species3);
            selfResults.push(species4);

            break;
        case "https://swapi.co/api/starships":
            selfResults = [];
            starship1.correct_answer = Data.results[5].cost_in_credits;
            starship2.correct_answer = Data.results[7].passengers;
            starship3.correct_answer = Data.results[2].hyperdrive_rating;
            starship4.correct_answer = Data.results[0].crew;
            starship1.question = "How much does it cost to purchase an "+ Data.results[5].name +" ?";            
            starship2.question = "How many passengers does "+ Data.results[7].name +" hold?";            
            starship3.question = "What is the hyperdrive rating of the "+ Data.results[2].name +" ?";            
            starship4.question = "How much crew does the "+ Data.results[0].name +" hold?";            
            selfResults.push(starship1);
            selfResults.push(starship2);
            selfResults.push(starship3);
            selfResults.push(starship4);

            break;
        case "https://swapi.co/api/vehicles":
            selfResults = [];
            vehicle1.correct_answer = Data.results[4].max_atmosphering_speed;
            vehicle2.correct_answer = Data.results[6].model;
            vehicle3.correct_answer = Data.results[7].passengers;
            vehicle4.correct_answer = Data.results[0].cargo_capacity;
            vehicle1.question = "What is the max atmosphering speed of a "+ Data.results[4].name +" ?";            
            vehicle2.question = "What does "+ Data.results[6].name +" stand for ?";            
            vehicle3.question = "How many passengers does an "+ Data.results[7].name +" hold ?";            
            vehicle4.question = "What is the cargo capactiy of a "+ Data.results[0].name +" ?";                        
            selfResults.push(vehicle1);
            selfResults.push(vehicle2);
            selfResults.push(vehicle3);
            selfResults.push(vehicle4);

            break;
    }
    // obj3.correct_answer =Data.results[5].release_date;

    document.getElementById("currCat").innerHTML = "Current Category: " + selfResults[0].category;

    document.getElementById("question").innerHTML = selfResults[0].question;
    Answers();
    work();

}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var c1 = false;
var c2 = false;
var c3 = false;
var c4 = false;
function Answers() {
        var rand = getRndInteger(1,4);
console.log(rand);
        switch(rand){
    case 1:
       document.getElementById("resp1").innerHTML = selfResults[x].correct_answer;
    document.getElementById("resp2").innerHTML = selfResults[x].incorrect_answers[2];
    document.getElementById("resp3").innerHTML = selfResults[x].incorrect_answers[1];
    document.getElementById("resp4").innerHTML = selfResults[x].incorrect_answers[0];
    c1 = true;

break;
    case 2:
    document.getElementById("resp2").innerHTML = selfResults[x].correct_answer;
    document.getElementById("resp1").innerHTML = selfResults[x].incorrect_answers[2];
    document.getElementById("resp3").innerHTML = selfResults[x].incorrect_answers[1];
    document.getElementById("resp4").innerHTML = selfResults[x].incorrect_answers[0];
    c2 = true;

    break;
    case 3:
    document.getElementById("resp3").innerHTML = selfResults[x].correct_answer;
    document.getElementById("resp2").innerHTML = selfResults[x].incorrect_answers[2];
    document.getElementById("resp1").innerHTML = selfResults[x].incorrect_answers[1];
    document.getElementById("resp4").innerHTML = selfResults[x].incorrect_answers[0];
    c3 = true;

    break;
    case 4:
    document.getElementById("resp4").innerHTML = selfResults[x].correct_answer;
    document.getElementById("resp3").innerHTML = selfResults[x].incorrect_answers[2];
    document.getElementById("resp2").innerHTML = selfResults[x].incorrect_answers[1];
    document.getElementById("resp1").innerHTML = selfResults[x].incorrect_answers[0];
    c4 = true;
    
    break;
        }

    // document.getElementById("resp1").innerHTML = selfResults[x].correct_answer;
    // document.getElementById("resp2").innerHTML = selfResults[x].incorrect_answers[2];
    // document.getElementById("resp3").innerHTML = selfResults[x].incorrect_answers[1];
    // document.getElementById("resp4").innerHTML = selfResults[x].incorrect_answers[0];
}

function myFunction1() {
    boundsCheck();

    if (x < selfResults.length - 1) {
        if(c1 ==true){

            document.getElementById("correctAns").innerHTML = "Correct";
            document.getElementById("correctAns").style.backgroundColor = "green";
            // document.getElementById("resp1").style.backgroundColor = "gray";
            ++scoreNum;
            document.getElementById("question").innerHTML = selfResults[++x].question;
            Answers(x);

        }else{
            document.getElementById("correctAns").innerHTML = "Incorrect";
            document.getElementById("correctAns").style.backgroundColor = "red";
            // document.getElementById("resp2").style.backgroundColor = "gray";
            document.getElementById("question").innerHTML = selfResults[++x].question;
            Answers(x);
        }
    }
}
function myFunction2() {
    boundsCheck();
    if (x < selfResults.length - 1) {
        if(c2 ==true){

            document.getElementById("correctAns").innerHTML = "Correct";
            document.getElementById("correctAns").style.backgroundColor = "green";
            // document.getElementById("resp1").style.backgroundColor = "gray";
            ++scoreNum;
            document.getElementById("question").innerHTML = selfResults[++x].question;
            Answers(x);

        }else{
            document.getElementById("correctAns").innerHTML = "Incorrect";
            document.getElementById("correctAns").style.backgroundColor = "red";
            // document.getElementById("resp2").style.backgroundColor = "gray";
            document.getElementById("question").innerHTML = selfResults[++x].question;
            Answers(x);
        }
    }


    //   work();


} function myFunction3() {
    boundsCheck();
    if (x < selfResults.length - 1) {

        if(c3 ==true){

            document.getElementById("correctAns").innerHTML = "Correct";
            document.getElementById("correctAns").style.backgroundColor = "green";
            // document.getElementById("resp1").style.backgroundColor = "gray";
            ++scoreNum;
            document.getElementById("question").innerHTML = selfResults[++x].question;
            Answers(x);

        }else{
            document.getElementById("correctAns").innerHTML = "Incorrect";
            document.getElementById("correctAns").style.backgroundColor = "red";
            // document.getElementById("resp2").style.backgroundColor = "gray";
            document.getElementById("question").innerHTML = selfResults[++x].question;
            Answers(x);
        }
    }
} function myFunction4() {
    boundsCheck();
    if (x < selfResults.length - 1) {

        if(c4 ==true){

            document.getElementById("correctAns").innerHTML = "Correct";
            document.getElementById("correctAns").style.backgroundColor = "green";
            // document.getElementById("resp1").style.backgroundColor = "gray";
            ++scoreNum;
            document.getElementById("question").innerHTML = selfResults[++x].question;
            Answers(x);

        }else{
            document.getElementById("correctAns").innerHTML = "Incorrect";
            document.getElementById("correctAns").style.backgroundColor = "red";
            // document.getElementById("resp2").style.backgroundColor = "gray";
            document.getElementById("question").innerHTML = selfResults[++x].question;
            Answers(x);
        }
    }
}

function work() {
    if (x > selfResults.length) {
        saveScore();
        window.close();
    }
    // for(var i=1;i<Data.results.length;i++){
    //     document.getElementById("question").innerHTML = Data.results[i].question;

    //     Answers(i);
    // }

    // while(i<Data.results.length){
    //     document.getElementById("question").innerHTML = Data.results[i].question;
    //     Answers(i);
    // console.log(i);
    // i++
    // }
    // document.getElementById("question").innerHTML = Data.results[0].question;
    // Answers(0);


}

// function changeCat()
// {
//     for(var i = 0; i < Data.results.length;i++){
//         Data.results[i].category = "Art";
//     }
// }
function boundsCheck() {
    if (x == selfResults.length - 1) {
        document.getElementById("score").innerHTML = "Score: " + scoreNum + "/" + selfResults.length;

        saveScore();
        // checkCookie();
    }
}

function myFunction() {
    var rand = Math.floor(Math.random() * 6);
    // var current = API
    switch (rand) {
        case 0:

            //   API=  APICOPY;
            API = API.replace(replaceVal, "planets");
            replaceVal = "planets";
            loadData();

            break;
        case 1:
            // API=  APICOPY;

            API = API.replace(replaceVal, "people");
            replaceVal = "people";
            loadData();

            break;
        case 2:
            // API=  APICOPY;
            API = API.replace(replaceVal, "films");
            replaceVal = "films";
            loadData();

            break;
        case 3:
            // API=  APICOPY;
            API = API.replace(replaceVal, "species");
            replaceVal = "species";
            loadData();

            break;
        case 4:
            // API=  APICOPY;
            API = API.replace(replaceVal, "starships");
            replaceVal = "starships";
            loadData();

            break;
        case 5:
            // API=  APICOPY;
            API = API.replace(replaceVal, "vehicles");
            replaceVal = "vehicles";
            loadData();

            break;
        //     console.log(API);
    }
    // changeCat();
}


// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();


//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires="+d.toUTCString();
//     document.cookie =  cname + "=" + cvalue +  ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }


// console.log("NUM " +NUM);
// function checkCookie() {
//     //  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     var user = getCookie(scoreNum.toString());

// if()
//     // var num =scoreNum;
//     // if (user != "") {
//     //     // setCookie("username", user, 365,getScore(num));
//     //     console.log(num);
//     //     alert("Welcome again " + user + " your high score is " +num);
//     // } else {
//     //     user = prompt("Please enter your name:", "");
//     //     if (user != "" && user != null) {
//     //         setCookie("username", user, 365,getScore(num));
//     //     }
//     // }
// }

function saveScore() {
    var HS = scoreNum;
    var date = new Date();
    date.setMonth(date.getMonth() + 5);
    var expires = "; expires=" + date.toGMTString();
    document.cookie = "score=" + HS + expires + "; path=/";
}

function loadScore() {

    var cookiearray = document.cookie.split(';');
    for (var i = 0; i < cookiearray.length; i++) {
        var name = cookiearray[i].split('=')[0];
        var value = cookiearray[i].split('=')[1];
        if (name == "score") {
            alert("Prior score found. Loading score...");
            HS = value;
        }
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  