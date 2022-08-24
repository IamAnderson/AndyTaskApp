import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux"


const UpdateForm = ({ closeForm }) => {
const [value, setValue] = useState("");
const dispatch = useDispatch();

const handleSubmit =(e)=> {
    e.preventDefault();
}

  return (
    <Container>
        <form onSubmit={handleSubmit}>
            <div className="close__form" onClick={closeForm}>
                x
            </div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <div className="btn__section">
                <button type='submit'>
                    Update
                </button>
            </div>
        </form>
    </Container>
  )
}

export default UpdateForm

const Container = styled.div`
    position: fixed;
    top: 45%;
    right: 70%;
    border: 1px solid #fff;
    form{
        padding: 2rem;
        padding-top: 1.5rem;
        position: relative;

        .close__form{
            color: #fff;
            font-size: 1.25rem;

            text-align: end;
            margin-bottom: 0.5rem;
        }

        input{
            color: #000;
            outline: none;
            padding: 0.5rem 0;
            padding-left: 0.25rem;
            background-color: #fff;

            margin-bottom: 1rem;
        }

        .btn__section{
            
            button{
                border: 1px solid #fff;
                border-top: 1px solid #000;
                outline: none;
                color: #fff;
                padding: 0.75rem 1.25rem;
                cursor: pointer;
                text-decoration: underline;
                transition: 0.15s ease all;

                &:hover{
                    border-top: 1px solid #fff;
                }

                &:active{
                    text-decoration: none;
                }
            }
        }
    }
`