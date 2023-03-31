import { cardConstants } from './constants';
import dotPropImmutable from 'dot-prop-immutable';

const initState = {
  cards: [],
  displayCards: []
}

const TaskReducer = (state = initState, action) => {
  switch(action.type) {
    case cardConstants.ADD_NEW_TASK:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      }
    case cardConstants.DELETE_TASK:
      let updatedCards = state.cards.filter(elem => elem.id !== action.payload)
      return {
        ...state,
        cards: updatedCards
      }
    case cardConstants.MARK_COMPLETE:
      let targetIndex = state.cards.findIndex(task => task.id === action.payload)
      state = dotPropImmutable.set(state, `cards.${targetIndex}.isComplete`, true);
      return {
        ...state
      }
    case cardConstants.SHOW_ALL_TASKS:
      return {
        ...state,
        displayCards: state.cards
      }
    case cardConstants.SHOW_ACTIVE_TASKS:
      const filteredTasks = state.cards.filter(elem => elem.isComplete !== true)
      return {
        ...state,
        displayCards: filteredTasks
      }
    case cardConstants.SHOW_COMPLETE_TASKS:
        const completeTasks = state.cards.filter(elem => elem.isComplete !== false)
        return {
          ...state,
          displayCards: completeTasks
        }
    case cardConstants.CLEAR_COMPLETED_TASKS:
      let clearCompleteList = state.cards.filter(elem => elem.isComplete !== true)
      return {
        ...state,
        cards: clearCompleteList
      }
    default:
      return state;
  }
}
export default TaskReducer;