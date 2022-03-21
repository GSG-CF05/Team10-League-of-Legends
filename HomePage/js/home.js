//!========== declearition ====================
let singleArrowR = document.querySelector('.single-arrow-r')
let singleArrowL = document.querySelector('.single-arrow-l')
let nextFiveArrowR = document.querySelector('.fa-angles-right')
let nextFiveArrowL = document.querySelector('.fa-angles-left')
let homeBtn = document.querySelector('.home')
let main = document.querySelector('main')
let search = document.querySelector('.phone-btn')
let searchDesktop = document.querySelector('.disktop-btn')
let searchInput = document.querySelector('.search-input')
let footerBtns = document.querySelector('.phone-footer')
let searchHome = document.querySelector('.search-home')

let a = 0
let b = 9
let num = 0
let localStorageArray = []

//! ===============start API========================
fetch('https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data.data
  })
  .then((champions) => {
    //* cut 9 elm from object
    let arrayChampion = Object.entries(champions)
      .slice(a, b)
      .map((entry) => entry[1])
    function transBatweenPage(arrayChampion) {
      //* createElement Contains the champions

      sectionChampion = document.createElement('section')
      main.appendChild(sectionChampion)
      sectionChampion.setAttribute('class', 'champion')
      //! start forEach
      arrayChampion.forEach((champ) => {
        //* createElements
        let imgName = champ.image.full
        let imgLink =
          'https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/' +
          imgName
        let figcaption = document.createElement('figcaption')
        let pressureImg = document.createElement('a')
        let img = document.createElement('img')
        let champName = document.createElement('h3')
        let transformButtons = document.createElement('div')
        let skinBtn = document.createElement('button')
        let detailsBtn = document.createElement('button')
        //! skin && details btn
        let skinPage = document.createElement('a')
        let detailsPage = document.createElement('a')
        detailsPage.textContent = 'Details'
        skinPage.textContent = 'Skin'
        detailsPage.setAttribute('href', '../DetailsPage/details.html')
        skinPage.setAttribute('href', '../SkinsPage/skins.html')
        detailsBtn.appendChild(detailsPage)
        skinBtn.appendChild(skinPage)

        //*setAttribute
        skinBtn.setAttribute('class', 'skin-btn')
        skinBtn.classList.add('btn')
        detailsBtn.setAttribute('class', 'details-btn')
        detailsBtn.classList.add('btn')
        transformButtons.classList.add('buttons')
        img.setAttribute('src', imgLink)

        //* appendChild

        figcaption.appendChild(pressureImg)
        pressureImg.appendChild(img)
        champName.textContent = champ.name
        figcaption.appendChild(champName)
        figcaption.appendChild(transformButtons)
        transformButtons.appendChild(skinBtn)
        transformButtons.appendChild(detailsBtn)
        sectionChampion.appendChild(figcaption)
        //!=================== save to local storage================
        //!=========================================================
        skinBtn.addEventListener('click', goToSkinPage)
        function goToSkinPage() {
          localStorage.setItem('key', JSON.stringify(champ))
        }
        //!=========================================================
        detailsBtn.addEventListener('click', goToSkinPage)
        function goToSkinPage() {
          localStorage.setItem('key', JSON.stringify(champ))
        }
        //!=========================================================
        pressureImg.addEventListener('click', appearBtn)
        function appearBtn() {
          transformButtons.classList.toggle('buttons')
        }
      })
    }

    transBatweenPage(arrayChampion)

    //!==========================================================================
    //!search
    let arrayAllChampion = Object.entries(champions).map((entry) => entry[1])
    search.addEventListener('click', searchAboutChamp)
    function searchAboutChamp() {
      for (let i = 0; i < arrayAllChampion.length; i++) {
        let objectOutput = arrayAllChampion[i].name.toUpperCase()
        let userInput = searchInput.value.toUpperCase()
        if (objectOutput == userInput) {
          num = 1
          sectionChampion.remove()
          sectionChampion = document.createElement('section')
          main.appendChild(sectionChampion)
          sectionChampion.setAttribute('class', 'champion')
          let imgName1 = arrayAllChampion[i].image.full
          let imgLink =
            'https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/' +
            imgName1
          let figcaption = document.createElement('figcaption')
          let pressureImg = document.createElement('a')
          let img = document.createElement('img')
          let champName = document.createElement('h3')
          let transformButtons = document.createElement('div')
          let skinBtn = document.createElement('button')
          let detailsBtn = document.createElement('button')
          //! skin && details btn
          let skinPage = document.createElement('a')
          let detailsPage = document.createElement('a')
          detailsPage.textContent = 'Details'
          skinPage.textContent = 'Skin'
          detailsPage.setAttribute('href', '../DetailsPage/details.html')
          skinPage.setAttribute('href', '../SkinsPage/skins.html')
          detailsBtn.appendChild(detailsPage)
          skinBtn.appendChild(skinPage)

          //*setAttribute

          skinBtn.setAttribute('class', 'skin-btn')
          skinBtn.classList.add('btn')
          detailsBtn.setAttribute('class', 'details-btn')
          detailsBtn.classList.add('btn')
          transformButtons.classList.add('buttons')
          img.setAttribute('src', imgLink)

          //* appendChild

          figcaption.appendChild(pressureImg)
          pressureImg.appendChild(img)
          champName.textContent = arrayAllChampion[i].name
          figcaption.appendChild(champName)
          figcaption.appendChild(transformButtons)
          transformButtons.appendChild(skinBtn)
          transformButtons.appendChild(detailsBtn)
          sectionChampion.appendChild(figcaption)
          //!=================== save to local storage================
          //!=========================================================
          skinBtn.addEventListener('click', goToSkinPage)
          function goToSkinPage() {
            localStorage.setItem('key', JSON.stringify(arrayAllChampion[i]))
          }
          //!=========================================================
          detailsBtn.addEventListener('click', goToSkinPage)
          function goToSkinPage() {
            localStorage.setItem('key', JSON.stringify(arrayAllChampion[i]))
          }
          //!=========================================================
          pressureImg.addEventListener('click', appearBtn)
          function appearBtn() {
            transformButtons.classList.toggle('buttons')
          }
        }
      }
      searchInput.value = ''
    }

    //?=============================================================
    //* singleArrowR fun
    singleArrowR.addEventListener('click', MoveOneNext)
    function MoveOneNext() {
      if (num == 17) {
        return
      }
      num += 1
      a += 9
      b += 9
      sectionChampion.remove()
      console.log(num)
      //* cut 9 elm from object
      let arrayChampion = Object.entries(champions)
        .slice(a, b)
        .map((entry) => entry[1])

      //* createElement Contains the champions

      transBatweenPage(arrayChampion)
    }
    //?================================================================
    //* nextFiveArrowR fun
    nextFiveArrowR.addEventListener('click', MoveOnFiveNext)
    function MoveOnFiveNext() {
      if (num >= 13) {
        return
      }
      sectionChampion.remove()
      num += 5
      a += 45
      b += 45
      console.log(num)
      //* cut 9 elm from object
      let arrayChampion = Object.entries(champions)
        .slice(a, b)
        .map((entry) => entry[1])

      transBatweenPage(arrayChampion)
    }

    //?==============================================================
    //* nextFiveArrowL fun
    nextFiveArrowL.addEventListener('click', backFiveNext)
    function backFiveNext() {
      if (num < 5) {
        return
      }
      sectionChampion.remove()
      num -= 5
      a -= 45
      b -= 45
      console.log(num)
      //* cut 9 elm from object
      let arrayChampion = Object.entries(champions)
        .slice(a, b)
        .map((entry) => entry[1])

      transBatweenPage(arrayChampion)
    }

    //?==============================================================

    //* singleArrowl fun

    singleArrowL.addEventListener('click', moveOneBackward)

    function moveOneBackward() {
      if (num == 0) {
        return
      }
      console.log(num)
      num -= 1
      sectionChampion.remove()
      a -= 9
      b -= 9
      //* cut 9 elm from object
      let arrayChampion = Object.entries(champions)
        .slice(a, b)
        .map((entry) => entry[1])

      transBatweenPage(arrayChampion)
    } //?==============================================================

    //* home fun

    homeBtn.addEventListener('click', backToHome)

    function backToHome() {
      if (num == 0) {
        return
      }
      console.log(num)
      num = 0
      sectionChampion.remove()
      a = 0
      b = 9
      //* cut 9 elm from object
      let arrayChampion = Object.entries(champions)
        .slice(a, b)
        .map((entry) => entry[1])

      transBatweenPage(arrayChampion)
    }
  })

fetch('https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return data.data
  })
  .then((champions) => {
    //* cut 9 elm from object
    let arrayChampion = Object.entries(champions).map((entry) => entry[1])

    //* createElement Contains the champions

    let sectionChampionDisktop = document.createElement('section')
    main.appendChild(sectionChampionDisktop)
    sectionChampionDisktop.setAttribute('class', 'champion-disktop')

    //! start forEach
    arrayChampion.forEach((champ) => {
      //* createElements
      let imgName = champ.image.full
      let imgLink =
        'https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/' + imgName
      let figcaption = document.createElement('figcaption')
      let pressureImg = document.createElement('a')
      let img = document.createElement('img')
      let champName = document.createElement('h3')
      let transformButtons = document.createElement('div')
      let skinBtn = document.createElement('button')
      let detailsBtn = document.createElement('button')
      //! skin && details btn
      let skinPage = document.createElement('a')
      let detailsPage = document.createElement('a')
      detailsPage.textContent = 'Details'
      skinPage.textContent = 'Skin'
      detailsPage.setAttribute('href', '../DetailsPage/details.html')
      skinPage.setAttribute('href', '../SkinsPage/skins.html')
      detailsBtn.appendChild(detailsPage)
      skinBtn.appendChild(skinPage)
      //*setAttribute
      skinBtn.setAttribute('class', 'skin-btn')
      skinBtn.classList.add('btn')
      detailsBtn.setAttribute('class', 'details-btn')
      detailsBtn.classList.add('btn')
      transformButtons.classList.add('buttons')
      img.setAttribute('src', imgLink)

      //* appendChild

      figcaption.appendChild(pressureImg)
      pressureImg.appendChild(img)
      champName.textContent = champ.name
      figcaption.appendChild(champName)
      figcaption.appendChild(transformButtons)
      transformButtons.appendChild(skinBtn)
      transformButtons.appendChild(detailsBtn)
      sectionChampionDisktop.appendChild(figcaption)

      pressureImg.addEventListener('click', appearBtn)
      function appearBtn() {
        transformButtons.classList.toggle('buttons')
      }
      //!=================== save to local storage================
      //!=========================================================
      skinBtn.addEventListener('click', goToSkinPage)
      function goToSkinPage() {
        localStorage.setItem('key', JSON.stringify(champ))
      }
      //!=========================================================
      detailsBtn.addEventListener('click', goToSkinPage)
      function goToSkinPage() {
        localStorage.setItem('key', JSON.stringify(champ))
      }
      //!=========================================================
      //!search
      let arrayAllChampion = Object.entries(champions).map((entry) => entry[1])
      searchDesktop.addEventListener('click', searchAboutChampD)
      function searchAboutChampD() {
        for (let i = 0; i < arrayAllChampion.length; i++) {
          let objectOutput = arrayAllChampion[i].name.toUpperCase()
          let userInput = searchInput.value.toUpperCase()
          if (objectOutput == userInput) {
            sectionChampionDisktop.remove()
            sectionChampionDisktop = document.createElement('section')
            main.appendChild(sectionChampionDisktop)

            sectionChampionDisktop.setAttribute('class', 'champion-disktop')
            let imgName1 = arrayAllChampion[i].image.full
            let imgLink =
              'https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/' +
              imgName1
            let homeDesktop = document.createElement('button')
            let figcaption = document.createElement('figcaption')
            let pressureImg = document.createElement('a')
            let img = document.createElement('img')
            let champName = document.createElement('h3')
            let transformButtons = document.createElement('div')
            let skinBtn = document.createElement('button')
            let detailsBtn = document.createElement('button')
            //! skin && details btn
            let skinPage = document.createElement('a')
            let detailsPage = document.createElement('a')
            detailsPage.textContent = 'Details'
            skinPage.textContent = 'Skin'
            detailsPage.setAttribute('href', '../DetailsPage/details.html')
            skinPage.setAttribute('href', '../SkinsPage/skins.html')
            detailsBtn.appendChild(detailsPage)
            skinBtn.appendChild(skinPage)

            //*setAttribute
            homeDesktop.textContent = 'Home'
            homeDesktop.setAttribute('class', 'btn')
            skinBtn.setAttribute('class', 'skin-btn')
            skinBtn.classList.add('btn')
            detailsBtn.setAttribute('class', 'details-btn')
            detailsBtn.classList.add('btn')
            transformButtons.classList.add('buttons')
            img.setAttribute('src', imgLink)

            //* appendChild

            figcaption.appendChild(pressureImg)
            pressureImg.appendChild(img)
            champName.textContent = arrayAllChampion[i].name
            figcaption.appendChild(champName)
            figcaption.appendChild(transformButtons)
            transformButtons.appendChild(skinBtn)
            transformButtons.appendChild(detailsBtn)
            figcaption.appendChild(homeDesktop)
            sectionChampionDisktop.appendChild(figcaption)
            //!=================== save to local storage================
            //!=========================================================
            skinBtn.addEventListener('click', goToSkinPage)
            function goToSkinPage() {
              localStorage.setItem('key', JSON.stringify(arrayAllChampion[i]))
            }
            //!=========================================================
            detailsBtn.addEventListener('click', goToSkinPage)
            function goToSkinPage() {
              localStorage.setItem('key', JSON.stringify(arrayAllChampion[i]))
            }
            //!=========================================================
            pressureImg.addEventListener('click', appearBtn)
            function appearBtn() {
              transformButtons.classList.toggle('buttons')
            }
            //* home fun

            homeDesktop.addEventListener('click', backToHomeD)

            function backToHomeD() {
              sectionChampionDisktop.remove()
              //* cut 9 elm from object
              let arrayChampion = Object.entries(champions).map(
                (entry) => entry[1],
              )

              //* createElement Contains the champions

              sectionChampionDisktop = document.createElement('section')
              main.appendChild(sectionChampionDisktop)
              sectionChampionDisktop.setAttribute('class', 'champion-disktop')

              //! start forEach
              arrayChampion.forEach((champ) => {
                //* createElements
                let imgName = champ.image.full
                let imgLink =
                  'https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/' +
                  imgName
                let figcaption = document.createElement('figcaption')
                let pressureImg = document.createElement('a')
                let img = document.createElement('img')
                let champName = document.createElement('h3')
                let transformButtons = document.createElement('div')
                let skinBtn = document.createElement('button')
                let detailsBtn = document.createElement('button')
                skinBtn.textContent = 'Skin'
                detailsBtn.textContent = 'Details'

                //*setAttribute
                skinBtn.setAttribute('class', 'skin-btn')
                skinBtn.classList.add('btn')
                detailsBtn.setAttribute('class', 'details-btn')
                detailsBtn.classList.add('btn')
                transformButtons.classList.add('buttons')
                img.setAttribute('src', imgLink)

                //* appendChild

                figcaption.appendChild(pressureImg)
                pressureImg.appendChild(img)
                champName.textContent = champ.name
                figcaption.appendChild(champName)
                figcaption.appendChild(transformButtons)
                transformButtons.appendChild(skinBtn)
                transformButtons.appendChild(detailsBtn)
                sectionChampionDisktop.appendChild(figcaption)

                pressureImg.addEventListener('click', appearBtn)
                function appearBtn() {
                  transformButtons.classList.toggle('buttons')
                }
                //!=================== save to local storage================
                //!=========================================================
                skinBtn.addEventListener('click', goToSkinPage)
                function goToSkinPage() {
                  localStorage.setItem('key', JSON.stringify(champ))
                }
                //!=========================================================
                detailsBtn.addEventListener('click', goToSkinPage)
                function goToSkinPage() {
                  localStorage.setItem('key', JSON.stringify(champ))
                }
                //!=========================================================
              })
            }
          }
        }
        searchInput.value = ''
      }
    })
  })
