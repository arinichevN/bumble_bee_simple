function ProgEdit() {
    this.type = VISU_TYPE.DIAL;
    this.container = null;
    this.header = null;
    this.goalH = null;
    this.deltaH = null;
    this.goalB = null;
    this.deltaB = null;
    this.signB = null;
    this.incB = null;
    this.smsB = null;
    this.ringB = null;
    this.logB = null;
    this.regB = null;
    this.applyB = null;
    this.canceB = null;
    this.saveB = null;
    this.slave = null;
    this.kind = null;
    this.initialized = false;
    this.current_row = null;
    this.minv = -1000.0;
    this.maxv = 1000.0;
    this.mode = null;
    this.inc = 1;
    this.sign = 1;
    this.value = {id: null, goal: null, delta: null, ring: null, sms: null, log: null, reg: null};
    this.MODE = {
        GOAL: 1,
        DELTA: 2
    };
    this.FLOAT_PRES = 1;
    this.init = function () {
        var self = this;
        this.container = cvis();
        this.header = cd();
        this.goalH = cd();
        this.deltaH = cd();
        this.goalB = cb("");
        this.deltaB = cb("");
        this.signB = cb("");
        this.incB = cb("");
        this.smsB = cb("");
        this.ringB = cb("");
        this.logB = cb("");
        this.regB = cb("");
        this.cancelB = new CancelButton(self, 1);
        this.applyB = new ApplyButton(self, 1);
        this.smsB.onclick = function () {
            if (self.value.sms) {
                self.value.sms = false;
                clr(self.smsB, "pre_active");
            } else {
                self.value.sms = true;
                cla(self.smsB, "pre_active");
            }
        };
        this.ringB.onclick = function () {
            if (self.value.ring) {
                self.value.ring = false;
                clr(self.ringB, "pre_active");
            } else {
                self.value.ring = true;
                cla(self.ringB, "pre_active");
            }
        };
        this.logB.onclick = function () {
            if (self.value.log) {
                self.value.log = false;
                clr(self.logB, "pre_active");
            } else {
                self.value.log = true;
                cla(self.logB, "pre_active");
            }
        };
        this.regB.onclick = function () {
            if (self.value.reg) {
                self.value.reg = false;
                clr(self.regB, "pre_active");
            } else {
                self.value.reg = true;
                cla(self.regB, "pre_active");
            }
        };
        this.goalB.onmousedown = function () {
            self.mode = self.MODE.GOAL;
            inc.down(self);
        };
        this.deltaB.onmousedown = function () {
            self.mode = self.MODE.DELTA;
            inc.down(self);
        };
        this.updSign();
        this.signB.onclick = function () {
            self.chSign();
        };
        this.incB.innerHTML = this.inc;
        this.incB.onclick = function () {
            self.updInc();
        };
        var r2 = cd();
        this.cancelB.onclick = function () {
            self.cancel();
        };
        var rg = cd();
        var rd = cd();
        var c1 = cd();
        var c2 = cd();
        var c3 = cd();
        var c4 = cd();
        var c5 = cd();
        var c6 = cd();
        var c7 = cd();
        var c8 = cd();
        var c9 = cd();
        var c10 = cd();

        a(rg, [this.goalH, this.goalB]);
        a(rd, [this.deltaH, this.deltaB]);
        a(c1, [rg]);
        a(c2, [rd]);
        a(c3, [this.signB]);
        a(c4, [this.incB]);
        a(c5, [this.smsB]);
        a(c6, [this.ringB]);
        a(c7, [this.logB]);
        a(c8, [this.regB]);
        a(c9, [this.applyB]);
        a(c10, [this.cancelB]);
        a(this.container, [this.header, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10]);
        cla([this.header], "pre_header");
        cla([c3, c4, c5, c6, c7, c8], "pre_cell1");
        cla([c1, c2, c9, c10], "pre_cell2");
        cla([rg, rd, this.signB, this.incB, this.smsB, this.ringB, this.logB, this.regB, this.applyB, this.cancelB], "pre_icell");
        cla([this.goalB, this.deltaB], "pre_hbtn");
        cla([this.goalH, this.deltaH], "pre_btnH");
        cla([this.signB, this.incB, this.goalB, this.deltaB], "pre_interactive");
        cla([this.smsB, this.ringB, this.regB, this.logB], ["pre_toggle", "f1"]);
        cla([this.goalB, this.deltaB, this.cancelB, this.applyB, this.signB, this.incB], ["f1"]);
        this.initialized = true;
    };
    this.getName = function () {
        return trans.get(312);
    };
    this.incCB = function () {
        switch (this.mode) {
            case this.MODE.GOAL:
                var r = this.value.goal + this.inc * this.sign;
                if (r >= this.minv && r <= this.maxv) {
                    this.value.goal = this.value.goal + (this.inc * this.sign);
                    this.goalB.innerHTML = this.value.goal.toFixed(this.FLOAT_PRES);
                }
                break;
            case this.MODE.DELTA:
                var r = this.value.delta + this.inc * this.sign;
                if (r >= this.minv && r <= this.maxv) {
                    this.value.delta = this.value.delta + (this.inc * this.sign);
                    this.deltaB.innerHTML = this.value.delta.toFixed(this.FLOAT_PRES);
                }
                break;
        }
    };
    this.chSign = function () {
        this.sign *= -1;
        this.updSign();
    };
    this.updSign = function () {
        if (this.sign > 0) {
            this.signB.innerHTML = "+";
        } else {
            this.signB.innerHTML = "-";
        }
    };
    this.updInc = function () {
        switch (this.inc) {
            case 0.01:
                this.inc = 0.1;
                break;
            case 0.1:
                this.inc = 1;
                break;
            case 1:
                this.inc = 10;
                break;
            case 10:
                this.inc = 100;
                break;
            case 100:
                this.inc = 0.1;
                break;
            case 1000:
                this.inc = 0.01;
                break;
        }
        this.incB.innerHTML = this.inc;
    };
    this.cancel = function (id) {
        this.slave.catchEdit(this.value, this.kind, 0);
        goBack();
    };
    this.apply = function (id) {
        this.slave.catchEdit(this.value, this.kind, 1);
        goBack();
    };
    this.updateStr = function () {
        this.goalH.innerHTML = trans.get(318);
        this.deltaH.innerHTML = trans.get(319);
        //  this.smsB.innerHTML = trans.get(320);
        this.ringB.innerHTML = trans.get(321);
        this.logB.innerHTML = trans.get(322);
        this.regB.innerHTML = trans.get(323);
        this.cancelB.innerHTML = trans.get(5);
        this.applyB.innerHTML = trans.get(2);
    };
    this.prep = function (data, slave, kind, t) {
        try {
            this.header.innerHTML = t;
            this.slave = slave;
            this.kind = kind;
            this.value.id = data.id;
            this.value.goal = data.reg.goal;
            this.value.delta = data.reg.delta;
            if (this.value.goal === null) {
                this.value.goal = data.alr.good_value;
            }
            if (this.value.delta === null) {
                this.value.delta = data.alr.good_delta;
            }
            this.value.sms = data.alr.sms;
            this.value.ring = data.alr.ring;
            if ((data.alr.state === "INIT" || data.alr.state === "WBAD" || data.alr.state === "WCOPE" || data.alr.state === "WGOOD") && data.alr.ring) {
                this.value.ring = true;
            } else if (data.alr.state === null || data.alr.ring === null) {
                this.value.ring = null;
            } else {
                this.value.ring = false;
            }

            if (data.lgr.state === 'OFF') {
                this.value.log = false;
            } else if (data.lgr.state === null) {
                this.value.log = null;
            } else {
                this.value.log = true;
            }

            if (data.reg.state === 'OFF') {
                this.value.reg = false;
            } else if (data.reg.state === null) {
                this.value.reg = null;
            } else {
                this.value.reg = true;
            }


            if (this.value.goal === null) {
                this.goalB.disabled = true;
            } else {
                this.goalB.innerHTML = this.value.goal.toFixed(this.FLOAT_PRES);
                this.goalB.disabled = false;
            }
            if (this.value.delta === null) {
                this.deltaB.disabled = true;
            } else {
                this.deltaB.innerHTML = this.value.delta.toFixed(this.FLOAT_PRES);
                this.deltaB.disabled = false;
            }
//            if (this.value.sms) {
//                cla(this.smsB, "pre_active");
//                this.smsB.disabled = false;
//            } else if (this.value.sms === null) {
//                clr(this.smsB, "pre_active");
//                this.smsB.disabled = true;
//            } else {
//                clr(this.smsB, "pre_active");
//                this.smsB.disabled = false;
//            }
            this.smsB.disabled = true;
            if (this.value.ring) {
                cla(this.ringB, "pre_active");
                this.ringB.disabled = false;
            } else if (this.value.ring === null) {
                clr(this.ringB, "pre_active");
                this.ringB.disabled = true;
            } else {
                clr(this.ringB, "pre_active");
                this.ringB.disabled = false;
            }

            if (this.value.log === true) {
                cla(this.logB, "pre_active");
                this.logB.disabled = false;
            } else if (this.value.log === false) {
                clr(this.logB, "pre_active");
                this.logB.disabled = false;
            } else if (this.value.log === null) {
                clr(this.logB, "pre_active");
                this.logB.disabled = true;
            }

            if (this.value.reg === true) {
                cla(this.regB, "pre_active");
                this.regB.disabled = false;
            } else if (this.value.reg === false) {
                clr(this.regB, "pre_active");
                this.regB.disabled = false;
            } else if (this.value.reg === null) {
                clr(this.regB, "pre_active");
                this.regB.disabled = true;
            }

            this.slave.update = false;
        } catch (e) {
            alert("progEdit: prep: " + e.message);
        }
    };
    this.show = function () {
        clr(this.container, "hdn");
    };
    this.hide = function () {
        cla(this.container, "hdn");
    };
}
var vprog_edit = new ProgEdit();
visu.push(vprog_edit);