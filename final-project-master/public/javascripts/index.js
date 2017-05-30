var app = angular.module('indexApp', ['ngRoute']);

app.factory('ContactService', function ($window) {
    var mineArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var refineryArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var farmArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var livingQArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var storageArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var barracksArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var machineryArr = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var meleeAttack1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var researchArr = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var meleeHealth1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var rangeAttack1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var rangeHealth1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var machineryAttack1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var machineryHealth1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var specResearchArr = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var wallArr = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var meleeArr = [[50, 50, 50, 3]];
    var rangeArr = [[50, 50, 50, 3]];
    var machineArr = [[50, 50, 50, 3]];


    function User() {
        this.username = "koko";
        this.password = "koko";
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
        this.researches = {
            Melee1: {
                attack: 0,
                health: 0
            },
            Range1: {
                attack: 0,
                health: 0
            },
            Machine1: {
                attack: 0,
                health: 0
            }
        };
        this.resourceGain = {
            mineProcess: null,
            refineryProcess: null,
            farmProcess: null,
        }
        this.specResearches = {

        };
        this.upgradeStructureProcess = {
            process: null,
            type: undefined,
            level: 0,
            time: 0
        };
        this.trainMeleeProcess = {
            process: null,
            type: 0,
            count: 0,
            time: 0
        };
        this.trainRangeProcess = {
            process: null,
            type: 0,
            count: 0,
            time: 0
        };
        this.trainMachineryProcess = {
            process: null,
            type: 0,
            count: 0,
            time: 0
        };
        this.researchProcess = {
            process: null,
            level: 0,
            time: 0,
            type: null,
            unitType: null
        };
        this.startUpgradingStructure = function (structure) {
            // if (this.upgradeStructureProcess.process != null) return;
            var self = this;
            var structurelvl, structuresResNeeded;
            switch (structure) {
                case "mine":
                    structurelvl = this.structures.mine;
                    structuresResNeeded = mineArr;
                    break;
                case "refinery":
                    structurelvl = this.structures.refinery;
                    structuresResNeeded = refineryArr;
                    break;
                case "farm":
                    structurelvl = this.structures.farm;
                    structuresResNeeded = farmArr;
                    break;
                case "livingQ":
                    structurelvl = this.structures.livingQ;
                    structuresResNeeded = livingQArr;
                    break;
                case "storage":
                    structurelvl = this.structures.storage;
                    structuresResNeeded = storageArr;
                    break;
                case "barracks":
                    structurelvl = this.structures.barracks;
                    structuresResNeeded = barracksArr;
                    break;
                case "range":
                    structurelvl = this.structures.range;
                    structuresResNeeded = rangeArr;
                    break;
                case "machinery":
                    structurelvl = this.structures.machinery;
                    structuresResNeeded = machineryArr;
                    break;
                case "research":
                    structurelvl = this.structures.research;
                    structuresResNeeded = researchArr;
                    break;
                case "specResearch":
                    structurelvl = this.structures.specResearch;
                    structuresResNeeded = specResearchArr;
                    break;
                case "wall":
                    structurelvl = this.structures.wall;
                    structuresResNeeded = wallArr;
                    break;
            }
            if (this.resources.metal >= structuresResNeeded[structurelvl][0] && this.resources.fuel >= structuresResNeeded[structurelvl][1] && this.resources.food >= structuresResNeeded[structurelvl][2]) {
                this.resources.metal -= structuresResNeeded[structurelvl][0];
                this.resources.fuel -= structuresResNeeded[structurelvl][1];
                this.resources.food -= structuresResNeeded[structurelvl][2];
                this.upgradeStructureProcess.level = structurelvl + 1;
                this.upgradeStructureProcess.time = structuresResNeeded[structurelvl][3];
                this.upgradeStructureProcess.type = structure;
                this.upgradeStructureProcess.process = function () {
                    // what is this anymore
                    self.upgradeStructureProcess.process = setTimeout.call(window, self.upgradeStructure(structure), structuresResNeeded[structurelvl][3] * 1000)
                };
                self.upgradeStructureProcess.process();
            }
        }
        this.gain = function (type) {
            if (type === "metal") {
                this.resources.metal += 5;
            }
            if (type === "fuel") {
                this.resources.fuel += 5;
            }
            if (type === "food") {
                this.resources.food += 5;
            }
            gain(type);
        }
        this.upgradeStructure = function (structure) {
            var self = this;
            switch (structure) {
                case "mine":
                    if (self.resourceGain.mineProcess !== null) {
                        clearTimeout(self.resourceGain.mineProcess);
                    }
                    this.structures.mine++;
                    self.resourceGain.mineProcess = setTimeout.call(window, self.upgradeStructure("metal"), 10000);
                    break;
                case "refinery":
                    if (self.resourceGain.mineProcess !== null) {
                        clearTimeout(self.resourceGain.refineryProcess);
                    }
                    this.structures.refinery++;
                    self.resourceGain.refineryProcess = setTimeout.call(window, self.upgradeStructure("fuel"), 10000);
                    break;
                case "farm":
                    if (self.resourceGain.mineProcess !== null) {
                        clearTimeout(self.resourceGain.farmProcess);
                    }
                    this.structures.farm++;
                    self.resourceGain.farmProcess = setTimeout.call(window, self.upgradeStructure("food"), 10000);
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
            var self = this;
            var unitType;
            var unitSubType = Number(unit.charAt(unit.length - 1));
            console.log(unit);
            switch (unit) {
                case "melee1": unitType = meleeArr; break;
                case "range1": unitType = rangeArr; break;
                case "machinery1": unitType = machineryArr; break;
            }
            if (self.resources.food >= unitType[unitSubType - 1][0] * count && self.resources.fuel >= unitType[unitSubType - 1][1] * count && self.resources.metal >= unitType[unitSubType - 1][2] * count) {
                self.resources.metal -= unitType[unitSubType - 1][0];
                self.resources.fuel -= unitType[unitSubType - 1][1];
                self.resources.food -= unitType[unitSubType - 1][2];
                if (unit === 'melee1') {
                    self.trainMeleeProcess.process = setTimeout.call(window, self.trainMelee(unitSubType, count), unitType[unitSubType][3] * 1000);
                    self.trainMeleeProcess.type = unitSubType;
                    self.trainMeleeProcess.process();
                }
                if (unit === 'range1') {
                    self.trainRangeProcess.process = setTimeout.call(window, self.trainRange(unitSubType, count), unitType[unitSubType][3] * 1000);
                    self.trainRangeProcess.type = unitSubType;
                    self.trainRangeProcess.process();
                }
                if (unit === 'machinery1') {
                    self.trainMachineryProcess.process = setTimeout.call(window, self.trainMachinery(unitSubType, count), unitType[unitSubType][3] * 1000);
                    self.trainMachineryProcess.type = unitSubType;
                    self.trainMachineryProcess.process();
                }
            }
        }
        this.trainMelee = function (unit, count) {
            var self = this;
            switch (unit) {
                case 1:
                    self.army.melee1++;
                    break;
            }
            self.resources.population++;
            if (count === 0) {
                self.trainMeleeProcess.process = null;
                self.trainMeleeProcess.type = 0;
                self.trainMeleeProcess.count = 0;
                self.trainMeleeProcess.time = 0;
                return;
            }
            self.trainMeleeProcess.count = count;
            self.trainMeleeProcess.time = count * unitType[unitSubType][3];
            self.trainMeleeProcess.process = setTimeout.call(window, self.trainMelee(unit, (count - 1)), unitType[unitSubType][3] * 1000);
            self.trainMeleeProcess.process();
        }
        this.trainRange = function (unit, count) {
            var self = this;
            switch (unit) {
                case 1:
                    self.army.range1++;
                    break;
            }
            self.resources.population++;
            if (count === 0) {
                self.trainRangeProcess.process = null;
                self.trainRangeProcess.type = 0;
                self.trainRangeProcess.count = 0;
                self.trainRangeProcess.time = 0;
                return;
            }

            self.trainRangeProcess.count = count;
            self.trainRangeProcess.time = count * unitType[unitSubType][3];
            self.trainRangeProcess.process = setTimeout.call(window, self.trainRange(unit, (count - 1)), unitType[unitSubType][3] * 1000);
            self.trainRangeProcess.process();
        }
        this.trainMachinery = function (unit, count) {
            var self = this;
            console.log("ha")

            switch (unit) {
                case 1:
                    self.army.machine1++;
                    break;
            }
            self.resources.population++;
            if (count === 0) {
                self.trainMachineryProcess.process = null;
                self.trainMachineryProcess.type = 0;
                self.trainMachineryProcess.count = 0;
                self.trainMachineryProcess.time = 0;
                return;
            }
            self.trainMachineryProcess.count = count;
            self.trainMachineryProcess.time = count * unitType[unitSubType][3];
            self.trainMachineryProcess.process = setTimeout.call(window, self.trainMachinery(unit, (count - 1)), unitType[unitSubType][3] * 1000);
            self.trainMachineryProcess.process();
        }
        // meleeAttack1 meleeHealth1 rangeAttack1 rangeHealth1 machineryAttack1 machineryHealth1
        this.startUpgrading = function (type) {
            var self = this;
            var typeArr = type.split("_");
            if (typeArr[0] === "melee1") {
                if (typeArr[1] === "attack") {
                    var unitSubType = Number(typeArr[0].substr(unit.length - 1))
                    if (self.resources.food >= unitType[unitSubType - 1][0] && self.resources.fuel >= unitType[unitSubType - 1][1] && self.resources.metal >= unitType[unitSubType - 1][2]) {
                        self.researchProcess.level = self.research.melee1.attack + 1;
                        self.researchProcess.type = "attack";
                        self.researchProcess.unitType = "melee1";
                        self.resources.metal -= meleeAttack1[unitSubType - 1][0];
                        self.resources.fuel -= meleeAttack1[unitSubType - 1][1];
                        self.resources.food -= meleeAttack1[unitSubType - 1][2];
                        self.researchProcess.process = setTimeout.call(window, self.upgrade(self.researchProcess.unitType + self.researchProcess.type), unitType[unitSubType - 1][3] * 1000);
                        self.researchProcess.process();
                    }
                }
                if (typeArr[1] === "health") {
                    var unitSubType = Number(typeArr[0].substr(unit.length - 1))
                    if (self.resources.food >= unitType[unitSubType - 1][0] && self.resources.fuel >= unitType[unitSubType - 1][1] && self.resources.metal >= unitType[unitSubType - 1][2]) {
                        self.researchProcess.level = self.research.melee1.health + 1;
                        self.researchProcess.type = "health";
                        self.researchProcess.unitType = "melee1";
                        self.resources.metal -= meleeHealth1[unitSubType - 1][0];
                        self.resources.fuel -= meleeHealth1[unitSubType - 1][1];
                        self.resources.food -= meleeHealth1[unitSubType - 1][2];
                        self.researchProcess.process = setTimeout.call(window, self.upgrade(self.researchProcess.unitType + self.researchProcess.type), unitType[unitSubType - 1][3] * 1000);
                        self.researchProcess.process();
                    }
                }
            }
            if (typeArr[0] === "range1") {
                if (typeArr[1] === "attack") {
                    var unitSubType = Number(typeArr[0].substr(unit.length - 1))
                    if (self.resources.food >= unitType[unitSubType - 1][0] && self.resources.fuel >= unitType[unitSubType - 1][1] && self.resources.metal >= unitType[unitSubType - 1][2]) {
                        self.researchProcess.level = self.research.range1.attack + 1;
                        self.researchProcess.type = "attack";
                        self.researchProcess.unitType = "range1";
                        self.resources.metal -= rangeAttack1[unitSubType - 1][0];
                        self.resources.fuel -= rangeAttack1[unitSubType - 1][1];
                        self.resources.food -= rangeAttack1[unitSubType - 1][2];
                        self.researchProcess.process = setTimeout.call(window, self.upgrade(self.researchProcess.unitType + self.researchProcess.type), unitType[unitSubType - 1][3] * 1000);
                        self.researchProcess.process();
                    }
                }
                if (typeArr[1] === "health") {
                    var unitSubType = Number(typeArr[0].substr(unit.length - 1))
                    if (self.resources.food >= rangeHealth1[unitSubType - 1][0] && self.resources.fuel >= rangeHealth1[unitSubType - 1][1] && self.resources.metal >= rangeHealth1[unitSubType - 1][2]) {
                        self.researchProcess.level = self.research.range1.health + 1;
                        self.researchProcess.type = "health";
                        self.researchProcess.unitType = "range1";
                        self.resources.metal -= rangeHealth1[unitSubType - 1][0];
                        self.resources.fuel -= rangeHealth1[unitSubType - 1][1];
                        self.resources.food -= rangeHealth1[unitSubType - 1][2];
                        self.researchProcess.process = setTimeout.call(window, self.upgrade(self.researchProcess.unitType + self.researchProcess.type), unitType[unitSubType - 1][3] * 1000);
                        self.researchProcess.process();
                    }
                }
            }
            if (typeArr[0] === "machinery1") {
                if (typeArr[1] === "attack") {
                    var unitSubType = Number(typeArr[0].substr(unit.length - 1))
                    if (self.resources.food >= unitType[unitSubType - 1][0] && self.resources.fuel >= unitType[unitSubType - 1][1] && self.resources.metal >= unitType[unitSubType - 1][2]) {
                        self.researchProcess.level = self.research.machinery1.attack + 1;
                        self.researchProcess.type = "attack";
                        self.researchProcess.unitType = "machinery1";
                        self.resources.metal -= machineryAttack1[unitSubType - 1][0];
                        self.resources.fuel -= machineryAttack1[unitSubType - 1][1];
                        self.resources.food -= machineryAttack1[unitSubType - 1][2];
                        self.researchProcess.process = setTimeout.call(window, self.upgrade(self.researchProcess.unitType + self.researchProcess.type), unitType[unitSubType - 1][3] * 1000);
                        self.researchProcess.process();
                    }
                }
                if (typeArr[1] === "health") {
                    var unitSubType = Number(typeArr[0].substr(unit.length - 1))
                    if (self.resources.food >= unitType[unitSubType - 1][0] && self.resources.fuel >= unitType[unitSubType - 1][1] && self.resources.metal >= unitType[unitSubType - 1][2]) {
                        self.researchProcess.level = self.research.machinery1.health + 1;
                        self.researchProcess.type = "health";
                        self.researchProcess.unitType = "machinery1";
                        self.resources.metal -= machineryHealth1[unitSubType - 1][0];
                        self.resources.fuel -= machineryHealth1[unitSubType - 1][1];
                        self.resources.food -= machineryHealth1[unitSubType - 1][2];
                        self.researchProcess.process = setTimeout.call(window, self.upgrade(self.researchProcess.unitType + self.researchProcess.type), unitType[unitSubType - 1][3] * 1000);
                        self.researchProcess.process();
                    }
                }
            }
        }
        this.upgrade = function (type) {
            if (type === "melee1attack") {
                this.researchProcess.level = 0;
                this.researchProcess.type = null;
                this.researchProcess.unitType = null;
                this.researchProcess.process = null;
                this.research.melee1.attack++;
            }
            if (type === "melee1health") {
                this.researchProcess.level = 0;
                this.researchProcess.type = null;
                this.researchProcess.unitType = null;
                this.researchProcess.process = null;
                this.research.melee1.attack++;
            }
            if (type === "range1attack") {
                this.researchProcess.level = 0;
                this.researchProcess.type = null;
                this.researchProcess.unitType = null;
                this.researchProcess.process = null;
                this.research.melee1.attack++;
            }
            if (type === "range1health") {
                this.researchProcess.level = 0;
                this.researchProcess.type = null;
                this.researchProcess.unitType = null;
                this.researchProcess.process = null;
                this.research.melee1.attack++;
            }
            if (type === "machinery1attack") {
                this.researchProcess.level = 0;
                this.researchProcess.type = null;
                this.researchProcess.unitType = null;
                this.researchProcess.process = null;
                this.research.melee1.attack++;
            }
            if (type === "machinery1health") {
                this.researchProcess.level = 0;
                this.researchProcess.type = null;
                this.researchProcess.unitType = null;
                this.researchProcess.process = null;
                this.research.melee1.attack++;
            }
        }
    }
    return new User();
});
// app2.controller('ContactController', function ($scope, ContactService) {

// ContactService.User.upgradeStructure(structure);
// ContactService.User.startTraining(unit, count);
// ContactService.User.trainMelee(unit, count);
// ContactService.User.trainRange(unit, count);
// ContactService.User.trainMachinery(unit, count);
// ContactService.User.startUpgrading(type);
// });

app.controller('indexController', function ($scope, $http, ContactService, $window) {
    var mineArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var refineryArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var farmArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var livingQArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var storageArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var barracksArr = [[50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var machineryArr = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var meleeAttack1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var meleeHealth1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var rangeAttack1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var rangeHealth1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var machineryAttack1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var machineryHealth1 = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], []];
    var specResearchArr = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var wallArr = [[50, 50, 50, 3], [50, 50, 50, 3], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    var meleeArr = [[50, 50, 50, 3]];
    var rangeArr = [[50, 50, 50, 3]];
    var machineArr = [[50, 50, 50, 3]];

    $scope.user = ContactService;
    console.log(ContactService);

    // var req = {
    //     method: 'POST',
    //     url: 'http://localhost:3000/structures',
    //     headers: {
    //         'Content-Type': undefined
    //     },
    //     data: { structure: '$mine.attr("id")' }
    // }
    // $http(req).then(function(){}, function(){});
    /*name of the varable that we get from db*/
    // $scope.upgStructure = function () {
    //     var data = { mine: "mine" };
    //     $http.post('http://localhost:3000/structures', data).then(function (response) {
    //         // console.log(response);
    //         // console.log(response.data.junktion);
    //     });

    // }
    // $http.post('http://localhost:3000/index').then(function (response) {
    /*name of the varable that will be made in the scope e.x.*/
    // $scope.user = null;
    // $scope.user = response.data;
    // console.log($scope.user);
    // console.log($scope.user[0]);
    // console.log($scope.user[0].username);
    // $scope.upgradeMeleHealth = function () {
    //     var data = "melee_health";
    //     $http.post('http//localhost:3000', data).then(
    //         function (response) {

    //         }, function (response) {

    //         });
    // };
    // });
});
// structures config and controllers
app.config(function ($routeProvider) {
    $routeProvider
        .when("/structures", {
            templateUrl: "../html/structures.htm",
            controller: "structuresController"
        })
        .when("/army", {
            templateUrl: "../html/army.htm",
            controller: "armyController"
        })
        .when("/research", {
            templateUrl: "../html/research.htm",
            controller: "researchController"
        })
        .when("/training/meleTraining", {
            templateUrl: "../html/trainingMele.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/training/rangeTraining", {
            templateUrl: "../html/trainingRange.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/training/machineTraining", {
            templateUrl: "../html/trainingMachines.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/research/meleResearch", {
            templateUrl: "../html/meleResearch.htm",
            controller: "researchController"
        })
        .when("/research/rangeResearch", {
            templateUrl: "../html/rangeResearch.htm",
            controller: "researchController"
        })
        .when("/research/machineResearch", {
            templateUrl: "../html/machineResearch.htm",
            controller: "researchController"
        })
});
app.controller("structuresController", function ($scope) {
    // mine && mine.level will be resived from the db
    $scope.mine = {};
    $scope.mine.level = "1";
});
// army controllers
app.controller("armyController", function ($scope) {
    $scope.mine = {};
    $scope.mine.level = "1";
});
// training controller
app.controller("trainingController", function ($scope) {
    $scope.mine = {};
    $scope.mine.level = "1";
});
app.controller("researchController", function ($scope) {
    $scope.mine = {};
    $scope.mine.level = "1";
});