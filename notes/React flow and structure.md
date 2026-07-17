## Basic React
- React creates its own DOM which is also called virtual DOM
- It compares it with main DOM
```
const root = ReactDOM.createRoot(document.getElementById('root'));
```

Element with id root is searched from index.js 
Reference stored in root variable, then it is rendered
(insert code block)
```
root.render(
	<React.StrictMode>
	<App />
	</React.StrictMode>
)
```

###### Question: What if React.StrictMode is removed?
###### Anser: App still works, there are no errors because React.StrictMode is for development

- App function returns html and then it is rendered to the web
- When we open inspect element, additional scripts are loaded.
- This is done by index.html script tag

## React Vite
- In vite react, importing from .js files does not work so we have to import .jsx files.
- We can not return more than one elements in react vite, so we use <> </>  tags to make sure to return more than one elements
- Also whenever making functions, make sure to start the function name with capital letters

## Basic React
- In basic react, we will have to capitalize function name
- It also allows to import .js files

***Best practice:*** Write the file name starting with capital letter





