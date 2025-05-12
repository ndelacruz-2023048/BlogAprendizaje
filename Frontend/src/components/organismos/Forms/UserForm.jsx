import React from 'react'
import styled from 'styled-components'
import {Icon} from '@iconify/react'
import logoRegister from "../../../assets/logoRegister.png"
import { useCommentStore } from '../../../../stores/CommentStore'
import {useForm} from "react-hook-form"
export const UserForm = () => {
const {setIsFormCommentOpen} = useCommentStore()
const {handleSubmit,register,formState:{errors}} = useForm()


const handleFormSubmit = (data)=>{
    console.log(data);
    
}
  return (
    <Container>
        <div className='containerform'>
            <div className='containerform_centered'>
                <section className='headerform'>
                    <div className='infoheader'>
                        <h2 className='infoheader_title'>Register New User</h2>
                        <p className='infoheader_description'>You need to register to comment the posts</p>
                    </div>
                    <div className='iconheaderclose' onClick={()=>setIsFormCommentOpen()}>
                        <Icon icon="formkit:close" className='icon'/>
                    </div>
                </section>
                <section className='logoregister'>
                    <img src={logoRegister} alt="" className='image'/>
                </section>
                <form onSubmit={handleSubmit(handleFormSubmit)} className='formnewuser'>
                    <div className='inputsgroups'>
                        <div className='labelcontainer'>
                            <label className='inputsgroups_label' htmlFor="">Name</label>
                            {errors.name && <span className='spanerror'>{errors.name.message}</span>}
                        </div>
                        <input className='inputsgroups_input' type="text" {...register("name",{required:"Este campo es obligatorio"})}/>
                        <div className='labelcontainer'>
                            <label className='inputsgroups_label' htmlFor="">Username</label>
                            {errors.username && <span className='spanerror'>{errors.username.message}</span>}
                        </div>
                        <input className='inputsgroups_input' type="text" {...register("username",{required:"Este campo es obligatorio"})}/>
                    </div>
                    <button className='formnewuser_button' type='submit'>Create</button>
                </form>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    backdrop-filter: blur(20px);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
   .containerform{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 60%;
        background-color: #f3f2f2;
        border-radius: 20px;
        &_centered{
            width: 90%;
            height: 90%;
        }
        .headerform{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #c2c2c2;
            padding-bottom: 15px;
        }

        .infoheader{
            &_title{
                font-size: 25px;
            }
            &_description{
                font-size: 12px;
                color: #a5a5a5;
            }
        }
        .iconheaderclose{
            .icon{
                background-color: #ff868c;
                padding: 5px 7px;
                font-size: 15px;
                border-radius: 50%;
            }
        }

        .logoregister{
            display: flex;
            justify-content: center;
            margin-top: 15px;
            width: 100%;
            height: 50%;
            .image{
                height: 100%;
                width: 60%;
                object-fit: cover;
            }
        }
        .formnewuser{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

            .inputsgroups{
                display: flex;
                flex-direction: column;
                gap: 5px;
                .labelcontainer{
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                &_label{
                    font-size: 14px;
                    color: #68a1f9;
                    font-weight: 600;
                }
                &_input{
                    border: 1px solid #ff663e;
                    background-color: #f8d2af;
                    border-radius: 20px;
                    padding: 10px 15px;
                }
            }
            &_button{
                background-color: #679cf9;
                padding:7px 18px;
                color: white;
                border-radius: 20px;
            }
            .spanerror{
                font-size: 12px;
                color: #ff868c;
                font-weight: 600;
            }
        }
   }
`