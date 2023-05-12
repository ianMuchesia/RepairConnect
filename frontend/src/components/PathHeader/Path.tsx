import {memo} from 'react'
import { useAppSelector } from "../../ReduxHooks"
import "./path.css"
import { Link } from 'react-router-dom'

const Path =  memo(function Path() {

    const pathname = useAppSelector(state=>state.path)


  return (
    <div className="paths">
        <div className="paths-container">
        <Link to='/'><h4>Home</h4></Link>
        {pathname &&  <Link to={`/${pathname.split('/')[1]}`}><h4>{pathname}</h4></Link>}
        </div>
        
        


    </div>
  )
})

export default Path