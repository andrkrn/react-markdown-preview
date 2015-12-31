var MarkdownEditor = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.markdownEditor.value
    )
  },
  render: function() {
    return (
      <textarea ref="markdownEditor" value={this.props.text} onChange={this.handleChange}></textarea>
    );
  }
});

var MarkdownPreview = React.createClass({
  markdown: function() {
    var markdown = marked(this.props.text, {
      sanitize: true,
      breaks: true
    });
    return { __html: markdown };
  },
  render: function() {
    return (
      <div className="markdown-body" dangerouslySetInnerHTML={this.markdown()} />
    );
  }
});

var MarkdownApp = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.text
    }
  },
  handleEditorChanges: function(text) {
    this.setState({
      text: text
    })
  },
  render: function() {
    return (
      <div className="markdown-app">
        <MarkdownEditor
          text={this.state.text}
          onUserInput={this.handleEditorChanges}
        />
        <MarkdownPreview text={this.state.text} />
      </div>
    );
  }
});

var initialMarkdown = "# Hello Markdown";

ReactDOM.render(
  <MarkdownApp text={initialMarkdown} />,
  document.getElementById('app')
);
