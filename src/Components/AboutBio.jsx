import { Grid, Typography, Stack } from "@mui/material";
import HeadShot from "../assets/TerryLoftusHeadshot.png";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function AboutBio() {
  const mediaQuerySmall = useMediaQuery("(min-width:768px)");
  const mediaQueryLg = useMediaQuery("(min-width: 1000px)");
  return (
    <Grid container direction={mediaQueryLg ? "column" : "column-reverse"}>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
        direction={mediaQueryLg ? "" : "column-reverse"}
      >
        <Grid item xs={12} sm={8}>
          <Stack direction="column" spacing={1}>
            <Typography
              variant="heroTextHeading"
              sx={{
                textAlign: mediaQueryLg ? "" : "center",
                fontSize: mediaQuerySmall ? "60px" : "45px",
              }}
            >
              Terry Loftus
            </Typography>
            <Typography
              variant="heroText"
              sx={{
                textAlign: mediaQueryLg ? "" : "center",
                fontSize: mediaQuerySmall ? "35px" : "25px",
              }}
            >
              Eagle Sewer District Board Member
            </Typography>

            <Typography
              variant="body"
              pt={2}
              pb={1}
              sx={{ fontSize: mediaQuerySmall ? "26px" : "20px" }}
            >
              Mr. Loftus is running for re-election to the Eagle Sewer Board.
              This is an Ada County election and takes place May 16, 2023. He
              has served on the Board since 2013. His knowledge of sewer systems
              is multi-generational.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          justifyContent="center"
          order={{ xs: 12, sm: 4 }}
        >
          <img
            src={HeadShot}
            alt="Terry Loftus Head Shot"
            style={{
              width: mediaQuerySmall ? "300px" : "200px",
              clipPath: "circle()",
              overflow: "hidden",
              transition: "all 0.5s",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
