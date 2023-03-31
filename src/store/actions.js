import { cardConstants } from "./constants";

export const AddNewCard = (newCardObj) => ({
  type: cardConstants.ADD_NEW_TASK,
  payload: newCardObj
});

export const DeleteCard = (id) => ({
  type: cardConstants.DELETE_TASK,
  payload: id
});

export const MarkComplete = (id) => ({
  type: cardConstants.MARK_COMPLETE,
  payload: id
});

export const ShowAllTasks = () => ({
  type: cardConstants.SHOW_ALL_TASKS
});

export const ShowActiveTasks = () => ({
  type: cardConstants.SHOW_ACTIVE_TASKS
});

export const ShowCompleteTasks = () => ({
  type: cardConstants.SHOW_COMPLETE_TASKS
});

export const ClearCompletedTasks = () => ({
  type: cardConstants.CLEAR_COMPLETED_TASKS
});