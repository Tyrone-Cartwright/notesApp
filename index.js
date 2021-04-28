function getNoteAppId() {
    let noteAppObject = getExistingAppNotes()
    if(!noteAppObject) {
        return 1
    }
    const notesKeysArray = Object.keys(noteAppObject)
    const numKeys = notesKeysArray.map((key) => Number(key))
    console.log(numKeys)
    return Math.max(... numKeys) + 1
}

function getExistingAppNotes() {
    let appNotes = localStorage.getItem('notes')
    if(!appNotes) {
        return null
    }
    return JSON.parse(appNotes)
}