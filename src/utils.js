import logoImage from './assets/hd2-removebg-preview.png';
import { introText } from './constants';
import { days } from './constants';
import aboutUsImage from './assets/re2.jpg';
import { description } from './constants';
import Sa1 from './assets/sa1.avif';
import Sa2 from './assets/sa2.avif';
import Sa3 from './assets/sa3.avif';
import Sa4 from './assets/sa4.avif';
import sa5 from './assets/sa5.avif';
import Sa6 from './assets/sa6.avif';
import { salads } from './constants';

const homeSection = (function() {
    function homeSectionTop() {
        const div = document.createElement('div');
        div.classList.add('home-top');
        const image = document.createElement('img');
        image.alt = 'logo image';
        image.src = logoImage;
        const p = document.createElement('p');
        p.innerText = 'Petite Restaurant';
        div.append(image);
        div.append(p);
        return div;
    }

    function homeSectionCards() {
       function HomeCard(title, text) {
        this.title = title;
          this.text = text;
       }
       
       const cards = document.createElement('div')
       cards.classList.add('cards');

       const cardInfoList = [
         new HomeCard('Hello',introText),
         new HomeCard('Working Hours',days),
         new HomeCard('Address','Address: 14122 Brundish Chinhoyi Zimbabwe'),
       ];

       const homeCards = cardInfoList.map(item => {
          const div = document.createElement('div');
          div.classList.add('home-card');
          const h2 = document.createElement('h2');
          h2.innerText = item.title;
          const hr = document.createElement('hr');
          div.append(h2, hr);
          if(Array.isArray(item.text)) {
             item.text.forEach(i => {
                const p = document.createElement('p');
                p.innerText = i;
                div.append(p);
             });
             return div;
          };

          
           const p = document.createElement('p');
           p.innerText = item.text
           div.append(p);
           return div;
       });
       homeCards.forEach(item => {
          cards.append(item);
       });
       return cards;
    }
    return { homeSectionTop, homeSectionCards };
})();

const contactSection = (function (){
    const div = document.createElement('div');
    div.classList.add('contact');

    function contactLeft() {
        const contactLeft = document.createElement('div');
        contactLeft.classList.add('contact-left');
         const logoTopImage = document.createElement('img');
         logoTopImage.alt = 'logo image';
         logoTopImage.src = logoImage;
         contactLeft.append(logoTopImage);
        const p = document.createElement('p');
        p.innerText = description;
        contactLeft.append(p);

        const infoBox = document.createElement('div');
        infoBox.classList.add('info-box');
        const emailP = document.createElement('p');
        emailP.innerText = 'Email: sibandadonty@gmail.com';
        const addressP = document.createElement('p');
        addressP.innerText = 'Address: 14122 Brundish Chinhoyi Zimbabwe';
        const phoneP = document.createElement('p');
        phoneP.innerText = 'Phone: 0787645731';
        infoBox.append(addressP, emailP, phoneP);
        contactLeft.appendChild(infoBox);
        return contactLeft;
    }

    function contactRight() {
        const contactRight = document.createElement('div');
        contactRight.classList.add('contact-right');
        const image = document.createElement('img');
        image.alt = 'about us image';
        image.src = aboutUsImage;
        contactRight.append(image);
        return contactRight;
    }

    return {
       contactLeft,
       contactRight
    }
})()

const menuSection = (function(){
    function Product(name, image, description) {
       this.name = name;
       this.image = image;
       this.description = description;
    }
    const imagesList = [Sa1, Sa2, Sa3, Sa4, sa5, Sa6];
    const productsInfoList = salads.map((salad, i) => {
        
        const prod = new Product(salad.name,imagesList[i] , salad.description);
        return prod; 
    });

    const productsDiv = document.createElement('div');
    productsDiv.classList.add('product-cards');
    
    for (let i = 0; i < productsInfoList.length; i++) {
        const data =  productsInfoList[i];
        const product = document.createElement('div');
        const image = document.createElement('img');
        image.alt = 'product image';
        image.src = data.image;
        const div = document.createElement('div');
        const name = document.createElement('h2');
        name.innerText = data.name;
        const p = document.createElement('p');
        p.innerText = productsInfoList[i].description;
        const hr = document.createElement('hr');
        div.append(name,hr ,p);
        product.append(image,div);
        product.classList.add('product-card');
        productsDiv.append(product);
    }

    return { productsDiv };
})()

function createLayout() {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    const div = document.createElement('div');
    div.id = 'target';
    div.append(renderMenuSection());
    contentDiv.append(navBar(), div);
    document.querySelector('body').append(contentDiv);
}

function navBar() {
    function ListItem(text,id) {
        this.text = text;
        this.id = id;
    }
    
    const navItems = [
        new ListItem('Menu', 'menu'),
        new ListItem('Info', 'info'),
        new ListItem('About-Us', 'about'),
    ]

    const bar = document.createElement('nav');
    const ul = document.createElement('ul');
    navItems.forEach((item,index)=> {
       const li = document.createElement('li');
       const a = document.createElement('a');
       a.href = '#' + item.id;
       a.innerText = item.text;
       a.classList.add(`nav-item-${index}`)
       li.append(a);
       ul.append(li)
    });
    bar.append(ul);
    return bar;
}

function renderHomeSection() {
    const div = document.createElement('div');
    div.id = 'home';
    const heading = document.createElement('h2');
    heading.innerText = 'Infomation';
    const homeSectionCards = homeSection.homeSectionCards();
    div.append(heading ,homeSectionCards);
    return div;
}

function renderAboutSection() {
    const sectione = document.createElement('div');
    sectione.classList.add('about-tab')
    const aboutSectionLeft = contactSection.contactLeft();
    const aboutSectionRight = contactSection.contactRight();
    const wrapper =document.createElement('div');
    const logoTopImage = document.createElement('img');
    logoTopImage.alt = 'logo image';
    logoTopImage.src = logoImage;
    wrapper.append(aboutSectionLeft, aboutSectionRight);
    const heading4 = document.createElement('h2');
    heading4.innerText = 'About-Us';
    heading4.id = 'about';
    sectione.append(heading4,wrapper);
    return sectione;
}

function renderMenuSection() {
    const div = document.createElement('div');
    div.classList.add('menu');
    const heading2 = document.createElement('h2');
    heading2.innerText = 'Menu';
    heading2.id = 'menu';
    div.append(heading2,menuSection.productsDiv);
    return div;
}

function switchScreen() {

   function splitHref(hrefLink) {
    //   const arr = hrefLink.split('#');
    //   return arr[1];
    return hrefLink;
   }
   
   function shuffle(item) {
    const clickedItem = splitHref(item);
    switch (clickedItem) {
        case 'home':
             return renderHomeSection();
        case 'menu':
             return renderMenuSection();
        case 'about':
             return renderAboutSection();
        default:
            return renderHomeSection();
    }
   }
    document.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', (e) => {
        document.getElementById('target').innerHTML = null;
        console.log(e.target.href)
        document.getElementById('target').append(shuffle(e.target.href));
       });
    });
}

export default function pageLoad() {
    createLayout();
    switchScreen();
 }
