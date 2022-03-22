let obj = JSON.parse(localStorage.getItem('key'))

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
