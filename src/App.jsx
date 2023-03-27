import { Grid, Typography } from "@mui/material";

import Navbar from "./Components/Navbar";
import AboutBio from "./Components/AboutBio";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function App() {
  const mediaQuerySmall = useMediaQuery("(min-width:768px)");
  return (
    <>
      <Navbar />
      <Grid container justifyContent="center">
        <Grid
          sx={{ width: mediaQuerySmall ? "65%" : "85%" }}
          container
          alignItems="center"
          justify="center"
          pt={15}
        >
          <AboutBio />
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            pt={2}
          >
            <Grid item xs={12}>
              <Typography variant="body">
                His family moved from Seattle to Idaho when he was 12 for his
                father’s new job as a Superintendent doing sewer and water work
                all around Boise. He grew up listening to his dad and friends
                discussing best practices in that line of work. Terry began
                working in that industry at the age of 20 until completing an
                Associate of Applied Sciences degree in Electronics Technology
                at Boise State and going to work at Hewlett-Packard.
              </Typography>
            </Grid>
            <Grid item xs={12} pt={5}>
              <Typography variant="body">
                Terry Loftus has been a resident of Eagle for 44 years. He has
                served as the volunteer Secretary-Treasurer on the board of his
                neighborhood water system, Evans Water Corporation and HOA, for
                42 years. He is also the Certified Operator for that water
                system. Terry served on the Eagle Library Board of Trustees from
                1996 to 2006. It was during his tenure there that the current
                Eagle Library was built and he volunteered for several years on
                their budget committee.
              </Typography>
            </Grid>
            <Grid item xs={12} pt={5}>
              <Typography variant="body">
                Terry was employed as an electronics technician for
                Hewlett-Packard for 19 years. His job there moved to Jabil Corp.
                for 16 years. He then returned to the HP Campus working for
                Adecco Technical Services and Mphasis Corp at the same location
                as an electronic engineer until 2019.
              </Typography>
            </Grid>
            <Grid item xs={12} pt={5}>
              <Typography variant="body">
                Since retirement he enjoys serving with the Sewer Board and his
                neighborhood water system. He and his wife have been married for
                45 years and love spending time whenever they can with their
                son, two daughters and three grandchildren.
              </Typography>
            </Grid>
            <Grid item xs={12} pt={5} textAlign="center">
              <Typography variant="heroText">
                Thank You for Your Consideration!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
