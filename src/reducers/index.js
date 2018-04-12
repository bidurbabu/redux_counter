export default (state = {value: 0,incrementValue: 1}, action) => {

    switch (action.type) {
      case 'INCREMENT':
        state.value = state.value + state.incrementValue;
        return state;
      case 'DECREMENT':
        state.value = state.value - state.incrementValue;
        return state;
      case 'UPDATECOUNTER':
        state.incrementValue = parseInt(action.text, 10);
        return state;
      default:
      return state
    }
  }