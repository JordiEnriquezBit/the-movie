export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyBrejlGcl0oAYKGpRZN34USTUxR4ucMbSY",
    authDomain: "the-movie-544f1.firebaseapp.com",
    projectId: "the-movie-544f1",
    storageBucket: "the-movie-544f1.appspot.com",
    messagingSenderId: "562771759567",
    appId: "1:562771759567:web:1cca2787ca81ba5789c2ba"
  },
  contentSecurityPolicyHeader: 'Content-Security-Policy',
  contentSecurityPolicy: {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-inline' http://www.google-analytics.com/analytics",
    'font-src': "'self' https://fonts.gstatic.com",
    'connect-src': "'self'",
    'img-src': "'self' http://www.google-analytics.com http://trk.kissmetrics.com",
    'style-src': "'self' https://fonts.googleapis.com",
    'media-src': "'self'",
    'frame-src': "'self' http://platform.twitter.com"
  }
};
