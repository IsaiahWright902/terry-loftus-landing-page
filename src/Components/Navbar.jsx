import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="navHeader" sx={{ flexGrow: 1 }}>
            Terry Loftus
          </Typography>
          <Link
            sx={{ color: "white", transition: "all 0.5s" }}
            href="https://adacounty.id.gov/elections/candidate-filings/#:~:text=6%2Dyear%20terms-,Terry%20Loftus,-6%2Dyear%20term"
            target="_blank"
          >
            Candidate Filing
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
