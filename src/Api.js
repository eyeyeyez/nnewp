import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import axios from 'axios'


const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: { 'Content-Type': 'application/json' }
})

export const getall = () => {
  return  axiosInstance.get('/api/post/all')
  .then(response => response.data)
}

export const getalls = () => {
  return  axiosInstance.get('/api/send/all')
  .then(response => response.data)
}



export const apiupload = (data) => {
  return  axiosInstance.post('/api/uploads',data)
  .then(data => data)
  .then(response => response.data)
}

export const apisearch = (data) => {
  return  axiosInstance.get('/api/post/search/'+data)
  .then(response => response.data)
}

export const apisearchs = (data) => {
  return  axiosInstance.get('/api/send/search/'+data)
  .then(response => response.data)
}

export const login = (username, password) => {
  const data = { 
    username: username,
    password: password
  }
  return axiosInstance.post('login', data)
    .then(data => data)
    .catch(error => error.response)
}   

export const publishPost = (title,content,category,contact,img) => {
  const data = { 
    title: title,
    content: content,
    category: category,
    contact: contact,
    author: localStorage.getItem('username'),
    img: img
  }

  return axiosInstance.post('api/post/create/', data)
    .then(data => data)
    .catch(error => error.response)
}

export const publishPosts = (title,content,category,contact,img) => {
  const data = { 
    title: title,
    content: content,
    category: category,
    contact: contact,
    author: localStorage.getItem('username'),
    img: img
  }

  return axiosInstance.post('api/send/create/', data)
    .then(data => data)
    .catch(error => error.response)
}

export const signup = (firstName , lastName , username, password, address, email, phone) => {
  const data = {
    firstName:	firstName ,
    lastName: lastName ,
    username: username ,
    password: password ,
    address: address ,
    email: email ,
    phone: phone
}

  return axiosInstance.post('api/user/signup', data)
    .then(data => data)
    .catch(error => error.response)
}

export const getalluser = () => {
  return  axiosInstance.get('/api/user/getuser')
  .then(response => response.data)
}

export const deleteuser = (data) => {
  return  axiosInstance.delete('/api/user/getuser/'+data)
  .then(data => data)
 
}




