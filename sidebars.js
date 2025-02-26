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
          label: 'Rust',
          collapsed: false,
          collapsible: true,
          items: [
            'sdks/rust/installation',
            {
              type: 'category',
              label: 'Usage',
              items: [
                'sdks/rust/usage/overview',
                'sdks/rust/usage/config',
                'sdks/rust/usage/wallet',
                'sdks/rust/usage/account',
                'sdks/rust/usage/deposit',
                'sdks/rust/usage/spend',
                'sdks/rust/usage/scanner',
                'sdks/rust/usage/synchronizer',
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Flutter',
          collapsed: false,
          collapsible: true,
          items: [
              'sdks/flutter/installation',
              {
                type: 'category',
                label: 'Usage',
                items: [
                    'sdks/flutter/usage/overview',
                    'sdks/flutter/usage/config',
                    'sdks/flutter/usage/wallet',
                    'sdks/flutter/usage/account',
                    'sdks/flutter/usage/deposit',
                    'sdks/flutter/usage/spend',
                    'sdks/flutter/usage/scanner',
                    'sdks/flutter/usage/synchronizer',
                ]
              },
          ]
        },
        {
          type: 'category',
          label: 'JavaScript',
          collapsed: false,
          collapsible: true,
          items: [
            'sdks/javascript/installation',
            {
              type: 'category',
              label: 'Usage',
              items: [
                'sdks/javascript/usage/overview',
                'sdks/javascript/usage/config',
                'sdks/javascript/usage/wallet',
                'sdks/javascript/usage/account',
                'sdks/javascript/usage/asset',
                'sdks/javascript/usage/deposit',
                'sdks/javascript/usage/spend',
                'sdks/javascript/usage/synchronizer',
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'NodeJs',
          collapsed: false,
          collapsible: true,
          items: [
            'sdks/nodejs/installation',
            {
              type: 'category',
              label: 'Usage',
              items: [
                'sdks/nodejs/usage/overview',
                'sdks/nodejs/usage/config',
                'sdks/nodejs/usage/wallet',
                'sdks/nodejs/usage/account',
                'sdks/nodejs/usage/deposit',
                'sdks/nodejs/usage/spend',
                'sdks/nodejs/usage/scanner',
                'sdks/nodejs/usage/synchronizer',
              ]
            },
          ]
        },
      ]
    },
    roller,
    relayer,
  ]
}

