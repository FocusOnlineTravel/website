import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import "../faust.config";
import "@faustwp/core/dist/css/toolbar.css";
import '@/styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';
 
export default function App({ Component, pageProps }) {
	const router = useRouter();
 
	return (
		<FaustProvider pageProps={pageProps}>
			<Header />
			<Layout>
				<Component {...pageProps} key={router.asPath} />
			</Layout>
			<Footer />
		</FaustProvider>
	);
}