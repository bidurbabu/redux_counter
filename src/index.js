import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store1 = createStore(counter)
const store2 = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <div>
  <Counter
    value={store1.getState()}
    onIncrement={() => store1.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store1.dispatch({ type: 'DECREMENT' })}
  />
   <Counter
    value={store2.getState()}
    onIncrement={() => store2.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store2.dispatch({ type: 'DECREMENT' })}
  />
  </div>,
  rootEl
)

render()
store1.subscribe(render)
store2.subscribe(render)