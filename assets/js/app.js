import $ from 'jquery'

let log = require('./log.js')

log('salut')

let [a,,,b] = [1, 2, 3, 4, 5]

log(a)
log(b)

$('body').css('backgroundColor', 'grey')