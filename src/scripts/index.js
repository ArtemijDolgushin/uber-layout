import '../styles/reset.css';
import '../styles/index.scss';
import content__contacts__image__source from '../img/uber_mail.png';
if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const content__contacts__image= document.querySelector('.content__contacts__image-mail');
const image = new Image(285,32);
image.src = content__contacts__image__source;
content__contacts__image.appendChild(image);
//content__contacts__image.src = content__contacts__image__source;
