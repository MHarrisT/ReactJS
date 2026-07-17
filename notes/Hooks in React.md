### Small Counter Project
We can create button and can add onClick action
Then we create a function for onClick

For example we create a function addValue which increments counter value on every click

```
function App() {
	let counter = 10
	
	const addValue = () => {
		counter = counter + 1
	}
}
```

This function does not update the counter value on the react UI.
However if we look at console using console.log, it updates but not in UI

==The concept of hooks comes in here==
React provides methods called hooks which allows to change state in UI

We will use useState hook here to change the state of the counter value.
We then write the following function:

```
function App() {
  let [counter, setCounter] = useState(1)
  const addValue = () => {
    setCounter(counter + 1)
  }
  // rest of return code...
}
```

useState accepts array
In the array, we declared variable and its setter
useState is a class so we pass default value in its constructor
We then used setter to update the value in UI