import React from "react";
// import "./TroubleshootAPIIntegration.css";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  containerCenterHorizontal : {
    display: "flex!important",
    flexDirection: "row!important",
    justifyContent: "center!important",
    pointerEvents: "none!important",
    width: "100%!important",
  },
  troubleshootApiIntegration : {
    alignItems: "flex-start",
    backgroundColor: "var(--white)",
    display: "flex",
    height: 1196,
    minWidth: 600,
  },
  overlapGroup12 : {
    alignItems: "flex-start",
    backgroundColor: "var(--pattens-blue)",
    display: "flex",
    flexDirection: "column",
    marginLeft: 162,
    marginTop: -27,
    minHeight: 1223,
    padding: "71px 20px",
    width: 438,
  },
  overlapGroup5 : {
    height: 92,
    position: "relative",
    width: 366,
  },
  dmserifdisplayNormalTuatara18pxText : {
    color: "var(--tuatara)",
    fontFamily: "var(--font-family-dm_serif_display)!important",
    fontSize: "var(--font-size-xxl)!important",
    fontStyle: "normal",
    fontWeight: "400!important",
  },
  graphTabs2 : {
    alignItems: "flex-start",
    display: "flex",
    height: 13,
    left: 0,
    minWidth: 299,
    position: "absolute",
    top: 79,
  },
  droidsansRegularNormalMountainMist8pxText : {
    color: "var(--mountain-mist)",
    fontFamily: "var(--font-family-droid_sans-regular)!important",
    fontSize: "var(--font-size-s)!important",
    fontStyle: "normal",
    fontWeight: "400!important",
  },  
  droidsansBoldCerulean8pxText : {
    color: "var(--cerulean)",
    fontFamily: "var(--font-family-droid_sans-bold)c",
    fontSize: "var(--font-size-s)!important",
    fontStyle: "normal!important",
    fontWeight: "700!important",
  },
  overlapGroup2 : {
    height: 13,
    marginLeft: 3,
    position: "relative",
    width: 187,
  },
  dmserifdisplayNormalBlack14pxText : {
    color: "var(--black)",
    fontFamily: "var(--font-family-dm_serif_display)!important",
    fontSize: "var(--font-size-xl)!important",
    fontStyle: "normal",
    fontWeight: "400!important",
  },
  dmsansBoldBlack9pxText : {
    color: "var(--black)",
    fontFamily: "var(--font-family-dm_sans)!important",
    fontSize: "var(--font-size-m)!important",
    fontStyle: "normal!important",
    fontWeight: "700!important",
  },
  dmsansNormalChicago9pxText : {
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)!important",
    fontSize: "var(--font-size-m)!important",
    fontStyle: "normal!important",
    fontWeight: "400!important",
  },
  overlapGroup3 : {
    height: "122px!important",
    marginLeft: "1px!important",
    marginTop: "65px!important",
    position: "relative!important",
    width: 386,
  },
  droidsansRegularNormalGray11pxText : {
    color: "var(--gray)",
    fontFamily: "var(--font-family-droid_sans-regular)!important",
    fontSize: "var(--font-size-l)!important",
    fontStyle: "normal",
    fontWeight: "400!important",
  },
  overlapGroup4 : {
    height: 186,
    marginLeft: 1,
    marginTop: "30px!important",
    position: "relative",
    width: 386,
  },
  droidsansBoldCerulean9pxText : {
    color: "var(--cerulean)",
    fontFamily: "var(--font-family-droid_sans-bold)!important",
    fontSize: "var(--font-size-m)!important",
    fontStyle: "normal!important",
    fontWeight: "700!important",
  },
  droidsansRegularNormalCerulean9pxText : {
    color: "var(--cerulean)!important",
    fontFamily: "var(--font-family-droid_sans-regular)!important",
    fontSize: "var(--font-size-m)!important",
    fontStyle: "normal",
    fontWeight: "400!important",
  },
  overlapGroup22 : {
    height: 36,
    marginLeft: 1,
    marginTop: "50px!important",
    position: "relative",
    width: 386,
  },
  span1 : {
    color:"var(--cerulean)",
    fontFamily: "var(--font-family-dm_sans)!important",
    fontSize: "var(--font-size-m)!important",
    fontWeight: "400!important",
  },
  scenario : {
    left: 0,
    letterSpacing: 0,
    position: "absolute",
    top: 0,
    width: 366,
    color: "var(--cerulean)",
    fontFamily: "var(--font-family-droid_sans-bold)!important",
    fontSize: "var(--font-size-m)!important",
    fontStyle: "normal",
    fontWeight: "700!important",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  registerWith : {
    left: 20,
    letterSpacing: 0,
    position: "absolute",
    top: 22,
    width: 366,
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)!important",
    fontSize: "var(--font-size-m)!important",
    fontStyle: "normal",
    fontWeight: "400!important",
  },
  registerWith3 : {
    left: 20,
    letterSpacing: 0,
    position: "absolute",
    top: 22,
    width: 366,
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)!important",
    fontSize: "var(--font-size-m)!important",
    fontStyle: "normal",
    fontWeight: "400!important",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  line81 : {
    height: 1,
    marginLeft: 1,
    marginTop: "19px!important",
    width: 368,
  },
  whatCanWeHelpYouWith2 : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 91,
    left: 0,
    letterSpacing: 0,
    position: "absolute",
    top: 0,
    width: 366,
    color: "var(--tuatara)",
    fontFamily: "var(--font-family-dm_serif_display)",
    fontSize: "var(--font-size-xxl)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  productRequirements2 : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 13,
    letterSpacing: 0,
    width: 103,
    color: "var(--mountain-mist)",
    fontFamily: 'var(--font-family-droid_sans-regular)',
    fontSize: "var(--font-size-s)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  apiIntegration2 : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 13,
    left: 78,
    letterSpacing: 0,
    position: "absolute",
    top: 0,
    width: 109,
    color: "var(--cerulean)",
    fontFamily: "var(--font-family-droid_sans-bold)",
    fontSize: "var(--font-size-s)",
    fontStyle: "normal",
    fontWeight: 700,
  },
  abrEdgeCases2 : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 13,
    left: 0,
    letterSpacing: 0,
    position: "absolute",
    top: 0,
    width: 115,
    color: "var(--mountain-mist)",
    fontFamily: 'var(--font-family-droid_sans-regular)',
    fontSize: "var(--font-size-s)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  apiIntegrationIntro : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 19,
    letterSpacing: 0,
    marginTop: 19,
    width: 366,
    color: "var(--black)",
    fontFamily: "var(--font-family-dm_serif_display)",
    fontSize: "var(--font-size-xl)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  whatIsAnApiAppl : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 121,
    letterSpacing: 0,
    marginTop: 16,
    width: 366,
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)",
    fontSize: "var(--font-size-m)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  howDoesCompanysA : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 191,
    letterSpacing: 0,
    marginTop: 5,
    width: 366,
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)",
    fontSize: "var(--font-size-m)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  integrationScenarios : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 19,
    letterSpacing: 0,
    marginTop: 20,
    width: 366,
    color: "var(--black)",
    fontFamily: "var(--font-family-dm_serif_display)",
    fontSize: "var(--font-size-xl)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  possibleIntegration : {
    letterSpacing: 0,
    marginTop: 12,
    minHeight: 24,
    width: 366,
    color: "var(--gray)",
    fontFamily: "var(--font-family-droid_sans-regular)",
    fontSize: "var(--font-size-l)",
    fontStyle: "normal",
    fontWeight: 400,
  }
  

}));

function TroubleshootAPIIntegration(props) {
  const classes = useStyles();
  // const {
  //   spanText1,
  //   spanText2,
  //   spanText3,
  //   spanText4,
  //   spanText5,
  //   spanText6,
  //   spanText7,
  //   spanText8,
  //   spanText9,
  //   line8,
  //   spanText10,
  //   spanText11,
  //   spanText12,
  //   spanText13,
  //   spanText14,
  //   spanText15,
  //   spanText16,
  //   spanText17,
  //   spanText18,
  //   spanText19,
  //   spanText20,
  //   spanText21,
  //   spanText22,
  //   spanText23,
  //   spanText24,
  //   spanText25,
  //   spanText26,
  // } = props;

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid className={classes.containerCenterHorizontal} container rowSpacing={2}>
          <div className={classes.troubleshootApiIntegration}>
            <div className={classes.overlapGroup12}>
              <div className={classes.overlapGroup5}>
                <div className={classes.whatCanWeHelpYouWith2}>
                    <Typography className={classes.dmserifdisplayNormalTuatara18pxText}>What can we help you with?</Typography>
                </div>
                <div className={classes.graphTabs2}>
                  <div className={classes.productRequirements2}>
                      <Typography className={classes.droidsansRegularNormalMountainMist8pxText}>Product Requirements</Typography>
                  </div>
                  <div className={classes.overlapGroup2}>
                    <div className={classes.apiIntegration2}>
                        <Typography className={classes.droidsansBoldCerulean8pxText}>API Integration</Typography>
                    </div>
                    <div className={classes.abrEdgeCases2}>
                        <Typography className={classes.droidsansRegularNormalMountainMist8pxText}>ABR Edge Cases</Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.apiIntegrationIntro}>
                  <Typography className={classes.dmserifdisplayNormalBlack14pxText}>API Integration: Intro</Typography>
              </div>
              <p className={classes.whatIsAnApiAppl}>
                  <Typography className={classes.dmsansBoldBlack9pxText}><>What is an API (Application Programming Interface)?<br /></></Typography>
                  <Typography className={classes.dmsansNormalChicago9pxText}><><br />An API is a software intermediary that allows two applications to talk to each other.<br /><br />Company’s API has two primary points (endpoints) of communication: model upload and model download.<br /><br />Any other application can use these API endpoints to upload a model and received a processed model.</></Typography>
              </p>
              <p className={classes.howDoesCompanysA}>
                  <Typography className={classes.dmsansBoldBlack9pxText}><>How does Company’s API fit into your workflow?<br /></></Typography>
                  <span className={classes.dmsansNormalChicago9pxText}><><br />You can send whichever scans you like to our API through the upload API endpoint. You can select which Company products you’d like applied to a specific scan (bracket removal, trimming, basing, etc). <br /><br />Company can also automatically detect if a scan has brackets or not. This way, you can submit all scans and we will only return scans with brackets. If you would like to have automatic bracket detection enabled on your account, contact a support agent to discuss pricing options.<br /><br />Include practice_id in prescription API call to receive analytics<br /><br />After about a minute, your processed scan will be ready and available for download from our download API endpoint.</></span>
              </p>
              <img className={classes.line81} src="/img/line-8-2@2x.png" />
              <div className={classes.integrationScenarios}>
                  <Typography className={classes.dmserifdisplayNormalBlack14pxText}>Integration Scenarios</Typography>
              </div>
              <p className={classes.possibleIntegration}>
                <Typography className={classes.droidsansRegularNormalGray11pxText}>Possible integration and testing solutions for Company API integration.</Typography>
              </p>
              <div className={classes.overlapGroup4}>
                <p className={classes.scenario}>
                  <span className={classes.droidsansBoldCerulean9pxText}>Scenario 1: </span>
                  <span className={classes.droidsansRegularNormalCerulean9px}>Split dev and production pipeline with local developers</span>
                </p>
                <p className={classes.registerWith}>
                  <Typography className={classes.dmsansNormalChicago9pxText}><>Register with the large dental lab plan and obtain API keys<br /><br />Integrate to dev server with large dental lab plan using the 14-day free trial<br /><br />Integration usually consists of a checkbox for the user to select ABR or other products, if the scan is submitted with a checked box, then the file is sent through the Company API and received as an extra file in the prescription.<br /><br />Use Company code samples and API docs as guidelines for integration.<br /><br />Test with your own or provided sample scans through the API and/or the dashboard<br /><br />Push changes to production server</></Typography>
                </p>
              </div>
              <div className={classes.overlapGroup3}>
                <p className={classes.scenario}>
                  <span className={classes.droidsansBoldCerulean9pxText}>Scenario </span>
                  <span className={classes.droidsansBoldCerulean9pxText}>2</span>
                  <span className={classes.droidsansBoldCerulean9pxText}>: </span>
                  <span className={classes.droidsansRegularNormalCerulean9pxText}>Only production pipeline</span>
                </p>
                <p className={classes.registerWith}>
                  <Typography className={classes.dmsansNormalChicago9pxText}><>Register with large dental lab plan and obtain API keys<br /><br />Test ABR and other products through the Company dashboard<br /><br />Test integration through Company code samples as standalone code in the language of production code<br /><br />Add integration code to use the standalone code directly to production pipeline</></Typography>
                </p>
              </div>
              <div className={classes.overlapGroup22}>
                <p className={classes.scenario}>
                  <Typography className={classes.droidsansBoldCerulean9pxText}>Scenario </Typography>
                  <Typography className={classes.droidsansBoldCerulean9pxText}>3</Typography>
                  <Typography className={classes.droidsansBoldCerulean9pxText}>: </Typography>
                  <Typography className={classes.droidsansRegularNormalCerulean9pxText}>Outsourced development & other custom options</Typography>
                </p>
                <p className={classes.registerWith3}>
                  <Typography className={classes.dmsansNormalChicago9pxText}>Set up an appointment with a Company developer </Typography>
                  <Typography className={classes.span1}>here</Typography>
                  <Typography className={classes.dmsansNormalChicago9pxText}>:</Typography>
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TroubleshootAPIIntegration;
