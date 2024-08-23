/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const relayer = {
  type: 'category',
  label: 'Relayer',
  collapsible: false,
  className: 'menu_outer_list',
  items: [
      'relayer/overview'
  ]
}

const roller = {
  type: 'category',
  label: 'Roller',
  collapsible: false,
  className: 'menu_outer_list',
  items: [
      'roller/overview'
  ]
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

export default {
  mainSidebar: [
    {
      type: 'category',
      label: 'INTRODUCTION',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'doc',
          id: 'readme',
        },
        {
          type: 'link',
          label: 'Mystiko Network',
          href: 'https://mystiko.network/'
        },
      ]
    },
    {
      type: 'category',
      label: 'SDKs',
      collapsible: false,
      className: 'menu_outer_list menu_outer_list--margin-top',
      items: [
        {
          type: 'category',
          label: 'Core',
          collapsed: false,
          collapsible: true,
          className: 'sidebar__logo sidebar__logo--appkit',
          items: [
              'core/overview'
          ]
        },
      ]
    },
    relayer,
    roller,
  ]
}

