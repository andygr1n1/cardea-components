import { ComponentStory, ComponentMeta } from '@storybook/react'

import CardeaButton from './CardeaButton'

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardeaButton> = args => <CardeaButton {...args} />

const component = Template.bind({})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    type: 'primary',
    children: 'Cardea Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
    type: 'default',
    children: 'Cardea Button',
}

export const Large = Template.bind({})
Large.args = {
    size: 'large',
    children: 'Cardea Button',
}

export const Small = Template.bind({})
Small.args = {
    size: 'small',
    children: 'Cardea Button',
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/CardeaButton',
    component,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CardeaButton>
