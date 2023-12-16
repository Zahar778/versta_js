import { 
    createElement,
    createHeader,
} from "../../script/layout";

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)


const NAV = [
    {
        info: 'Iнформацiя',
        data: 'База знань',
    }
]

const POST_INFO = [
    {
    info: "Що таке база знань?",
    title: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
    },
]
const BODY_PNG = [
    {
        width: 340,
        height: 160,
        src: '/img/body.png',
    }
]
const BUTTON_BOT = [
    {
        title: "Перейти до ком'юніті у Телеграм",
    }
]

const createPostInfo = () => {
    const navInfo = createElement('div', 'head_info')
    NAV.forEach((infoData) => {
        const info = createElement(
            'div',
            infoData.info,
            'button head_info'
        )
        const data = createElement (
            'div',
            infoData.data,
            'button head_info_2'
        )
        navInfo.append(info, data)
    })
    return navInfo
}

const createBody = () => {
    const body = createElement ('div', 'info__body')
    
    BODY_PNG.forEach((params) => {
        const img = createElement('img')
        img.src = params.src
        body.append(img)
    })
    return body
}

const button_botom = () => {
    const button = createElement('button', 'button__info-bot')

    BUTTON_BOT.forEach((params) => {
        const but = createElement('button')
        but.textContent = params.title 
        button.append(but)
    })
    return button
}

const infoA = createPostInfo()
page.append(infoA) 
const bodyA = createBody()
page.append(bodyA) 
const buttonA = button_botom()
page.append(buttonA)


