import React from 'react';
import Editor from './Editor';
import Previewer from './Previewer';

const pixel = require('./static/pixelpfp.jpg');
const defaultMarkdown = [
  "# Welcome to my Markdown Previewer!\n",
  "## This is a project made using React..",
  "### If you don't know how to use this app, just start typing on the Editor:\n",
  "Here's a few examples:\n",
  "Heres some inline code, `<div></div>`, between 2 backticks.\n",
  "```\n",
  "// this is multi-line code:\n",
  "function anotherExample(firstLine, lastLine) {",
  "  if (firstLine == '```' && lastLine == '```') {",
  "    return multiLineCode;",
  "  }",
  "}",
  "```\n",
  "You can also make text **bold**... whoa!",
  "Or _italic_.",
  "Or... wait for it... **_both!_**",
  "And feel free to go crazy ~~crossing stuff out~~.\n",
  "There's also [links](https://jemherrera.github.io/portfolio/), and",
  "> Block Quotes!\n",
  "And if you want to get really crazy, even tables:\n",
  "Wild Header | Crazy Header | Another Header?",
  "------------ | ------------- | -------------",
  "Your content can | be here, and it | can be here....",
  "And here. | Okay. | I think we get it.\n",
  "- And of course there are lists.",
  "  - Some are bulleted.",
  "     - With different indentation levels.",
  "        - That look like this.\n\n",
  "1. And there are numbered lists too.",
  "1. Use just 1s if you want!",
  "1. And last but not least, let's not forget embedded images:\n",
  `![My pixel picture](${pixel})`
]

class MarkDownPreviewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: defaultMarkdown.join('\n')
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  render(){
    return (
      <div id="markdown-previewer">
        <div className="title-bar">
          <h1>Markdown Previewer</h1>
          <p>by Jem</p>
        </div>
        <div className="body-container">
          <Editor 
            input={this.state.input}
            onChange={this.handleChange}/>
          <Previewer input={this.state.input} />
        </div>
      </div>
    )
  }
}

export default MarkDownPreviewer;
