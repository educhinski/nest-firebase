const quotes = document.getElementById('quotes');
const error = document.getElementById('error');

const firebaseConfig = {
  apiKey: 'AIzaSyCsF7ONA5Sn2bSL5t_WYBeyalf3kTBL40Q',
  authDomain: 'fir-auth-2c6f0.firebaseapp.com',
  projectId: 'fir-auth-2c6f0',
  storageBucket: 'fir-auth-2c6f0.appspot.com',
  messagingSenderId: '809073435692',
  appId: '1:809073435692:web:e4f1d0f6d94914b63c1d89',
  measurementId: 'G-B1YGEV7Q6J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const displayQuotes = (allQuotes) => {
  let html = '';
  for (const quote in allQuotes) {
    html += `<blockquote class="wp-block-quote">
              <p>${quote.quote}</p><cite>${quote.character}</cite>
            </blockquote>`;
  }
  return html;
};
