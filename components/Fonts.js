const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Rubik|Trirong:300,400,500,700,900';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const rubik = new FontFaceObserver('Rubik');
  const trirong = new FontFaceObserver('Trirong');

  rubik.load().then(() => {
    document.documentElement.classList.add('Rubik');
  });
  trirong.load().then(() => {
    document.documentElement.classList.add('Trirong');
  });
};

export default Fonts;