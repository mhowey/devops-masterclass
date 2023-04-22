import { Typography } from "@mui/material";

export default function WhatIsDevOpsPage() {
  return (
    <div>
      <Typography variant="h2">What is DevOps?</Typography>
      <hr />
      <Typography variant="h3">Amazon Web Services Says:</Typography>
      <Typography>
        DevOps is the combination of cultural philosophies, practices, and tools
        that increases an organization`s ability to deliver applications and
        services at high velocity.
      </Typography>

      <Typography variant="h3">
        ChatGPT goes a little more in-depth and says:
      </Typography>
      <Typography>
        DevOps is a term that refers to the combination of software development
        and IT operations. It is a set of practices that aims to bridge the gap
        between software development and operations teams. The goal of DevOps is
        to ensure that software is developed and delivered faster, more
        reliably, and with fewer errors.
      </Typography>
      <Typography>
        The DevOps approach involves collaboration between development,
        operations, and quality assurance teams. It also involves the use of
        automation tools to streamline the software delivery process. DevOps
        practices include Continuous Integration, Continuous Delivery,
        Infrastructure as Code, and Monitoring and Logging.
      </Typography>
      <Typography>
        Continuous Integration (CI) is the practice of regularly integrating
        code changes into a shared repository. This ensures that code changes
        are tested and validated as early as possible in the development
        process.
      </Typography>
      <Typography>
        Continuous Delivery (CD) is the practice of automating the software
        delivery process so that releases can be made quickly and with
        confidence. This involves the use of automated testing, deployment, and
        monitoring tools.
      </Typography>
      <Typography>
        Infrastructure as Code (IaC) is the practice of managing infrastructure
        using code instead of manual processes. This allows infrastructure to be
        versioned, tested, and deployed in a repeatable manner.
      </Typography>
      <Typography>
        Monitoring and Logging are important components of DevOps. They provide
        visibility into the performance and health of the software and
        infrastructure. This allows issues to be detected and resolved quickly.
      </Typography>
      <Typography>
        Overall, DevOps is a set of practices that aims to improve the speed,
        quality, and reliability of software delivery. It involves collaboration
        between development, operations, and quality assurance teams, as well as
        the use of automation tools to streamline the software delivery process.
      </Typography>
      <hr />
      <Typography variant="h2">How did DevOps evolve?</Typography>
      <hr />
      <Typography variant="h3">Waterfall</Typography>
      <Typography>
        Waterfall was the approach where everything was done in a very linear
        fashion similar to how you would approach a real estate project
        <ol>
          <li>Requirements</li>
          <li>Design</li>
          <li>Implementation</li>
          <li>Testing</li>
          <li>Deployment</li>
        </ol>
      </Typography>
      <Typography>
        The problem with the waterall approach was that it could be months
        before the product management and stakeholders could see a working
        version of the application. Of course, we now know that the later in the
        process you make a change, the more costly that change will be.
      </Typography>
      <Typography variant="h3">Communication Issue</Typography>
      <Typography>
        Each step listed above would generate huge amounts of documentation to
        prepare the next step for their effort. The waterfall is very much a
        "throw it over the wall" approach to communication.
      </Typography>
      <Typography variant="h3">Get the Team Together</Typography>
      <Typography>
        After realizing that communication was key to producing the best
        software possible, we started building multi-disciplinary teams from the
        various disciplines such as Business, Development, and Operations.
      </Typography>
      <Typography variant="h3">Automation</Typography>
      <Typography>
        Doing things manually is slow, and error-prone. So we look for
        opportunities to introduce automation. Some areas targeted for
        automation might include:
      </Typography>
      <ul>
        <li>Unit Tests</li>
        <li>Integration Tests</li>
        <li>Package</li>
        <li>Deployment</li>
        <li>Monitoring</li>
      </ul>
      <Typography variant="h3">Quick Feedback</Typography>
      <Typography>
        Having a short feedback loops allows product management to determine if
        the correct application is being constructed before being so far into
        the development process.
      </Typography>
      <Typography variant="h2">Summary</Typography>
      <Typography variant="h3">Three keys to great software are:</Typography>
      <ul>
        <li>Enhanced Communication</li>
        <li>Automation</li>
        <li>Quick Feedback</li>
      </ul>
    </div>
  );
}
