export default function deleteCookie(name) {
  const domain = window.location.hostname,
      path = '/'; // root path

  document.cookie = [
    name, '=',
    '; expires=' + new Date(0).toUTCString(),
    '; path=' + path,
    '; domain=' + domain
  ].join('');
}