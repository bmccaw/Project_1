//OnLoad Modal
$(window).ready(function () {

    $('#onLoad').modal('show');

    //clear num value
    $("#num").val("")

    //hide content
    $('.jumbotron').hide();
    $('#graphicDiv').hide();
    $('.soc').hide();
    $("#resultsDiv").hide();
    $("#pollDiv").hide();
    $("#newsDiv").hide();
});

//establish variables for modal
var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
var charactersLength = 7;
var randomGenerator = '';
var success = new Audio("success.wav");
var alarm = new Audio("alarm.wav");
var login = new Audio("login.wav");
var show = new Audio("show.wav");
var hide = new Audio("hide.wav");
var back = new Audio("back.wav");
var vote = new Audio("vote.wav");
var secret = new Audio("raven.mp3");

//create random code 7 characters long and set as text in modal
for (var i = 0; i < charactersLength; i++) {
    var rnum = Math.floor(Math.random() * characters.length);
    randomGenerator += characters.substring(rnum, rnum + 1);
}

$("#randomNum").text(randomGenerator)

//when we click submit in the modal
$("#submit").on("click", function () {

    //if code is entered correctly then move on
    if (randomGenerator == $("#num").val()) {
        // $(".modal").empty()
        $(".modal").modal('toggle')
        $(".title").addClass("animated lightSpeedIn")
        $('.jumbotron').fadeIn();
        $('#graphicDiv').fadeIn();
        $('.soc').fadeIn();
        login.play();
    }
    //if code is entered incorrectly then try again
    else {
        $("#modal-text").text("Are you a human Imposter! Try again!")
        alarm.play();
    }
})

//On-hover show planet names below
$('#mercury').hover(
    function () {
        $('#merc-text').css('display', 'block')
    },
    function () {
        $('#merc-text').css('display', 'none')
    });
$('#venus').hover(
    function () {
        $('#ven-text').css('display', 'block')
    },
    function () {
        $('#ven-text').css('display', 'none')
    });
$('#earth').hover(
    function () {
        $('#earth-text').css('display', 'block')
    },
    function () {
        $('#earth-text').css('display', 'none')
    });
$('#mars').hover(
    function () {
        $('#mars-text').css('display', 'block')
    },
    function () {
        $('#mars-text').css('display', 'none')
    });
$('#jupiter').hover(
    function () {
        $('#jup-text').css('display', 'block')
    },
    function () {
        $('#jup-text').css('display', 'none')
    });
$('#saturn').hover(
    function () {
        $('#sat-text').css('display', 'block')
    },
    function () {
        $('#sat-text').css('display', 'none')
    });
$('#uranus').hover(
    function () {
        $('#ura-text').css('display', 'block')
    },
    function () {
        $('#ura-text').css('display', 'none')
    });
$('#neptune').hover(
    function () {
        $('#nep-text').css('display', 'block')
    },
    function () {
        $('#nep-text').css('display', 'none')
    });

// hide poll results to begin   
$("#poll-results").hide()

//establish poll variables and connet to firebase
let mercuryTotal = 0;
let venusTotal = 0;
let earthTotal = 0;
let marsTotal = 0;
let jupiterTotal = 0;
let saturnTotal = 0;
let uranusTotal = 0;
let neptuneTotal = 0
let total = 0
var config = {
    apiKey: "AIzaSyC7wfuP2WpWUbOfKvWagjOQdJrSHAvLlfg",
    authDomain: "project1-cce4d.firebaseapp.com",
    databaseURL: "https://project1-cce4d.firebaseio.com",
    projectId: "project1-cce4d",
    storageBucket: "project1-cce4d.appspot.com",
    messagingSenderId: "712116811556"
};

//pull poll results from firebase as totals and percentages
firebase.initializeApp(config);

var database = firebase.database();

if (mercuryTotal != null) {
    database.ref().on("value", function (snapshot) {
        mercuryTotal = snapshot.val().mercury
        venusTotal = snapshot.val().venus
        earthTotal = snapshot.val().earth
        marsTotal = snapshot.val().mars
        jupiterTotal = snapshot.val().jupiter
        saturnTotal = snapshot.val().saturn
        uranusTotal = snapshot.val().uranus
        neptuneTotal = snapshot.val().neptune
        total = snapshot.val().planetTotal
        mercuryPercent = parseInt(mercuryTotal) / parseInt(total) * 100
        venusPercent = parseInt(venusTotal) / parseInt(total) * 100
        earthPercent = parseInt(earthTotal) / parseInt(total) * 100
        marsPercent = parseInt(marsTotal) / parseInt(total) * 100
        jupiterPercent = parseInt(jupiterTotal) / parseInt(total) * 100
        saturnPercent = parseInt(saturnTotal) / parseInt(total) * 100
        uranusPercent = parseInt(uranusTotal) / parseInt(total) * 100
        neptunePercent = parseInt(neptuneTotal) / parseInt(total) * 100
    })

}

//when we click enter in the poll
$(document).on("click", "#enter", function (event) {

    event.preventDefault();

    //hide poll question
    $(".custom-radio").hide()

    //update totals to reflect user choice
    if ($('#defaultGroupExample1').is(':checked')) {
        mercuryTotal++
    }
    if ($('#defaultGroupExample2').is(':checked')) {
        venusTotal++
    }
    if ($('#defaultGroupExample3').is(':checked')) {
        earthTotal++
    }
    if ($('#defaultGroupExample4').is(':checked')) {
        marsTotal++
    }
    if ($('#defaultGroupExample5').is(':checked')) {
        jupiterTotal++
    }
    if ($('#defaultGroupExample6').is(':checked')) {
        saturnTotal++
    }
    if ($('#defaultGroupExample7').is(':checked')) {
        uranusTotal++
    }
    if ($('#defaultGroupExample8').is(':checked')) {
        neptuneTotal++
    }

    total++

    //display poll esults
    $("#poll-results").show()

    //set new total base on user choice
    database.ref().set({

        mercury: mercuryTotal,
        venus: venusTotal,
        earth: earthTotal,
        mars: marsTotal,
        jupiter: jupiterTotal,
        saturn: saturnTotal,
        uranus: uranusTotal,
        neptune: neptuneTotal,
        planetTotal: total,
    })
    
    //display result percentages as text
    $("#mercury-percent").text(Math.round(mercuryPercent) + "%")
    $("#venus-percent").text(Math.round(venusPercent) + "%")
    $("#earth-percent").text(Math.round(earthPercent) + "%")
    $("#mars-percent").text(Math.round(marsPercent) + "%")
    $("#jupiter-percent").text(Math.round(jupiterPercent) + "%")
    $("#saturn-percent").text(Math.round(saturnPercent) + "%")
    $("#uranus-percent").text(Math.round(uranusPercent) + "%")
    $("#neptune-percent").text(Math.round(neptunePercent) + "%")

    //display result percentages as bars
    $("#mercury-bar").css("width", parseInt(Math.round(mercuryPercent)) * 5 + "px")
    $("#venus-bar").css("width", parseInt(Math.round(venusPercent)) * 5 + "px")
    $("#earth-bar").css("width", parseInt(Math.round(earthPercent)) * 5 + "px")
    $("#mars-bar").css("width", parseInt(Math.round(marsPercent)) * 5 + "px")
    $("#jupiter-bar").css("width", parseInt(Math.round(jupiterPercent)) * 5 + "px")
    $("#saturn-bar").css("width", parseInt(Math.round(saturnPercent)) * 5 + "px")
    $("#uranus-bar").css("width", parseInt(Math.round(uranusPercent)) * 5 + "px")
    $("#neptune-bar").css("width", parseInt(Math.round(neptunePercent)) * 5 + "px")
    vote.play();
})

//array of fun facts
var planetInformation = ["86% of solar system mass comes from the sun and only 0.14% comes from remaining planets.",
    "The planet Jupiter is considered as the solar system's garbage disposal, because of its strong magnetic field that attracts space debris.",
    "All the heavier elements in our body such as iron, carbon, calcium etc were made in supernova explosion.",
    "Every year our moon is moving away from the earth with a distance of 4cm (1.6 inches).",
    "Saturn is considered as the second largest planet of our solar system, but it’s the lightest planet in our solar system.",
    "Mercury, Venus, Earth and Mars are called terrestrial planets and are mostly composed of rock and metal.",
    "The Astronauts can grow two inches taller due to lack of gravity in space.",
    "The edge of our solar system is more than 1,000 times father than Pluto.",
    "We cannot burp in space."]
  
//chose a random fun fact from array    
var i = Math.floor(Math.random() * planetInformation.length)

//display chosen fact
$("#planet-fact").html(planetInformation[i])

//resultsDiv

//set more images button click to not clicked
var moreBntClick = false;

//object of planet facts and videos
var planetData = {
    mercury: {
        photo: "assets/images/mercury.png",
        dayLength: "59 Earth days",
        yearLength: "88 Earth days",
        radius: "1,516 miles",
        moonNum: "0 moons",
        life: "Mercury's environment is not conducive to life as we know it. The temperatures and solar radiation that characterize this planet are most likely too extreme for organisms to adapt to.",
        overview: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system. That title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
        naming: "Mercury is appropriately named for the swiftest of the ancient Roman gods.",
        videoLinks: ["https://images-assets.nasa.gov/video/33_SleepyHollows/33_SleepyHollows~orig.mp4", "https://images-assets.nasa.gov/video/215_TransitOfMercury/215_TransitOfMercury~orig.mp4", "https://images-assets.nasa.gov/video/92_PinkPlanet/92_PinkPlanet~orig.mp4"],
        videoTitles: ["The Sleepy Hollows of Mercury", "The 2016 Transit of Mercury", "Pink Planet at Sunset"]
    },
    venus: {
        photo: "assets/images/venus.png",
        dayLength: "243 Earth days",
        yearLength: "225 Earth days",
        radius: "3,760 miles",
        moonNum: "0 moons",
        life: "No human has visited Venus, but the spacecraft that have been sent to the surface of Venus do not last very long there. Venus' high surface temperatures overheat electronics in spacecraft in a short time, so it seems unlikely that a person could survive for long on the Venusian surface. There is speculation about life existing in Venus' distant past, as well as questions about the possibility of life in the top cloud layers of Venus' atmosphere, where the temperatures are less extreme.",
        overview: "Venus is the second planet from the Sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction from most planets. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.",
        naming: "Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the Ancient Greeks.",
        videoLinks: ["https://images-assets.nasa.gov/video/226_SpactacularConjunction/226_SpactacularConjunction~orig.mp4", "https://images-assets.nasa.gov/video/61_2012VenusTransit/61_2012VenusTransit~orig.mp4", "https://images-assets.nasa.gov/video/158_BeautifulConjunction/158_BeautifulConjunction~orig.mp4"],
        videoTitles: ["A Spectacular Conjunction of Venus and Jupiter", "The 2012 Transit of Venus", "Beautiful Conjunction"]
    },
    earth: {
        dayLength: "23.9 hours",
        yearLength: "365.25 days",
        radius: "3,959 miles",
        moonNum: "1 moon",
        life: "Earth has a very hospitable temperature and mix of chemicals that have made life possible here. Most notably, Earth is unique in that most of our planet is covered in water, since the temperature allows liquid water to exist for extended periods of time. Earth's vast oceans provided a convenient place for life to begin about 3.8 billion years ago. Some of the features of our planet that make it great for sustaining life are changing due to the ongoing effects of climate change.",
        overview: "Our home planet is the third planet from the Sun, and the only place we know of so far that's inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.",
        naming: "The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means 'the ground'.",
        videoLinks: ["https://images-assets.nasa.gov/video/Earth Views/Earth Views~orig.mp4", "https://images-assets.nasa.gov/video/jsc2017m001088_Top-17-Earth-Images-of-2017-MP4/jsc2017m001088_Top-17-Earth-Images-of-2017-MP4~orig.mp4", "https://images-assets.nasa.gov/video/JPL-20170630-ASTRDSf-0001-How Do We Spot Near Earth Asteroids/JPL-20170630-ASTRDSf-0001-How Do We Spot Near Earth Asteroids~orig.mp4"],
        videoTitles: ["Earth Views", "Top 17 Earth Images of 2017", "How Do We Spot Near Earth Asteroids"]
    },
    mars: {
        dayLength: "24.6 hours",
        yearLength: "687 Earth days",
        radius: "2,106 miles",
        moonNum: "2 moons",
        life: "Scientists don't expect to find living things currently thriving on Mars. Instead, they're looking for signs of life that existed long ago, when Mars was warmer and covered with water.",
        overview: "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.",
        naming: "Mars was named by the Romans for their god of war because its reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute; for example, the Egyptians called it 'Her Desher,' meaning 'the red one.' Even today, it is frequently called the 'Red Planet' because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.",
        videoLinks: ["https://images-assets.nasa.gov/video/50 Years of Mars Exploration /50 Years of Mars Exploration ~orig.mp4", "https://images-assets.nasa.gov/video/NHQ_2018_0511_ Mars Helicopter Technology Demonstration/NHQ_2018_0511_ Mars Helicopter Technology Demonstration~orig.mp4", "https://images-assets.nasa.gov/video/JPL-20170801-MSLf-0001-Rover POV Five Years of Curiosity on Mars/JPL-20170801-MSLf-0001-Rover POV Five Years of Curiosity on Mars~orig.mp4"],
        videoTitles: ["50 Years of Mars Exploration", "Mars Helicopter Technology Demonstration", "Rover POV Five Years of Curiosity on Mars"]
    },
    jupiter: {
        dayLength: "9.92496 Hours",
        yearLength: "4,333 Earth days",
        radius: "43,440.7 miles",
        moonNum: "79 confirmed moons",
        life: "Jupiter's environment is probably not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.",
        overview: "Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system, more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter's iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.",
        naming: "Jupiter is named for the king of the ancient Roman gods.",
        videoLinks: ["https://images-assets.nasa.gov/video/JPL-20180411-JUNOf-0002-Flyover of Jupiters North Pole in Infrared/JPL-20180411-JUNOf-0002-Flyover of Jupiters North Pole in Infrared~orig.mp4", "https://images-assets.nasa.gov/video/241_AllNightWithJupiter/241_AllNightWithJupiter~orig.mp4", "https://images-assets.nasa.gov/video/210_CloseEncountersJupiter/210_CloseEncountersJupiter~orig.mp4"],
        videoTitles: ["Flyover of Jupiters North Pole in Infrared", "All Night With Jupiter", "Close Encounters Jupiter"]
    },
    saturn: {
        dayLength: "10.7 hours",
        yearLength: "29 Earth years",
        radius: "36,183.7 miles",
        moonNum: "53 confirmed, 9 provisional",
        life: "Saturn's environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to. While planet Saturn is an unlikely place for living things to take hold, the same is not true of some of its many moons. Satellites like Enceladus and Titan, home to internal oceans, could possibly support life.",
        overview: "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Surrounded by more than 60 known moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of water that spray from Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries. The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times.",
        naming: "Saturn is named for the Roman god of agriculture and wealth, who was also the father of Jupiter.",
        videoLinks: ["http://images-assets.nasa.gov/video/NHQ_2017_0915_Cassini Ends Its Historic Exploration of Saturn/NHQ_2017_0915_Cassini Ends Its Historic Exploration of Saturn~orig.mp4", "https://images-assets.nasa.gov/video/T803345_APOLLO-08-SATURN-504-CDDT/T803345_APOLLO-08-SATURN-504-CDDT~orig.mp4", "https://images-assets.nasa.gov/video/JPL-20170503-CASSINf-0001-Cassinis First Fantastic Dive Past Saturn/JPL-20170503-CASSINf-0001-Cassinis First Fantastic Dive Past Saturn~orig.mp4"],
        videoTitles: ["Cassini Ends Its Historic Exploration of Saturn", "Apollo 08 Saturn 504 CDDT", "Cassinis First Fantastic Dive Past Saturn"]
    },
    uranus: {
        dayLength: "17 hours 14 minutes",
        yearLength: "84 Earth years",
        radius: "15,759.2 miles",
        moonNum: "27 moons",
        life: "Uranus' environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.",
        overview: "The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball. The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.",
        naming: "Uranus is named after the Greek god of the sky.",
        videoLinks: ["https://images-assets.nasa.gov/video/JPL-20180901-WHATSUf-0001-Whats Up September 2018/JPL-20180901-WHATSUf-0001-Whats Up September 2018~orig.mp4", "https://images-assets.nasa.gov/video/JPL-20171001-WHATSUf-0001-Whats Up October 2017/JPL-20171001-WHATSUf-0001-Whats Up October 2017~orig.mp4", "https://images-assets.nasa.gov/video/JPL-19860124-VOYAGEf-0001-AVC2002151 First Spacecraft at Uranus/JPL-19860124-VOYAGEf-0001-AVC2002151 First Spacecraft at Uranus~orig.mp4"],
        videoTitles: ["Whats Up September 2018", "Whats Up October 2017", "First Spacecraft at Uranus"]
    },
    neptune: {
        dayLength: "16 hours",
        yearLength: "165 Earth years",
        radius: "15,299.4 miles",
        moonNum: "13 confirmed, 1 provisional",
        life: "Neptune's environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.",
        overview: "Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846. Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune.",
        naming: "Neptune is named after the Roman god of the sea",
        videoLinks: ["https://images-assets.nasa.gov/video/193_WorldsWithinWorlds/193_WorldsWithinWorlds~orig.mp4", "https://images-assets.nasa.gov/video/JPL-20180901-WHATSUf-0001-Whats Up September 2018/JPL-20180901-WHATSUf-0001-Whats Up September 2018~orig.mp4", "https://images-assets.nasa.gov/video/JPL-19890825-VOYAGEf-0001-AVC2002151 First Spacecraft at Neptune/JPL-19890825-VOYAGEf-0001-AVC2002151 First Spacecraft at Neptune~orig.mp4"],
        videoTitles: ["Worlds Within Worlds", "Whats Up September 2018", "First Spacecraft at Neptune"]
    },
    sun: {
        photo: "assets/images/sun.png",
        radius: "432,168.6 miles",
        moonNum: "The Sun and other stars don't have moons. Instead, they have planets and their moons, along with asteroids, comets, and other objects.",
        life: "The Sun itself is not a good place for living things, with its hot, energetic mix of gases and plasma. But the Sun has made life on Earth possible, providing warmth as well as energy that organisms like plants use to form the basis of many food chains.",
        overview: "The Sun is the center of our solar system and makes up 99.8 percent of the mass of the entire solar system. It is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything, from the biggest planets to the smallest particles of debris, in its orbit. The connection and interactions between the Sun and Earth drive the seasons, ocean currents, weather, climate, radiation belts and auroras. Though it is special to us, there are billions of stars like our Sun scattered across the Milky Way galaxy.",
        naming: "The Sun has many names in many cultures. The Latin word for Sun is 'sol,' which is the main adjective for all things Sun-related: solar.",
        videoLinks: ["https://images-assets.nasa.gov/video/279_FollowTheSun/279_FollowTheSun~orig.mp4", "https://images-assets.nasa.gov/video/21_SunGrazingComet/21_SunGrazingComet~orig.mp4", "https://images-assets.nasa.gov/video/114_SunMagFieldFlip/114_SunMagFieldFlip~orig.mp4"],
        videoTitles: ["Follow The Sun", "Sun Grazing Comet", "Sun Mag Field Flip"]
    }
};

//when we click on a planet button
$(".clickPlanet").click(function () {

    //change what is displayed on screen
    $("#graphicDiv").hide();

    $("#resultsDiv").show();
    $("#pollDiv").show();
    $("#newsDiv").show();
    $("#videoDiv").hide();
    $("#imageBtn").hide()
    $("#imageDiv").show()
    $("#videoBtn").show()
    success.play();
    

    //reset more images button and display
    moreBntClick = false;
    $("#moreImagesBtn").show();

    //assign planet clicked as chosenPlanet variable
    var chosenPlanet = $(this).attr("id");

    //connect to DOM to display planet facts from object
    $("#planetName").text(chosenPlanet.toUpperCase());
    $("#dayLengthText").text(planetData[chosenPlanet].dayLength);
    $("#yearLengthText").text(planetData[chosenPlanet].yearLength);
    $("#radiusText").text(planetData[chosenPlanet].radius);
    $("#moonNumText").text(planetData[chosenPlanet].moonNum);
    $("#overviewText").text(planetData[chosenPlanet].overview);
    $("#lifeText").text(planetData[chosenPlanet].life);
    $("#namingText").text(planetData[chosenPlanet].naming);

    //if the sun is clicked hide the day and year lengths
    if (chosenPlanet === "sun") {
        $(".timeLengths").hide();
    }
    //otherwise show them
    else {
        $(".timeLengths").show();
    }

    // //display main planet image as opaque background
    $("#backgroundDiv").css("background-image", "url(assets/images/" + chosenPlanet + ".png)");

    //pull images from api and connect to dom
    var imageQueryURL = "https://images-api.nasa.gov/search?q=" + chosenPlanet + "&media_type=image";

    $.ajax({
        url: imageQueryURL,
        method: "GET"
    })
        .then(function (nasaResponse) {
            
            //get into result object to find image items
            var nasaResults = nasaResponse.collection.items;

            //load 10 images to begin
            for (i = 0; i < 10; i++) {
                var imageSet = $("<img>")
                    .attr("src", nasaResults[i].links[0].href)
                    .addClass("resultImages");

                //add images to display    
                $("#imageDiv").append(imageSet);
            }

            //load 50 images on more images click
            $("#moreImagesBtn").one("click", function () {

                for (i = 10; i < 50; i++) {
                    var imageSet = $("<img>")
                        .attr("src", nasaResults[i].links[0].href)
                        .addClass("resultImages");

                    //addd images to display    
                    $("#imageDiv").append(imageSet);

                    //hide more images button and set and clicked
                    $("#moreImagesBtn").hide();
                    moreBntClick = true;
                    show.play();
                    
                }
            });

            //get 3 videos for chosen planet
            for (i = 0; i < 3; i++) {

                //get link and set as video with controls
                var video = $("<video>")
                    .attr("src", planetData[chosenPlanet].videoLinks[i])
                    .addClass("resultVideos")
                    .attr("type", "video/mp4")
                    .attr("controls", "play")
                    .attr("controls", "pause");

                //get video titles    
                var title = $("<p>")
                    .text(planetData[chosenPlanet].videoTitles[i])

                //display videos and titles    
                $("#videoDiv").append(video)
                    .append(title);
            };
        });

    //news div

    //connect to NYT API to search for chosen planet
    var newsQueryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    newsQueryURL += '?' + $.param({
        'api-key': "bf393ccfe12c46df99b019707f2a1d65",
        'q': (chosenPlanet + " nasa")
    });

    $.ajax({
        url: newsQueryURL,
        method: "GET"
    })
        //pull article links and descriptions and ddisplay them
        .then(function (newsResponse) {
            console.log(newsResponse);
            $("#news1").append("<a href='" + newsResponse.response.docs[2].web_url + "'>" + newsResponse.response.docs[2].snippet + "</a>");
            $("#news2").append("<a href='" + newsResponse.response.docs[3].web_url + "'>" + newsResponse.response.docs[3].snippet + "</a>");
            $("#news3").append("<a href='" + newsResponse.response.docs[4].web_url + "'>" + newsResponse.response.docs[4].snippet + "</a>");
            $("#news4").append("<a href='" + newsResponse.response.docs[5].web_url + "'>" + newsResponse.response.docs[5].snippet + "</a>");
            $("#news1").append(newsResponse.copyright);
            $("#news2").append(newsResponse.copyright);
            $("#news3").append(newsResponse.copyright);
            $("#news4").append(newsResponse.copyright);
        });


});

//when we click the images button change what is displayed
$("#imageBtn").click(function () {

    $("#imageDiv").show()
    $("#videoDiv").hide()
    $("#moreImagesBtn").show()
    $("#imageBtn").hide()
    $("#videoBtn").show()
    show.play();

    //if more images button has already been clicked, hide it
    if (moreBntClick === true) {
        $("#moreImagesBtn").hide();
    }
});

//when we click the videos button change what is displayed
$("#videoBtn").click(function () {
    $("#imageDiv").hide()
    $("#videoDiv").show()
    $("#moreImagesBtn").hide()
    $("#imageBtn").show()
    $("#videoBtn").hide()
    hide.play();
});

//choose a new planet button click
$("#backBtn").click(function () {

    //change what is displayed on screen
    $("#graphicDiv").show();

    $("#resultsDiv").hide();
    $("#pollDiv").hide();
    $("#newsDiv").hide();

    //clear out specific planet results
    $("#imageDiv").empty();
    $("#videoDiv").empty();

    ///clear out news
    $("#news1").empty();
    $("#news2").empty();
    $("#news3").empty();
    $("#news4").empty();
    back.play();
});
$("#secret").click(function () {
    secret.play();
});