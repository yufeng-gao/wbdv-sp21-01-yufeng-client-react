//citation: copied directly from jannunzi git repo
//citation: piazza post: https://piazza.com/class/kjvqxk70cd71y3?cid=692 for highlighting, posted by: Idekelly
import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        type
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    const { layout, courseId, moduleId } = useParams();
    return(
        <li className={`${type === 'module'? 'list-group-item' : 'nav-item'} 
        ${(item._id === moduleId) ? 'active' : ''}
        ${(editing && type === 'module') ? 'active' : ''}`}>
            {
                !editing &&
                <>
                    <Link to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...item, title: e.target.value})}
                        value={itemCache.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }} className="fas fa-check"></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times"></i>
                </>
            }
        </li>
    )
}

export default EditableItem