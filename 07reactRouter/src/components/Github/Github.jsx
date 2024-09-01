import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   const data =  useLoaderData()

   // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/TouqeerAli')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    
  return (
   
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-2xl font-semibold text-gray-800 mb-4">Github Followers: {data.followers}</h1>
    <img 
      src={data.avatar_url} 
      alt="Github Avatar" 
      className="rounded-full border-4 border-gray-300 shadow-lg"
      width={200}
    />
  </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/TouqeerAli')
    return response.json()
}