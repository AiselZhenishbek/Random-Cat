let urlCat = 'https://aws.random.cat/meow';



function $(tagname) {
  return document.querySelector(tagname);
}
let imgCatRandom = $('#cat');
let btn = $('#btn')

function getRandomCat() {
  fetch(urlCat)
    .then(req => req.json())
    .then(cat => {
      imgCatRandom.src = cat.file;
      console.log(cat, 'random cat');
      console.log(cat.file, 'random cat ');
    })
}
getRandomCat();
btn.onclick = () => getRandomCat();