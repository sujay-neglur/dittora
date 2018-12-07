let StudyLevels = {
    HS: 'high_school',
    CGP: 'CEGEP',
    Undergrad: 'undergraduate',
    Masters: 'graduate',
    Doctorate: 'doctorate',
    'Higher Diploma' : 'post-doc'
};

let WorkType = {
    PT: 'part_time',
    FT: 'full_time'
};

let Response = {
    YES: 'yes',
    NO: 'no'
};

let check = function (input, type) {
    let result;
    if (type === 'study') {
        switch (input) {
            case 'hs':
                result = StudyLevels.HS
                break;
            case 'cgp':
                result= StudyLevels.CGP;
                break;
            case 'ugd':
                result= StudyLevels.Undergrad;
                break;
            case 'gd':
                result= StudyLevels.Masters;
                break;
            case 'dc':
                result= StudyLevels.Doctorate;
                break;
            case 'hd':
                result= StudyLevels["Higher Diploma"];
                break;
        }
        return result;
    }

    if (type === 'work') {
        switch (input) {
            case 'pt':
                result = WorkType.PT;
                break;
            case 'ft':
                result = WorkType.FT;
                break;
        }
        return result;
    }
    if (type === 'resp') {
        switch (input) {
            case 'y':
                result = Response.YES;
                break;
            case 'n':
                result = Response.NO;
                break;
        }
        return result;
    }
}

module.exports = {
    StudyLevels,
    WorkType,
    Response,
    check
};