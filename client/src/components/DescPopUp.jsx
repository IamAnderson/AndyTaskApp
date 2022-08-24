import React, { useState } from 'react'
import { BiTask } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TaskApp from '../pages/TaskApp'
import { useDispatch } from "react-redux"

const DescPopUp = ({ closeForm }) => {
    const [click, setClick] = useState(false);
    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <Container>
            <form onSubmit={onSubmit}>
                <div className="task__icon">
                    <BiTask style={{backgroundColor: "#fff", fontSize: "2rem"}}/>
                </div>
                <div className="close__form" onClick={closeForm}>
                    X
                </div>
                <div className="task__desc">
                    Add a Task
                </div>
                <div className="task__input">
                    <input type="text" placeholder='Description' value={value} onChange={(e) => setValue(e.target.value)}/>
                </div>
                <div className="task__btn_div">
                    <button className='add__task_btn' onClick={() => setClick(!click)}>
                        Add
                    </button>
                </div>
            </form>
        </Container>
        { click && <TaskApp /> }x
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
        position: relative;

        .task__icon{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            background: #fff;

            margin-bottom: 1rem;
        }

        .close__form{
            color: #000;
            background-color: #fff;
            font-size: 1.5rem;
            font-weight: 600;
            position: absolute;
            top: 13%;
            right: 10%;
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