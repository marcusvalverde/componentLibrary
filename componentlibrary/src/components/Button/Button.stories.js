import React from 'react'
import {Button} from './Button'

export default {
  title: 'Button',
  component: Button,
  }
 
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  size:'medium',
};
export const Secondary = Template.bind({});
Secondary.args = {
  primary:false,
  label: 'Button',
  size: 'medium',
};
export const Large = Template.bind({});
Large.args = {
  primary: true,
  size: 'large',
  label: 'Button',
};
export const Small = Template.bind({});
Small.args = {
  primary: true,
  size: 'small',
  label: 'Button',
};