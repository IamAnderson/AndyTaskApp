import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Copyright from '../subComponents/Copyright'

const Profile = () => {
  return (
    <>
        <Navbar />
        <Container>
          <form>
            <div className="profile__header">
              <div className="profile__title">
                Profile Page
              </div>
              <div className="profile__icon">
                <div>A</div>
              </div>
            </div>

            <div className="profile__password_update">
              <label>Name</label>
              <input type="text" />
              <input type='password' placeholder='Password' required/>
              <input type='password' placeholder='New Password' required/>
            </div>
            <div className="password__submit_btn">
              <button>
                SUBMIT
              </button>
            </div>
            <div className="delete__btn">
              <button>
                DELETE ACCOUNT
              </button>
            </div>
          </form>
        </Container>
    </>
  )
}

export default Profile

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 3rem 0 4rem 0;
    color: #44f1a6;

    form{
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      border: 1px solid #44f1a6;
      padding: 2rem;

      .profile__header{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3rem;

        .profile__title{
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

          .profile__icon{
            display: flex;
            justify-content: center;
            align-items: center;

          div{
            padding: 1.5rem 3rem;
            border-radius: 20px;
            border: 1px solid #44f1a6;
            font-size: 8rem;
          }
        }
      } 

      .profile__password_update{
        display: flex;
        flex-direction: column;

        label{
          font-size: 14px;
        }

        input{
          color: #44f1a6;
          font-size: 15px;
          width: 19rem;

          padding: 0.75rem 0;
          margin-bottom: 1rem;
          border: none;
          border-bottom: 1px solid #44f1a6;
        }

        input:nth-child(4){
          margin-bottom: 2rem;
        }
      }

      .password__submit_btn{
        display: flex;
        justify-content: center;
        align-items: center;

        button{
          color: #000;
          font-size: 18px;
          padding: 0.65rem 1.25rem;
          background-color: #44f1a6;
          opacity: 0.8;
          width: 19.5rem;

          margin-bottom: 1rem;
          transition: 0.1s all ease;
          cursor: pointer;

          &:hover{
            opacity: 1;
          }

          button:disabled{
            opacity: 0.4;
            color: #000;
            background-color: #44f1a6;
          }
        }
      }

      .delete__btn{
        display: flex;
        justify-content: center;
        align-items: center;

        button{
          font-size: 18px;
          color: #fff;
          width: 19.5rem;
          opacity: 0.8;
          padding: 0.65rem 1.25rem;
          background-color: #ff0000;
          transition: 0.1s all ease;
          cursor: pointer;

          &:hover{
            opacity: 1;
          }
        }
      }
    }
`