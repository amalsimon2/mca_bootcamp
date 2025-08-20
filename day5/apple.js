let currentIndex = 0;
const slides = document.getElementById("carousel-slides");
const totalSlides = slides.children.length;

function updateSlide() {
  slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}


setInterval(nextSlide, 4000);
  const con = document.getElementById('carousel');
  const com = document.getElementById('mini');

  const arr = [
     'assets/iphonemodels.png',
     'assets/macbook,png'
  ];

 
  
  let i=0;
  let changeimg = () => {
    i++;
    if(i==arr.length)
    {
      i=0;
    }   
    
    con.style.backgroundImage = `url('${arr[i]}')`;

  
  }
    let j=arr.length-1;
  let changebackimg = () => {
    if(j==-1)
    {
      j=arr.length-1;
    }
    
    con.style.backgroundImage = `url('${arr[j]}')`;

  j--;
  }
  setInterval(() => {
    changeimg();    
  }, interval = 3000);


// let k =0;
// let changemini = () => {
//   k++;
//   if(k==mini.length)
//   {
//     k=0;
//   }
//   con.style.backgroundImage = `url('${mini[k]}')`;
// }


//  setInterval(() => {
//     changemini();    
//   }, interval = 3000);
