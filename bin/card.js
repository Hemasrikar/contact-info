#!/usr/bin/env node
// Change
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1.5,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Hema Srikar'),
  handle: chalk.cyan('@Hemasrikar'),
  labelWork: chalk.white.bold('      Work:'),
  work: chalk.white('Aerospace Engineer🚀🛰️, Amateur Programmer👨‍💻'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  twitter: chalk.cyan('https://twitter.com/Srikar_ankem'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.cyan('https://github.com/Hemasrikar'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/hemasrikar/'),
  labelEmail: chalk.white.bold('    Email:'),
  email: chalk.cyan('hemasrikar24@gmail.com'),
  // labelWeb: chalk.white.bold('       Web:'),
  // web: chalk.cyan('https://natterstefan.com'),
  labelCard: chalk.white.bold('      Card:'),
  npx: chalk.white('npx hemasrikar'),

}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
// const webing = `${data.labelWeb}  ${data.web}`
const emailing = `${data.labelEmail} ${data.email}`
const carding = `${data.labelCard}  ${data.npx}`


// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  emailing +
  newline +
  newline +
  carding


console.log(chalk.green(boxen(output, options)))
