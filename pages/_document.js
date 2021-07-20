// page/_documnet.js
import Document, { Head, Main, NextScript, Html } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
            <script src="https://developers.kakao.com/sdk/js/kakao.js" />
            {/* <script>
                Kakao.init('96a24fa84b8245d9c5ef14fd911fba9a');
                console.log(Kakao.isInitialized());
            </script> */}
            {/* <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.js"></script> */}
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
          {/* <script src='./index.js'></script> */}
          {/* <div id="root" class="slottt-machine-recipe">
            <div class="slottt-machine-recipe__mask" id="wordbox">
              <div class="slottt-machine-recipe__items_container recipe_if">
              </div>
            </div> */}
          {/* </div> */}
        </body>
      </Html>
    );
  }
}