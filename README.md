# Instanciator
Lightweight plugin written in javascript vanilla that allows you to initialize javascript plugins through html

## Usage

Initialize JS
```javascript
new Instanciator('plugin', (el, options) => {
  new Plugin(el, options)
})

```
Html
```html
<div id="main" data-plugin='{"option1": "value1", "option2": "value2"}'></div>
```

Access to js instance of html element
```javascript
const htmlElement = document.getElementById('main')
const instance = Instanciator.getInstance(htmlElement)
```
