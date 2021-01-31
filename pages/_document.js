import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.28/default/snipcart.css"
        />
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.28/default/snipcart.js"
          ></script>
          <div
            hidden
            id="snipcart"
            data-api-key="ZjJjNWQxOGMtNWZlYy00Nzk4LWIwZTQtYTllMTU3ZTY0OWYxNjM3NDc3MDcwNTg0MjgyODk1"
            data-config-modal-style="side"
          ></div>
        </body>
      </Html>
    );
  }
}
