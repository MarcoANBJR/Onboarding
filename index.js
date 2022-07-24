var counter = 0

// Cards

//continuar estar em português pois continue não é permitido (Perguntar o por que)
let item1 = document.querySelector('.item1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')
let skip = document.querySelector('.skip')
let continuar = document.querySelector('.continue')
let getStarted = document.querySelector('.get-started')

// let item1Active = item1.classList.add("active")
// let item2Active = item2.classList.add("active")
// let item3Active = item3.classList.add("active")
// let skipStandard = skip.classList.remove("display-none")

// let item1Standard = item1.classList.remove("active")
// let item2Standard = item2.classList.remove("active")
// let item3Standard = item3.classList.remove("active")
// let skipDisable = skip.classList.add("display-none")

let cards = document.querySelector('.container')

function getHtmlContent (position) {
    switch (position) {
        case 0: 
            return `
            <article class="card first">
                <img src="/img/Online world.svg" alt="World" class="first--img">
                <h1>Plant lover Community</h1>
                <p>Find gardening enthusiasts from all over the world</p>
            </article>
            
            `
        case 1: 
            return `
            <article class="card second">
                <img src="/img/In no time.svg" alt="World" class="second--img">
                <h1>Get fast & safe delivery</h1>
                <p>Get good quality products for your plants</p>
            </article>
            `
        case 2:
            return `
            <article class="card third">
                <img src="/img/Ecommerce campaign.svg" alt="World" class="third--img">
                <h1>Buy & Sell Tools</h1>
                <p>Buy & sell good quality products for your beautiful plants</p>
            </article>
            `
    }
} 

let handlerClickCard1 = () => {
    counter = 0
    item1.classList.add("active")
    item2.classList.remove("active")
    item3.classList.remove("active")
    skip.classList.remove("display-none") 
    continuar.classList.remove("display-none")
    getStarted.classList.add("display-none")
    cards.innerHTML = getHtmlContent(counter)
    
}

let handlerClickCard2 = () => {
    counter = 1
    item1.classList.remove("active")
    item2.classList.add("active")
    item3.classList.remove("active")
    skip.classList.remove("display-none") 
    continuar.classList.remove("display-none")
    getStarted.classList.add("display-none")
    cards.innerHTML = getHtmlContent(counter)
}

let handlerClickCard3 = () => {
    counter = 2
    item1.classList.remove("active")
    item2.classList.remove("active")
    item3.classList.add("active")
    skip.classList.add("display-none") 
    continuar.classList.add("display-none")
    getStarted.classList.remove("display-none")
    cards.innerHTML = getHtmlContent(counter)
}

let listCards = [handlerClickCard1, handlerClickCard2, handlerClickCard3]

item1.addEventListener("click", listCards[0])

item2.addEventListener("click", listCards[1])

item3.addEventListener("click", listCards[2])



// Buttons ------------------------------------

//Button Continue

continuar.addEventListener("click", () =>  {
    if(counter==2) {
        document.getElementsByClassName('continuar').disabled=true;
    }else{
        counter++
        cards.innerHTML = getHtmlContent(counter)
        if (counter==0) {
            item1.classList.add("active")
            item2.classList.remove("active")
            item3.classList.remove("active")
            skip.classList.remove("display-none")
            continuar.classList.remove("display-none")
            getStarted.classList.add("display-none")            
        }if (counter==1) {
            item1.classList.remove("active")
            item2.classList.add("active")
            item3.classList.remove("active")
            skip.classList.remove("display-none")
            continuar.classList.remove("display-none")
            getStarted.classList.add("display-none")
        }if (counter==2) {
            item1.classList.remove("active")
            item2.classList.remove("active")
            item3.classList.add("active")
            skip.classList.add("display-none")
            continuar.classList.add("display-none")
            getStarted.classList.remove("display-none")
        }
    }
})

//Button skip

skip.addEventListener("click", listCards[2])
skip.addEventListener("click", () => {skip.classList.add("display-none")})

//Button Get Started

getStarted.addEventListener("click", listCards[0])