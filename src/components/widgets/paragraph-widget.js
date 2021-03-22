import React, {useState} from 'react'

const HeadingWidget = (
    {
        updateWidget,
        deleteWidget,
        widget
    }) => {
    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)
    return(
        <>
            {
                (editing && widgetCache.type === "HEADING") &&
                    <>
                    <select
                        onChange={(e) => setWidgetCache({...widgetCache, type: e.target.value})}
                        value={widgetCache.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                    </select>
                    <i onClick={() => {
                        setEditing(false)
                        updateWidget(widgetCache.id, widgetCache)
                    }} className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => {
                        setEditing(false)
                        deleteWidget(widgetCache.id)
                    }} className="fas fa-2x fa-trash float-right"></i>
                    <input
                        onChange={(e) => setWidgetCache({...widgetCache, text: e.target.value})} 
                        value={widgetCache.text} className="form-control" />
                    <select 
                        onChange={(e) => setWidgetCache({...widgetCache, size: parseInt(e.target.value)})}
                        value={widgetCache.size} className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                    </>
            }
            {
                (editing && widgetCache.type === "PARAGRAPH") &&
                    <>
                    <select
                        onChange={(e) => setWidgetCache({...widgetCache, type: e.target.value})}
                        value={widgetCache.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                    </select>
                    <i onClick={() => {
                        setEditing(false)
                        updateWidget(widgetCache.id, widgetCache)
                    }} className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => {
                        setEditing(false)
                        deleteWidget(widgetCache.id)
                    }} className="fas fa-2x fa-trash float-right"></i>
                    <textarea 
                        onChange={(e) => setWidgetCache({...widgetCache, text: e.target.value})}
                        value={widgetCache.text} className="form-control"></textarea>
                    </>
            }
            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-2x fa-cog float-right"></i>
                    <p>
                        {widget.text}
                    </p>
                </>
            }
        </>
    )
}

export default HeadingWidget