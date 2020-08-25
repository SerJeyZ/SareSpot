
$(function () {
  var inputBlock = document.querySelector('.search-dropdown');
  var taskBlock = document.querySelector('.task-wrap');
  var activeTask = document.querySelector('#active-task');
  var searchInput = document.querySelector('#input-task-search');
  var searchMenu = document.querySelector('#dropdown-search');
  var searchMenuLeftCol = document.querySelector('.dropdown-search__left-col');

  searchInput.addEventListener('input', function () {
    searchMenu.classList.add('show', 'active');
    if (searchInput.value.length == 0) {
      searchMenu.classList.remove('show', 'active');
    }
  })
  searchInput.addEventListener('change', function () {
    if (searchInput.value.length == 0) {
      searchMenu.classList.remove('show', 'active');
    }
  })
  searchMenuLeftCol.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      inputBlock.classList.add('d-none');
      searchMenu.classList.remove('show', 'active');
      searchInput.value = '';
      taskBlock.classList.add('show', 'active');
    }
  })
  activeTask.addEventListener('click', function (e) {
    taskBlock.classList.remove('show', 'active');
    inputBlock.classList.remove('d-none');
    inputBlock.classList.add('show', 'active');
  })
  
})