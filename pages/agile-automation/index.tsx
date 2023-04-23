import { Typography, Box } from "@mui/material";
import ContinuousFeedbackDiagram from "@root/components/diagrams/ContinuousFeedbackDiagram";
import ContentWrapper from "@root/components/ContentWrapper";

export default function AgileAutomationPage() {
  return (
    <ContentWrapper>
      <Typography variant="h2">Agile Automation</Typography>
      <hr />
      <Typography variant="h3">Continuous Integration</Typography>
      <Typography>
        Everytime we check in code to our source control system, we should be
        running all of our code quality checks. This includes things like
        security checks, unit tests, integration tests, static code analysis
        tools (like Sonar) and any other checks that are part of our CI/CD
        pipeline.
      </Typography>
      <Typography variant="h3">Jenkins</Typography>
      <Typography>
        One of the most used continuous integration tools and possibly one of
        the first is Jenkins. Jenkins is a Java application that can be
        installed on a server and configured to run jobs. Jobs are the
        individual tasks that are run as part of the CI/CD pipeline. These jobs
        can be configured to run on a schedule, or can be triggered by a commit
        to the source control system.
      </Typography>
      <Typography variant="h3">Continuous Feedback</Typography>
      <Typography>
        By ensuring the quality and completeness of our code continuously we can
        get feedback on the quality of our code as we are developing it. This
        allows us to make changes as we go, and not have to wait until the end
        of the project to find out that we have a problem. This is a key part of
        the agile process.
      </Typography>
      <Box style={{ marginTop: "20px", border: "1px solid" }}>
        <Typography variant="h3">Continuous Feedback Diagram</Typography>
        <ContinuousFeedbackDiagram />
      </Box>
      <Typography variant="h3">Continuous Delivery</Typography>
      <Typography>
        Continuous delivery is the process of getting the software into the
        hands of the users as quickly as possible. This is done by automating
        the build, test, and deployment process. This allows us to get feedback
        from the users as quickly as possible, and to make changes to the
        software as needed. This is a key part of the agile process in that it
        allows the product owner and stakeholders to see the software as it is
        being developed and to provide feedback on what is working and what is
        not. This iterative approach to development helps to ensure that the
        final product meets the needs of the users.
      </Typography>
    </ContentWrapper>
  );
}
