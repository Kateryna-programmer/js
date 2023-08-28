console.log('Sample JavaScript #5 HW #17');

function createCarousel(slidesCount) {
  let body = document.querySelector('body');

  let container = document.createElement('div');
  container.setAttribute('id', 'carousel');
  let elem = document.querySelector('#carousel');
  body.appendChild(container);

  // // Create slides and indicators
  let slides = document.createElement('ul');
  slides.className = 'slides';
  elem.appendChild(slides);

  let indicators = document.createElement('div');
  indicators.className = 'indicators';
  elem.appendChild(indicators);

  for (let i = 0; i < slidesCount; i++) {
    let slidesItem = document.createElement('li');
    slidesItem.className = i === 0 ? 'slides__item active' : 'slides__item';

    let slidesLink = document.createElement('a');
    slidesLink.href = '#';
    slidesItem.appendChild(slidesLink);

    slides.appendChild(slidesItem);

    let indicatorsItem = document.createElement('span');
    indicatorsItem.className =
      i === 0 ? 'indicators__item active' : 'indicators__item';
    indicatorsItem.setAttribute('data-slide-to', i);
    indicators.appendChild(indicatorsItem);
  }

  // Create controls
  let controls = document.createElement('div');
  controls.className = 'controls';
  elem.appendChild(controls);

  let controlsNames = ['prev', 'next', 'pause'];

  for (let i = 0; i < controlsNames.length; i++) {
    let controlsItem = document.createElement('div');
    let controlName = controlsNames[i];
    controlsItem.className = `controls__item controls__${controlName}`;
    controls.appendChild(controlsItem);

    if (controlName === 'pause') {
      let pauseIcon = document.createElement('i');
      pauseIcon.className = 'fas fa-play';
      controlsItem.appendChild(pauseIcon);
    } else {
      let controlIcon = document.createElement('i');
      controlIcon.className = `fas fa-chevron-${
        controlName === 'prev' ? 'left' : 'right'
      }`;
      controlsItem.appendChild(controlIcon);
    }
  }

  // Create event
  indicators.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('indicators__item')) {
      let indicatorItems =
        indicators.getElementsByClassName('indicators__item');
      for (let i = 0; i < indicatorItems.length; i++) {
        indicatorItems[i].style.backgroundColor = '';
      }
      target.style.backgroundColor = 'red';
    }
  });

  // Create styles
  let style = document.createElement('style');
  let styleCode = `
  .carousel {
    max-width: 1200px;
    margin: 0 auto
  }
.slides {
  display:flex; 
  position: relative; 
  list-style-type: none;
  padding:0
}
.slides__item {
  width:400px;
  height:600px
}
.controls { position: relative }
.indicators { display: flex }
  `;

  style.innerHTML = styleCode;
  container.appendChild(style);
}

createCarousel(4);
