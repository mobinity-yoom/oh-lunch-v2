// page/_documnet.js
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
            <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
            {/* <script>
                Kakao.init('96a24fa84b8245d9c5ef14fd911fba9a');
                console.log(Kakao.isInitialized());
            </script> */}
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}