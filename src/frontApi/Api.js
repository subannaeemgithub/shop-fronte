import axios from 'axios'

const frontApis =  axios.create({

   baseURL: import.meta.env.VITE_BASEURL || import.meta.env.VITE_BASEUR || 'http://localhost:3000',
   headers:{
    "Content-Type":"application/json"
   }
})
// fetching api from backend and attached it in front (banner).
export const showdata = async ()=>(await frontApis.get('/shop/api/getting')).data

export const creating= async (data)=>(await frontApis.post('/shop/api/create',data)).data

export const findbanner= async (id)=>(await frontApis.get(`/shop/api/findone/${id}`)).data

export const deteting =async (id)=>(await frontApis.delete(`/shop/api/deleting/${id}`)).data

// fetching api from backend and attached it in front (thirty persent of products).

export const showproduct= async()=>(await frontApis.get('/shop/api/get/prod')).data

export const creatproduct= async(data)=>(await frontApis.post('/shop/api/creat/prod',data)).data

export const findproduct=async(id)=>(await frontApis.get(`/shop/api/find/prod/${id}`)).data

export const delet =async(id)=>(await frontApis.delete(`/shop/api/delet/prod/${id}`)).data

// fetching api from backend and attached it in front (frute banner).

export const showfrutban= async()=>(await frontApis.get('/shop/api/get/frutban')).data

export const creatfrutban= async(data)=>(await frontApis.post('/shop/api/creat/frutban',data)).data

export const findfrutban=async(id)=>(await frontApis.get(`/shop/api/find/frutban/${id}`)).data     

export const deletfrutban =async(id)=>(await frontApis.delete(`/shop/api/delet/frutban/${id}`)).data

// fetching api from backend and attached it in front (frute product).

export const showfrutprod= async()=>(await frontApis.get('/shop/api/get/frutprod')).data

export const creatfrutprod= async(data)=>(await frontApis.post('/shop/api/creat/frutprod',data)).data

export const findfrutprod=async(id)=>(await frontApis.get(`/shop/api/find/frutprod/${id}`)).data

export const deletfrutprod =async(id)=>(await frontApis.delete(`/shop/api/delet/frutprod/${id}`)).data

// fetching api from backend and attached it in front (grocery banner).

export const showgroceryban= async()=>(await frontApis.get('/shop/api/get/groceryban')).data

export const creategroceryban= async(data)=>(await frontApis.post('/shop/api/creat/groceryban',data)).data

export const findgroceryban=async(id)=>(await frontApis.get(`/shop/api/find/groceryban/${id}`)).data

export const deletgroceryban =async(id)=>(await frontApis.delete(`/shop/api/delet/groceryban/${id}`)).data

// fetching api from backend and attached it in front (grocery product).

export const showgroceryprod= async()=>(await frontApis.get('/shop/api/get/groceryprod')).data

export const creategroceryprod= async(data)=>(await frontApis.post('/shop/api/creat/groceryprod',data)).data

export const findgroceryprod=async(id)=>(await frontApis.get(`/shop/api/find/groceryprod/${id}`)).data

export const deletgroceryprod =async(id)=>(await frontApis.delete(`/shop/api/delet/groceryprod/${id}`)).data   