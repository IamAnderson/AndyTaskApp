import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Copyright from '../subComponents/Copyright'
import AddBtn from '../components/AddBtn'
import { RiEdit2Fill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'

const TaskApp = () => {
  return (
    <>
        <Navbar />
        {/* <AddBtn /> */}
        <Container>
          <div className='add__btn'>
              Add
          </div>
          <div className="tasks__div">
            <div className="left__section">
              <div className="tasks__title">
                Tasks
              </div> 
              <label>Sort by</label>
              <select>
                <option>All</option>
                <option>Completed</option>
                <option>Incompleted</option>
              </select> 
              <span><input type='checkbox' />New Task</span>
            </div> 

            <div className="right__section">
              <div className='div'/>
              <input type="search" name="" placeholder='search' />
              <div className="tasks__icons">
                <div className="tasks__edit">
                  <RiEdit2Fill className='tasks__edit_icon'/>
                </div>
                <div className="tasks__delete">
                  <MdDelete className="tasks__delete_icon"/>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Copyright />
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
      align-items: center;
      border: 1px solid #44f1a6;
      padding: 2rem;

      .left__section{
        flex: 0.5;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 2rem;

        .tasks__title{
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        label{
          font-size: 14px;
          margin-bottom: 0.5rem;
        }

        select{
          border: none;
          color: #44f1a6;
          margin-bottom: 1rem ;
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

        span{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: #44f1a6;

          input{
            margin-right: 1rem;
          }
        }
      }

      .right__section{
        flex: 0.5;

        display: flex;
        flex-direction: column;

        .div{
          margin-bottom: 5rem;
        }

        input{
          border: none;
          color: #44f1a6;
          padding: 0.75rem 0;
          width: 13rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid #44f1a6;

          @media screen and (max-width: 500px) {
            width: 10rem;
          }

          @media screen and (max-width: 380px) {
            width: 8rem;
          }
        }

        .tasks__icons{
          display: flex;
          justify-content: flex-end;

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
    }
`