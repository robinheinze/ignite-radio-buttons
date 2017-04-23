const sinon = require('sinon')
const plugin = require('../plugin')

test('removes RadioButtons', async () => {
  const removeModule = sinon.spy()
  const removePluginComponentExample = sinon.spy()

  const context = {
    ignite: { removeModule, removePluginComponentExample }
  }

  await plugin.remove(context)

  expect(removeModule.calledWith('react-native-radio-buttons', { unlink: true })).toEqual(true)
  expect(removePluginComponentExample.calledWith('RadioButtonsExample.js')).toEqual(true)
})
