import MainFeaturedPost from "@/organisms/MainFeaturedPost";
import Header from "@/templates/Header";
import { Container, CssBaseline } from "@mui/material";

const sections = [
	{ title: "Web3", url: "#" },
	{ title: "Blockchain", url: "#" },
	{ title: "Non-Fungible Tokens (NFTs)", url: "#" },
	{ title: "Decentralized Autonomous Organizations (DAOs)", url: "#" },
	{ title: "Decentralized Finance (DeFi)", url: "#" },
	{ title: "Metaverse", url: "#" },
	{ title: "Tokenomics", url: "#" },
];

const mainFeaturedPost = {
	title: "What is Web3?",
	description:
		"Web3 is the next generation of the internet, built on decentralized, open-source, and secure blockchain technology.",
	image: "/mainfeatured.jpg",
	imageText: "main image description",
	linkText: "Continue reading…",
};

export default function Home() {
	return (
		<>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header title="#web3" sections={sections} />
				<main>
					<MainFeaturedPost post={mainFeaturedPost} />
				</main>
			</Container>
		</>
	);
}
