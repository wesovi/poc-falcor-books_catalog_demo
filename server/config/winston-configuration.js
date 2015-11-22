import winston from 'winston'

const consoleOptions = {
    colorize    : true,
    prettyPrint : true,
    level       : 'debug',
    label       : 'Proof of Concept with Falcor'
}

const fileOptions = {
    filename    : './data/wesovi.log',
    level       : 'warn',
    json        : false
}

export let logger = {
    transports: [ 
        new winston.transports.Console(consoleOptions),
        new winston.transports.File(fileOptions)
    ],
    meta: true, 
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true, 
    colorStatus: true,
    ignoreRoute: function (req, res) { return false; } 
};