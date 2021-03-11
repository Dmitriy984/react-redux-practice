export default function readCookie(name) {
  const searchName = name + "=";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(searchName) === 0) {
      return c.substring(searchName.length, c.length);
    }
  }

  return null;
}
