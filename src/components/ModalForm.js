import { useDispatch } from "react-redux";
import { useForm } from "../hooks";
import { v4 as uuidv4 } from 'uuid';
import { addTask, updateTask } from "../redux/tasksSlice";

export function ModalForm({ setIsOpen, task = null }) {

  const { title, comments, handleInputChange } = useForm({
    title: task ? task.title : "",
    comments:  task ? task.comments : ""
  })

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if(title.length < 1 || comments.length < 1) return; // fields are mandatory
    if(!task){ // new task
      let id = uuidv4()
      dispatch(addTask({id, title, comments, completed: false}))
    }
    else{ // existing task
      const {id} = task
      dispatch(updateTask({id, title, comments}))
    }
    setIsOpen(false)
  }

  return (
    <>
      <div className="dark-bg" /* onClick={() => setIsOpen(false)} */ ></div>
      <div className="centered">
        <div className="modal">
          <div className="modal-header">
            <h5 className="heading">Add/Edit task</h5>
          </div>
          <div className="close-btn" onClick={() => setIsOpen(false)}>
            X
          </div>
          <div className="modal-content">
            <form className="modal-form">
              <p>
                <label htmlFor="input__text">Title</label>
                <input id="input__text" type="text" name="title" value={title}
                  onChange={handleInputChange} placeholder="Text Input" />
              </p>
              <p>
                <label htmlFor="textarea">Comments</label>
                <textarea id="textarea" name="comments" value={comments}
                  onChange={handleInputChange} rows="8" cols="48" placeholder="Enter your message here"></textarea>
              </p>
            </form>
          </div>
          <div className="modal-actions">
            <div className="actions-container">
              <button className="primary-btn" onClick={handleSubmit}>
                Add/Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};