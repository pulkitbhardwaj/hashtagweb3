import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface HeaderProps {
	sections: ReadonlyArray<{
		title: string;
		url: string;
	}>;
	title: string;
}

export default function Header(props: HeaderProps) {
	const { sections, title } = props;

	return (
		<React.Fragment>
			<Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Typography
					component="h2"
					variant="h5"
					color="inherit"
					align="center"
					noWrap
					sx={{ flex: 1 }}>
					{title}
				</Typography>
				{/* <IconButton>
					<SearchIcon />
				</IconButton> */}
				<Button variant="outlined" size="small" href="https://t.me/web3hiring">
					Subscribe
				</Button>
			</Toolbar>
			<Toolbar
				component="nav"
				variant="dense"
				sx={{ justifyContent: "space-between", overflowX: "auto" }}>
				{sections.map((section) => (
					<Link
						color="inherit"
						noWrap
						key={section.title}
						variant="body2"
						href={section.url}
						sx={{ p: 1, flexShrink: 0 }}>
						{section.title}
					</Link>
				))}
			</Toolbar>
		</React.Fragment>
	);
}
