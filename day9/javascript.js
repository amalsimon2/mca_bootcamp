  const con = document.getElementById('container');
  const com = document.getElementById('mini');

  const arr = [
     'assets/car1.jpg',
     'assets/car2.jpg',
     'assets/car3.jpg',
     'assets/car4.jpg',
     'assets/car5.jpg',
     'assets/car6.jpg'
  ];

  const mini = [
    'assets/car1.jpg',
    'assets/car2.jpg',
    'assets/car3.jpg',      
    'assets/car4.jpg',
    'assets/car5.jpg',
    'assets/car6.jpg'
  ]
  
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


let k =0;
let changemini = () => {
  k++;
  if(k==mini.length)
  {
    k=0;
  }
  con.style.backgroundImage = `url('${mini[k]}')`;
}


 setInterval(() => {
    changemini();    
  }, interval = 3000);
