import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import Page, { page } from 'components/Page'

const documentationImage = require('../assets/images/support/documentation.jpg')
const feedbackImage = require('../assets/images/contact/feedback.jpg')
const communityChatImage = require('../assets/images/support/community-chat.jpg')
const systemStatusImage = require('../assets/images/support/system-status.jpg')

export default page((props) => (
  <Page
    headTitle="Buildkite Support"
    headDescription="Support resources and Buildkite system status"
    title="Support"
    description="We’re here to help."
    {...props}
  >
    <ActionGrid>
      <ActionGridItem
        heading="Documentation"
        image={documentationImage}
        imageWidth={455}
        imageAlt=""
        description="Find getting started guides, how-to docs, and API documentation."
        url="/docs"
        buttonTitle="View the Docs"
      />
      <ActionGridItem
        heading="Feedback & Suggestions"
        image={feedbackImage}
        imageWidth={466}
        imageAlt=""
        description="Let us know about something you’d like added or improved in Buildkite."
        url="https://github.com/buildkite/feedback/issues"
        buttonTitle="Create a GitHub Issue"
      />
      <ActionGridItem
        heading="Community Chat"
        image={communityChatImage}
        imageWidth={415}
        imageAlt=""
        description="Chat with other developers using Buildkite in our open community Slack."
        url="https://chat.buildkite.com"
        buttonTitle="Request an Invite"
      />
      <ActionGridItem
        heading="System Status"
        image={systemStatusImage}
        imageWidth={452}
        imageAlt=""
        description="Check the health of Buildkite’s critical components and services."
        url="https://buildkitestatus.com"
        buttonTitle="Visit buildkitestatus.com"
      />
    </ActionGrid>

    <Callout
      heading="Need Help?"
      description="If you can’t find an answer to your question, send us an email and we’ll help you out."
      url="mailto:support@buildkite.com"
      buttonTitle="Email support@buildkite.com"
    />
  </Page>
))