import React, {useState} from 'react'

const ImageWidget = (
    {
        updateWidget,
        deleteWidget,
        widget
    }) => {
    const [editing, setEditing] = useState(false)
    const [widgetCache, setWidgetCache] = useState(widget)
        return (
            <div>
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
                        <img src={widget.src} width={widget.width} height={widget.height}></img>
                    </>
                }
            </div>
        )
}

export default ImageWidget;