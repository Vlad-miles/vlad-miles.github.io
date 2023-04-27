# Lifetour

## Версии

### — 1.0.0

- Добавлен менеджер пакетов npm, инициализирован node-проект
- Автоматизированы процессы с помощью gulp
- CSS разбит на SCSS-файлы, работа перенесена в styles.scss
- Исправлен главный слайдер
- JS разбит на 2 главные модуля - main.js для всех скриптов и sliders.js для инициализации слайдеров

---

## Установка / развёртка

Чтобы развернуть проект локально, необходимо в корне выполнить команду через терминал:

```
npm install
```

Либо, её сокращённую версию:

```
npm i
```

После выполнения установятся необходимые модули, которые хранятся в папке **node_modules**.

## Запуск отслеживания состояний / разработки

Для запуска вотчеров необходимо выполнить команду:

```
npm run dev
```

Команда запустит необходимые модули, которые будут автоматически отслеживать изменения в **.scss**-файлах и **обновлять** браузер при каждом изменении.

# Не удалять:

```
├──sittt
    ├── .babelrc - необходим для правильной работы gulp
    ├── .gitattributes - необходим для правильной работы git
    ├── .gitignore - содержит файлы и папки,
		которые будут игнорироваться при загрузке в GutHub
    ├── gulpfile.js - файл сборщика gulp, содержит в себе
		модули и сценарии автоматизации
    ├── jsconfig.json - конфиг JS для проекта
    ├── package.json - файл для node.js с перечнем
		модулей разработки
    ├── README.md - ReadMe для главной страницы репозитория
```
