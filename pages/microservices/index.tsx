import ContentWrapper from "@root/components/ContentWrapper";
import Typography from "@mui/material/Typography";

export default function MicroservicesPage() {
  return (
    <ContentWrapper>
      <Typography variant="h2">Microservices</Typography>
      <hr />
      <Typography>
        Microservices are a way to break up your application into smaller
        pieces. This is done to make it easier to scale and maintain.
      </Typography>
    </ContentWrapper>
  );
}
