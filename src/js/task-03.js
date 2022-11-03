const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//  for (const image of images) {
//   console.log(image.url);
//   const itemEl = document.createElement('li');
//   const imgEl = document.createElement('img');
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
  
//   itemEl.appendChild(imgEl);
//   const galleryEl = document.querySelector('.gallery')
//   galleryEl.appendChild(itemEl)
//  }

for (const image of images) {
  console.log(image.url);
  
  const galleryEl = document.querySelector('.gallery')
  galleryEl.insertAdjacentHTML("afterbegin", `<li><img src = ${image.url} alt = ${image.alt} height = 1500px></li>`)
 }


