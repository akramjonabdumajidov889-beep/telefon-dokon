// ===== TILLAR =====
const translations = {
	uz: {
		// Nav
		nav_home: 'Home',
		nav_about: 'About',
		nav_models: 'Telefon modellari',
		nav_prices: 'Narxlar',
		nav_contact: 'Contact',

		// Home
		home_title: "Salom! Telefon Do'konimizga xush kelibsiz",

		// About
		about_desc:
			"Bizning do'kondan har xil turdagi telefon brendlar va modellari haqida ma'lumot olishingiz mumkin",
		about_btn: "Ko'proq",
		about_btn_clicked: 'Zakaz bering!',

		// Models
		models_title: 'Telefon brendlari',

		// iPhone
		iphone_title: 'Iphone modellari',
		samsung_title: 'Samsung modellari',

		// Phone info
		memory: 'Xotirasi',
		processor: 'Protsessori',

		// Prices
		prices_title: 'Narxlar',
		filter_all: 'Barchasi',
		filter_iphone: 'iPhone',
		filter_samsung: 'Samsung',
		order_btn: '🛒 Zakaz',
		orders_title: '🛒 Mening zakazlarim',
		orders_clear: '🗑 Zakazlarni tozalash',
		no_orders: "Hozircha zakaz yo'q",

		// Form
		form_title: "Shaxsiy ma'lumotlarni to'ldirish",
		form_firstname: 'Ismingizni kiriting',
		form_lastname: 'Familyangizni kiriting',
		form_email: 'Emailingizni kiriting',
		form_password: 'Parolingizni kiriting',
		form_btn: 'Login',

		// Contact
		contact_title: "Biz bilan bog'laning",
		contact_subtitle: 'Savollaringiz bormi? Xabar yuboring!',
		contact_address: 'Toshkent, Chilonzor tumani',
		contact_worktime: 'Dush–Shan: 9:00 – 18:00',
		contact_name_label: 'Ismingiz',
		contact_name_placeholder: 'Ismingizni kiriting',
		contact_email_label: 'Email',
		contact_email_placeholder: 'Emailingizni kiriting',
		contact_msg_label: 'Xabar',
		contact_msg_placeholder: 'Xabaringizni yozing...',
		contact_submit: '📨 Xabar yuborish',

		// Footer
		footer_links: 'Havolalar',
		footer_connect: "Biz bilan bog'laning",
		footer_desc: 'Eng yangi telefon modellari va qulay narxlar bir joyda!',
		footer_rights: "© 2026 Telefon Do'koni. Barcha huquqlar himoyalangan.",

		// Toast
		toast_already_ordered: 'allaqachon zakazda bor!',
		toast_ordered: "zakazga qo'shildi!",
		toast_cleared: '🗑 Barcha zakazlar tozalandi!',
		toast_invalid_form: "❌ Iltimos, barcha maydonlarni to'g'ri to'ldiring!",
		toast_msg_sent: "✅ Xabaringiz yuborildi! Tez orada bog'lanamiz.",
		toast_welcome: '👋 Xush kelibsiz,',

		// Contact info labels
		contact_label_address: 'Manzil',
		contact_label_phone: 'Telefon',
		contact_label_email: 'Email',
		contact_label_worktime: 'Ish vaqti',
		contact_phone_number: '+998 90 123 45 67',
		contact_email_address: 'info@telefondokon.uz',

		// Phone info
		iphone11_memory: 'Xotirasi: 64/128/256gb',
		iphone11_processor: 'Protsessori: A13 Bionic',
		iphone12_memory: 'Xotirasi: 64/128/256gb',
		iphone12_processor: 'Protsessori: A14 Bionic',
		iphone13_memory: 'Xotirasi: 128/256/512gb',
		iphone13_processor: 'Protsessori: A15 Bionic',
		iphone14_memory: 'Xotirasi: 128/256/512gb',
		iphone14_processor: 'Protsessori: A15 Bionic',
		s21_memory: 'Xotirasi: 128/256gb',
		s23_memory: 'Xotirasi: 128/256gb',
		s25_memory: 'Xotirasi: 128/256/512gb',

		// Modal
		modal_memory_label: '💾 Xotira',
		modal_processor_label: '⚙️ Protsessor',

		// Form validatsiya xatolari
		error_firstname_empty: "Ism bo'sh bo'lmasin!",
		error_firstname_short: 'Ism kamida 2 ta harf!',
		error_lastname_empty: "Familya bo'sh bo'lmasin!",
		error_lastname_short: 'Familya kamida 2 ta harf!',
		error_email_empty: "Email bo'sh bo'lmasin!",
		error_email_invalid: "Email noto'g'ri formatda!",
		error_password_empty: "Parol bo'sh bo'lmasin!",
		error_password_short: 'Parol kamida 6 ta belgi!',

		// Contact form validatsiya
		error_name_short: "Ism kamida 2 ta harf bo'lsin!",
		error_message_short: "Xabar kamida 10 ta belgi bo'lsin!",

		// Toast — form
		toast_data_saved: "✅ Ma'lumotlar saqlandi,",
		toast_welcome_back: '👋 Xush kelibsiz,',
	},

	ru: {
		nav_home: 'Главная',
		nav_about: 'О нас',
		nav_models: 'Модели телефонов',
		nav_prices: 'Цены',
		nav_contact: 'Контакт',

		home_title: 'Привет! Добро пожаловать в наш магазин телефонов',

		about_desc:
			'В нашем магазине вы можете узнать о различных брендах и моделях телефонов',
		about_btn: 'Подробнее',
		about_btn_clicked: 'Оформить заказ!',

		models_title: 'Бренды телефонов',

		iphone_title: 'Модели iPhone',
		samsung_title: 'Модели Samsung',

		memory: 'Память',
		processor: 'Процессор',

		prices_title: 'Цены',
		filter_all: 'Все',
		filter_iphone: 'iPhone',
		filter_samsung: 'Samsung',
		order_btn: '🛒 Заказать',
		orders_title: '🛒 Мои заказы',
		orders_clear: '🗑 Очистить заказы',
		no_orders: 'Заказов пока нет',

		form_title: 'Заполните личные данные',
		form_firstname: 'Введите имя',
		form_lastname: 'Введите фамилию',
		form_email: 'Введите email',
		form_password: 'Введите пароль',
		form_btn: 'Войти',

		contact_title: 'Свяжитесь с нами',
		contact_subtitle: 'Есть вопросы? Напишите нам!',
		contact_address: 'Ташкент, Чиланзарский район',
		contact_worktime: 'Пн–Сб: 9:00 – 18:00',
		contact_name_label: 'Ваше имя',
		contact_name_placeholder: 'Введите ваше имя',
		contact_email_label: 'Email',
		contact_email_placeholder: 'Введите ваш email',
		contact_msg_label: 'Сообщение',
		contact_msg_placeholder: 'Напишите ваше сообщение...',
		contact_submit: '📨 Отправить',

		footer_links: 'Ссылки',
		footer_connect: 'Свяжитесь с нами',
		footer_desc: 'Новейшие модели телефонов и доступные цены в одном месте!',
		footer_rights: '© 2026 Магазин телефонов. Все права защищены.',

		toast_already_ordered: 'уже в заказах!',
		toast_ordered: 'добавлен в заказы!',
		toast_cleared: '🗑 Все заказы очищены!',
		toast_invalid_form: '❌ Пожалуйста, заполните все поля правильно!',
		toast_msg_sent: '✅ Сообщение отправлено! Скоро свяжемся.',
		toast_welcome: '👋 Добро пожаловать,',

		contact_label_address: 'Адрес',
		contact_label_phone: 'Телефон',
		contact_label_email: 'Эл. почта',
		contact_label_worktime: 'Часы работы',
		contact_phone_number: '+998 90 123 45 67',
		contact_email_address: 'info@telefondokon.uz',

		iphone11_memory: 'Память: 64/128/256gb',
		iphone11_processor: 'Процессор: A13 Bionic',
		iphone12_memory: 'Память: 64/128/256gb',
		iphone12_processor: 'Процессор: A14 Bionic',
		iphone13_memory: 'Память: 128/256/512gb',
		iphone13_processor: 'Процессор: A15 Bionic',
		iphone14_memory: 'Память: 128/256/512gb',
		iphone14_processor: 'Процессор: A15 Bionic',
		s21_memory: 'Память: 128/256gb',
		s23_memory: 'Память: 128/256gb',
		s25_memory: 'Память: 128/256/512gb',

		modal_memory_label: '💾 Память',
		modal_processor_label: '⚙️ Процессор',

		error_firstname_empty: 'Имя не должно быть пустым!',
		error_firstname_short: 'Имя минимум 2 буквы!',
		error_lastname_empty: 'Фамилия не должна быть пустой!',
		error_lastname_short: 'Фамилия минимум 2 буквы!',
		error_email_empty: 'Email не должен быть пустым!',
		error_email_invalid: 'Неверный формат email!',
		error_password_empty: 'Пароль не должен быть пустым!',
		error_password_short: 'Пароль минимум 6 символов!',

		error_name_short: 'Имя минимум 2 буквы!',
		error_message_short: 'Сообщение минимум 10 символов!',

		toast_data_saved: '✅ Данные сохранены,',
		toast_welcome_back: '👋 Добро пожаловать,',
	},

	en: {
		nav_home: 'Home',
		nav_about: 'About',
		nav_models: 'Phone Models',
		nav_prices: 'Prices',
		nav_contact: 'Contact',

		home_title: 'Hello! Welcome to our Phone Store',

		about_desc:
			'In our store you can find information about various phone brands and models',
		about_btn: 'Learn More',
		about_btn_clicked: 'Place Order!',

		models_title: 'Phone Brands',

		iphone_title: 'iPhone Models',
		samsung_title: 'Samsung Models',

		memory: 'Storage',
		processor: 'Processor',

		prices_title: 'Prices',
		filter_all: 'All',
		filter_iphone: 'iPhone',
		filter_samsung: 'Samsung',
		order_btn: '🛒 Order',
		orders_title: '🛒 My Orders',
		orders_clear: '🗑 Clear Orders',
		no_orders: 'No orders yet',

		form_title: 'Fill in Personal Details',
		form_firstname: 'Enter your name',
		form_lastname: 'Enter your surname',
		form_email: 'Enter your email',
		form_password: 'Enter your password',
		form_btn: 'Login',

		contact_title: 'Contact Us',
		contact_subtitle: 'Have questions? Send us a message!',
		contact_address: 'Tashkent, Chilanzar district',
		contact_worktime: 'Mon–Sat: 9:00 – 18:00',
		contact_name_label: 'Your Name',
		contact_name_placeholder: 'Enter your name',
		contact_email_label: 'Email',
		contact_email_placeholder: 'Enter your email',
		contact_msg_label: 'Message',
		contact_msg_placeholder: 'Write your message...',
		contact_submit: '📨 Send Message',

		footer_links: 'Links',
		footer_connect: 'Contact Us',
		footer_desc: 'The latest phone models and affordable prices in one place!',
		footer_rights: '© 2026 Phone Store. All rights reserved.',

		toast_already_ordered: 'is already in orders!',
		toast_ordered: 'added to orders!',
		toast_cleared: '🗑 All orders cleared!',
		toast_invalid_form: '❌ Please fill in all fields correctly!',
		toast_msg_sent: "✅ Message sent! We'll contact you soon.",
		toast_welcome: '👋 Welcome,',

		contact_label_address: 'Address',
		contact_label_phone: 'Phone',
		contact_label_email: 'Email',
		contact_label_worktime: 'Working Hours',
		contact_phone_number: '+998 90 123 45 67',
		contact_email_address: 'info@telefondokon.uz',

		iphone11_memory: 'Storage: 64/128/256gb',
		iphone11_processor: 'Processor: A13 Bionic',
		iphone12_memory: 'Storage: 64/128/256gb',
		iphone12_processor: 'Processor: A14 Bionic',
		iphone13_memory: 'Storage: 128/256/512gb',
		iphone13_processor: 'Processor: A15 Bionic',
		iphone14_memory: 'Storage: 128/256/512gb',
		iphone14_processor: 'Processor: A15 Bionic',
		s21_memory: 'Storage: 128/256gb',
		s23_memory: 'Storage: 128/256gb',
		s25_memory: 'Storage: 128/256/512gb',

		modal_memory_label: '💾 Storage',
		modal_processor_label: '⚙️ Processor',

		error_firstname_empty: 'Name cannot be empty!',
		error_firstname_short: 'Name must be at least 2 letters!',
		error_lastname_empty: 'Surname cannot be empty!',
		error_lastname_short: 'Surname must be at least 2 letters!',
		error_email_empty: 'Email cannot be empty!',
		error_email_invalid: 'Invalid email format!',
		error_password_empty: 'Password cannot be empty!',
		error_password_short: 'Password must be at least 6 characters!',

		error_name_short: 'Name must be at least 2 letters!',
		error_message_short: 'Message must be at least 10 characters!',

		toast_data_saved: '✅ Data saved,',
		toast_welcome_back: '👋 Welcome,',
	},
}

// Tilni qo'llash
function applyLanguage(lang) {
	const t = translations[lang]
	if (!t) return

	// data-i18n attributi bo'lgan barcha elementlarni o'zgartir
	document.querySelectorAll('[data-i18n]').forEach(el => {
		const key = el.getAttribute('data-i18n')
		if (t[key]) el.textContent = t[key]
	})

	// Placeholder lar
	document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
		const key = el.getAttribute('data-i18n-placeholder')
		if (t[key]) el.placeholder = t[key]
	})

	// Aktiv til tugmasini belgilash
	document.querySelectorAll('.lang__btn').forEach(btn => {
		btn.classList.toggle('active', btn.dataset.lang === lang)
	})

	// LocalStorage ga saqlash
	localStorage.setItem('lang', lang)
}

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', () => {
	const savedLang = localStorage.getItem('lang') || 'uz'
	applyLanguage(savedLang)

	// Til tugmalari
	document.querySelectorAll('.lang__btn').forEach(btn => {
		btn.addEventListener('click', () => {
			applyLanguage(btn.dataset.lang)
		})
	})
})

function applyLanguage(lang) {
	const t_local = translations[lang]
	if (!t_local) return

	document.querySelectorAll('[data-i18n]').forEach(el => {
		const key = el.getAttribute('data-i18n')
		if (t_local[key]) el.textContent = t_local[key]
	})

	document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
		const key = el.getAttribute('data-i18n-placeholder')
		if (t_local[key]) el.placeholder = t_local[key]
	})

	document.querySelectorAll('.lang__btn').forEach(btn => {
		btn.classList.toggle('active', btn.dataset.lang === lang)
	})

	localStorage.setItem('lang', lang)

	// ← QO'SHILDI: til o'zgarganda zakazlar ro'yxatini qayta render qil
	if (typeof renderOrders === 'function') renderOrders()

	// ← QO'SHILDI: modal ochiq bo'lsa, matnlarini yangilash
	if (typeof currentPhone !== 'undefined' && currentPhone) {
		const memEl = document.getElementById('modalMemory')
		const procEl = document.getElementById('modalProcessor')
		if (memEl)
			memEl.textContent = t('modal_memory_label') + ': ' + currentPhone.memory
		if (procEl)
			procEl.textContent =
				t('modal_processor_label') + ': ' + currentPhone.processor
	}
}
