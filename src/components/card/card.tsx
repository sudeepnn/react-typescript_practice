import './card.css'
type cardprop={
    children:JSX.Element,
    bgcolor?:string,
    height?:string,
    padding?:string
}

const card = (props:cardprop) => {
  return (
    <div className='card' style={{backgroundColor:props.bgcolor, height:`${props.height}rem` ,padding:`${props.padding}rem`}}>
      {props.children}
    </div>
  )
}


export default card
