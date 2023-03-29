const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
  ]
  
  const buttonUp = document.querySelector('.fa-chevron-up');
  const buttonDown = document.querySelector('.fa-chevron-down');
  let containerImages = document.getElementById('container-images');
  
  let containerCircles = document.getElementById('circles-collection');
  
  const circleClass = document.getElementsByClassName('circle');
  
  console.log('images', images);
  console.log('images.length', images.length); 
  console.log('(images.length - 1)', (images.length - 1)); 
  

  containerImages.innerHTML =  `<img src="${images[0]}" alt="img">`;
  let c = 0;
  
  buttonUp.addEventListener('click', function(){

    if (c > 0){
      c = c - 1;
      containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
      console.log(c);
  

      circleClass[c + 1].classList.remove('active');
      circleClass[c].classList.add('active');
    }  
    else if(c = -1){
      c = (images.length - 1);

      containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
      console.log(c);
  

      circleClass[c = 0].classList.remove('active');
      circleClass[c = (images.length - 1)].classList.add('active');
    }

  });
  
  buttonDown.addEventListener('click', function(){

    if (c < (images.length - 1)){

      c = c + 1;
      containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
      console.log(c);

      circleClass[c - 1].classList.remove('active');
      circleClass[c].classList.add('active');
    }  
    else if(c = (images.length - 1)){

      c = 0;
      containerImages.innerHTML =  `<img src="${images[c]}" alt="img">`;
      console.log(c);

      circleClass[c = (images.length - 1)].classList.remove('active');

      circleClass[c = 0].classList.add('active');
    }
  
  });
  

  for(let i = 0; i < images.length; i++){

    containerCircles.innerHTML +=  `<div class="circle ${images[i]} ${[i]}"></div>`;

    circleClass[c].classList.add('active');
    
  }