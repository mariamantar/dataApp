// classification types
function getClassification(classification) {
    const associatedClassification = {
        '1': 'HUMAN',
        '2': 'ALLOWED',
        '3': 'MALICIOUS'
    }
    return associatedClassification[classification] || 'UNKNOWN'
}

// mode types 
function getMode(mode) {
    const associatedMode = {
        '1': 'BYPASS',
        '2': 'INSPECT',
        '3': 'MITIGATE'
    }
    return associatedMode[mode] || 'UNKNOWN'
}

exports.getClassification = getClassification;
exports.getMode = getMode;
