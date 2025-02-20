import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'https://y-green-theta.vercel.app'
})

const UseAxiosSecure = () => {
    const {handleSingOut}=useContext(AuthContext)
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function(error){
        return Promise.reject(error)
    } )

    axiosSecure.interceptors.response.use(function(response){
        return response;
    },async(error)=>{
        const status= error.response.status;
        if(status ===401 || status === 403 ){
           await handleSingOut();
            navigate('/login')

        }
        return Promise.reject(error)
    })

    return axiosSecure;
};

export default UseAxiosSecure;