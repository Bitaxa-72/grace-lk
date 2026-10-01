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
  vega: ['Вега', 'Раскладной механизм. Доступные размеры, материалы и текстуры.'],
  phantom: ['Фантом', 'Раскладной и нераскладной варианты механизма.'],
  fora: ['Фора', 'Раскладной и нераскладной варианты. Доступная форма — круг.'],
  supports: ['Опоры', 'Фиксированный каталог опор, цен и дополнительных комплектующих.']
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
  const [title, text] = previews[button.dataset.mechanism]
  mechanismButtons.forEach((item) => item.classList.toggle('catalog-card--active', item === button))
  preview.innerHTML = `<strong>${title}</strong><p>${text}</p>`
}))

