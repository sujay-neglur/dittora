export const addUser = (id = '', {
                            token = '',
                            firstName = ''
                        } = {}
) => ({
    type: 'ADD_USER',
    users: {
        id,
        token,
        firstName

    }
});

export const addName = (id, {
    gender = '',
    ethnicity = '',
    birthDate = '',
    city = ''
                 } = {}
                 ) => ({
    type: 'ADD_ABOUT',
    id,
    users: {
        gender,
        ethnicity,
        birthDate,
        city
    }
});

export const addAcademia1 = (id, {
                                 isStudent = ''
                             } = {}
) => ({
    type: 'ADD_ACADEMIA_1',
    id,
    //updates
    users: {
        isStudent
    }
});

export const addAcademia2 = (id, {
                                 typeOfStudent = ''
                             } = {}
) => ({
    type: 'ADD_ACADEMIA_2',
    id,
    //updates
    users: {
        typeOfStudent
    }
});

export const addAcademia3 = (id, {
                                 schoolName = '',
                                 typeOfDiploma = '',
                                 diplomaName = '',
                                 cgpaInSchool = '',
                                 totalCgpaInSchool = ''
                             } = {}
) => ({
    type: 'ADD_ACADEMIA_3',
    id,
    //updates
    users: {
        schoolName,
        typeOfDiploma,
        diplomaName,
        cgpaInSchool,
        totalCgpaInSchool
    }
});


export const addAcademia4 = (id, {
    typeOfStudent = '',
    currentUniversity = '',
    currentStatus = '',
    typeOfDegree = '',
    programName = '',
    currentStatusTwo = '',
    typeOfDegreeTwo = '',
    programNameTwo = '',
    selectedStartDate = '',
    selectedEndDate = '',
    academicObtainedMarks = '',
    academicTotalMarks = '',
    currentProgramSatisfactionMeter = '',
    currentRelationshipWithOtherPeopleInProgramMeter = '',
    currentStressInSemesterMeter = ''
                             } = {}
) => ({
    type: 'ADD_ACADEMIA_4',
    id,
    //updates
    users: {
        typeOfStudent,
        currentUniversity,
        currentStatus,
        typeOfDegree,
        programName,
        currentStatusTwo,
        typeOfDegreeTwo,
        programNameTwo,
        selectedStartDate,
        selectedEndDate,
        academicObtainedMarks,
        academicTotalMarks,
        currentProgramSatisfactionMeter,
        currentRelationshipWithOtherPeopleInProgramMeter,
        currentStressInSemesterMeter
    }
});

export const addAcademia5 = (id, {
    universityPast = '',
    universityGraduate = '',
    statusPast = '',
    typeOfDegreePast = '',
    programNamePast = '',
    programName = '',
    statusTwoPast = '',
    typeOfDegreeTwoPast = '',
    programNameTwoPast = '',
    universityTwoPast = '',
    overallAcademicPerformanceMeterPast = '',
    programSatisfactionMeterPast = '',
    relationshipWithOtherPeopleInProgramMeterPast = '',
    stressInSemesterMeterPast = ''
                             } = {}
) => ({
    type: 'ADD_ACADEMIA_5',
    id,
    //updates
    users: {
        universityPast,
        universityGraduate,
        statusPast,
        typeOfDegreePast,
        programNamePast,
        programName,
        statusTwoPast,
        typeOfDegreeTwoPast,
        programNameTwoPast,
        universityTwoPast,
        overallAcademicPerformanceMeterPast,
        programSatisfactionMeterPast,
        relationshipWithOtherPeopleInProgramMeterPast,
        stressInSemesterMeterPast
    }
});

export const addAcademia6 = (id, {
                                 highestAcademicAchievement = ''
                             } = {}
) => ({
    type: 'ADD_ACADEMIA_6',
    id,
    //updates
    users: {
        highestAcademicAchievement
    }
});


export const addAcademia7 = (id, {
                                 typeOfStudentPast = '',
                                 universityPast = '',
    statusPast = '',
                                 typeOfDegreePast = '',
                                 programNamePast = '',
    statusTwoPast = '',
                                 typeOfDegreeTwoPast = '',
                                 programNameTwoPast = '',
    overallAcademicPerformanceMeterPast = '',
    programSatisfactionMeterPast = '',
    relationshipWithOtherPeopleInProgramMeterPast = '',
    stressInSemesterMeterPast  = ''
                             } = {}
) => ({
    type: 'ADD_ACADEMIA_7',
    id,
    //updates
    users: {
        typeOfStudentPast,
        universityPast,
        statusPast,
        typeOfDegreePast,
        programNamePast,
        statusTwoPast,
        typeOfDegreeTwoPast,
        programNameTwoPast,
        overallAcademicPerformanceMeterPast,
        programSatisfactionMeterPast,
        relationshipWithOtherPeopleInProgramMeterPast,
        stressInSemesterMeterPast
    }
});



export const addAcademia8 = (id, {
                                 typeOfStudentPastGraduate = '',
    universityPast = '',
                                 universityPastGraduate = '',
    statusPast = '',
    typeOfDegreePast = '',
    programNamePast = '',
    programNamePastGraduate = '',
    statusTwoPast = '',
    typeOfDegreeTwoPast = '',
    programNameTwoPast = '',
    universityTwoPast = '',

    overallAcademicPerformanceMeterPast = '',
    programSatisfactionMeterPast = '',
    relationshipWithOtherPeopleInProgramMeterPast = '',
    stressInSemesterMeterPast  = ''
                             } = {}
) => ({
    type: 'ADD_ACADEMIA_8',
    id,
    //updates
    users: {
        typeOfStudentPastGraduate,
        universityPast,
        universityPastGraduate,
        statusPast,
        typeOfDegreePast,
        programNamePast,
        programNamePastGraduate,
        statusTwoPast,
        typeOfDegreeTwoPast,
        programNameTwoPast,
        universityTwoPast,

        overallAcademicPerformanceMeterPast,
        programSatisfactionMeterPast,
        relationshipWithOtherPeopleInProgramMeterPast,
        stressInSemesterMeterPast
    }
});





export const addTransferStudent1 = (id, {
                                 isTransferStudent = ''
                             } = {}
) => ({
    type: 'ADD_TRANSFER_STUDENT_1',
    id,
    //updates
    users: {
        isTransferStudent
    }
});


export const addTransferStudent2 = (id, {
                                 pastProgramName = '',
                                 reasonToLeave = ''


                             } = {}
) => ({
    type: 'ADD_TRANSFER_STUDENT_2',
    id,
    //updates
    users: {
        pastProgramName,
        reasonToLeave
    }
});


export const addWorkExperience1 = (id, {
                                        isWorking = '',



                                    } = {}
) => ({
    type: 'ADD_WORK_EXPERIENCE_1',
    id,
    //updates
    users: {
        isWorking
    }
});

export const addWorkExperience2 = (id, {
    jobPosition = '',
    jobPositionRelated = '',
    currentJobLikingMeter = ''


                                    } = {}
) => ({
    type: 'ADD_WORK_EXPERIENCE_2',
    id,
    //updates
    users: {
        jobPosition,
        jobPositionRelated,
        currentJobLikingMeter
    }
});


export const addWorkExperience3 = (id, {
                                       hasWorked = '',



                                   } = {}
) => ({
    type: 'ADD_WORK_EXPERIENCE_3',
    id,
    //updates
    users: {
        hasWorked
    }
});


export const addWorkExperience4 = (id, {
    pastJobPosition = '',
    pastJobPositionRelated = '',
    pastJobLikingMeter = ''

                                    } = {}
) => ({
    type: 'ADD_WORK_EXPERIENCE_4',
    id,
    //updates
    users: {
        pastJobPosition,
        pastJobPositionRelated,
        pastJobLikingMeter
    }
});


export const addFavSubs = (id, {
                                       selectedFavSubs = [],


                                   } = {}
) => ({
    type: 'ADD_FAV_SUBS',
    id,
    //updates
    users: {
        selectedFavSubs,

    }
});


export const addHobbies = (id, {
                               hobbies = [],


                           } = {}
) => ({
    type: 'ADD_HOBBIES',
    id,
    //updates
    users: {
        hobbies,

    }
});


export const addValues = (id, {
    workAloneVsWithPeople = '',
    practicalLearningVsAcademicEnvironment = '',
    doingTheJobVsDirectingOthers  = '',
    RiskTakingVsNoRisk = '',
    independentContributorVsTeamPlayer = '',
    valuesList = [],
    hobbies  = [],
    favoriteSubjects = ''
                           } = {}
) => ({
    type: 'ADD_VALUES',
    id,
    //updates
    users: {
        workAloneVsWithPeople,
        practicalLearningVsAcademicEnvironment,
        doingTheJobVsDirectingOthers,
        RiskTakingVsNoRisk,
        independentContributorVsTeamPlayer,
        valuesList,
        hobbies,
        favoriteSubjects

    }
});

export const addBig5 = (id, {
    lifeOfTheParty = '',
    sympatheticTOthers = '',
    doChoresRightAway = '',
    frequentMoodSwings = '',
    vividImagination = '',
    doNotTalkALot = '',
    notInterestedInOthersProblems = '',
    forgetToPutThingsBackInPlace = '',
    relaxedMostOfTheTime = '',
    notInterestedInAbstractIdeas = '',
    talkToDifferentPeopleAtParties = '',
    feelOthersEmotions = '',
    likeOrder = '',
    getUpsetEasily = '',
    difficultyUnderstandingAbstractIdeas = '',
    keepInBackground = '',
    notInterestedInOthers = '',
    makeMessOfThings = '',
    seldomFeelBlue = '',
    doNotHaveGoodImagination = '',


                          } = {}
) => ({
    type: 'ADD_BIG5',
    id,
    //updates
    users: {
        lifeOfTheParty,
        sympatheticTOthers,
        doChoresRightAway,
        frequentMoodSwings,
        vividImagination,
        doNotTalkALot,
        notInterestedInOthersProblems,
        forgetToPutThingsBackInPlace,
        relaxedMostOfTheTime,
        notInterestedInAbstractIdeas,
        talkToDifferentPeopleAtParties,
        feelOthersEmotions,
        likeOrder,
        getUpsetEasily,
        difficultyUnderstandingAbstractIdeas,
        keepInBackground,
        notInterestedInOthers,
        makeMessOfThings,
        seldomFeelBlue,
        doNotHaveGoodImagination

    }
});

/*
export const addProfession = (id, updates) => ({
    type: 'ADD_PROFESSION',
    id,
    updates
});*/
