
//pollDiv

//resultsDiv
var planetData = {
    mercury: {
        dayLength: "59 Earth days",
        yearLength: "88 Earth days",
        radius: "1,516 miles",
        moonNum: 0,
        life: "Mercury's environment is not conducive to life as we know it. The temperatures and solar radiation that characterize this planet are most likely too extreme for organisms to adapt to.",
        overview: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter.",
        naming: "Mercury is appropriately named for the swiftest of the ancient Roman gods."
    },
    venus: {
        dayLength: "243 Earth days",
        yearLength: "225 Earth days",
        radius: "3,760 miles",
        moonNum: 0,
        life: "No human has visited Venus, but the spacecraft that have been sent to the surface of Venus do not last very long there. Venus' high surface temperatures overheat electronics in spacecraft in a short time, so it seems unlikely that a person could survive for long on the Venusian surface. There is speculation about life existing in Venus' distant past, as well as questions about the possibility of life in the top cloud layers of Venus' atmosphere, where the temperatures are less extreme.",
        overview: "Venus is the second planet from the Sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction from most planets. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.",
        naming: "Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the Ancient Greeks."
    },
    earth: {
        dayLength:"23.9 hours",
        yearLength:"365.25 days",
        radius:"3,959 miles",
        moonNum:1,
        life:"Earth has a very hospitable temperature and mix of chemicals that have made life possible here. Most notably, Earth is unique in that most of our planet is covered in water, since the temperature allows liquid water to exist for extended periods of time. Earth's vast oceans provided a convenient place for life to begin about 3.8 billion years ago. Some of the features of our planet that make it great for sustaining life are changing due to the ongoing effects of climate change.",
        overview:"Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.",
        naming:"The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means 'the ground'."
    },
    mars: {
        dayLength:"24.6 hours",
        yearLength:"687 Earth days",
        radius:"2,106 miles",
        moonNum:2,
        life:"Scientists don't expect to find living things currently thriving on Mars. Instead, they're looking for signs of life that existed long ago, when Mars was warmer and covered with water.",
        overview:"The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.",
        naming:"Mars was named by the Romans for their god of war because its reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute; for example, the Egyptians called it 'Her Desher,' meaning 'the red one.' Even today, it is frequently called the 'Red Planet' because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red."
    },
    jupiter: {
        dayLength:"9.92496 Hours",
        yearLength:"4,333 Earth days",
        radius:"43,440.7 miles",
        moonNum:"79 confirmed",
        life:"Jupiter’s environment is probably not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.",
        overview:"Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.",
        naming: "Jupiter is named for the king of the ancient Roman gods.​"
    },
    saturn: {
        dayLength:"10.7 hours",
        yearLength:"29 Earth years",
        radius:"36,183.7 miles",
        moonNum:"53 confirmed, 9 provisional",
        life:"Saturn's environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to. While planet Saturn is an unlikely place for living things to take hold, the same is not true of some of its many moons. Satellites like Enceladus and Titan, home to internal oceans, could possibly support life.",
        overview:"Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Surrounded by more than 60 known moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of water that spray from Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries. The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times.",
        naming:"Saturn is named for the Roman god of agriculture and wealth, who was also the father of Jupiter."
    },
    uranus: {
        dayLength:"17 hours 14 minutes",
        yearLength:"84 Earth years",
        radius:"15,759.2 miles",
        moonNum:27,
        life:"Uranus' environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.",
        overview:"The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball. The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.",
        naming:"Uranus is named after the Greek god of the sky."
    },
    neptune: {
        dayLength:"16 hours",
        yearLength:"165 Earth years",
        radius:"15,299.4 miles",
        moonNum:"13 confirmed, 1 provisional",
        life:"Neptune's environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to.",
        overview:"Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846. Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune.",
        naming: "Neptune is named after the Roman god of the sea"
    },
};