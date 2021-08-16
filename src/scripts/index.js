import '../styles/index.scss';
import promo__contacts__content__image__source from '../img/uber_url.png';

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

const promo__contacts__content__image = document.querySelector('.promo__contacts__content__image');
promo__contacts__content__image.src = promo__contacts__content__image__source;
promo__contacts__content__image.alt = 'Uber site url';
