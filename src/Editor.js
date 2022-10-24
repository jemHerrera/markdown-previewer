function Editor(props){
    return (
        <div id="editor-container">
            <h2 className="title">Editor</h2>
            <textarea id="editor" onChange={props.onChange} value={props.input}></textarea>
        </div>
    )
}

export default Editor