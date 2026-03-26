(() => {
  const { protocol, hostname, href, replace } = window.location;

  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  const isFileProtocol = protocol === 'file:';

  if (protocol === 'http:' && !isLocalhost && !isFileProtocol) {
    replace.call(window.location, href.replace(/^http:/i, 'https:'));
  }
})();
