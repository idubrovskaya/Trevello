function openMenu() {
  let header = document.getElementById('header');
  let headerButton = document.getElementById('header_burger');

  headerButton.addEventListener('click', function () {
    header.classList.toggle('open');
  });
}

openMenu();
