const React = require('react');
const Layout = require('../Layout');



function MainPage({ title, user, cards }) {
  return (
    <Layout user={user} title={title}>
      <div className='mainPage'>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
