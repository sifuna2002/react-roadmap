import React from 'react'

function Promises() {
    const fetchData=async ()=>{
        const resp=await fetch('https://api.github.com')
        const data=await resp.json()
        console.log(data)

    }
    fetchData()
  return (
    <div>Promises</div>
  )
}

export default Promises