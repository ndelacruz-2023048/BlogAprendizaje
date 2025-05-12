
import React, { useState } from 'react'
import styled from 'styled-components'
import { UserComment } from './UserComment'
import { useCommentStore } from '../../../../stores/CommentStore'
import { UserForm } from '../Forms/UserForm'
import { useUserStore } from '../../../../stores/UserStore'
import { useParams } from "react-router"
import { useQueryClient } from '@tanstack/react-query';
import { scroller } from 'react-scroll'
export const Comments = () => {
    const {id} = useParams()
    const {isFormCommentOpen,setIsFormCommentOpen,createComment,commentsByPostId} = useCommentStore()
    const {responseCreatingUser} = useUserStore()
    const [inputComment,setInputComment] = useState()
    const queryClient = useQueryClient();

    const handleChangeInputComment = (e)=>{
        setInputComment(e.target.value);
    }

    const handleNewCommentClick = ()=>{
        const isUserRegister = JSON.parse(localStorage.getItem("userblog"))
        console.log(isUserRegister);
        if(!isUserRegister){
            setIsFormCommentOpen()
        }
    }

    const handleNewCommentKeyDownEnter = async(e)=>{
        if (e.key === 'Enter') {
            console.log("Se presionó Enter");
            // console.log(e.target.value);
            // console.log(responseCreatingUser?.data?._id);
            // console.log(id);
            
            const newComment = {
                user:responseCreatingUser?.data?._id,
                comment:e.target.value,
                publication:id,
            }
            setInputComment("")
            await createComment(newComment)
            queryClient.invalidateQueries(['commentByPostId']);
            scroller.scrollTo("commentssection", {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart"
              });
        }
    }
    
  return (
    <Container>
        {isFormCommentOpen && <UserForm/>}
        <div className='containercenter'>
            <section className='titlesection'>
                <h2 className='titlesection_title'>Comments</h2>
                <span className='titlesection_number'> {commentsByPostId?.data?.length||0}</span>
            </section>
            <section className='newcomment'>
                <div className='usernewcomment'>
                    <img className='usernewcomment_img' src="https://res.cloudinary.com/dtmwybty7/image/upload/v1747017173/avatar_profile_sg4t3n.png" alt="" />
                    <span className='usernewcomment_name'>{responseCreatingUser?.data?.name || "Example"}</span>
                </div>
                <div className='inputnewcomment'>
                    <input onChange={handleChangeInputComment} value={inputComment} onKeyDown={handleNewCommentKeyDownEnter} type="text" className='inputnewcomment_input' placeholder='Share your throughts, press Enter' onClick={handleNewCommentClick}/>
                </div>
            </section>
            <section className='commentslist'>
                {
                    commentsByPostId?.data?.map((comment)=>{
                        return <UserComment key={comment._id} data={comment}/>
                    })
                }
            </section>
        </div>
    </Container>
  )
}

const Container = styled.div`
    background-color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    width: 100%;
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