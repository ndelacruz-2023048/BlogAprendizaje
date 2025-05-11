import {create} from 'zustand'
import axios from 'axios'
const usePublicationStore = create((set,get)=>({
    publications:[],
    filteredPublications:[],
    atributesToFilter:[],
    atributesToFilterObject:{},
    isOpenFilters:false,
    activeTypeClass:"all",
    isLoadingPublications:false,
    isLoadingFilteredPublications:false,
    paramsFiltersPublications:{},
    postById:{},
    fetchFilteredPublications:async ()=>{
        try {  
            const {atributesToFilterObject} = get()
            await set(()=>({isLoadingFilteredPublications:true}))
            const response = await axios.get('http://localhost:2636/publication/filter',{params:atributesToFilterObject,timeout: 5000})
            
            const filteredPublications = await response.data
            await set((state)=>({filteredPublications,isLoadingFilteredPublications:false}))
        } catch (error) {
            console.log('General error',error);
            
        }
    },
    fetchPublications:async ()=>{
        try {
            await set(()=>({isLoadingPublications:true}))
            const response = await fetch('http://localhost:2636/publication')
            const publications = await response.json();
            await set((state)=>({publications,isLoadingPublications:false}))
        } catch (error) {
            
        }
    },
    fetchPostById:async (postId)=>{
        try {
            const response = await fetch(`http://localhost:2636/publicationbyid/${postId}`)
            const data = await response.json()
            set({postById:data})
            return data
        } catch (error) {
            console.log('Error fetching post by id',error);
        }
    },
    setOpenFilter:()=>{
        const {isOpenFilters} = get()
        set(()=>({isOpenFilters:isOpenFilters===true?false:true}))
    },
    setParamsFiltersPublications:(p)=>{
        set(()=>({paramsFiltersPublications:p}))
    },
    setAtributeToFilter:(p)=>{
        set(()=>({atributesToFilter:p}))
    },
    setAtributesToFilterObject:(p)=>{
        set(()=>({atributesToFilterObject:p}))
    },
    setActiveTypeClass:(p)=>{
        set(()=>({activeTypeClass:p}))
    },
    setPostById:(p)=>{
        set(()=>({postById:p}))
    }
}))

export default usePublicationStore