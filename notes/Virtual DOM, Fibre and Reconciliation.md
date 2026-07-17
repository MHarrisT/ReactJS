### Virtual DOM
- createRoot method behind the scenes creates a DOM structure
- It compares itself with main DOM and updates the UI according to the changes made

### React Fibre
- Core algorithm of virtual DOM
- Updates virtual DOM
- Updates only changes made in tree
- Primary goal of fibre is to:
1. pause work and come back to it later
2. assign priority to different types of work
3. reuse previously completed work
4. abort work if it's no longer needed

### Reconciliation
- The algorithm React uses to differentiate one tree with another to determine which parts need to be changed
- Reconciliation is the algorithm behind virtual DOM

### Update
- A change in data used to render a React app.
- Usually the result of 'setState'
- Eventually results in a re-render

