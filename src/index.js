#!/usr/bin/env node
const Program = require('./Program')
const ActionDescriptors = require('./ActionDescriptors')

Program(ActionDescriptors).subscribe()
