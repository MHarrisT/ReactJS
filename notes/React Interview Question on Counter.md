What would be the output of this code? Will counter increment by 4
```
  let [counter, setCounter] = useState(1)

  const addValue = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
	setCounter(counter + 1)
  }
```
- No, the counter does not increment by 4, it is incremented once only
- useState sends updates in batches, the whole work is repeated once
- A batch is created and counter is incremented once

We will use callback function
```
  let [counter, setCounter] = useState(1)

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
	setCounter((prevCounter) => prevCounter + 1)
  }
```
Now counter is incremented by 4