import React, { useState } from 'react'
import { BiTask } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TaskApp from '../pages/TaskApp'

const DescPopUp = () => {
    const [click, setClick] = useState(false);
    return (
        <>
        <Container>
            <div>
            <form>
                <div className="task__icon">
                    <BiTask style={{backgroundColor: "#fff", fontSize: "2rem"}}/>
                </div>
                <div className="task__desc">
                    Add a Task
                </div>
                <div className="task__input">
                    <input type="text" placeholder='Description' />
                </div>
                <div className="task__btn_div">
                    <button className='add__task_btn' onClick={() => setClick(!click)}>
                        Add
                    </button>
                </div>
            </form>
            </div>
        </Container>
        { click && <TaskApp /> }
    </>
  )
}

export default DescPopUp

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 12;
    background: #cac9c99d;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    

    form{
        display: flex;
        flex-direction: column;
        border: 1px solid #fff;
        background: #fff;
        
        padding: 2rem;

        .task__icon{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            background: #fff;

            margin-bottom: 1rem;
        }

        .task__desc{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.7rem;
            color: #000;
            background: #fff;

            margin-bottom: 1rem;
        }

        .task__input{
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;

            margin-bottom: 1rem;

            input{
                color: #000;
                background-color: #fff;
                font-size: 18px;

                padding: 1rem;
                width: 15rem;
            }
        }

        .task__btn_div{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            background: #fff;
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;

            color: #fff;
            font-size: 18px;
            padding: 0.5rem 1rem;
            width: 17.4rem;
            background: #000;
            cursor: pointer;
            transition: 0.1s all ease;
        }
    }
`