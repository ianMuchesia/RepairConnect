
import { SelectLocation } from '../../../utils/selectLocation'


interface Props{
    search:string;
    setSearch:React.Dispatch<React.SetStateAction<string>>;
    setSelectedCategory:React.Dispatch<React.SetStateAction<string>>;
}
const Categorize = (props :Props) => {

    const {search, setSearch , setSelectedCategory} = props
  return (
    <div className="shop-categorize">
    <input type="text"
    placeholder="Search"
    className="shop-categorize-serach"
    value={search}
    onChange={(event)=>setSearch(event.target.value)}
     />


<div className="shop-categorize-location">
<h5>Category</h5>
     <ul>
    
     {SelectLocation.map((item, index)=>(
      <li key={index} onClick={()=>setSelectedCategory(item)}>{item}</li>
     ))}
      </ul>
    
     </div>
     <button type='button' className='shop-categorize-btn'>Clear Filters</button>
    </div>
  )
}

export default Categorize