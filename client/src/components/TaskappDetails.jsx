import React, { useState } from 'react'
import styled from 'styled-components'
import { RiEdit2Fill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { deleteTaskAsync, toggleCompleteAsync } from '../redux/taskSlice';
import UpdateForm from './UpdateForm';

const TaskappDetails = ({ id, text, completed }) => {
const dispatch = useDispatch();

const handleCompleteClick = () => {
    dispatch(toggleCompleteAsync({ id, completed: !completed, }));
  };

// const deleteTask = async id => {
//   const data = await fetch("http://localhost:5000/tasks/" + id)
//   .then((res) => res.json());
// }

const handleDelete = () => {
    dispatch(deleteTaskAsync({ id: id }));
};

const [showEditForm, setShowEditForm] = useState(false);

  return (
    <Container>
        <div className="down__section">
            <div className="down__section_div">
                <span><input type='checkbox' checked={completed} onChange={handleCompleteClick}/>{text}</span>
                <div className="tasks__icons">
                    <div className="tasks__edit">
                        <RiEdit2Fill className='tasks__edit_icon' onClick={() => setShowEditForm(!showEditForm)}/>
                    </div>
                    <div className="tasks__delete" onClick={handleDelete}>
                        <MdDelete className="tasks__delete_icon"/>
                    </div>
                </div>
            </div>
        </div>
        
        { showEditForm && <UpdateForm closeForm={() => setShowEditForm(!showEditForm)} id={id} text={text}/> }
    </Container>
  )
}

export default TaskappDetails

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .down__section_div{
          display: flex;
          span{
            flex: 0.8;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            color: #44f1a6;
          input{
            margin-right: 1rem;
          }
        }
        }
`