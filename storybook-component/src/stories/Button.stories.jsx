import React from 'react';

import { Button } from './Button';
import Icon from './store.svg';

export default {
  title: 'devchalleng/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>{args.label}</Button>;

export const Default = Template.bind({});
Default.args = {
  label: 'Default'
}

export const OutLine = Template.bind({})
OutLine.args = {
  variant: 'outline',
  label: 'Default'
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  label: 'Default'
}

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  disableShadow: true,
  label: 'Default'
}

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled'
}

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: Icon,
  label: 'Default'
}

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: Icon,
  label: 'Default'
}

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Default'
}

export const Middle = Template.bind({});
Middle.args = {
  size: 'md',
  label: 'Default'
}

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Default'
}

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Secondary'
}

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
  label: 'Danger'
}