Create index.html and custom_react.js
### In custom react.js, using Method 1:
```
function customRender(reactElement, container){
	const domElement = document.createElement(reactElement.type)
	domElement.innerHTML = reactElement.children
	domElement.setAttribute('href',reactElement.props.href)
	domElement.setAttribute('target',reactElement.props.target)
	container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'Click here'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)
```

### Method 2 (more optimized)
```
function customRender(reactElement, container){

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        if (prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'Click here'
}

const mainContainer = document.querySelector('#root') 
customRender(reactElement, mainContainer)
```
Note we can not implement the same props and syntax in .jsx because this syntax is not allowed.
However we can create a function and call it while not using object syntax

We can use {} to access variables in .jsx
Note: we can not write javascript code inside {}
For example:
```
function App() {
  const username = "harris"
  return (
    <>
      <MyFunc></MyFunc>
      <h3>Hello {username}</h3>
    </>
  )
}
```