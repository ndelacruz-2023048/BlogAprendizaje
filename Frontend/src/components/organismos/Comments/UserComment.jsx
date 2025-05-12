import React from 'react'
import styled from 'styled-components'
import dayjs from "dayjs"
export const UserComment = ({data}) => {
    console.log(data);
    const date = dayjs(data?.createdAt).format("MMM DD, YYYY")
    
  return (
    <Container>
        <div className='detailcomment'>
            <img className='detailcomment_img' src="https://res.cloudinary.com/dtmwybty7/image/upload/v1747017173/avatar_profile_sg4t3n.png" alt="" />
            <div className='profile'>
                <span className='profile_name'>{data?.user?.name}</span>
                <span className='profile_date'>{date}</span>
            </div>
        </div>
        <div className='comment'>
            <p className='comment_title'>{data?.comment}</p>
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