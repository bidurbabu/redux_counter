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
    value={store1.getState().value}
    onIncrement={() => store1.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store1.dispatch({ type: 'DECREMENT' })}
    onIncrementValueUpdate={(textValue) => store1.dispatch({type: 'UPDATECOUNTER', text: textValue})}
  />
   <Counter
    value={store2.getState().value}
    onIncrement={() => store2.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store2.dispatch({ type: 'DECREMENT' })}
    onIncrementValueUpdate={(textValue) => store2.dispatch({type: 'UPDATECOUNTER', text: textValue})}
  />
  </div>,
  rootEl
)

render()
store1.subscribe(render)
store2.subscribe(render)