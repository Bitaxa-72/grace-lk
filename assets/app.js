const screenButtons = document.querySelectorAll('[data-screen]')
const screenPanels = document.querySelectorAll('[data-screen-panel]')
const priceTypeButtons = document.querySelectorAll('[data-price-type]')
const priceDetail = document.querySelector('[data-price-detail]')
const priceListScreen = document.querySelector('[data-screen-panel="prices"]')
const priceTabs = document.querySelectorAll('[data-price-screen]')
const pricePanels = document.querySelectorAll('[data-price-panel]')
const mechanismButtons = document.querySelectorAll('[data-mechanism]')
const preview = document.querySelector('[data-catalog-preview]')

const previews = {
  vega: ['Вега', 'Раскладной', '1200 × 600 × 400 мм', 'Керамика ПРО глянец', 'Г-10 глянцевая'],
  phantom: ['Фантом', 'Раскладной · Нераскладной', '1400 × 800 мм', 'Керамогранит классик про', 'Мрамор белый'],
  fora: ['Фора', 'Раскладной · Нераскладной', '1100 × 700 мм', 'Керамика ПРО глянец', 'Г-10 глянцевая'],
  supports: ['Опоры', '40 фиксированных опор', 'Опора ЗИО', 'Кант в опору · Хром-пластины', 'Лепёшка · Молдинг']
}

const showScreen = (screen) => {
  screenButtons.forEach((button) => button.classList.toggle('trade__tab--active', button.dataset.screen === screen))
  screenPanels.forEach((panel) => panel.classList.toggle('screen--active', panel.dataset.screenPanel === screen))
  priceDetail.hidden = true
}

screenButtons.forEach((button) => button.addEventListener('click', () => showScreen(button.dataset.screen)))

priceTypeButtons.forEach((button) => button.addEventListener('click', () => {
  priceTypeButtons.forEach((item) => item.classList.toggle('switcher__button--active', item === button))
}))

document.querySelectorAll('[data-action="show-price-list"]').forEach((button) => button.addEventListener('click', () => {
  priceListScreen.classList.add('screen--active')
  priceDetail.hidden = !priceDetail.hidden
}))

priceTabs.forEach((button) => button.addEventListener('click', () => {
  priceTabs.forEach((item) => item.classList.toggle('price-detail__tab--active', item === button))
  pricePanels.forEach((panel) => panel.classList.toggle('price-screen--active', panel.dataset.pricePanel === button.dataset.priceScreen))
}))

mechanismButtons.forEach((button) => button.addEventListener('click', () => {
  const [title, subtype, size, material, texture] = previews[button.dataset.mechanism]
  mechanismButtons.forEach((item) => item.classList.toggle('catalog-card--active', item === button))
  preview.innerHTML = `<h4 class="catalog-preview__title">${title}</h4><table class="catalog-preview__table"><thead><tr><th>Исполнение</th><th>Размер</th><th>Материал</th><th>Текстура / допы</th></tr></thead><tbody><tr><td class="catalog-preview__tag">${subtype}</td><td>${size}</td><td>${material}</td><td>${texture}</td></tr></tbody></table>`
}))
