const fs = require('fs')
const path = require('path')
const {flow, camelCase, upperFirst, last} = require('lodash/fp')

const helpCopy = `
Creates a new component, including:
- Containing folder
- Component vue
- Component scss
- Storybook js file

Usage
npm run new-component MyComponentName
  => /components/MyComponentName/{...files}
`

const indexTemplate = (componentName, componentNameSlug) =>
  `<template>
  <div class="${componentNameSlug}">
    <slot />
  </div>
</template>

<script>
export default {
  name: '${componentName}',
  components: {},
  props: {},
  mounted () {},
  data: () => ({})
}
</script>

<style lang="scss">
    @import "./${componentNameSlug}";
</style>
`

const scssTemplate = componentNameSlug =>
  `.${componentNameSlug} {
}
`

const storybookTemplate = (componentName, componentNameSlug) =>
  `import { storiesOf } from '@storybook/vue'
import ${componentName} from './${componentNameSlug}.vue'

storiesOf('${componentName}', module)
  .add('default', () => ({
    components: { ${componentName} },
    template: '<${componentNameSlug}>${componentName} component</${componentNameSlug}>',
    data: () => ({})
  }))`

const mkdir = dirPath => {
  const initDir = path.isAbsolute(dirPath) ? path.sep : ''
  dirPath.split(path.sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(parentDir, childDir)
    if (!fs.existsSync(curDir)) {
      fs.mkdirSync(curDir)
    }
    return curDir
  }, initDir)
}

const pascalCase = flow(camelCase, upperFirst)

const convertToSlug = (Text) => Text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')

const createFiles = (componentPath) => {
  const dirBase = `${__dirname}/../../src/components`
  const initialComponentName = last(componentPath.split('/'))
  const componentName = pascalCase(initialComponentName)
  const componentNameSlug = convertToSlug(componentName)
  const dir = `${dirBase}/${componentPath.replace(initialComponentName, componentName)}`

  console.log(`Creating component: ${componentName}
at ${dir.replace(`${__dirname}/../../`, '')}`)

  mkdir(dir)

  fs.writeFileSync(
    `${dir}/${componentNameSlug}.vue`,
    indexTemplate(componentName, componentNameSlug)
  )

  fs.writeFileSync(
    `${dir}/${componentNameSlug}.scss`,
    scssTemplate(componentNameSlug)
  )

  fs.writeFileSync(
    `${dir}/${componentNameSlug}.story.js`,
    storybookTemplate(componentName, componentNameSlug)
  )

}

const [, , componentPath] = process.argv

if (process.argv[2] === 'help') {
  console.log(helpCopy)
} else if (componentPath) {
  createFiles(componentPath)
} else {
  console.error('Provide a component name')
  process.exit(1)
}
