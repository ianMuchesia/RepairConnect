import { useState } from 'react'
import { useLocation } from "react-router-dom"
import { Path } from "../../components"
import { useAppDispatch } from "../../ReduxHooks"
import { setPath } from "../../store/pathSlice"
import {IoGridOutline, IoMenu} from 'react-icons/io5'
import './shop.css'

const Shop = () => {


    const location = useLocation()

    const dispatch = useAppDispatch()

    dispatch(setPath(location.pathname))
  
    const  [ search , setSearch] = useState('')
    const [selectedCategory, setSelectedCategory ] = useState("")
    console.log(search)
    console.log(selectedCategory)
  return (
    <>
    <Path/>
    <div className="shop-container">
    

      
      <div className="shop-sort-layout">
<div className="shop-grid">
  <span className='grid-grid'><IoGridOutline/></span>
  <span className='grid-list'><IoMenu/></span>
</div>
<div className="shop-sort">
  <h5>9 Shops Found</h5>
   <hr /> 
  <div className="option-sort">
    <label htmlFor="sortBy">Sort By</label>
    <select name="" id="sortBy">
      <option value="LowestPrice">Price(Lowest)</option>
      <option value="HighestPrice">Price(Highest)</option>
      <option value="NameAcending">Name(A-Z)</option>
      <option value="NameDescending">Name(Z-A)</option>
    </select>
  </div>
</div> 

      </div>


     
    </div>
    </>
  )
}

export default Shop