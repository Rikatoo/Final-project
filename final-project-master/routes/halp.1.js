//metal index 0, fuel index 1, food index 2, time index 3, crystal index 4
var mineArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var refineryArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var farmArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var livingQArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var storageArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var barracksArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var machineryArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var meleeAttack1 = [[], [], [], [], [], [], [], [], [], []];
var meleeHealth1 = [[], [], [], [], [], [], [], [], [], []];
var rangeAttack1 = [[], [], [], [], [], [], [], [], [], []];
var rangeHealth1 = [[], [], [], [], [], [], [], [], [], []];
var machineryAttack1 = [[], [], [], [], [], [], [], [], [], []];
var machineryHealth1 = [[], [], [], [], [], [], [], [], [], []];
var specResearchArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var wallArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var meleeArr = [[]];
var rangeArr = [[]];
var machineArr = [[]];

function Users () {
    this.users = [];

    this.addUser = function (username,password) {
        this.users.push(new User(username,password));
    }
}


function User(username, password) {
    this.username = username;
    this.password = password;
    this.race = null;
    this.coordinates = {
        x: "",
        y: ""
    };
    this.structures = {
        mine: 0,
        refinery: 0,
        farm: 0,
        livingQ: 0,
        storage: 0,
        barracks: 0,
        range: 0,
        machinery: 0,
        research: 0,
        specResearch: 0,
        wall: 0
    };
    this.storage = {
        population: 200,
        resources: 500
    };
    this.resources = {
        metal: 500,
        fuel: 500,
        food: 500,
        crystal: 0,
        population: 0,
    };
    this.army = {
        melee1: 0,
        range1: 0,
        machine1: 0
    };
    this.upgradeStructureProcess = {
        process: null,
        type: undefined,
        level: 0,
        time: 0
    };
    this.trainMeleeProcess = {
        process: null,
        count: 0,
        time: 0
    };
    this.trainRangeProcess = {
        process: null,
        count: 0,
        time: 0
    };
    this.trainMachineryProcess = {
        process: null,
        count: 0,
        time: 0
    };
    this.startUpgradingStructure = function (structure) {
        if (this.upgradeStructureProcess.process != null) return;
        var structurelvl;
        switch (structure) {
            case "mine":
                structurelvl = this.structures.mine;
                break;
            case "refinery":
                structurelvl = this.structures.refinery;
                break;
            case "farm":
                structurelvl = this.structures.farm;
                break;
            case "livingQ":
                structurelvl = this.structures.livingQ;
                break;
            case "storage":
                structurelvl = this.structures.storage;
                break;
            case "barracks":
                structurelvl = this.structures.barracks;
                break;
            case "range":
                structurelvl = this.structures.range;
                break;
            case "machinery":
                structurelvl = this.structures.machinery;
                break;
            case "research":
                structurelvl = this.structures.research;
                break;
            case "specResearch":
                structurelvl = this.structures.specResearch;
                break;
            case "wall":
                structurelvl = this.structures.wall;
                break;
        }
        var structuresResNeeded = structure + "Arr";
        if (this.resources.metal >= structuresResNeeded[structurelvl][0] && this.resources.fuel >= structuresResNeeded[structurelvl][1] && this.resources.food >= structuresResNeeded[structurelvl][2]) {
            this.resources.metal -= structuresResNeeded[structurelvl][0];
            this.resources.fuel -= structuresResNeeded[structurelvl][1];
            this.resources.food -= structuresResNeeded[structurelvl][2];
            this.upgradeStructureProcess.level = structurelvl + 1;
            this.upgradeStructureProcess.time = structuresResNeeded[structurelvl][3];
            this.upgradeStructureProcess.type = structure;
            this.upgradeStructureProcess.process = setTimeout.bind(this, upgradeStructure(structure), structuresResNeeded[structurelvl][3] * 1000);
            this.upgradeStructureProcess.process();
        }
    }
    this.upgradeStructure = function (structure) {
        switch (structure) {
            case "mine":
                this.structures.mine++;
                break;
            case "refinery":
                this.structures.refinery++;
                break;
            case "farm":
                this.structures.farm++;
                break;
            case "livingQ":
                this.structures.livingQ++;
                break;
            case "storage":
                this.structures.storage++;
                break;
            case "barracks":
                this.structures.barracks++;
                break;
            case "range":
                this.structures.range++;
                break;
            case "machinery":
                this.structures.machinery++;
                break;
            case "research":
                this.structures.research++;
                break;
            case "specResearch":
                this.structures.specResearch++;
                break;
            case "wall":
                this.structures.wall++;
                break;
        }
        this.upgradeStructureProcess.process = null;
        this.upgradeStructureProcess.level = 0;
        this.upgradeStructureProcess.type = undefined;
        this.upgradeStructureProcess.time = 0;
    }
    this.startTraining = function (unit, count) {
        var length = unit.length;
        var unitType = unit.substr(0, (length - 1)) + "Arr";
        var unitSubType = unit.substr(length);
        if (this.resources.food >= unitType[unitSubType][0] * count && this.resources.fuel >= unitType[unitSubType][1] * count && this.resources.metal >= unitType[unitSubType][2] * count) {
            this.resources.metal -= unitType[unitSubType][0];
            this.resources.fuel -= unitType[unitSubType][1];
            this.resources.food -= unitType[unitSubType][2];
            if (unit.substr(0, (length - 1)) === 'melee') {
                this.trainMeleeProcess.process = setTimeout.bind(this, trainMelee(unitSubType, count), unitType[unitSubType][3] * 1000);
                this.trainMeleeProcess.process();
            }
            if (unit.substr(0, (length - 1)) === 'range') {
                this.trainRangeProcess.process = setTimeout.bind(this, trainRange(unitSubType, count), unitType[unitSubType][3] * 1000);
                this.trainRangeProcess.process();
            }
            if (unit.substr(0, (length - 1)) === 'machine') {
                this.trainMachineryProcess.process = setTimeout.bind(this, trainMachinery(unitSubType, count), unitType[unitSubType][3] * 1000);
                this.trainMachineryProcess.process();
            }
        }
    }
    this.trainMelee = function (unit, count) {
        switch (unit) {
            case 1:
                this.army.melee1++;
                break;
        }
        if (count === 0) {
            this.trainMeleeProcess.process = null;
            this.trainMeleeProcess.count = 0;
            this.trainMeleeProcess.time = 0;
            return;
        }
        this.trainMeleeProcess.count = count;
        this.trainMeleeProcess.time = count * unitType[unitSubType][3];
        this.trainMeleeProcess.process = setTimeout.bind(this, trainMelee(unit, (count - 1)), unitType[unitSubType][3] * 1000);
        this.trainMeleeProcess.process();
    }
    this.trainRange = function (unit, count) {
        switch (unit) {
            case 1:
                this.army.range1++;
                break;
        }
        if (count === 0) {
            this.trainRangeProcess.process = null;
            this.trainRangeProcess.count = 0;
            this.trainRangeProcess.time = 0;
            return;
        }
        this.trainRangeProcess.count = count;
        this.trainRangeProcess.time = count * unitType[unitSubType][3];
        this.trainRangeProcess.process = setTimeout.bind(this, trainRange(unit, (count - 1)), unitType[unitSubType][3] * 1000);
        this.trainRangeProcess.process();
    }
    this.trainMachinery = function (unit, count) {
        switch (unit) {
            case 1:
                this.army.machine1++;
                break;
        }
        if (count === 0) {
            this.trainMachineryProcess.process = null;
            this.trainMachineryProcess.count = 0;
            this.trainMachineryProcess.time = 0;
            return;
        }
        this.trainMachineryProcess.count = count;
        this.trainMachineryProcess.time = count * unitType[unitSubType][3];
        this.trainMachineryProcess.process = setTimeout.bind(this, trainMachinery(unit, (count - 1)), unitType[unitSubType][3] * 1000);
        this.trainMachineryProcess.process();
    }
}