/**
 * Created by polin on 09.06.2017.
 */
var pageHeader = document.querySelector('.page-header');
var itemToggle = document.querySelector('.main-nav__item--toggle');
var linkToggle = document.querySelector('.main-nav__link--toggle');

//При работающем js скрываем класс no-js и делаем меню по умолчанию свёрнутым
pageHeader.classList.remove('page-header--no-js');
pageHeader.classList.add('page-header--menu-closed');//Поднимаем фон для скрытого состояния меню
itemToggle.classList.remove('main-nav__item--toggle-close');//Меняем крестик
itemToggle.classList.add('main-nav__item--toggle-open');//на гамбургер и сворачиваем меню

//Добавляем обработку события клика по кнопке для раскрытия/сокрытия меню
linkToggle.addEventListener('click', function(event) {
  event.preventDefault();
  if (itemToggle.classList.contains('main-nav__item--toggle-open')) {
    itemToggle.classList.remove('main-nav__item--toggle-open');//удаляем гамбургер
    itemToggle.classList.add('main-nav__item--toggle-close');//добавляем крестик и разворачиваем меню
    pageHeader.classList.remove('page-header--menu-closed');//опускаем фон для раскрытого меню
  } else {
    itemToggle.classList.remove('main-nav__item--toggle-close');//убираем крестик
    itemToggle.classList.add('main-nav__item--toggle-open');//добавляем гамбургер
    pageHeader.classList.add('page-header--menu-closed');//поднимаем фон
  }
});
