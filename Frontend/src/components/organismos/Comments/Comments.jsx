
import React from 'react'
import styled from 'styled-components'
import { UserComment } from './userComment'

export const Comments = () => {
  return (
    <Container>
        <div className='containercenter'>
            <section className='titlesection'>
                <h2 className='titlesection_title'>Comments</h2>
                <span className='titlesection_number'>120</span>
            </section>
            <section className='newcomment'>
                <div className='usernewcomment'>
                    <img className='usernewcomment_img' src="https://res.cloudinary.com/dtmwybty7/image/upload/v1746819056/1_H4hkzEz8_umyeV4EXhnt0w_g2lwdv.png" alt="" />
                    <span className='usernewcomment_name'>Faurok O.</span>
                </div>
                <div className='inputnewcomment'>
                    <input type="text" className='inputnewcomment_input' placeholder='Share your throughts'/>
                </div>
            </section>
            <section className='commentslist'>
                <UserComment/>
                <UserComment/>
                <UserComment/>
                <UserComment/>
            </section>
        </div>
    </Container>
  )
}

const Container = styled.div`
    background-color: white;
    border-radius: 20px;
    height: 500px;
    display: flex;
    align-items: center;
    .containercenter{
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 95%;
        height: 95%;
        gap: 25px;
    }
    .titlesection{
        display: flex;
        gap: 10px;
        &_title{
            font-weight: 600;
        }
        &_number{
            display: flex;
            align-items: center;
            background-color: #e7e7e7;
            color: #000;
            font-weight: 500;
            font-size: 15px;
            padding: 4px 10px;
            border-radius: 20px;
        }
    }
    .newcomment{
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 20px;
        .usernewcomment{
            display: flex;
            align-items: center;
            gap: 10px;
            &_img{
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
        }

        .inputnewcomment{
            display: flex;
            width: 100%;
            &_input{
                width: 100%;
                border: none;
                background-color: #ececec;
                padding: 12px 10px;
                border-radius: 10px;
            }
        }
    }
    .commentslist{
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
`