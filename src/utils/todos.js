import _ from 'lodash'

export const selectTodos = (todos, state = null) => {
  return _.mapValues(todos, todo => {
    return _.mapValues(todo, value => {
      if (state === null) {
        return value
      }
      let result
      value.done === state ? result = value : false
      return result
    })
  })
}
