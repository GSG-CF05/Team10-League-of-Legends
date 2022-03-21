let obj = localStorage.getItem('key')
let mapDesArray = [
  'Knights castle',
  'The village of souls',
  'Castle of Black Shadows',
  'white castle',
  'city ​​of killers',
  'Demesis warriors',
]
let tag = document.querySelector('.tags')
let mapTitle = document.querySelector('.map-title')
let mapDes = document.querySelector('.map-Des')
let championDetails = JSON.parse(localStorage.getItem('key'))
console.log(championDetails)

let character = document.querySelector('.character')
let box = document.querySelector('.box')
let blurb = document.querySelector('.blurb')

let span1 = document.querySelector('.span-1')
let span2 = document.querySelector('.span-2')
let span3 = document.querySelector('.span-3')
let mapImg = document.querySelector('.map-img')
let characterName = document.createElement('h3')
let characterNikeName = document.createElement('h4')
let characterImg = document.createElement('img')
let mapLink = 'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/'
character.appendChild(characterImg)

let campionImg = championDetails.image.full
let changeImg = campionImg.slice(0, campionImg.length - 4)
changeImg = changeImg + '_0.jpg'
characterName.textContent = championDetails.name
characterNikeName.textContent = championDetails.title
blurb.textContent = championDetails.blurb
span1.textContent = span1.textContent + championDetails.info.attack
span2.textContent = span2.textContent + championDetails.info.defense
span3.textContent = span3.textContent + championDetails.info.magic
tag.textContent = championDetails.tags[0]
let linkImg =
  'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + changeImg
characterImg.setAttribute('src', linkImg)
character.appendChild(characterName)
character.appendChild(characterNikeName)

fetch('https://ddragon.leagueoflegends.com/cdn/6.8.1/data/en_US/map.json')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data.data
  })
  .then((map) => {
    let arrayMap = Object.entries(map).map((entry) => entry[1])

    if (tag.textContent == 'Fighter') {
      mapImg.setAttribute('src', mapLink + arrayMap[0].image.full)
      mapDes.textContent = mapDesArray[0]
      mapTitle.textContent = arrayMap[0].MapName
      console.log(arrayMap[0].image.full)
    } else if (tag.textContent == 'Support') {
      mapImg.setAttribute('src', mapLink + arrayMap[1].image.full)
      mapDes.textContent = mapDesArray[1]

      mapTitle.textContent = arrayMap[1].MapName
      console.log(arrayMap[1].image.full)
    } else if (tag.textContent == 'Mage') {
      mapImg.setAttribute('src', mapLink + arrayMap[2].image.full)
      mapDes.textContent = mapDesArray[2]

      mapTitle.textContent = arrayMap[2].MapName
      console.log(arrayMap[2].image.full)
    } else if (tag.textContent == 'tank') {
      mapImg.setAttribute('src', mapLink + arrayMap[3].image.full)
      mapDes.textContent = mapDesArray[3]

      mapTitle.textContent = arrayMap[3].MapName
      console.log(arrayMap[3].image.full)
    } else if (tag.textContent == 'Assassin') {
      mapImg.setAttribute('src', mapLink + arrayMap[4].image.full)
      mapDes.textContent = mapDesArray[4]

      mapTitle.textContent = arrayMap[4].MapName
      console.log(arrayMap[4].image.full)
    } else if (tag.textContent == 'Marksman') {
      mapImg.setAttribute('src', mapLink + arrayMap[5].image.full)
      mapDes.textContent = mapDesArray[5]

      mapTitle.textContent = arrayMap[5].MapName
      console.log(arrayMap[5].image.full)
    }
  })
