const React = require('react');

function Navbar({ user }) {
  return (
    <div>
      <a href="/">Главная</a>
      <a href="/news">Лента</a>
      {user ? (
        <div>
          <a href={`/page/${user.id}`}>Моя страница</a>
          <a href="/account">Профиль</a>
          <a href="/sign/logout">Выйти</a>
        </div>
      ) : (
        <div>
          <a href="/sing-in">Войти</a>
          <a href="/sing-up">Регистрация</a>
        </div>
      )}
    </div>
  );
}

module.exports = Navbar;
