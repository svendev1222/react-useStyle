import React from "react";
// import "./TroubleshootABREdgeCases.css";
import stockPhoto from '../../stockphoto.jpg'

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
  troubleshootAbrEdgeCases : {
    alignItems: "flex-start",
    backgroundColor: "var(--white)",
    display: "flex",
    height: "1196px",
    minWidth: "600px",
  },
  overlapGroup11 : {
    alignItems: "flex-start",
    backgroundColor: "var(--pattens-blue)",
    display: "flex!important",
    flexDirection: "column!important",
    marginLeft: "162px",
    minHeight: "1196px",
    padding: "44px 20px",
    width: "438px",
  },
  overlapGroup21 : {
    height: "92px",
    position: "relative",
    width: "366px",
  },
  dmserifdisplayNormalTuatara18px : {
    color: "var(--tuatara)",
    fontFamily: "var(--font-family-dm_serif_display)!important",
    fontSize: "var(--font-size-xxl)!important",
    fontStyle: "normal",
    fontWeight: "400!important",
  },
  droidsansRegularNormalMountainMist8pxTop : {
    color: "var(--mountain-mist)",
    fontFamily: "var(--font-family-droid_sans-regular)!important",
    fontSize: "var(--font-size-s)!important",
    fontStyle: "normal",
    fontWeight: "400!important",
  },
  graphTabs1 : {
    alignItems: "flex-start",
    display: "flex",
    height: "13px",
    left: 0,
    minWidth: "299px",
    position: "absolute",
    top: "79px",
  },
  overlapGroup1 : {
    height: 13,
    marginLeft: 3,
    position: "relative",
    width: 187,
  },
  droidsansBoldCerulean8px : {
    color: "var(--cerulean)",
    fontFamily: "var(--font-family-droid_sans-bold)c",
    fontSize: "var(--font-size-s)!important",
    fontStyle: "normal!important",
    fontWeight: "700!important",
  },
  dmserifdisplayNormalBlack14pxText : {
    color: "var(--black)",
    fontFamily: "var(--font-family-dm_serif_display)!important",
    fontSize: "var(--font-size-xl)!important",
    fontStyle: "normal",
    fontWeight: "400!important",
  },
  dmsansNormalChicago9pxText : {
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)!important",
    fontSize: "var(--font-size-m)!important",
    fontStyle: "normal!important",
    fontWeight: "400!important",
  },
  flexRow3 : {
    alignItems: "flex-start",
    display: "flex",
    marginTop: 6,
    minWidth: 366,
  },
  rectangle : {
    backgroundColor: "var(--mist-gray)",
    height: 94,
    width: 177,
  },
  rectangle1 : {
    backgroundColor: "var(--mist-gray)",
    height: 94,
    width: 177,
    marginLeft: 12,
  },
  whatCanWeHelpYouWith1 : {
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
  productRequirements1 : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 13,
    letterSpacing: 0,
    width: 103,
    color: "var(--mountain-mist)",
    fontFamily: "var(--font-family-droid_sans-regular)",
    fontSize: "var(--font-size-s)",
    fontStyle: 'normal',
    fontWeight: 400,
  },
  apiIntegration1 : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 13,
    left: 78,
    letterSpacing: 0,
    position: "absolute",
    top: 0,
    width: 109,
    color: "var(--mountain-mist)",
    fontFamily: "var(--font-family-droid_sans-regular)",
    fontSize: "var(--font-size-s)",
    fontStyle: 'normal',
    fontWeight: 400,
  },
  abrEdgeCases1 : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 13,
    left: 0,
    letterSpacing: 0,
    position: "absolute",
    top: 0,
    width: 115,
    color: "var(--cerulean)",
    fontFamily: "var(--font-family-droid_sans-bold)",
    fontSize: "var(--font-size-s)",
    fontStyle: "normal",
    fontWeight: 700,
  },
  autoBracketRemovalEdgeCases : {
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
  abrWorksWellOnAr : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 30,
    letterSpacing: 0,
    marginTop: 16,
    width: 355,
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)",
    fontSize: "var(--font-size-m)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  onBracketsThatInt : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 30,
    letterSpacing: 0,
    marginTop: 16,
    width: 355,
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)",
    fontSize: "var(--font-size-m)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  flexRow4 : {
    alignItems: "flex-start",
    display: "flex",
    minWidth: 366,
  },
  ifNeededForYourD : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 30,
    letterSpacing: 0,
    marginTop: 6,
    width: 355,
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)",
    fontSize: "var(--font-size-m)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  scanQualityAlsoAf : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 46,
    letterSpacing: 0,
    marginTop: 24,
    width: 381,
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)",
    fontSize: "var(--font-size-m)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  flexRow5 : {
    alignItems: "flex-start",
    display: "flex",
    marginTop: 5,
    minWidth: 366,
  },
  excessMaterialSuch : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 30,
    letterSpacing: 0,
    marginTop: 30,
    width: 355,
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)",
    fontSize: "var(--font-size-m)",
    fontStyle: "normal",
    fontWeight: 400,
  },
  flexRow3 : {
    alignItems: "flex-start",
    display: "flex",
    marginTop: 6,
    minWidth: 366,
  },
  tooManyTeethMissi : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 232,
    letterSpacing: 0,
    marginTop: 30,
    width: 355,
    color: "var(--chicago)",
    fontFamily: "var(--font-family-dm_sans)",
    fontSize: "var(--font-size-m)",
    fontStyle: "normal",
    fontWeight: 400,
  }

}));


function TroubleshootABREdgeCases(props) {
  const classes = useStyles();
//   const {
//     spanText1,
//     spanText2,
//     spanText3,
//     spanText4,
//     spanText5,
//     spanText6,
//     spanText7,
//     spanText8,
//     spanText9,
//     spanText10,
//     spanText11,
//   } = props;

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid className={classes.containerCenterHorizontal} container rowSpacing={2}>
          <Grid className={classes.troubleshootAbrEdgeCases}>
            <div className={classes.overlapGroup11}>
              <div className={classes.overlapGroup21}>
                <div className={classes.whatCanWeHelpYouWith1}>
                    <Typography className={classes.dmserifdisplayNormalTuatara18px}>What can we help you with?</Typography>
                </div>
                <div className={classes.graphTabs1}>
                  <div className={classes.productRequirements1}>
                    <Typography className={classes.droidsansRegularNormalMountainMist8pxTop}>Product Requirements</Typography>
                  </div>
                  <div className={classes.overlapGroup1}>
                    <div className={classes.apiIntegration1}>
                      <Typography className={classes.droidsansRegularNormalMountainMist8pxTop}>API Integration</Typography>
                    </div>
                    <div className={classes.abrEdgeCases1}>
                      <Typography className={classes.droidsansBoldCerulean8px}>ABR Edge Cases</Typography>
                    </div>
                  </div>
                </div>
              </div>
              <p className={classes.autoBracketRemovalEdgeCases}>
                <Typography className={classes.dmserifdisplayNormalBlack14pxText}>Auto Bracket Removal Edge Cases</Typography>
              </p>
              <p className={classes.abrWorksWellOnAr}>
                <Typography className={classes.dmsansNormalChicago9pxText}>ABR works well on arches with brackets only, with minimal artifacts, high triangle count, and healthy gums:</Typography>
              </p>
              <div className={classes.flexRow3}>
                <img src={stockPhoto} className={classes.rectangle} />
                <img src={stockPhoto}  className={classes.rectangle1} />
              </div>
              <p className={classes.onBracketsThatInt}>
                  <Typography className={classes.dmsansNormalChicago9pxText}>On brackets that intersect the gums, the margin will often be smoothed:</Typography>
              </p>
              <div className={classes.flexRow4}>
                <img src={stockPhoto}  className={classes.rectangle} />
                <img src={stockPhoto}  className={classes.rectangle1} />
              </div>
              <p className={classes.ifNeededForYourD}>
                  <Typography className={classes.dmsansNormalChicago9pxText}>If needed for your dental appliance, the margin can be easily touched up in post processing with 3rd party tools such as MeshMixer</Typography>
              </p>
              <p className={classes.scanQualityAlsoAf}>
                  <Typography className={classes.dmsansNormalChicago9pxText}>Scan quality also affects bracket removal. If there is a significant amount of occlusion, it is harder for ABR to generate smooth surfaces. In the following example, there are occlusions intersecting the gum line causing the output to have overly smoothed margins:</Typography>
              </p>
              <div className={classes.flexRow5}>
                <img src={stockPhoto} className={classes.rectangle} />
                <img src={stockPhoto} className={classes.rectangle1} />
              </div>
              <p className={classes.excessMaterialSuch}>
                  <Typography className={classes.dmsansNormalChicago9pxText}>Excess material such as glue on the tooth that is not in the direct vicinity of the bracket will not be processed by ABR:</Typography>
              </p>
              <div className={classes.flexRow3}>
                <img src={stockPhoto}  className={classes.rectangle} />
                <img src={stockPhoto}  className={classes.rectangle1} />
              </div>
              <p className={classes.tooManyTeethMissi}>
                  <Typography className={classes.dmsansNormalChicago9pxText}><>Too many teeth missing in a single arch can sometimes fail our initial quality check and return an error or can sometimes make it through processing with some minor touch-ups required. <br /><br /><br />We can remove large attachments, but smaller attachments are often not touched by our removal algorithm. These can be easily touched-up in our file editor.<br /><br /><br />DamonQ brackets or other large brackets can be difficult to remove since less of the original tooth is scanned. This can lead to excess material that needs to be touched up or overly smoothed gingival margins.<br /><br /><br />Files with pre-existing bases are usually very inconsistent, so we cannot guarantee the quality of a file with a pre-existing base. Especially if it leaves minimal space between the gingival margin and the beginning of the base, processed results from Company might end up visually unappealing.</></Typography>
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TroubleshootABREdgeCases;
