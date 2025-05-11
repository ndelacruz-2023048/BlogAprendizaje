import styled from "styled-components"
import { Circle } from "../../atomos/Circle"
import { PostUser } from "./PostUser"
import { Device } from "../../../styles/Breakpoints"
import postFetcher from "../../../utils/fetchPostById"
import usePublicationStore from "../../../../stores/PublicationStore"
import dayjs from 'dayjs'
export const Post = ()=>{
    const {postById} = usePublicationStore()
    console.log(postById);
    const date =dayjs(postById?.publication?.datePublication).format("MMM DD, YYYY")
    
    return(
        <Container>
            <PostCategory>
                <TextBlog>Blog</TextBlog>
                <Circle circleWidth="5px" circleHeight="5px" circleColor="#000"/>
                <TextCategory>{postById?.publication?.typeClass}</TextCategory>
            </PostCategory>
            <PostTitle>
                <TitlePost>
                    {postById?.publication?.titlePublication}
                </TitlePost>
            </PostTitle>
            <PostUser date={date} author={postById?.publication?.author}/>
            <PostImage src={postById?.publication?.imagePublication}/>
            <Content>
                {postById?.publication?.content}
            </Content>
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    gap: 15px;
    @media ${Device.tablet}{
        width: 85%;
    }
    @media ${Device.laptop}{
        width: 80%;
    }

    @media ${Device.desktop}{
        width: 60%;
    }
`

const PostCategory = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const TextBlog=styled.p`
    color: #ababab;
    font-size:15px;
`
const TextCategory=styled.p`
    font-size:15px;
`


const PostTitle = styled.div`
    
`

const TitlePost = styled.h1`
    font-size: 20px;
    @media ${Device.tablet}{

    }
    
    @media ${Device.laptop}{
        font-size: 49px;
    }
`

const PostImage = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
`
const Content = styled.p`
    font-weight: 300;
    text-align: justify;
`