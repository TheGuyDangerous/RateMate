import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<meta
						name="keywords"
						content="feedback, ecommerce, shopping, quality assurance, metrics, products, shopping, experience, online-shopping, customer review, management"
					/>
					<meta name="robots" content="index, follow" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="language" content="English" />

					<link rel="icon" href="/favicon.ico" />
					
					<link rel="manifest" href="/site.webmanifest"></link>
					<meta property="og:image" content="/images/app-review.png" />
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=G-ZSEBJQ4Q8K`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZSEBJQ4Q8K', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
