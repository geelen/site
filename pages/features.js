import styled from 'styled-components'

import Page, { page } from 'components/Page'
import { FeatureGrid, FeatureCell, FeatureTitle as RawFeatureTitle, FeatureDescription } from 'components/FeatureGrid'

import GetStarted from 'components/sections/GetStarted'
import Screencasts from 'components/sections/Screencasts'

const Heading = styled.h2`
  text-align: center;
`

const Description = styled.p`
  padding: ${({ theme }) => theme.textSpacing.s1} 0;
  color: ${({ theme }) => theme.colors.text.subdued};
`

const Link = styled.a`
  ${({ theme }) => theme.textStyles.hyperlink}
`

const FeatureTitle = RawFeatureTitle.withComponent('h3');

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Features"
    title="Features"
    loggedIn={loggedIn}
  >
    <section>
      <Heading>Build agents that give you full control</Heading>
      <img src="https://placeimg.com/547/280/animals" />
      <img src="https://placeimg.com/546/220/animals" />
      <Description>Run the open-source buildkite-agent on your own infrastructure for maximum speed, control, and security. And your source code never leaves your machine.</Description>
      <Description>You can install the agent easily using one of our installers or binaries for almost every platform and architecture, including Ubuntu, Debian, Mac, Windows, Docker, and more.</Description>
    </section>
    <section>
      <Heading>Tools to scale across hundreds or thousands of agents</Heading>
      <img src="https://placeimg.com/547/280/nature" />
      <img src="https://placeimg.com/548/152/nature" />
      <Description>The agent’s <Link href="/TODO">artifact</Link> and <Link href="/TODO">meta-data</Link> storage allows for share-nothing, state-free build jobs that can be easily distributed across any number of agents.</Description>
      <Description>Run up to 10,000 simultaneously connected build agents without breaking a sweat.</Description>

      <img src="https://placeimg.com/547/235/animals" />
      <Description>The <Link href="/TODO">Elastic CI Stack for AWS</Link> gives you an easy to maintain,  elastically scaling CI stack for your entire organization in minutes. Or use the same ops infrastructure you do for production, such as Packer and Terraform.</Description>

      <img src="https://placeimg.com/550/260/animals" />
      <Description>The buildkite-metrics collector allows you to send aggregated build activity to CloudWatch or StatsD. Scale up your testing infrastructure during busy times, and scale down to reduce costs during quiet times.</Description>
    </section>
    <section>
      <Heading>Pipelines that can automate more than just your tests</Heading>
      <img src="https://placeimg.com/542/178/nature" />
      <img src="https://placeimg.com/547/96/nature" />
      <Description>Model delivery pipelines or ops tasks with <Link href="/TODO">custom fields</Link>, and unblock them viLink the web or the API with a full log of who did what when.</Description>

      <img src="https://placeimg.com/542/316/animals" />
      <Description><Link href="/TODO">Dynamically generate pipeline steps</Link>, and even modify running pipelines. Or build your own abstractions and tools for common delivery workflows.</Description>

      <img src="https://placeimg.com/542/348/animals" />
      <Description>Buildkite’s <Link href="/TODO">open-source web interface</Link> allows you to monitor, control and visualize all your pipelines in one place, whilst still having quick access to your own builds.</Description>
      <Description>You can also <Link href="/TODO">create teams</Link>, ensuring only the people with the correct permissions have access to sensitive pipelines.</Description>

      <img src="https://placeimg.com/543/211/tech" />
      <Description>Treat infrastructure as code with <Link href="/TODO">scheduled builds</Link>, separate <Link href="/TODO">agent queues</Link>, <Link href="/TODO">concurrency controls</Link>, and <Link href="/TODO">dynamic pipeline logic</Link>. All using your existing ops scripts and infrastructure.</Description>

      <img src="https://placeimg.com/542/317/tech" />
      <Description>Full control of your environment allows you take full advantage of the latest version of tools, so you can use Docker, SDK betas and pre-release operating systems without any constraints.</Description>
    </section>
    <section>
      <Heading>Build logs that are beautiful and powerful</Heading>
      <img src="https://placeimg.com/542/412/animals" />
      <Description><Link href="/TODO">Embeddable image artifacts</Link>, with inline gif support, means that you can show failures visually, and link directly to the failing piece of code.</Description>

      <img src="https://placeimg.com/542/286/animals" />
      <Description>Add your own, <Link href="/TODO">custom build annotations</Link> using Markdown or HTML. Link to deployments, summarise test failures, or report on your own flakey test analysis.</Description>
      
      <img src="https://placeimg.com/542/238/animals" />
      <Description><Link href="/TODO">Log output grouping</Link>, emoji support, and detailed timing information.</Description>
    </section>
    <section>
      <Heading>Customize any part of the build workflow</Heading>
      <img src="https://placeimg.com/542/239/animals" />
      <Description>The buildkite-agent exposes customizable <Link href="/TODO">agent hooks</Link>, allowing you to add your own high performing checkout logic, integrate with a secret store, expose environment variables, or add your own security checks.</Description>
      
      <img src="https://placeimg.com/542/191/nature" />
      <Description><Link href="/TODO">Webhooks</Link>, <Link href="/TODO">REST APIs</Link> and <Link href="/TODO">GraphQL APIs</Link> allow you to create your own tools and workflows, to fit your team’s needs.</Description>
    </section>
    <section>
      <Heading>Other Features</Heading>
      <FeatureGrid>
        <FeatureCell>
          <FeatureTitle>Source Control Integration</FeatureTitle>
          <FeatureDescription>Full integration with GitHub, GitHub Enterprise, GitLab, BitBucket, and more. Pull request testing TODO.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Chat Integration</FeatureTitle>
          <FeatureDescription>Slack and HipChat integration lets your team team to monitor and control your build pipelines.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Comprehensive APIs</FeatureTitle>
          <FeatureDescription>Build your own cli tools, write chatops bots, or integrate with your internal systems using the REST and GraphQL APIs.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Environment Agnostic</FeatureTitle>
          <FeatureDescription>Buildkite’s environment agnostic design means you can always stay current, and migrate to new technologies as you need.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Docker Support</FeatureTitle>
          <FeatureDescription>The agent has built-in support for running build jobs viLink Docker Compose. Or use your own build scripts for maximum control.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Plugins</FeatureTitle>
          <FeatureDescription>Use the agent’s new plugin system provides out of the box support for a variety of tools. And you can easily write your own.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>SSO and Permissions</FeatureTitle>
          <FeatureDescription>Control which users have access to projects and resources from within your settings page.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Human Support</FeatureTitle>
          <FeatureDescription>TODO.</FeatureDescription>
        </FeatureCell>
      </FeatureGrid>
    </section>

    <Screencasts/>

    <GetStarted/>
  </Page>
))