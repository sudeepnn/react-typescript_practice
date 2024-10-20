import React, {  ChangeEvent, useState } from 'react'
import './form.css'
import { data,priortity } from '../note/notedata'
import Card from '../card/card'

type addnoteprop={
    addnote:(note: data) => void
}


const Form = (props:addnoteprop) => {

    const [text,setText]=useState("")
    const [classprio,setClassprio]=useState<priortity>('low')


    function callsettext(event: ChangeEvent<HTMLInputElement>): void { 
        setText(event.target.value)
    }

    function pushdata(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        e.preventDefault()
        props.addnote({
            id: Date.now(),
            text: text,
            classprio
        })
        setText("")
        setClassprio('low')
    }

    function handleSelect(event: ChangeEvent<HTMLSelectElement>): void {
        setClassprio(event.target.value as priortity)
    }

  return (
    <Card bgcolor='black' height='2' padding='2'>
      <form className='form' >
        <input onChange={callsettext} type="text" value={text} />
        <select onChange={handleSelect} value={classprio} >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <button onClick={pushdata} >Add Note</button>
      </form>
    </Card>
  )
}

export default Form
