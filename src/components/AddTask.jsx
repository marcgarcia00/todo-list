import React, {useState} from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddTask ({onSubmit}) {
  const [cardTitle, setCardTitle] = useState("");

  const submitClicked = () => {
    let title = cardTitle;
    title.trim();
    if(title !== "") {
      onSubmit(cardTitle.toUpperCase())
      setCardTitle("");
    }
  }

  return(
    <div className="flex flex-row w-full items-center">
      <div className='flex flex-col mx-5'>
        <input type="text"placeholder="'Fold Laundry' <- Probably"
          className="w-60 text-center border border-gray-200 px-2"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}/>
      </div>
      <div className="flex flex-col">
        <div className="cursor-pointer py-1 rounded hover:text-gray-600"
        onClick={() => submitClicked()}>
          <AddCircleIcon/>
        </div>
      </div>
    </div>
  );
}
export default AddTask;