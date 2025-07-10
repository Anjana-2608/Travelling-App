const countryData = [
    {
        id: 'Greece',
        imageUrl: "img/Greece.webp",
        heading: "Crete, Greece",
        subHeading: "3 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id: 'spain',
        imageUrl: "img/spain.webp",
        heading: "Barcelona, Spain",
        subHeading: "54 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id: 'Peru',
        imageUrl: "img/Peru.webp",
        heading: "Machu Picchu, Peru",
        subHeading: "34 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id: 'Quatar',
        imageUrl: "img/Quatar.webp",
        heading: "Doha, Quatar",
        subHeading: "1 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id: 'rhodesGreece',
        imageUrl: "img/Rhodes,Greece.webp",
        heading: "Rhodes, Greece",
        subHeading: "6 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id: 'usa',
        imageUrl: "img/USA.webp",
        heading: "New York, USA",
        subHeading: "132 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id: 'quatar1',
        imageUrl: "img/Quatar1.webp",
        heading: "Doha, Quatar",
        subHeading: "1 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id: 'Rhodes',
        imageUrl: "img/Rhodes.webp",
        heading: "New York, USA",
        subHeading: "6 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id: 'usa1',
        imageUrl: "img/USA1.webp",
        heading: "New York, USA",
        subHeading: "132 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id: 'fra1',
        imageUrl: "img/USA1.webp",
        heading: "Paris, France",
        subHeading: "98 Local guides",
        description: "Discover the romance of Paris through local eyes and uncover hidden gems off the beaten path."
    },
    {
        id: 'jpn1',
        imageUrl: "img/USA.webp",
        heading: "Tokyo, Japan",
        subHeading: "150 Local guides",
        description: "From sushi to skyscrapers, explore the vibrant culture and fast-paced life of Tokyo with a local."
    },
    {
        id: 'ind1',
        imageUrl: "img/spain.webp",
        heading: "Delhi, India",
        subHeading: "120 Local guides",
        description: "Immerse yourself in the rich heritage, colors, and chaos of India’s historic capital city."
    },
    {
        id: 'aus1',
        imageUrl: "img/Rhodes.webp",
        heading: "Sydney, Australia",
        subHeading: "85 Local guides",
        description: "Visit the iconic Opera House and stunning beaches with guides who know Sydney inside out."
    },
    {
        id: 'bra1',
        imageUrl: "img/Rhodes,Greece.webp",
        heading: "Rio de Janeiro, Brazil",
        subHeading: "74 Local guides",
        description: "Dance through the streets, climb Sugarloaf Mountain, and experience Rio’s vibrant soul."
    },
    {
        id: 'ita1',
        imageUrl: "img/Quatar1.webp",
        heading: "Rome, Italy",
        subHeading: "105 Local guides",
        description: "Walk through history in the Eternal City, from the Colosseum to Vatican City, with a local expert."
    },
    {
        id: 'egy1',
        imageUrl: "img/Quatar.webp",
        heading: "Cairo, Egypt",
        subHeading: "64 Local guides",
        description: "Explore ancient wonders and bustling bazaars in the heart of Egypt with an experienced guide."
    },
    {
        id: 'uk1',
        imageUrl: "img/Peru.webp",
        heading: "London, UK",
        subHeading: "112 Local guides",
        description: "From Big Ben to hidden pubs, let locals reveal the true charm of London."
    },
    {
        id: 'can1',
        imageUrl: "img/Greece.webp",
        heading: "Toronto, Canada",
        subHeading: "90 Local guides",
        description: "Experience Canada’s most diverse city, rich in culture, food, and entertainment, with expert locals."
    },
    {
        id: 'mex1',
        imageUrl: "img/Greece.webp",
        heading: "Cancun, Mexico",
        subHeading: "49 Local guides",
        description: "Enjoy sunny beaches, ancient ruins, and rich culture with local experts."
    },
    {
        id: 'tha1',
        imageUrl: "img/spain.webp",
        heading: "Bangkok, Thailand",
        subHeading: "88 Local guides",
        description: "From temples to street food, explore Bangkok’s lively streets with a guide."
    },
    {
        id: 'ger1',
        imageUrl: "img/Peru.webp",
        heading: "Berlin, Germany",
        subHeading: "70 Local guides",
        description: "Discover Berlin's history, art, and modern flair with a local touch."
    },
    {
        id: 'ken1',
        imageUrl: "img/Quatar.webp",
        heading: "Nairobi, Kenya",
        subHeading: "45 Local guides",
        description: "Explore safaris and urban charm in Nairobi guided by local enthusiasts."
    },
    {
        id: 'rsa1',
        imageUrl: "img/Rhodes,Greece.webp",
        heading: "Cape Town, South Africa",
        subHeading: "57 Local guides",
        description: "Hike Table Mountain or enjoy the coast with a guide who knows it all."
    },
    {
        id: 'arg1',
        imageUrl: "img/USA.webp",
        heading: "Buenos Aires, Argentina",
        subHeading: "38 Local guides",
        description: "Dance the tango and discover Latin charm with local guides."
    },
    {
        id: 'net1',
        imageUrl: "img/Quatar1.webp",
        heading: "Amsterdam, Netherlands",
        subHeading: "76 Local guides",
        description: "Cruise the canals and cycle the lanes with locals in Amsterdam."
    },
    {
        id: 'por1',
        imageUrl: "img/Rhodes.webp",
        heading: "Lisbon, Portugal",
        subHeading: "63 Local guides",
        description: "Hear Fado music and explore Lisbon’s hills with a passionate guide."
    },
    {
        id: 'vn1',
        imageUrl: "img/USA1.webp",
        heading: "Hanoi, Vietnam",
        subHeading: "59 Local guides",
        description: "Discover street food and history in Hanoi with a trusted local."
    },
    {
        id: 'tur1',
        imageUrl: "img/USA1.webp",
        heading: "Istanbul, Turkey",
        subHeading: "95 Local guides",
        description: "Wander the bazaars and mosques of Istanbul with cultural experts."
    },
    {
        id: 'uae1',
        imageUrl: "img/USA.webp",
        heading: "Dubai, UAE",
        subHeading: "101 Local guides",
        description: "From desert safaris to skyscrapers, tour Dubai like a VIP."
    },
    {
        id: 'ch1',
        imageUrl: "img/spain.webp",
        heading: "Zurich, Switzerland",
        subHeading: "42 Local guides",
        description: "Explore lakes, mountains, and Swiss culture with a local host."
    },
    {
        id: 'nor1',
        imageUrl: "img/Rhodes,Greece.webp",
        heading: "Oslo, Norway",
        subHeading: "28 Local guides",
        description: "Discover fjords, modern design, and local flavors in Oslo."
    },
    {
        id: 'swe1',
        imageUrl: "img/Quatar.webp",
        heading: "Stockholm, Sweden",
        subHeading: "31 Local guides",
        description: "Island-hop through Stockholm with a knowledgeable local."
    },
    {
        id: 'fin1',
        imageUrl: "img/Peru.webp",
        heading: "Helsinki, Finland",
        subHeading: "35 Local guides",
        description: "Experience Finnish design, food, and saunas with a local."
    },
    {
        id: 'cro1',
        imageUrl: "img/Greece.webp",
        heading: "Dubrovnik, Croatia",
        subHeading: "50 Local guides",
        description: "Walk the walls of Dubrovnik with insights from locals."
    },
    {
        id: 'pol1',
        imageUrl: "img/Quatar1.webp",
        heading: "Krakow, Poland",
        subHeading: "48 Local guides",
        description: "Explore castles, cobbled streets, and culture in Krakow."
    },
    {
        id: 'cz1',
        imageUrl: "img/Rhodes.webp",
        heading: "Prague, Czech Republic",
        subHeading: "53 Local guides",
        description: "Wander through fairytale streets and history with locals."
    },
    {
        id: 'hun1',
        imageUrl: "img/USA1.webp",
        heading: "Budapest, Hungary",
        subHeading: "61 Local guides",
        description: "Relax in thermal baths or explore ruins with local insight."
    },
    {
        id: 'mal1',
        imageUrl: "img/USA.webp",
        heading: "Kuala Lumpur, Malaysia",
        subHeading: "67 Local guides",
        description: "From towers to temples, KL shines with local guides."
    },
    {
        id: 'phi1',
        imageUrl: "img/spain.webp",
        heading: "Manila, Philippines",
        subHeading: "46 Local guides",
        description: "Explore colonial history and local life with expert guides."
    },
    {
        id: 'ind2',
        imageUrl: "img/Peru.webp",
        heading: "Mumbai, India",
        subHeading: "110 Local guides",
        description: "Bustling streets, Bollywood charm, and heritage galore."
    },
    {
        id: 'nep1',
        imageUrl: "img/Greece.webp",
        heading: "Kathmandu, Nepal",
        subHeading: "40 Local guides",
        description: "Uncover Himalayan culture and ancient temples with locals."
    },
    {
        id: 'ban1',
        imageUrl: "img/Rhodes,Greece.webp",
        heading: "Dhaka, Bangladesh",
        subHeading: "36 Local guides",
        description: "Navigate the vibrant chaos of Dhaka with local know-how."
    },
    {
        id: 'pak1',
        imageUrl: "img/Quatar1.webp",
        heading: "Lahore, Pakistan",
        subHeading: "44 Local guides",
        description: "Explore Mughal architecture and modern life with a guide."
    },
    {
        id: 'sri1',
        imageUrl: "img/USA1.webp",
        heading: "Colombo, Sri Lanka",
        subHeading: "37 Local guides",
        description: "Enjoy beaches and tea plantations with local flavor."
    },
    {
        id: 'nz1',
        imageUrl: "img/Quatar.webp",
        heading: "Auckland, New Zealand",
        subHeading: "55 Local guides",
        description: "Experience Kiwi culture, coasts, and forests with guides."
    },
    {
        id: 'bel1',
        imageUrl: "img/Rhodes.webp",
        heading: "Brussels, Belgium",
        subHeading: "41 Local guides",
        description: "Taste waffles, chocolate, and beer with Brussels locals."
    },
    {
        id: 'aut1',
        imageUrl: "img/USA.webp",
        heading: "Vienna, Austria",
        subHeading: "60 Local guides",
        description: "Music, art, and culture flow through this city’s soul."
    },
    {
        id: 'sk1',
        imageUrl: "img/spain.webp",
        heading: "Seoul, South Korea",
        subHeading: "102 Local guides",
        description: "K-pop, cuisine, and history—tour Seoul your way."
    },
    {
        id: 'hk1',
        imageUrl: "img/Peru.webp",
        heading: "Hong Kong",
        subHeading: "85 Local guides",
        description: "Skyline views and street eats await with a savvy local."
    },
    {
        id: 'chi1',
        imageUrl: "img/Greece.webp",
        heading: "Beijing, China",
        subHeading: "130 Local guides",
        description: "Explore ancient wonders and modern marvels with locals."
    },
    {
        id: 'tai1',
        imageUrl: "img/Rhodes,Greece.webp",
        heading: "Taipei, Taiwan",
        subHeading: "78 Local guides",
        description: "Night markets and nature come alive with Taipei locals."
    },
    {
        id: 'ira1',
        imageUrl: "img/Quatar.webp",
        heading: "Tehran, Iran",
        subHeading: "33 Local guides",
        description: "Experience Persian culture and cuisine with locals."
    },
    {
        id: 'jrd1',
        imageUrl: "img/USA1.webp",
        heading: "Amman, Jordan",
        subHeading: "39 Local guides",
        description: "Deserts, ruins, and hospitality in Jordan’s capital."
    },
    {
        id: 'gre2',
        imageUrl: "img/spain.webp",
        heading: "Athens, Greece",
        subHeading: "99 Local guides",
        description: "Tour ancient ruins and taste modern flavors in Athens."
    },
    {
        id: 'can2',
        imageUrl: "img/Peru.webp",
        heading: "Vancouver, Canada",
        subHeading: "87 Local guides",
        description: "Mountains, sea, and city collide in beautiful Vancouver."
    },
    {
        id: 'usa2',
        imageUrl: "img/Greece.webp",
        heading: "Chicago, USA",
        subHeading: "93 Local guides",
        description: "Architecture, pizza, and music tours await in Chicago."
    },
    {
        id: 'spa2',
        imageUrl: "img/Quatar1.webp",
        heading: "Madrid, Spain",
        subHeading: "84 Local guides",
        description: "Museums, tapas, and flamenco—Madrid has it all."
    },
    {
        id: 'bra2',
        imageUrl: "img/USA1.webp",
        heading: "Sao Paulo, Brazil",
        subHeading: "79 Local guides",
        description: "Experience Brazil’s biggest city with local guides."
    }
];

let countryPageWiseData = [];

for (let i = 0; i < countryData.length; i = i + 9) {
    let pageData = [];
    for (let j = 0; j < 9; j++) {
        if (countryData[i + j]) {
            pageData.push(countryData[i + j]);
        }
    }
    countryPageWiseData.push(pageData);
}

// console.log(countryPageWiseData);




const createIndCountryHtml = (id, url, headingText, subHeadingText, paraText) => {

    let countryDivSection = `<div class="countries" id=${id}>
            <img src=${url} alt=${id}>
            <span class="Heading">${headingText}</span>
            <span class="subHeading">${subHeadingText}</span>
            <span class="para">${paraText}</span>
        </div>`

    return countryDivSection

}

const populateCountriesContainerDiv = (page = 1) => {
    let container = document.querySelector('.countriesContainer');
    container.innerHTML = ""; // Clear existing

    let countriesToShow = countryPageWiseData[page - 1] || [];
    countriesToShow.forEach(obj => {
        container.innerHTML += createIndCountryHtml(
            obj.id,
            obj.imageUrl,
            obj.heading,
            obj.subHeading,
            obj.description
        );
    });

    currentPage = page;
    renderPagination();
};

const renderPagination = () => {
    let totalPages = countryPageWiseData.length;
    const paginationContainer = document.querySelector('.allButtons');
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
            const btn = document.createElement('div');
            btn.className = `buttonscount1 ${i === currentPage ? "buttonColor" : ""}`;
            btn.textContent = i;
            btn.addEventListener('click', () => populateCountriesContainerDiv(i));
            paginationContainer.appendChild(btn);
        } else if (i === 2 && currentPage > 3 || i === totalPages - 1 && currentPage < totalPages - 2) {
            const dots = document.createElement('div');
            dots.className = "dots";
            dots.textContent = "...";
            paginationContainer.appendChild(dots);
        }
    }

    document.querySelector('.previous').onclick = () => {
        // if (currentPage > 1)
        populateCountriesContainerDiv(currentPage - 1);
    };

    document.querySelector('.next').onclick = () => {
        // if (currentPage<totalPages)
        populateCountriesContainerDiv(currentPage + 1);
    };

    let preButton = document.querySelector('.previous');
    let nextButton = document.querySelector('.next');

    currentPage === 1 ? disableBtn(preButton) : enableBtn(preButton);
    currentPage === totalPages ? disableBtn(nextButton) : enableBtn(nextButton);

};


const disableBtn = (btn) => {
    btn.style.opacity = 0.6;
    btn.style.pointerEvents = 'none';
}

const enableBtn = (btn) => {
    btn.style.opacity = 1;
    btn.style.pointerEvents = 'auto';
}


let testimonialData = [
    {
        id: 1,
        comment: "“We’ve used Traveler to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
        imageUrl: 'img/Michal.png',
        customerName: "Michael McDonald"
    },
    {
        id: 2,
        comment: "“We’ve used Traveler to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
        imageUrl: 'img/Michal.png',
        customerName: "Sundar Pichai"
    },
    {
        id: 3,
        comment: "“Traveler made our trip effortless and enjoyable. Lorem ipsum dolor sit amet, consectetur adipiscing elit.”",
        imageUrl: 'img/Michal.png',
        customerName: "Sophia Bennett"
    },
    {
        id: 4,
        comment: "“I never imagined travel planning could be this easy. Traveler is now my go-to platform.”",
        imageUrl: 'img/Michal.png',
        customerName: "David Anderson"
    },
    {
        id: 5,
        comment: "“Exceptional service and smooth booking experience. I highly recommend Traveler to everyone.”",
        imageUrl: 'img/Michal.png',
        customerName: "Emma Wilson"
    }
];

let createIndTestHtml = (comment, imageUrl, customerName) => {

    let testimonialDivSection =
        `<div class="testHeader">
            <p class="testHead">Customer testimonial</p>
        </div>
        <div class="testHeader">
            <p class="testSubhead">${comment}</p>
        </div>
        <div id="testFooter">
            <div class="imagesAndName">
                <img src=${imageUrl} alt=${customerName}>
                <span class="michael">${customerName}</span>
            </div>
            <div class="icons">
                <i id="testimonialPrevious" class="fa-solid fa-less-than"></i>
                <i id="testimonialNext" class="fa-solid fa-greater-than"></i>
            </div>
        </div>`

    return testimonialDivSection;
}

let currentIndex = 0;

const handleNextBtnForTestimonial=()=>{
    populateTestimonialContainerDiv(currentIndex+1);
}

let populateTestimonialContainerDiv = (index = 0) => {
    let containerTest = document.getElementById('testimonial');
    containerTest.innerHTML = "";

    containerTest.innerHTML = createIndTestHtml(
        testimonialData[index].comment,
        testimonialData[index].imageUrl,
        testimonialData[index].customerName
    );
    document.getElementById("testimonialNext").addEventListener('click',handleNextBtnForTestimonial)
    document.getElementById("testimonialPrevious").addEventListener('click',handlePreviousBtnForTestimonial)
    currentIndex = index;

    let previousBtn=document.getElementById("testimonialPrevious");
    let nextBtn=document.getElementById("testimonialNext");

    currentIndex===0 ? disableBtn(previousBtn): enableBtn(previousBtn);
    currentIndex===testimonialData.length-1? disableBtn(nextBtn): enableBtn(nextBtn);
};

const handlePreviousBtnForTestimonial=()=>{
    populateTestimonialContainerDiv(currentIndex-1);
}

populateTestimonialContainerDiv();

