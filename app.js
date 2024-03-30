const body = document.querySelector('body');
const MW3 = document.getElementById('MW3');
const spiderman = document.getElementById('spiderman');
const FF7 = document.getElementById('FF7');
const sTier = document.querySelector('#sTier');
const aTier = document.querySelector('#aTier');
const bTier = document.querySelector('#bTier');
const cTier = document.querySelector('#cTier');
const dTier = document.querySelector('#dTier');
const eTier = document.querySelector('#eTier');
const fTier = document.querySelector('#fTier');

const miniPic = (imageUrl, tierContainer) => {
  let newPick = document.createElement('div');
  newPick.setAttribute('class', 'onBoard');
  let newImage = document.createElement('img');
  newImage.setAttribute('src', imageUrl);
  newImage.setAttribute('class', 'display');
  newPick.appendChild(newImage);
  tierContainer.appendChild(newPick);
};

const pickTier = (element, imageUrl) => {
  let tier = prompt('What tier do you believe this belongs to?').toLowerCase();
  if (tier === 's') {
    miniPic(imageUrl, sTier);
  } else if (tier === 'a') {
    miniPic(imageUrl, aTier);
  } else if (tier === 'b') {
    miniPic(imageUrl, bTier);
  } else if (tier === 'c') {
    miniPic(imageUrl, cTier);
  } else if (tier === 'd') {
    miniPic(imageUrl, dTier);
  } else if (tier === 'e') {
    miniPic(imageUrl, eTier);
  } else if (tier === 'f') {
    miniPic(imageUrl, fTier);
  } else {
    alert('Please enter a letter between A-F');
  }
};


MW3.addEventListener('click', () => pickTier(MW3, 'https://upload.wikimedia.org/wikipedia/en/b/bf/Call_of_Duty_Modern_Warfare_3_box_art.png'));
spiderman.addEventListener('click', () => pickTier(spiderman, 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png'));
FF7.addEventListener('click', () => pickTier(FF7, 'https://m.media-amazon.com/images/I/81J-uEoQ6WL.jpg'));