import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import "@/styles/blocks.scss";
import { WordPressBlocksProvider, fromThemeJson } from "@faustwp/blocks";
import blocks from "../wp-blocks";
import "../faust.config";
import "@faustwp/core/dist/css/toolbar.css";
import '@/styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
 
export default function App({ Component, pageProps }) {
	const router = useRouter();
 
	return (
		<FaustProvider pageProps={pageProps}>
			<Header />
			<Component {...pageProps} key={router.asPath} />
			<Footer />
		</FaustProvider>
	);
}