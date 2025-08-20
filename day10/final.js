const arr = [
  'assets/slides/s1.png',
  'assets/slides/s2.png',
  'assets/slides/s3.png',
  'assets/slides/s4.png',
  'assets/slides/s5.png'
  
];

let i = 0;
const con = document.getElementById("mainImg");

function changeimg() {
  i++;
  if (i === arr.length) {
    i = 0;
  }

  con.src = arr[i];
}

function changebackimg() {
  i--;
  if (i < 0) i = arr.length - 1;
  con.src = arr[i];
}


function showImage(index) {
  i = index;
  con.src = arr[i];
}


  setInterval(() => {
    changeimg();    
  }, interval = 5000);
