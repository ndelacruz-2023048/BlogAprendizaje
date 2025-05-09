import React from 'react'
import styled from 'styled-components'

export const UserComment = () => {
  return (
    <Container>
        <div className='detailcomment'>
            <img className='detailcomment_img' src="https://res.cloudinary.com/dtmwybty7/image/upload/v1746818461/1_V4iaGbN6rNaBa998EninKQ_iopjpr.png" alt="" />
            <div className='profile'>
                <span className='profile_name'>Francout</span>
                <span className='profile_date'>March 6, 2025</span>
            </div>
        </div>
        <div className='comment'>
            <p className='comment_title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, doloribus asperiores minima, placeat distinctio dolorum nostrum consequuntur atque fugiat molestias consectetur rem nobis ullam odit ratione aperiam ut excepturi! Id!</p>
        </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    .detailcomment{
        display: flex;
        align-items: center;
        gap: 8px;
        &_img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        .profile{
            display: flex;
            flex-direction: column;
            gap: 3px;
            &_name{
                font-weight: 400;
                color: #000;
                font-size: 14px;
            }
            &_date{
                font-weight: 400;
                color: #969696;
                font-size: 12px;
            }
        }
    }
    .comment{
        &_title{
            font-size: 13px;
            font-weight: 300;
        }
    }
`