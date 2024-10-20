import React from 'react'
import './note.css'
import { data,color } from './notedata'
import Card from '../card/card'

const note = (props:data) => {
  return (
    <Card bgcolor={props.classprio &&color[props.classprio]} height='3' padding='1'>

    
    <div >
        <h3> {props.text}</h3>
      
    </div>
    </Card>
  )
}

export default note
