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
                editing &&
                <>
                    <select
                        onChange={(e) => setWidgetCache({ ...widgetCache, type: e.target.value })}
                        value={widgetCache.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>Paragraph</option>
                        <option value={"IMAGE"}>Paragraph</option>
                    </select>
                    <i onClick={() => {
                        setEditing(false)
                        updateWidget(widgetCache.id, widgetCache)
                    }} className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => {
                        setEditing(false)
                        deleteWidget(widgetCache.id)
                    }} className="fas fa-2x fa-trash float-right"></i>
                </>
            }
            {
                (editing && widgetCache.type === "HEADING") &&
                <>
                    <input
                        onChange={(e) => setWidgetCache({ ...widgetCache, text: e.target.value })}
                        value={widgetCache.text} className="form-control" />
                    <select
                        onChange={(e) => setWidgetCache({ ...widgetCache, size: parseInt(e.target.value) })}
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
                    <textarea
                        onChange={(e) => setWidgetCache({ ...widgetCache, text: e.target.value })}
                        value={widgetCache.text} className="form-control"></textarea>
                </>
            }
            {
                (editing && widgetCache.type === "LIST") &&
                <div>
                    <input type="checkbox"
                        onChange={(e) => setWidgetCache({ ...widgetCache, ordered: e.target.checked ? 1 : 0 })}
                        checked={widgetCache.ordered === 1}
                    /> Ordered
                        <br />
                        List Items
                        <textarea rows={10} value={widgetCache.text} className="form-control"
                        onChange={(e) => setWidgetCache({ ...widgetCache, text: e.target.value })}>
                    </textarea>
                </div>
            }
            {
                (editing && widgetCache.type === "IMAGE") &&
                <div>
                    URL
                        <input value={widgetCache.src}
                        onChange={(e) => setWidgetCache({ ...widgetCache, src: e.target.value })}
                        className="form-control" />
                        width
                        <input value={widgetCache.width}
                        onChange={(e) => setWidgetCache({ ...widgetCache, width: parseInt(e.target.value) })}
                        className="form-control" />
                        height
                        <input value={widgetCache.height}
                        onChange={(e) => setWidgetCache({ ...widgetCache, height: parseInt(e.target.value) })}
                        className="form-control" />
                </div>
            }
            {
                !editing &&
                    <>
                    <i onClick={() => setEditing(true)} className="fas fa-2x fa-cog float-right"></i>
                        {widget.size === 1 && <h1>{widget.text}</h1>}
                        {widget.size === 2 && <h2>{widget.text}</h2>}
                        {widget.size === 3 && <h3>{widget.text}</h3>}
                        {widget.size === 4 && <h4>{widget.text}</h4>}
                        {widget.size === 5 && <h5>{widget.text}</h5>}
                        {widget.size === 6 && <h6>{widget.text}</h6>}
                    </>
            }
        </>
    )
}

export default HeadingWidget