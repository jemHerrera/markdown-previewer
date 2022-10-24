import React, { useEffect } from "react";

let md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true
});

function Previewer(props){
    useEffect(() => {
        const html = md.render(props.input);
        document.getElementById("preview").innerHTML = html;
    })
    return (
        <div id="preview">
        </div>
    )
}

export default Previewer