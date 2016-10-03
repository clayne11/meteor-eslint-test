import { Meteor } from 'meteor/meteor'

export const test = () => {
  import {testMethod} from '/imports/client'
  testMethod()
}
