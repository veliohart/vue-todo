import _ from 'lodash'

export const selectTodos = (todos, state = null) => {
  return _.map(todos, (todo, key) => {
    return {
      date: key,
      todos: _.filter(todo, (value, key) => {
        value.key = key
        if (state === null) {
          return value
        }

        return value.done === state ? value : false
      }).sort((a, b) => {
        return a.done === true ? 1 : 0
      })
    }
  }).sort((a, b) => {
    return new Date(a.date) < new Date(b.date) ? 1 : 0
  }).filter(item => item.todos.length > 0)
}
