let obj =  {
version: "12.5.1",
id: "Aatrox",
key: "266",
name: "Aatrox",
title: "the Darkin Blade",
blurb: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
info: {
attack: 8,
defense: 4,
magic: 3,
difficulty: 4
},
image: {
full: "Aatrox.png",
sprite: "champion0.png",
group: "champion",
x: 0,
y: 0,
w: 48,
h: 48
},
tags: [
"Fighter",
"Tank"
],
partype: "Blood Well",
stats: {
hp: 580,
hpperlevel: 90,
mp: 0,
mpperlevel: 0,
movespeed: 345,
armor: 38,
armorperlevel: 3.25,
spellblock: 32,
spellblockperlevel: 1.25,
attackrange: 175,
hpregen: 3,
hpregenperlevel: 1,
mpregen: 0,
mpregenperlevel: 0,
crit: 0,
critperlevel: 0,
attackdamage: 60,
attackdamageperlevel: 5,
attackspeedperlevel: 2.5,
attackspeed: 0.651
}
}
localStorage.setItem('key',JSON.stringify(obj));
let skin1 = document.querySelector('.skin1')
let skin2 = document.querySelector('.skin2')
let skin3 = document.querySelector('.skin3')

let imageName1 = obj.image.full
let path1 = imageName1.slice(0, imageName1.length - 4)

let imageName2 = obj.image.full
let path2 = imageName1.slice(0, imageName1.length - 4)

let imageName3 = obj.image.full
let path3 = imageName3.slice(0, imageName3.length - 4)

let linkImage1 = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + path1
let linkImage2 = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + path2
let linkImage3 = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + path3

link1 = linkImage1 + '_1.jpg'
link2 = linkImage2 + '_0.jpg'
link3 = linkImage3 + '_2.jpg'

skin1.setAttribute('src',link1)
skin2.setAttribute('src',link2)
skin3.setAttribute('src',link3)
