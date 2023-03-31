import React, { useState, useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Card from './components/card/Card';
import { connect, useSelector } from 'react-redux';
import * as actions from './store/actions';

function App(props) {
  const filterOpts = {
    ALL: "ALL",
    COMPLETE: "COMPLETE",
    ACTIVE: "ACTIVE"
  }

  const allTasks = useSelector(state => state.cardReducer.cards);
  const displayTasks = useSelector(state => state.cardReducer.displayCards)
  const [filter, setFilter] = useState(filterOpts.ALL);

  useEffect(()=> {
    switch(filter) {
      case filterOpts.ALL:
        props.showAllTasks()
        break;
      case filterOpts.ACTIVE:
        props.showActiveTasks();
        break;
      case filterOpts.COMPLETE:
        props.showCompleteTasks();
        break;
    }
  }, [filter, allTasks])
  
  let cardElems = [];

  const stageNewCard = (cardTitle) => {
    let card = { id: Date.now().toString(), title: cardTitle, isComplete: false}
    props.createNewTask(card);
  }

  const deleteCard = (id) => {
    props.deleteTask(id)
  }

  const markTaskComplete = (id) => {
    props.markTaskComplete(id)
  }

  displayTasks.map(card => {
    cardElems.push(
      <div className="d-flex my-1">
        <Card 
        key={card.id} 
        id={card.id} 
        cardTitle={card.title} 
        isTaskComplete={card.isComplete}
        onDelete={() => deleteCard(card.id)}
        onComplete={() => markTaskComplete(card.id)}
        />
      </div>
    )
  });

  return (
    <div className="flex flex-col w-fu1l h-screen items-center pt-3">
      <div className="text-3xl font-bold rounded border-2 p-4">TO-DO LIST</div>
      <div className="text-gray-400">LET ME GET MY LIFE TOGETHER...PLEASE</div>
      <div className="flex flex-col w-full h-full 
        items-center bg-gray-200 mt-3">
        <div className="flex flex-col justify-between w-full text-center border-y-2 
          border-gray-400 bg-white py-2 px-10">
          <div className="flex flex-row justify-between">
            <div className='flex flex-row rounded border p-2 border-grey-500 mx-2'>
              <div className="pr-2">FILTER BY: </div>
              <div className='flex flex-row items-center bg-gray-200 rounded-xl px-2 cursor-pointer mx-1 hover:bg-gray-400'>
                <div className="mr-1" onClick={() => setFilter(filterOpts.ALL)}>ALL</div>
              </div>
              <div className='flex flex-row items-center bg-gray-200 rounded-xl px-2 cursor-pointer mx-1 hover:bg-gray-400'>
                <div className="mr-1" onClick={() => setFilter(filterOpts.ACTIVE)}>ACTIVE</div>
              </div>
              <div className='flex flex-row items-center bg-gray-200 rounded-xl px-2 cursor-pointer mx-1 hover:bg-gray-400'>
                <div className="mr-1" onClick={() => setFilter(filterOpts.COMPLETE)}>COMPLETE</div>
              </div>
            </div>
            <div className='flex flex-row items-center'>
              <div className='bg-orange-400 text-white px-1 rounded-xl cursor-pointer hover:bg-orange-500'
              onClick={() => props.clearCompleted()}>CLEAR ALL COMPLETED</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-3 w-1/3 bg-gray-400 items-center'>
          <div>
            <AddTask onSubmit={(title) => stageNewCard(title)}/>
          </div>
        </div>
        <div className="flex flex-col w-1/3 py-2">
          { cardElems }
        </div>
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    createNewTask: (cardObj) => dispatch(actions.AddNewCard(cardObj)),
    deleteTask: (id) => dispatch(actions.DeleteCard(id)),
    markTaskComplete: (id) => dispatch(actions.MarkComplete(id)),
    showActiveTasks: () => dispatch(actions.ShowActiveTasks()),
    showCompleteTasks: () => dispatch(actions.ShowCompleteTasks()),
    showAllTasks: () => dispatch(actions.ShowAllTasks()),
    clearCompleted: () => dispatch(actions.ClearCompletedTasks())
  }
}

const mapStateToProps = (state) => {
  return { 
    cardReducer: state.cardReducer
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
