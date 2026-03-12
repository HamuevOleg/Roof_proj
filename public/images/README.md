# Папка с изображениями

## Структура

```
images/
  hero/
    hero-bg.jpg          ← Фон главной страницы (рекомендуемый размер: 1920×1080, JPG, качество 85%)
    hero-bg-services.jpg ← Фон страницы "Услуги"
    hero-bg-portfolio.jpg
    hero-bg-about.jpg
    hero-bg-contacts.jpg

  gallery/
    01.jpg … 12.jpg      ← Фотогалерея (рекомендуемый размер: 800×600 или 800×1000, JPG, качество 80%)

  portfolio/
    project-01.jpg       ← Проекты для раздела "Наши работы"
    project-02.jpg
    … project-09.jpg

  services/
    membrane.jpg         ← ПВХ/ТПО мембрана
    bitumen.jpg          ← Еврорубероид
    repair.jpg           ← Ремонт кровли
    insulation.jpg       ← Теплоизоляция
    pitched.jpg          ← Скатная кровля
    design.jpg           ← Проектирование/3D
```

## Рекомендации по подготовке фото

- **Формат**: JPG для фотографий, PNG только если нужна прозрачность
- **Ширина**: не более 1920px для hero, 800–1200px для остальных
- **Качество**: 80–85% при сжатии (баланс качество/вес)
- **Вес**: hero < 300 КБ, gallery < 150 КБ каждая

## Как заменить Unsplash на свои фото

В файле `src/data/i18n.js` замените ссылки:

```js
// было:
image: "https://images.unsplash.com/photo-1541888086225-...?auto=format&fit=crop&q=80&w=800"

// стало:
image: "/images/services/membrane.jpg"
```

В `src/pages/[lang]/index.astro` для hero:
```html
<!-- было: -->
src="https://images.unsplash.com/photo-1541888086225-...?w=1920"

<!-- стало: -->
src="/images/hero/hero-bg.jpg"
```
