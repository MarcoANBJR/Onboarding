// Cards

let item1 = document.querySelector('.item1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')


let cards = document.querySelector('.container')

let handlerClickCard1 = () => {
    cards.innerHTML = `
    <article class="card first">
        <img src="/img/Online world.svg" alt="World" class="first--img">
        <h1>Plant lover Community</h1>
        <p>Find gardening enthusiasts from all over the world</p>
    </article>
    `
}

let handlerClickCard2 = () => {
    cards.innerHTML = `
    <article class="card second">
        <img src="/img/In no time.svg" alt="World" class="second--img">
        <h1>Get fast & safe delivery</h1>
        <p>Get good quality products for your plants</p>
    </article>
    `
}

let handlerClickCard3 = () => {
    cards.innerHTML = `
    <article class="card third">
        <img src="/img/Ecommerce campaign.svg" alt="World" class="third--img">
        <h1>Buy & Sell Tools</h1>
        <p>Buy & sell good quality products for your beautiful plants</p>
    </article>
    `
}

let listCards = [handlerClickCard1, handlerClickCard2, handlerClickCard3]

item1.addEventListener("click", listCards[0])

item2.addEventListener("click", listCards[1])

item3.addEventListener("click", listCards[2])

// Buttons
//continuar estar em português pois continue não é permitido (Perguntar o por que)
let continuar = document.querySelector('.continue')

let i = 1
let last = 2

continuar.addEventListener("click", () => {
    console.log("oi")
    if (listCards[i]<=last) {
        console.log("oi")
        listCards[i] 
        i++        
    }
})

let skip = document.querySelector('.skip')

skip.addEventListener("click", listCards[2])
