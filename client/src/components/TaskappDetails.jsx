import React, { useState } from 'react'
import styled from 'styled-components'
import { RiEdit2Fill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import UpdateForm from './UpdateForm';

const TaskappDetails = () => {
const dispatch = useDispatch();

const handleCompleteClick = () => {

  };

// const deleteTask = async id => {
//   const data = await fetch("http://localhost:5000/tasks/" + id)
//   .then((res) => res.json());
// }

const handleDelete = () => {

};

const [showEditForm, setShowEditForm] = useState(false);

  return (
    <Container>
        <div className="down__section">
            <div className="down__section_div">
                <span><input type='checkbox' onChange={handleCompleteClick}/>Get the Steak at 5pm</span>
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
        
        { showEditForm && <UpdateForm closeForm={() => setShowEditForm(!showEditForm)} /> }
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