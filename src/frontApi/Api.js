import axios from 'axios'

const frontApis =  axios.create({

   baseURL: import.meta.env.VITE_BASEURL || import.meta.env.VITE_BASEUR || 'http://localhost:3000',
   headers:{
    "Content-Type":"application/json"
   }
})

export const showdata = async ()=>(await frontApis.get('/shop/api/getting')).data

export const creating= async (data)=>(await frontApis.post('/shop/api/create',data)).data

export const findbanner= async (id)=>(await frontApis.get(`/shop/api/findone/${id}`)).data

export const deteting =async (id)=>(await frontApis.delete(`/shop/api/deleting/${id}`)).data