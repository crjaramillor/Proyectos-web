const selectLanguage = document.getElementById('select-lenguaje');
const stateElement = document.getElementById('state');
const clicktoRetry = document.getElementById('retry-button');
const refreshButton = document.getElementById('refresh-button');

clicktoRetry.style.display = 'none'
refreshButton.style.display = 'none'

const cambioState = (state) =>{
    switch (state){
        case 'empty':
            stateElement.textContent="No se ha seleccionado ningun lenguaje."
            break
        case 'loading':
            stateElement.textContent ='Cargando, por favor espere...'
            break
        case 'success':
            stateElement.style.background = 'rgb(228,225,225)'
            stateElement.textContent = 'Por favor selecciona un lenguaje'
			break
        case 'error':
            stateElement.textContent = 'Error cargando repositorios'
            stateElement.style.background= 'rgb(225,200,200)'
            break
        default:
            stateElement.textContent=''
    }
}

const cambioLenguaje = async () => {
    const language = selectLanguage.value
    if(!language){
        cambioState('empty')
        return
    }
    cambioState('loading')

    try {
        refreshButton.style.display = 'none'
		const resp = await fetch(
			`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`
		) 
        const data= await resp.json();
        cambioState('success')
        const randomIndex= Math.floor(Math.random()* data.items.length)
        const randomRepo = data.items[randomIndex];
        const description = document.createElement('p')
		const name = document.createElement('h3')
        stateElement.textContent = ''
		stateElement.style.flexDirection = 'column'
		stateElement.style.alignItems = 'flex-start'
		description.textContent = randomRepo.description
		description.style.color = 'gray'
		description.style.padding = '10px'
		name.textContent = randomRepo.name
		name.style.padding = '0px 10px'
		stateElement.appendChild(name)
		stateElement.appendChild(description)
		refreshButton.style.display = 'block'
		refreshButton.textContent = 'Refresh'
		refreshButton.addEventListener('click', cambioLenguaje);

    }catch(error){
        cambioState('error')
		clicktoRetry.style.display = 'block'
		clicktoRetry.textContent = 'Retry'
		clicktoRetry.addEventListener('click', cambioLenguaje)    
    }
}

const resp = async () => {
	try {
		cambioState('loading')

		const response = await fetch(
			'https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json'
		)
		const data = await response.json()
		data.forEach((language) => {
			const option = document.createElement('option')
			option.value = language.title
			option.textContent = language.title
			selectLanguage.appendChild(option)
		})

		cambioState('success')
	} catch (error) {
		cambioState('error')
		console.error('Error cargando lenguajes:', error)
	}
}

selectLanguage.addEventListener('change', cambioLenguaje)

resp()
