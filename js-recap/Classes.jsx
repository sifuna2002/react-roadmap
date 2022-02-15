import React from 'react'

function Classes() {
    class Person{
        constructor(name){
            this.name=name
        }
        greet(){
            console.log(`Hellow ${this.name}`)
        }
    }
    class Student extends Person{
        constructor(name,level){
            super(name)
            this.level=level
        }
        greet(){
            console.log(`Hellow ${this.name} from ${this.level}`)
        }
    }
    const o1=new Person("Max")
    const o2=new Student("Tina","1st grade")
    02.greet=()=>console.log('i am special')
    01.greet()
    o2.greet()
  return (
    <div>Classes</div>
  )
}

export default Classes