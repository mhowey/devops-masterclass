import Typography from "@mui/material/Typography";

import { MdOutlineOpenInNew } from "react-icons/md";
import ContentWrapper from "@root/components/ContentWrapper";
export default function AboutPage() {
  return (
    <ContentWrapper>
      <Typography variant="h2">About This App</Typography>
      <hr />
      <Typography>
        This is a NEXT.js application built to document various aspects of
        DevOps. It is a work in progress and will be updated as I determine what
        to add.
      </Typography>
      <Typography>
        The github repo for this app can be found here:{" "}
        <a
          style={{ whiteSpace: "nowrap" }}
          href="https://github.com/mhowey/devops-masterclass"
          target="_blank"
        >
          https://github.com/mhowey/devops-masterclass
          <MdOutlineOpenInNew style={{ marginBottom: "-3px" }} />
        </a>
      </Typography>
    </ContentWrapper>
  );
}
