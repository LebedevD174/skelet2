const React = require('react');
const Navbar = require('./elements/Navbar');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/reset-style.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Glitch+Pop&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Glitch+Pop&family=Underdog&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Rubik+Glitch+Pop&family=Underdog&display=swap"
          rel="stylesheet"
        />
        <script src="/scripts/index.js" defer />
      </head>
      <body>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
