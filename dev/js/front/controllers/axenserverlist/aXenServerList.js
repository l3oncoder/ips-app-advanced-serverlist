// Toogle hide
document.querySelector('.aXenServerList_toggle_hide')?.addEventListener('click', e => {
  e.preventDefault();
  const serverList = document.querySelector('.aXenServerList');

  serverList?.classList.toggle('aXenServerList_hide');

  if (serverList?.classList.contains('aXenServerList_hide')) {
    ips.utils.cookie.set('aXenServerList_widget_hide', 1, true);
  } else {
    const serverListContain = document.querySelector('.aXenServerList_ul');
    serverListContain.classList.add('ipsAnim');
    serverListContain.classList.add('ipsAnim_fade');
    serverListContain.classList.add('ipsAnim_in');

    setTimeout(() => {
      serverListContain.classList.remove('ipsAnim');
      serverListContain.classList.remove('ipsAnim_fade');
      serverListContain.classList.remove('ipsAnim_in');
    }, 450);

    ips.utils.cookie.unset('aXenServerList_widget_hide');
  }
});

// Toogle scroll
document.querySelector('.aXenServerList_toggle_scroll')?.addEventListener('click', e => {
  e.preventDefault();
  const serverList = document.querySelector('.aXenServerList');

  serverList?.classList.toggle('aXenServerList_scroll');

  if (serverList?.classList.contains('aXenServerList_scroll')) {
    ips.utils.cookie.set('aXenServerList_widget_scroll', 1, true);
  } else ips.utils.cookie.unset('aXenServerList_widget_scroll');

  ips.utils.cookie.set(`${'aXenServerList_widget_scroll'}_manual`, 1, true);
});

// Toogle view
document.querySelector('.aXenServerList_toggle_fullWidth')?.addEventListener('click', e => {
  e.preventDefault();
  const serverList = document.querySelector('.aXenServerList');

  serverList?.classList.toggle('aXenServerList_fullWidth');
  document
    .querySelectorAll('.aXenServerListMenu')
    ?.forEach(el => el.classList.toggle('aXenServerListMenu_fullWidth'));

  if (serverList?.classList.contains('aXenServerList_fullWidth')) {
    ips.utils.cookie.set('aXenServerList_widget_fullWidth', 1, true);
  } else ips.utils.cookie.unset('aXenServerList_widget_fullWidth');

  ips.utils.cookie.set(`${'aXenServerList_widget_fullWidth'}_manual`, 1, true);
});
