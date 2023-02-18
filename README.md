Bahmni MF Template
----------------------

### Setup Steps

1. Install nvm
2. Install node>=15
3. Install yarn - https://yarnpkg.com/en/docs/install

### Build

1. Install dependencies - `yarn`
2. Build - `yarn build`
3. Test - `yarn test`

### Setup for Translations

Translations can be added under the public/locales folder. Create a folder/rename the sampke folder.
This folder name should be configured into the name space (ns) while initializing i18n. This can be changed at- 
`src/i18n/index.ts`

i18n backend has been configured which loads the translation files from the path configured in `loadPath`
Language is automatically detected from the browser.

More on react-18next configurations [https://react.i18next.com/getting-started]

### Use this template

You can create a new repository by using this template(Use the option from the top)