import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import TroubleshootProductRequirements from "./components/TroubleshootProductRequirements";
import TroubleshootABREdgeCases from "./components/TroubleshootABREdgeCases";
import TroubleshootAPIIntegration from "./components/TroubleshootAPIIntegration";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/troubleshoot-product-requirements">
          <TroubleshootProductRequirements {...troubleshootProductRequirementsData} />
        </Route>
        <Route path="/troubleshoot-abr-edge-cases">
          <TroubleshootABREdgeCases {...troubleshootABREdgeCasesData} />
        </Route>
        <Route path="/troubleshoot-api-integration">
          <TroubleshootAPIIntegration {...troubleshootAPIIntegrationData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const troubleshootProductRequirementsData = {
    spanText1: "What can we help you with?",
    spanText2: "Product Requirements",
    spanText3: "API Integration",
    spanText4: "ABR Edge Cases",
    spanText5: "Understanding Company product requirements",
    spanText6: "Company’s automated product generates a list of xyz coordinates for trimming retainers and aligners.",
    spanText7: "Resolution: ",
    spanText8: <>The dental arch should have at minimum 100k triangles or be around 5MB for an STL file. Meshes with less resolution will yield results that are not as smooth.<br /><br /></>,
    spanText9: "Orientation: ",
    spanText10: <>The arch can be in any orientation. The output will be created in reference to the orientation of the input arch unless the user optionally selects to use Company’s automated trim &amp; base afterward which can align the base to z=0 for immediate 3D printing.<br /><br /></>,
    spanText11: "Quality: ",
    spanText12: "The arch should not have excess or large artifacts and also should not contain significant occlusions (see below). Arches that have brackets with wires have unreliable performance, however arches brackets and no wires are acceptable input, and can optionally be removed using Company’s automated bracket removal product. Arches with small holes and normal artifacts will still yield a good quality trimline. Base: We are unable to process pre-based models.",
    line8: "/img/line-8-2@2x.png",
    spanText13: "Example cases",
    spanText14: "This arch is a good input example. It has enough gum area to trim from, teeth are well defined, no excess artifacts.",
    spanText15: "This arch is also an example that would work well for trim base.",
    spanText16: "This is an example of an arch with excess artifacts. Especially when the artifacts intersect the desired trimline, we cannot consistently create a valid output for these types of input.",
    spanText17: "Since this has a hollow base, we currently cannot generate a trimline for these, but we’re working on adding support for this.",
};

const troubleshootABREdgeCasesData = {
    spanText1: "What can we help you with?",
    spanText2: "Product Requirements",
    spanText3: "API Integration",
    spanText4: "ABR Edge Cases",
    spanText5: "Auto Bracket Removal Edge Cases",
    spanText6: "ABR works well on arches with brackets only, with minimal artifacts, high triangle count, and healthy gums:",
    spanText7: "On brackets that intersect the gums, the margin will often be smoothed:",
    spanText8: "If needed for your dental appliance, the margin can be easily touched up in post processing with 3rd party tools such as MeshMixer.",
    spanText9: "Scan quality also affects bracket removal. If there is a significant amount of occlusion, it is harder for ABR to generate smooth surfaces. In the following example, there are occlusions intersecting the gum line causing the output to have overly smoothed margins:",
    spanText10: "Excess material such as glue on the tooth that is not in the direct vicinity of the bracket will not be processed by ABR:",
    spanText11: <>Too many teeth missing in a single arch can sometimes fail our initial quality check and return an error or can sometimes make it through processing with some minor touch-ups required. <br /><br /><br />We can remove large attachments, but smaller attachments are often not touched by our removal algorithm. These can be easily touched-up in our file editor.<br /><br /><br />DamonQ brackets or other large brackets can be difficult to remove since less of the original tooth is scanned. This can lead to excess material that needs to be touched up or overly smoothed gingival margins.<br /><br /><br />Files with pre-existing bases are usually very inconsistent, so we cannot guarantee the quality of a file with a pre-existing base. Especially if it leaves minimal space between the gingival margin and the beginning of the base, processed results from Company might end up visually unappealing.</>,
};

const troubleshootAPIIntegrationData = {
    spanText1: "What can we help you with?",
    spanText2: "Product Requirements",
    spanText3: "API Integration",
    spanText4: "ABR Edge Cases",
    spanText5: "API Integration: Intro",
    spanText6: <>What is an API (Application Programming Interface)?<br /></>,
    spanText7: <><br />An API is a software intermediary that allows two applications to talk to each other.<br /><br />Company’s API has two primary points (endpoints) of communication: model upload and model download.<br /><br />Any other application can use these API endpoints to upload a model and received a processed model.</>,
    spanText8: <>How does Company’s API fit into your workflow?<br /></>,
    spanText9: <><br />You can send whichever scans you like to our API through the upload API endpoint. You can select which Company products you’d like applied to a specific scan (bracket removal, trimming, basing, etc). <br /><br />Company can also automatically detect if a scan has brackets or not. This way, you can submit all scans and we will only return scans with brackets. If you would like to have automatic bracket detection enabled on your account, contact a support agent to discuss pricing options.<br /><br />Include practice_id in prescription API call to receive analytics<br /><br />After about a minute, your processed scan will be ready and available for download from our download API endpoint.</>,
    line8: "/img/line-8-2@2x.png",
    spanText10: "Integration Scenarios",
    spanText11: "Possible integration and testing solutions for Company API integration.",
    spanText12: "Scenario 1: ",
    spanText13: "Split dev and production pipeline with local developers",
    spanText14: <>Register with the large dental lab plan and obtain API keys<br /><br />Integrate to dev server with large dental lab plan using the 14-day free trial<br /><br />Integration usually consists of a checkbox for the user to select ABR or other products, if the scan is submitted with a checked box, then the file is sent through the Company API and received as an extra file in the prescription.<br /><br />Use Company code samples and API docs as guidelines for integration.<br /><br />Test with your own or provided sample scans through the API and/or the dashboard<br /><br />Push changes to production server</>,
    spanText15: "Scenario ",
    spanText16: "2",
    spanText17: ": ",
    spanText18: "Only production pipeline",
    spanText19: <>Register with large dental lab plan and obtain API keys<br /><br />Test ABR and other products through the Company dashboard<br /><br />Test integration through Company code samples as standalone code in the language of production code<br /><br />Add integration code to use the standalone code directly to production pipeline</>,
    spanText20: "Scenario ",
    spanText21: "3",
    spanText22: ": ",
    spanText23: "Outsourced development & other custom options",
    spanText24: "Set up an appointment with a Company developer ",
    spanText25: "here",
    spanText26: ".",
};

