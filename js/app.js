const header = document.querySelector('.header')

// Heading o'zgartirish
const changeHeading = () => {
	const heading = document.getElementById('heading')
	heading.textContent = 'Zakaz bering!'
}

const btnEl = document.getElementById('about__btn')
btnEl.addEventListener('click', changeHeading)

// Reveal funksiyasi
function reveal() {
	let reveals = document.querySelectorAll('.reveal')
	reveals.forEach(el => {
		let windowHeight = window.innerHeight
		let elementTop = el.getBoundingClientRect().top
		let elementVisible = 100

		if (elementTop < windowHeight - elementVisible) {
			el.classList.add('active')
		}
	})
}

// Bitta scroll listener
window.addEventListener('scroll', () => {
	reveal()

	if (window.scrollY > 50) {
		header.classList.add('scrolled')
	} else {
		header.classList.remove('scrolled')
	}
})

// Sahifa yuklanganda reveal ishga tushsin
reveal()

// ===== MODAL =====
const phones = [
	{
		name: 'Iphone 11',
		img: './images/iphone-11-img.jpg',
		memory: '64/128/256gb',
		processor: 'A13 Bionic',
	},
	{
		name: 'Iphone 12',
		img: './images/iphone-12-img.jpg',
		memory: '64/128/256gb',
		processor: 'A14 Bionic',
	},
	{
		name: 'Iphone 13',
		img: './images/iphone-13-img.jpg',
		memory: '128/256/512gb',
		processor: 'A15 Bionic',
	},
	{
		name: 'Iphone 14',
		img: './images/iphone14-img.webp',
		memory: '128/256/512gb',
		processor: 'A15 Bionic',
	},
	{
		name: 'Samsung S21',
		img: './images/s21-img.webp',
		memory: '128/256gb',
		processor: 'Snapdragon 888',
	},
	{
		name: 'Samsung S23',
		img: './images/s23-img.webp',
		memory: '128/256gb',
		processor: 'Snapdragon 8 Gen 2',
	},
	{
		name: 'Samsung S25',
		img: './images/s25-img.webp',
		memory: '128/256/512gb',
		processor: 'Snapdragon 8 Elite',
	},
]

const overlay = document.getElementById('modalOverlay')
const modalImg = document.getElementById('modalImg')
const modalName = document.getElementById('modalName')
const modalMemory = document.getElementById('modalMemory')
const modalProcessor = document.getElementById('modalProcessor')
const modalOrderBtn = document.getElementById('modalOrderBtn')
const modalClose = document.getElementById('modalClose')
const toast = document.getElementById('toast')

let currentPhone = null

// Har bir kartochkaga click qo'shish
document.querySelectorAll('.phone__parent__items').forEach((card, index) => {
	card.addEventListener('click', () => {
		currentPhone = phones[index]
		modalImg.src = currentPhone.img
		modalImg.alt = currentPhone.name
		modalName.textContent = currentPhone.name
		modalMemory.textContent =
			t('modal_memory_label') + ': ' + currentPhone.memory
		modalProcessor.textContent =
			t('modal_processor_label') + ': ' + currentPhone.processor
		overlay.classList.add('active')
	})
})

// Modalni yopish
modalClose.addEventListener('click', () => overlay.classList.remove('active'))
overlay.addEventListener('click', e => {
	if (e.target === overlay) overlay.classList.remove('active')
})

// Zakaz berish — LocalStorage ga saqlash

modalOrderBtn.addEventListener('click', () => {
	if (!currentPhone) return

	// LocalStorage dan mavjud zakazlarni olish
	let orders = JSON.parse(localStorage.getItem('orders') || '[]')

	// Tekshirish — bu telefon allaqachon zakazda bormi

	const exists = orders.find(o => o.name === currentPhone.name)
	if (exists) {
		showToast('⚠️ ' + currentPhone.name + ' ' + t('toast_already_ordered'))
		return
	}
	orders.push({ name: currentPhone.name, date: new Date().toLocaleString() })
	localStorage.setItem('orders', JSON.stringify(orders))
	renderOrders()
	overlay.classList.remove('active')
	showToast('✅ ' + currentPhone.name + ' ' + t('toast_ordered'))
})

// Toast ko'rsatish
function showToast(message) {
	toast.textContent = message
	toast.classList.add('show')
	setTimeout(() => toast.classList.remove('show'), 3000)
}

// ===== NAV SMOOTH SCROLL + ACTIVE LINK =====

const navLinks = document.querySelectorAll('.nav__item a')
const sections = document.querySelectorAll('section[id]')

// Smooth scroll
navLinks.forEach(link => {
	link.addEventListener('click', e => {
		const href = link.getAttribute('href')
		if (href.startsWith('#')) {
			e.preventDefault()
			const target = document.querySelector(href)
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' })
			}
		}
	})
})

// Active link — qaysi sectionda turganini ko'rsatish
function setActiveLink() {
	let current = ''

	sections.forEach(section => {
		const sectionTop = section.offsetTop - 150
		if (window.scrollY >= sectionTop) {
			current = section.getAttribute('id')
		}
	})

	navLinks.forEach(link => {
		link.classList.remove('active')
		if (link.getAttribute('href') === '#' + current) {
			link.classList.add('active')
		}
	})
}

window.addEventListener('scroll', setActiveLink)
setActiveLink()

// ===== FORM VALIDATSIYA + LOCALSTORAGE =====

const form = document.querySelector('.form__container')
const inputs = form.querySelectorAll('input')

// Har bir inputga real-time validatsiya
inputs.forEach(input => {
	input.addEventListener('input', () => validateInput(input))
	input.addEventListener('blur', () => validateInput(input))
})

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

function showInputError(input, message) {
	// Avvalgi xatoni o'chir
	const existing = input.parentNode.querySelector('.input-error')
	if (existing) existing.remove()

	input.style.border = message
		? '1.5px solid var(--accent2)'
		: '1.5px solid var(--accent)'

	if (message) {
		const span = document.createElement('span')
		span.className = 'input-error'
		span.textContent = message
		input.after(span)
	}
}

// Form submit
form.addEventListener('submit', e => {
	e.preventDefault()

	// Barcha inputlarni tekshir
	let isValid = true
	inputs.forEach(input => {
		if (!validateInput(input)) isValid = false
	})

	if (!isValid) {
		showToast(t('toast_invalid_form'))
		return
	}
	// ...
	showToast(t('toast_data_saved') + ' ' + userData.firstname + '!')

	// Sahifa yuklanganda
	showToast(t('toast_welcome_back') + ' ' + saved.firstname + '!')

	// LocalStorage ga saqlash
	const userData = {
		firstname: document.getElementById('firstname').value.trim(),
		lastname: document.getElementById('lastname').value.trim(),
		email: document.getElementById('email').value.trim(),
		date: new Date().toLocaleString(),
	}

	localStorage.setItem('user', JSON.stringify(userData))

	// Inputlarni tozalash
	inputs.forEach(input => {
		input.value = ''
		input.style.border = 'none'
	})

	showToast("✅ Ma'lumotlar saqlandi, " + userData.firstname + '!')
})

// Sahifa yuklanganda saqlangan ma'lumotni yuklash
window.addEventListener('load', () => {
	const saved = JSON.parse(localStorage.getItem('user'))
	if (saved) {
		document.getElementById('firstname').value = saved.firstname
		document.getElementById('lastname').value = saved.lastname
		document.getElementById('email').value = saved.email
		showToast('👋 Xush kelibsiz, ' + saved.firstname + '!')
	}
})

// ===== NARXLAR FILTER + ZAKAZ =====

const filterBtns = document.querySelectorAll('.filter__btn')
const priceCards = document.querySelectorAll('.price__card')
const ordersList = document.getElementById('ordersList')
const clearOrdersBtn = document.getElementById('clearOrders')

// Filter
filterBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		// Active classni o'zgartir
		filterBtns.forEach(b => b.classList.remove('active'))
		btn.classList.add('active')

		const filter = btn.dataset.filter

		priceCards.forEach(card => {
			if (filter === 'all' || card.dataset.brand === filter) {
				card.classList.remove('hidden')
				// Qayta animatsiya
				card.style.animation = 'none'
				card.offsetHeight
				card.style.animation = 'fadeInUp 0.4s ease'
			} else {
				card.classList.add('hidden')
			}
		})
	})
})

// Narx zakaz tugmalari
priceCards.forEach(card => {
	const btn = card.querySelector('.price__btn')
	const name = card.querySelector('.price__name').textContent
	const price = card.querySelector('.price__amount').textContent

	btn.addEventListener('click', () => {
		let orders = JSON.parse(localStorage.getItem('orders') || '[]')
		const exists = orders.find(o => o.name === name)
		if (exists) {
			showToast('⚠️ ' + name + ' ' + t('toast_already_ordered'))
			return
		}
		orders.push({ name, price, date: new Date().toLocaleString() })
		localStorage.setItem('orders', JSON.stringify(orders))
		renderOrders()
		showToast('✅ ' + name + ' ' + t('toast_ordered'))
	})
})
// Zakazlarni ekranga chiqarish
function renderOrders() {
	const orders = JSON.parse(localStorage.getItem('orders') || '[]')
	ordersList.innerHTML = ''
	if (orders.length === 0) {
		ordersList.innerHTML =
			'<li style="color:var(--muted)">' + t('no_orders') + '</li>'
		return
	}
	orders.forEach(order => {
		const li = document.createElement('li')
		li.innerHTML = `
            <span>📱 ${order.name} — ${order.price}</span>
            <span>${order.date}</span>
        `
		ordersList.appendChild(li)
	})
}

// Zakazlarni tozalash
clearOrdersBtn.addEventListener('click', () => {
	localStorage.removeItem('orders')
	renderOrders()
	showToast('🗑 Barcha zakazlar tozalandi!')
})

// Sahifa yuklanganda zakazlarni ko'rsatish
renderOrders()

// ===== HAMBURGER MENU =====

const hamburger = document.getElementById('hamburger')
const navItems = document.getElementById('navItems')
const navOverlay = document.getElementById('navOverlay')

// Ochish / yopish
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active')
	navItems.classList.toggle('open')
	navOverlay.classList.toggle('active')
	document.body.style.overflow = navItems.classList.contains('open')
		? 'hidden'
		: ''
})

// Overlay bosilganda yopish
navOverlay.addEventListener('click', closeMenu)

// Nav link bosilganda yopish
navItems.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', closeMenu)
})

function closeMenu() {
	hamburger.classList.remove('active')
	navItems.classList.remove('open')
	navOverlay.classList.remove('active')
	document.body.style.overflow = ''
}

// ===== CONTACT FORM =====

const contactForm = document.getElementById('contactForm')
const contactName = document.getElementById('contactName')
const contactEmail = document.getElementById('contactEmail')
const contactMessage = document.getElementById('contactMessage')
const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const messageError = document.getElementById('messageError')

// Real-time validatsiya
contactName.addEventListener('input', () => {
	const valid = contactName.value.trim().length >= 2
	nameError.textContent = !valid ? t('error_name_short') : ''
	contactName.style.borderColor = !valid ? 'var(--accent2)' : 'var(--accent)'
})

contactEmail.addEventListener('input', () => {
	const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.value)
	emailError.textContent = !valid ? t('error_email_invalid') : ''
	contactEmail.style.borderColor = !valid ? 'var(--accent2)' : 'var(--accent)'
})

contactMessage.addEventListener('input', () => {
	const valid = contactMessage.value.trim().length >= 10
	messageError.textContent = !valid ? t('error_message_short') : ''
	contactMessage.style.borderColor = !valid ? 'var(--accent2)' : 'var(--accent)'
})

// Submit
contactForm.addEventListener('submit', e => {
	e.preventDefault()

	const isNameValid = contactName.value.trim().length >= 2
	const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.value)
	const isMessageValid = contactMessage.value.trim().length >= 10

	if (!isNameValid) nameError.textContent = t('error_name_short')
	if (!isEmailValid) emailError.textContent = t('error_email_invalid')
	if (!isMessageValid) messageError.textContent = t('error_message_short')

	if (!isNameValid || !isEmailValid || !isMessageValid) {
		showToast(t('toast_invalid_form'))
		return
	}
	// ...
	showToast(t('toast_msg_sent'))

	// LocalStorage ga saqlash
	const messages = JSON.parse(localStorage.getItem('messages') || '[]')
	messages.push({
		name: contactName.value.trim(),
		email: contactEmail.value.trim(),
		message: contactMessage.value.trim(),
		date: new Date().toLocaleString(),
	})
	localStorage.setItem('messages', JSON.stringify(messages))

	// Formani tozalash
	contactName.value = ''
	contactEmail.value = ''
	contactMessage.value = ''
	nameError.textContent = ''
	emailError.textContent = ''
	messageError.textContent = ''

	showToast("✅ Xabaringiz yuborildi! Tez orada bog'lanamiz.")
})
