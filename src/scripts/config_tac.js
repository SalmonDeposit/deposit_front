tarteaucitronCustomText = {
  "middleBarHead": "",
  "allow": "Accepter",
  "deny": "Refuser",
};

tarteaucitron.init({
  "privacyUrl": "politique-de-confidendialite.html", /* Privacy policy url */
  "bodyPosition": "bottom", /* or top to bring it as first element for accessibility */
  "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
  "cookieName": "cookie-policy", /* Cookie name */
  "orientation": "middle", /* Banner position (top - bottom) */
  "groupServices": false, /* Group services by category */
  "serviceDefaultState": "wait", /* Default state (true - wait - false) */
  "showAlertSmall": false, /* Show the small banner on bottom right */
  "cookieslist": false, /* Show the cookie list */
  "closePopup": false, /* Show a close X on the banner */
  "showIcon": true, /* Show cookie icon to manage cookies */
  "iconSrc": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjQxLjUgMjcuNmMtLjgtNS40LTQuOS05LjgtMTAuMy0xMC42Yy0yMi4xLTMuMS00NC42IC45LTY0LjQgMTEuNGwtNzQgMzkuNUM3My4xIDc4LjQgNTcuMiA5NC45IDQ3LjQgMTE1TDEwLjcgMTkwLjZjLTkuOCAyMC4xLTEzIDQyLjktOS4xIDY0LjlsMTQuNSA4Mi44YzMuOSAyMi4xIDE0LjYgNDIuMyAzMC43IDU3LjlsNjAuMyA1OC40YzE2LjEgMTUuNiAzNi42IDI1LjYgNTguNyAyOC43bDgzIDExLjdjMjIuMSAzLjEgNDQuNi0uOSA2NC40LTExLjRsNzQtMzkuNWMxOS43LTEwLjUgMzUuNi0yNyA0NS40LTQ3LjJsMzYuNy03NS41YzkuOC0yMC4xIDEzLTQyLjkgOS4xLTY0LjljLS45LTUuMy01LjMtOS4zLTEwLjYtMTAuMWMtNTEuNS04LjItOTIuOC00Ny4xLTEwNC41LTk3LjRjLTEuOC03LjYtOC0xMy40LTE1LjctMTQuNmMtNTQuNi04LjctOTcuNy01Mi0xMDYuMi0xMDYuOHpNMTkyIDE0NGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6TTEyOCAzMzZhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMSAtNjQgMHptMjI0LTY0YTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHoiIGZpbGw9IiNlMWY2ZmYiLz48L3N2Zz4=", /* Optionnal: URL or base64 encoded image */
  "iconPosition": "BottomLeft", /* BottomRight, BottomLeft, TopRight and TopLeft */
  "adblocker": false, /* Show a Warning if an adblocker is detected */
  "DenyAllCta" : false, /* Show the deny all button */
  "AcceptAllCta" : false, /* Show the accept all button when highPrivacy on */
  "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */
  "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */
  "removeCredit": true, /* Remove credit link */
  "moreInfoLink": true, /* Show more info link */
  "useExternalCss": true, /* If false, the tarteaucitron.css file will be loaded */
  "useExternalJs": true, /* If false, the tarteaucitron.js file will be loaded */
  //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */
  "readmoreLink": "", /* Change the default readmore link */
  "mandatory": true, /* Show a message about mandatory cookies */
  "mandatoryCta": false /* Show the disabled accept button when mandatory on */
});

// Config analytics
// tarteaucitron.user.gtagUa = '';
// (tarteaucitron.job = tarteaucitron.job || []).push('gtag');

// Config OAuth Google
(tarteaucitron.job = tarteaucitron.job || []).push('googlesignin');
