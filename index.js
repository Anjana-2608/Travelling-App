const countryData = [
    {
        id:'Greece',
        imageUrl: "img/Greece.webp",
        heading: "Crete, Greece",
        subHeading: "3 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id:'spain',
        imageUrl: "img/spain.webp",
        heading: "Barcelona, Spain",
        subHeading: "54 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id:'Peru',
        imageUrl: "img/Peru.webp",
        heading: "Machu Picchu, Peru",
        subHeading: "34 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id:'Quatar',
        imageUrl: "img/Quatar.webp",
        heading: "Doha, Quatar",
        subHeading: "1 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id:'rhodesGreece',
        imageUrl: "img/Rhodes,Greece.webp",
        heading: "Rhodes, Greece",
        subHeading: "6 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id:'usa',
        imageUrl: "img/USA.webp",
        heading: "New York, USA",
        subHeading: "132 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id:'quatar1',
        imageUrl: "img/Quatar1.webp",
        heading: "Doha, Quatar",
        subHeading: "1 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id:'Rhodes',
        imageUrl: "img/Rhodes.webp",
        heading: "New York, USA",
        subHeading: "6 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id:'usa1',
        imageUrl: "img/USA1.webp",
        heading: "New York, USA",
        subHeading: "132 Local guides",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
];

const createIndCountryHtml=(id,url,headingText,subHeadingText,paraText)=>{
    let parentDiv=document.createElement('div');
    parentDiv.setAttribute('class','countries');
    parentDiv.setAttribute('id',id);

    let imageEle=document.createElement('img');
    imageEle.setAttribute('src',url);
    imageEle.setAttribute('alt',id);

    parentDiv.appendChild(imageEle);

    let headingSpanEle=document.createElement('span');
    headingSpanEle.className='Heading';
    headingSpanEle.innerHTML=headingText;

    parentDiv.appendChild(headingSpanEle);

    let subHeadingSpanEle=document.createElement('span');
    subHeadingSpanEle.className='subHeading';
    subHeadingSpanEle.innerHTML=subHeadingText;

    parentDiv.appendChild(subHeadingSpanEle);

    let paraSpanEle=document.createElement('span');
    paraSpanEle.className='para';
    paraSpanEle.innerHTML=paraText;

    parentDiv.appendChild(paraSpanEle);

    return parentDiv;
}

const populateCountriesContainerDiv=()=>{
    let container=document.getElementsByClassName('countriesContainer')[0];
    countryData.map((obj)=>{
       let countryDiv= createIndCountryHtml(obj.id,obj.imageUrl,obj.heading,obj.subHeading,obj.description);
        container.appendChild(countryDiv);
    })
}
