import type { Schema } from '../../data/resource'

export const handler: Schema['sayHello']['functionHandler'] = async (event) => {
  // arguments typed from `.arguments()`
  const { name } = event.arguments
  // return typed from `.returns()`
  console.log(JSON.stringify(event))
  return `Hello, ${name}!`
}
