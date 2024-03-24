const ReactDOMServer = require('react-dom/server');
const React = require('react');

function renderComponent(component, props, { doctype } = { doctype: true }) {
  const reactElement = React.createElement(component, {
    ...props,
    // ещё в компонент передаем в качестве пропсов все,
    // что лежит в res.locals (например, res.locals.user)
    ...this.locals,
    // также передаем все, что лежит в app.locals
    ...this.app.locals,
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  return doctype ? `<!DOCTYPE html>${html}` : html;
}

// middleware/ssr.js
// Middleware для добавления метода renderComponent в объект res
function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = ssr;