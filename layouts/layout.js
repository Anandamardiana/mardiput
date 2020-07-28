import Header from '../components/header';
import Head from 'next/head';

const Layout = (props) => (
	<div>
		<Head>
			<title>The News</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="stylesheet" href="/css/style.css"/>
		</Head>
		<Header />
		{props.children}
	</div>
)

export default Layout;