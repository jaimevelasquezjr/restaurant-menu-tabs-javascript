'use-strict';

window.onload = function (e) {
  const tabsLink = document.querySelectorAll('.tabs__nav li a');
  const menuTabs = document.querySelectorAll('.menu');

  for (let i = 0, len = tabsLink.length; i < len; i++) {
    tabsLink[i].onclick = function () {
      const isActive = tabsLink[i].classList.contains('active');
      if (!isActive) {
        for (let x = 0; x < tabsLink.length; x++) {
          tabsLink[x].classList.remove('active');
          menuTabs[x].classList.remove('active');
        }
        tabsLink[i].classList.add('active');
        menuTabs[i].classList.add('active');
      }
    };
  }
};
