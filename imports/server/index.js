import { Meteor } from 'meteor/meteor'
import { test } from './main'

Meteor.startup(() => {
  test()
})
