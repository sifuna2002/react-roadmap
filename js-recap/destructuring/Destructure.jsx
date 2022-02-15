import React from 'react'

function Destructure() {
    const {PI, E, SQRT}=Math
    const circle={
        label:'circleX',
        radius:2,
    }
    const circleArea=({radius},{precision=2}={})=>
      (PI*radius*radius).toFixed(precision)

      console.log(circleArea(circle,{precision:5}))
      const[first, ...restofItems]=[10,20,30,40]
  return (
    <div>Destructure</div>
  )
}

export default Destructure