import Checkbox from '../components/Checkbox'

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Checkbox {...args} />

export const check = Template.bind({})

export const radio = Template.bind({})

radio.args = {
  type: "radio"
}