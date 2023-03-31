import React from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Card ({ cardTitle, id, onDelete, isTaskComplete, onComplete }) {

  return (
    <div className="flex flex-col shadow-lg px-4 py-3 rounded bg-white">
      <div className="flex flex-col text-center 
        font-bold tracking-wide pb-2">
          <div className='flex flex-row justify-between'>
            <div className="flex flex-col text-center">{cardTitle}</div>
              { isTaskComplete ? 
                <div className="flex flex-row items-center text-xs">
                  <div className="text-green-400 mr-1">COMPLETE</div>
                    <CheckCircleIcon className="text-green-500" onClick={() => onComplete()}/>
                  </div>
                  : null
              }
          </div>
      </div>
      <div className="flex flex-row text-sm w-full justify-between">
        { !isTaskComplete ?
          <>
            <div className='flex flex-col'>
              <div className='flex flex-row'>
                  <DeleteIcon className="text-gray-500 cursor-pointer hover:text-red-500" 
                    onClick={(id) => onDelete(id)}/>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mx-1 cursor-pointer letter-spacing-md rounded bg-blue-500 text-white
                px-2 py-1 hover:bg-blue-600"
                onClick={() => onComplete(id)}>
                  MARK COMPLETE
              </div>
            </div>
          </>
          : null
        }   
      </div>
    </div>
  )
}

export default Card;