import Typography from "@mui/material/Typography";

export default function AgilePage() {
  return (
    <div>
      <Typography variant="h2">Agile - One Team</Typography>
      <hr />
      <Typography variant="h3">Business + Development = One Team!</Typography>
      <Typography>
        This approach builds software in small iterations called "sprints" that
        are typically 2 to 4 weeks in length. In order to get fast feedback
        after each sprint, all of the steps normally done is a linear fashion
        with the waterfall approach, are accomplished during each sprint.
      </Typography>
      <Typography variant="h3">User Stories</Typography>
      <Typography>
        One user story is started and completed from beginning to end during the
        agile process. Instead of playing the old proverbial "telephone game"
        where the messages are jumbled by the end of the line, there is ongoing
        communication as to product vision and how it compares to the product
        developed.
      </Typography>
      <Typography>
        When performed in smaller increments like this, changes to what was
        implemented because they are not what the Product Owner necessarily
        envisioned, or even perhaps new information came to light causing a
        pivot in strategy that can be made quickly.
      </Typography>
      <Typography variant="h3">Agile Automation</Typography>
      <Typography>
        In order to get the most out of the agile process, opportunities for
        automation are sought out. This allows the team to focus on the
        <em>what</em> and <em>why</em> of the product, and not the <em>how</em>.
      </Typography>
      <Typography variant="h3">Fail Fast</Typography>
      <Typography>
        In order to release regular increments of quality working software, the
        team must be able to fail fast. This means that the team must be able to
        quickly identify when something is not working as expected, and be able
        to quickly recover from that failure.
      </Typography>
      <Typography variant="h3">Unit Testing</Typography>
      <Typography>
        Units tests can be run quickly and often. This allows the team to
        quickly identify when something is not working as expected. Sometimes
        this is due to a an edge case, a change in requirements, or a bug. For
        this reason, unit test coverage is important during development with a
        goal of 80% coverage or higher.
      </Typography>
      <Typography variant="h3">Re-Usable TypeScript Code</Typography>
      <Typography>
        Another form of "automation" is the creation of easily re-usable code or
        other components that are utilized by the team in multiple places. This
        allows the team to focus on the business logic of the product, and not
        the "plumbing". Properly designed and implemented TypeScript classes
        that are well documented and tested can be re-used by the team in
        multiple situations.
      </Typography>
      <Typography variant="h3">
        Re-Usable Components / Component Library
      </Typography>
      <Typography>
        As for components, if there is a common library of somewhat flexible
        components that can be used by the team, this can also speed up
        development. For example, a common component library can be used for
        things like buttons, forms, and other common UI elements. Not only does
        this improve development speed, but it also ensures more consistent
        styling throughout the application.
      </Typography>
      <Typography variant="h3">
        Simplify the Packaging and Deployment Process
      </Typography>
      <Typography>
        Using containerization techniques such as Docker, the team can package
        the application and all of its dependencies into a single image. This
        image can then be deployed to any environment that supports Docker. This
        allows the team to focus on the application, and not the environment
        where it will be deployed. This also allows the team to deploy to
        multiple environments, such as development, staging, and production.
      </Typography>
    </div>
  );
}
