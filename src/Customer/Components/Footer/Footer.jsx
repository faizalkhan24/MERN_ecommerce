import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <div className="bg-black text-white text-center mt-10">
      <Grid container sx={{ py: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-3" variant="h6">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-3" variant="h6">
              Blogs
            </Button>
          </div>
          <div>
            <Button className="pb-3" variant="h6">
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-3" variant="h6">
              Jobs
            </Button>
          </div>
          {/* Add more company links as needed */}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-3" variant="h6">
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-3" variant="h6">
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-3" variant="h6">
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-3" variant="h6">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-3" variant="h6">
              Support
            </Button>
          </div>
          {/* Add more solution links as needed */}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-3" variant="h6">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-3" variant="h6">
              API Status
            </Button>
          </div>
          {/* Add more documentation links as needed */}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-3" variant="h6">
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-3" variant="h6">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-3" variant="h6">
              Terms
            </Button>
          </div>
          {/* Add more legal links as needed */}
        </Grid>
      </Grid>

      {/* Bottom Text */}
      <div className="py-3 text-sm text-gray-500">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
