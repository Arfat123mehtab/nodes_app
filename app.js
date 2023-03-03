const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//Command to add a note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    
    handler(argv){
       notes.addNotes(argv.title, argv.body)
    }
})

//Command to remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Command to list a note
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler(){
        notes.listNotes()
    }
})

//Command to read a note
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv)




// const command = process.argv[2]

// if (command === 'add')
// {
//     console.log("Adding notes")
// }else if (command === 'remove'){
//     console.log('Removing note')
// } 
// const mssg = getnotes()
// console.log(mssg)

// console.log(chalk.blue.bold.inverse('Success'));


// console.log(process.argv[2])

// const add = require('./utils.js')

// const sum = add(4,3)
// console.log(sum)
