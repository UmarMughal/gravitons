
var React = require('react');
var Head = require('./Head.jsx');
var Header = require('./Header.jsx');
var Styles = require('./Styles.jsx');

var Root = React.createClass({

  render: function() {
    return (
      <html>
        <Head {...this.props} />
        <body className="p3">
          <Header {...this.props} />
          <Styles {...this.props} />
        </body>
      </html>
    )
  }

});

module.exports = Root;
