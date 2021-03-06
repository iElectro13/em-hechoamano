module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '50':  '#f9fafb',
          '100': '#f0f1f3',
          '200': '#d9dbdf',
          '300': '#b7bbc2',
          '400': '#8f959f',
          '500': '#6e7582',
          '600': '#555e6e',
          '700': '#3e4859',
          '800': '#283242',
          '900': '#131f30',
        },
        cerise: {
          '50':  '#fff6f6',
          '100': '#ffefef',
          '200': '#f9d3d3',
          '300': '#eaa6a6',
          '400': '#e56d6d',
          '500': '#d93c3e',
          '600': '#bd0e0f',
          '700': '#930705',
          '800': '#680605',
          '900': '#470201',
        },
        orange: {
          '50':  '#fff8f1',
          '100': '#fbecdf',
          '200': '#f6d7bf',
          '300': '#e5ad8b',
          '400': '#d67a4a',
          '500': '#c4540b',
          '600': '#9c4303',
          '700': '#713707',
          '800': '#4a2702',
          '900': '#2c1b01',
        },
        leaf: {
          '50':  '#edfafa',
          '100': '#d5f5f6',
          '200': '#aae7ea',
          '300': '#69c8ce',
          '400': '#13a2ad',
          '500': '#0d828d',
          '600': '#056874',
          '700': '#06505c',
          '800': '#043744',
          '900': '#01222f',
        },
        fa: {
          '50':  '#fff5fb',
          '100': '#fdeaf5',
          '200': '#fbd2e9',
          '300': '#e9a7cc',
          '400': '#de6ea8',
          '500': '#d53485',
          '600': '#b90263',
          '700': '#90084c',
          '800': '#5e1734',
          '900': '#301820',
        },
        
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'handlee': ['Handlee', 'cursive']
      },
      visibility: ["group-hover"]
    },
  },
  plugins: [],
}
