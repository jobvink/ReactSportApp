var actions = require('actions');

export var trophys = {
    0: {
        id: 0,
        title: 'Zweten',
        description: 'Doe een workout van 1 uur',
        condition: function (state) {
            var hardloopData = state.hardloopData;
            var hardloopDataTimes = [];
            hardloopData.forEach((data) => {
                hardloopDataTimes.push(data.data);
            });
            var fix = false;
            hardloopDataTimes.forEach((item) => {
                if (item >= (60 * 60 )) {
                    fix = true;
                    return true
                }
            });
            return fix;
        }
    },
    1: {
        id: 1,
        title: 'Uithoudingsvermogen',
        description: 'Doe een workout van 2 uur',
        condition: function (state) {
            var hardloopData = state.hardloopData;
            var hardloopDataTimes = [];
            hardloopData.forEach((data) => {
                hardloopDataTimes.push(data.data);
            });
            var fix = false;
            hardloopDataTimes.forEach((item) => {
                if (item >= (2 * 60 * 60 )) {
                    fix = true;
                    return true
                }
            });
            return fix;
        }
    },
    2: {
        id: 2,
        title: 'Marathon renner',
        description: 'Doe een workout van 3 uur',
        condition: function (state) {
            var hardloopData = state.hardloopData;
            var hardloopDataTimes = [];
            hardloopData.forEach((data) => {
                hardloopDataTimes.push(data.data);
            });
            var fix = false;
            hardloopDataTimes.forEach((item) => {
                if (item >= (3 * 60 * 60 )) {
                    fix = true;
                    return true
                }
            });
            return fix;
        }
    },
    3: {
        id: 3,
        title: 'Alles op orde',
        description: 'Vul alle gegevens van je profiel in',
        condition: function (state) {
            var profiel = state.profile;
            var fix = false;
            if (profiel.naam && profiel.geboortedatum && profiel.woonplaats && profiel.werk) {
                fix = true;
                return true;
            }
            return fix;
        }
    },
    4: {
        id: 4,
        title: 'Planner',
        description: 'Maak een sprotschema aan',
        condition: function (state) {
            var schema = state.schema;
            var fix = false;
            if (schema.length > 0) {
                fix = true;
                return true;
            }
            return fix;
        }
    },
};
