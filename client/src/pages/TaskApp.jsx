import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Copyright from '../subComponents/Copyright'
import AddBtn from '../components/AddBtn'
import DescPopUp from '../components/DescPopUp'
import TaskappDetails from '../components/TaskappDetails'
import { useDispatch, useSelector } from 'react-redux'
import { getTasksAsync } from '../redux/taskSlice'

const TaskApp = () => {
const [showAddForm, setShowAddForm] = useState(false);
const tasks = useSelector((state) => state.tasks);
const dispatch = useDispatch();

useEffect(() => {   
  dispatch(getTasksAsync());
}, [dispatch])

  return (
    <>
        <Navbar />
        {/* <AddBtn /> */}
        <Container>
          <div className='add__btn' onClick={() => setShowAddForm(!showAddForm)}>
              Add
          </div>
          <div className="tasks__div">
            <div className="top__section">
              <div className="tasks__title">
                Tasks
              </div> 
              <div className="selector__search_section">
                <div className="selector__section">
                  <label>Sort by</label>
                  <select>
                    <option>All</option>
                    <option>Completed</option>
                    <option>Incompleted</option>
                  </select> 
                </div>
                <div className="search__section">
                  <input type="search" placeholder='search' />
                </div>
              </div> 
            </div>
            <div className="down__section">
              <>
              { tasks.map((task) => {
                return(
                  <>
                    <TaskappDetails id={task._id} text={task.text} completed={task.completed}/>
                  </>
                )
              }) }
              </>
            </div>
          </div>
        </Container>
        <Copyright />
        {showAddForm && <DescPopUp closeForm={() => setShowAddForm(!showAddForm)}/>}
    </>
  )
}

export default TaskApp

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #44f1a6;
    margin: 3rem 0 4rem 0;

    .add__btn{
        color: #000;
        opacity: 0.9;
        padding: 0.5rem 1rem;
        margin-bottom: 2rem;
        background-color: #44f1a6;
        cursor: pointer;
        transition: 0.1s all ease;
        text-decoration: none;

        &:hover{
        opacity: 1;
        }

        margin: 3rem 0;
        text-decoration: none;
    }

    .tasks__div{
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #44f1a6;
      padding: 2rem;

      .top__section{
        margin-bottom: 2rem;

        .tasks__title{
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .selector__search_section{
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 23rem;

          @media screen and (max-width: 500px) {
            width: 18rem;
          }
          .selector__section{
            flex: 0.5;

            display: flex;
            flex-direction: column;

            label{
              font-size: 14px;
              margin-bottom: 0.5rem;
            }

            select{
              border: none;
              color: #44f1a6;
              width: 10rem;
              border-bottom: 1px solid #44f1a6;

              @media screen and (max-width: 500px) {
                width: 7rem;
              }

              @media screen and (max-width: 380px) {
                width: 5rem;
              }
            }

            option{

            }
          }

        .search__section{
          flex: 0.5;

          input{
            border: none;
            color: #44f1a6;
            padding: 0.75rem 0;
            border-bottom: 1px solid #44f1a6;

            /* &:enabled{
              border: none;
            } */
          }
        }
      }
      }

      .down__section{

      }

      .tasks__icons{
          flex: 0.2;
          display: flex;
          justify-content: flex-start;
          width: 100%;
          margin-left: 2rem;

          .tasks__edit_icon{
            font-size: 1.5rem;
            padding: 0.5rem;
            cursor: pointer;

            &:hover{
              border-radius: 50%;
              color: #000;
              background-color: #fff;
            }
          }

          .tasks__delete_icon{
            margin-left: 1rem;
            padding: 0.5rem;
            font-size: 1.5rem;
            cursor: pointer;

            &:hover{
              border-radius: 50%;
              color: #000;
              background-color: #fff;
            }
          }
        }
    }
`