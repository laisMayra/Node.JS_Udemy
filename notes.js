const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    'Your notes..'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body

        })
        saveNotes(notes)

        console.log(chalk.inverse.green('New note added!'))
    } else {
        console.log(chalk.inverse.red('Note title taken!'))
    }
}

const removeNote = (title) => {

    const notes = loadNotes()
    const resultNotes = notes.filter((note) => note.title != title)

    if (resultNotes.length < notes.length) {
        saveNotes(resultNotes)
        console.log(chalk.inverse.green("Note '" + title + "' removed!"))
    } else {
        console.log(chalk.inverse.red("No note found!"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}