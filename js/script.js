let getAdvice = async () => {
    let response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()

    return document.querySelector('#advice').textContent = `"${data.slip.advice}"`
}

let advice = document.querySelector('#advice').textContent
advice = getAdvice()

let getAdviceButton = document.querySelector('#get-advice')

getAdviceButton.addEventListener('click', getAdvice)


