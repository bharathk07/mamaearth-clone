import './FilterButtons.css'

export const FilterButtons = ({filter }) =>{
    return(
        <div className='buttons'>
            <button onClick={()=>filter("")}>ALL</button>
            <button onClick={()=>filter("shampoo")}>SHAMPOO</button>
            <button onClick={()=>filter("_mask")}>MASK</button>
            <button onClick={()=>filter("_wash")}>FACE WASH</button>
            <button onClick={()=>filter("_oil")}>OIL</button>
            <button onClick={()=>filter("lotion")}>LOTION</button>
            <button onClick={()=>filter("diaper")}>DIAPER</button>
        </div>
    )
}