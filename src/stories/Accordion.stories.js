import Accordion from '../components/Accordion'

export default {
  title: "Components/Accordion",
  component: Accordion,
}

const Template = args => <Accordion {...args} />

export const accordion = Template.bind({})
