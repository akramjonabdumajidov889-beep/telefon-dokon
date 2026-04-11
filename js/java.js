// const findMax = arr => {
// 	let max = [0]

// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] > max) {
// 			max = arr[i]
// 		}
// 	}
// 	return max
// }

// const numbers = [3, 33, 44, 44, 55, 232, 34324]
// const result = findMax(numbers)

// console.log(result)

// const valyuta = dollar => {
// 	const kurs = 12600
// 	return dollar * kurs
// }

// const telefonNarxi = 750
// const somdagiNarx = valyuta(telefonNarxi)

// console.log(somdagiNarx)

// const changeHeading = () => {
// 	const heading = document.getElementById('heading')
// 	heading.textContent = 'Zakaz bering'
// }

// const btnEl = document.getElementById('about__btn')
// btnEl.addEventListener('click', changeHeading)

// const findMax = arr => {
// 	let max = [0]

// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] > max) {
// 			max = arr[i]
// 		}
// 	}
// 	return max
// }

// const numbers = [3, 34, 342, 2342, 3232]
// const result = findMax(numbers)

// console.log(result)

// let a = 4
// let b = 2
// let c = 1
// let message = ''

// if (a > b && a > c) {
// 	message = `Katta son: (a) => ${a}`
// } else if (a < b && b > c) {
// 	message = `Katta son: (b) => ${b}`
// } else {
// 	message = `Katta son: (c) => ${c}`
// }

// console.log(message)

// const changeHeading = () => {
// 	const heading = document.getElementById('heading')
// 	heading.textContent = 'Zakaz bering!'
// }

// const btnEl = document.getElementById('about__btn')
// btnEl.addEventListener('click', changeHeading)

// function reveal() {
// 	let reveals = document.querySelectorAll('.reveal')

// 	reveals.forEach(el => {
// 		let windowHeight = window.innerHeight
// 		let elementTop = el.getBoundingClientRect().top
// 		let elementVisible = 100

// 		if (elementTop < windowHeight - elementVisible) {
// 			el.classList.add('active')
// 		}
// 	})
// }

// window.addEventListener('scroll', reveal)

// // app.js ga shu kodni qo'sh

// const header = document.querySelector('.header')

// window.addEventListener('scroll', () => {
// 	if (window.scrollY > 50) {
// 		header.classList.add('scrolled')
// 	} else {
// 		header.classList.remove('scrolled')
// 	}
// })

// t() funksiyasini app.js boshiga qo'sh
function t(key) {
	const lang = localStorage.getItem('lang') || 'uz'
	return translations[lang] && translations[lang][key]
		? translations[lang][key]
		: key
}

// validateInput funksiyasini yangilash
function validateInput(input) {
	const value = input.value.trim()
	let error = ''

	if (input.type === 'text' && input.id === 'firstname') {
		if (!value) error = t('error_firstname_empty')
		else if (value.length < 2) error = t('error_firstname_short')
	}
	if (input.type === 'text' && input.id === 'lastname') {
		if (!value) error = t('error_lastname_empty')
		else if (value.length < 2) error = t('error_lastname_short')
	}
	if (input.type === 'email') {
		if (!value) error = t('error_email_empty')
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
			error = t('error_email_invalid')
	}
	if (input.type === 'password') {
		if (!value) error = t('error_password_empty')
		else if (value.length < 6) error = t('error_password_short')
	}

	showInputError(input, error)
	return error === ''
}

// Contact form validatsiya
contactName.addEventListener('input', () => {
	const valid = contactName.value.trim().length >= 2
	nameError.textContent = !valid ? t('error_name_short') : ''
	contactName.style.borderColor = !valid ? 'var(--accent2)' : 'var(--accent)'
})

contactMessage.addEventListener('input', () => {
	const valid = contactMessage.value.trim().length >= 10
	messageError.textContent = !valid ? t('error_message_short') : ''
	contactMessage.style.borderColor = !valid ? 'var(--accent2)' : 'var(--accent)'
})

// Modal memory va processor
card.addEventListener('click', () => {
	// ...
	modalMemory.textContent = t('modal_memory_label') + ': ' + currentPhone.memory
	modalProcessor.textContent =
		t('modal_processor_label') + ': ' + currentPhone.processor
})

// Toast xabarlar
showToast('⚠️ ' + currentPhone.name + ' ' + t('toast_already_ordered'))
showToast('✅ ' + currentPhone.name + ' ' + t('toast_ordered'))
showToast(t('toast_cleared'))
showToast(t('toast_invalid_form'))
showToast(t('toast_msg_sent'))

// Form saqlash
showToast(t('toast_data_saved') + ' ' + userData.firstname + '!')

// Sahifa yuklanganda
showToast(t('toast_welcome_back') + ' ' + saved.firstname + '!')

// renderOrders — "zakaz yo'q" matni
ordersList.innerHTML =
	'<li style="color:var(--muted)">' + t('no_orders') + '</li>'
