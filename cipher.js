const shift = (msg, key) => {
  var encMsg = "";

  for (var i = 0; i < msg.length; i++) {
    var code = msg.charCodeAt(i);

    if (code >= 4608 && code < 4951) {
      code -= 4608;
      code = mod(code + key, 4951 - 4608);
      code += 4608;
    }

    encMsg += String.fromCharCode(code);
  }

  return encMsg;
};

const mod = (n, p) => {
  if (n < 0) n = p - (Math.abs(n) % p);

  return n % p;
};

export const encrypt = (message, key) => {
  return shift(message, key);
};

export const decrypt = (message, key) => {
  return shift(message, -1 * key);
};
