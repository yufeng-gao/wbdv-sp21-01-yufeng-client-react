//citation: copied directly from jannunzi git repo
//citation: piazza post: https://piazza.com/class/kjvqxk70cd71y3?cid=692 for highlighting, posted by: Idekelly
import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import "./editable-item.css"

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        type,
        id
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    const { layout, courseId, moduleId, lessonId, topicId } = useParams();
    return(
        <li className={`${type === 'module'? 'list-group-item' : 'nav-item'} 
        ${(item._id === moduleId) ? 'active' : ''}
        ${(editing && type === 'module') ? 'active' : ''}`}
        key={id}>
            {
                !editing &&
                <span className={`${type === 'module' ? '' : 'nav-link'} 
                ${(item._id === lessonId || item._id === topicId) ? 'active' : ''}`}>
                    <Link to={to}
                    className={`${(item._id === moduleId || item._id === topicId) ? 'active wbdv-selected-link' : ''}`}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                </span>
            }
            {
                editing &&
                <span className={`${type === 'module'? '' : 'nav-link active'}`}>
                    <input
                        onChange={(e) => setItemCache({...item, title: e.target.value})}
                        value={itemCache.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }} className="fas fa-check"></i>
                    <i onClick={() => {
                        setEditing(false)
                        deleteItem(item)}} className="fas fa-times"></i>
                </span>
            }
        </li>
    )
}

export default EditableItem