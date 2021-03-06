import {createGlobalStyle}  from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	@font-face {
		font-family: "iconfont";
		src: url('./static/iconfont/iconfont.eot?t=1569157846211'); /* IE9 */
		src: url('./static/iconfont/iconfont.eot?t=1569157846211#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOEAAsAAAAAB4gAAAM1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqCXIJFATYCJAMQCwoABCAFhG0HNhudBsgOJSGhwADgAQBgBNFYOnu3T/cBVgBUD2irUEWVfYUGlKoxNsIUjfgf7erfQjPfyJdOwMxBg2Qvu87mA+hU/Y7uJFVwdfJ5Lqd3DQ9wfqvtthaNtaiNR70A44AC3QPXAk0LJDBvmF7SQH2t7QSaZTMZ7uWV1IBdCvsF4h11KmDvRKRk+b7QnZia4jtY9MsH423gW/H9+C8q7BSdKhz66EWuDhm/ZnyNMy3rWaYps8Hm61xgs6g4BJK4nPQ8Z6oyh0yaWc/sGOhKofw6/BrX08OVisLCN1Xf/+MVlegKi8fADZit/JqRCAh+zRRQ+BVXpMLPMPcP5y6BH5i5eLqiKyfHMoZRo9+fF+c+3VTzeEXtkw8ynkGevax7vEF6ulx+tnHwsmWKNLeWL5T2X55aUysf2DHdMK9Ok/oKj3vVCG6xvmHbGGH7sDrllLgRoEW7ahvuGpbL8vJieErtyb2wbJ+48ZLB8Hk11QfGLJ0OlCSKYH7dNGVKzvAmahbe09bGjrbGxtaOxra2imitbeuAKeu3bkZGJu8wo3qQ253NdB3fvIn1vKETIfEOzbdYH549A+dJ/oOpOQ9wnx41+6krrbzWmKXStGfmjrQQv5IQbrDcDvNPk2jvZrE4I+lzi8xvDR/cMWLS70ljIAAw8prOGb9hzvL62xSM99Sr6kS/cf0nfEhr35T/djHB9aHNT2F45DXD9gJ9BaZyENXGuvQ0oTVTaxOlH02nbH1QQdMwAoEZb68wz28uJvTNNyh6llD1bZLJPETH0A109d1EcyB/9tAsxiRygH2rAcKUIygm/EQ15Q6ZzDfoWPAdXVNhQvM4Bi45tB1UyGZY4VhH6nxENb+PxHYulKVV2Dnbo7C2pmBLmIVoHEWGRfTz+diH2RUjQnOcUZwTRJjfi/LAbtjj8aMA87uwxsPaOQ8khYeTqSuFaX4vCO5iMAWH6RDVfAil8fMhWXNOGHy+CuY0m4eCLVAaeQnGhND2kUhhIjaQ+UbfJsqv7BMyh1MUjiMQgvHzQvKAC/NEGT8kMN3JBdNwYdoPpAKShKNGZKsx7Hmz14ZboAnXyyhRI6Oj3Ig0qtSYqQAAAAAA') format('woff2'),
		url('./static/iconfont/iconfont.woff?t=1569157846211') format('woff'),
		url('./static/iconfont/iconfont.ttf?t=1569157846211') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
		url('./static/iconfont/iconfont.svg?t=1569157846211#iconfont') format('svg'); /* iOS 4.1- */
	  }
	  
	  .iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	  }
	  
	  .icon41:before {
		content: "\e62b";
	  }
	  
	  .iconbi:before {
		content: "\e62c";
	  }
	  
	  .iconAa:before {
		content: "\e636";
	  }
`;
