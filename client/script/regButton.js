function RegButton(id, slave, kind) {
    this.slave = slave;
    this.kind = kind;
    this.id = id;
    this.container = cd();
    this.selection_date = null;
    this.done = false;
    this.tmr1 = {tmr: null};
    this.goal = null;
    this.delta = null;
    this.FLOAT_PRES = 1;

    this.r_cont = cd();
    this.l_cont = cd();
    this.val_cont = cd();
    this.state_cont = cd();
    this.state1_cont = cd();

    this.heaterE = cd();
    this.coolerE = cd();
    this.valueE = cd();
    this.goalDeltaE = cd();
    this.muE = cd();
    this.descrE = cd();
    this.stateE = cd();
    this.stateRE = cd();
    this.lgrStateE = c("img");
    s(this.lgrStateE, "src", "f_js/image/nothing.png");
    cla(this.lgrStateE, 'reg_dis');
    this.callStateE = c("img");
    s(this.callStateE, "src", "f_js/image/nothing.png");
    cla(this.callStateE, 'reg_dis');

    this.RETRY = 7;
    this.uf_count = 0;//number of bad updates


    this.heaterE.innerHTML = "&empty;";
    this.coolerE.innerHTML = "&empty;";
    this.valueE.innerHTML = "&empty;";
    this.muE.innerHTML = "&empty;";
    this.descrE.innerHTML = "&empty;";
    this.stateE.innerHTML = "&empty;";
    this.stateRE.innerHTML = "&empty;";
    this.goalDeltaE.innerHTML = "&empty;";
    this.updateStr = function () {
        cla([this.descrE], ["nvis"]);
    };
    this.setName = function (v) {
        this.descrE.innerHTML = v;
    };
    this.isSelected = function () {
        if (clc(this.container, "reg_selected")) {
            return true;
        }
        return false;
    };
    this.select = function () {
        if (clc(this.container, "reg_selected")) {
            clr(this.container, "reg_selected");
            this.selection_date = null;
        } else {
            this.selection_date = new Date();
            cla(this.container, "reg_selected");
        }
    };
    this.click = function () {
        this.slave.catchEdit(this.id, this.kind);
    };
    this.blink = function (style) {
        cla(this.container, style);
        var self = this;
        var tmr = window.setTimeout(function () {
            self.unmark(style);
        }, 300);
    };
    this.unmark = function (style) {
        clr(this.container, style);
    };
    this.updateInit = function (item) {
        var v = "";
//        if (item.name === null || typeof item.name === 'undefined') {
//            cla(this.descrE, "reg_dis");
//            v = "&empty;";
//        } else {
//            v = item.name;
//            clr(this.descrE, "reg_dis");
//        }
//        this.descrE.innerHTML = v;
        this.descrE.innerHTML = '';

        v = "";
        if (item.mu === null || typeof item.mu === 'undefined') {
            cla(this.muE, "reg_dis");
            v = "&empty;";
        } else {
            v = item.mu;
            clr(this.muE, "reg_dis");
        }
        this.muE.innerHTML = v;
        this.blink('reg_updated_init');
    };
    this.updateValue = function (value, state) {
        if (value !== null && state) {
            this.valueE.innerHTML = value.toFixed(this.FLOAT_PRES);
            this.uf_count = 0;
            clr(this.valueE, 'reg_dis');
            if (this.goal !== null && this.delta !== null) {
                if (value > this.goal + this.delta) {
                    cla(this.valueE, "reg_higher");
                    clr(this.valueE, "reg_good");
                    clr(this.valueE, "reg_lower");
                } else if (value < this.goal - this.delta) {
                    clr(this.valueE, "reg_higher");
                    clr(this.valueE, "reg_good");
                    cla(this.valueE, "reg_lower");
                } else {
                    clr(this.valueE, "reg_higher");
                    cla(this.valueE, "reg_good");
                    clr(this.valueE, "reg_lower");
                }
            } else {
                clr(this.valueE, "reg_higher");
                clr(this.valueE, "reg_good");
                clr(this.valueE, "reg_lower");
            }
        } else {
            // console.log(this.id, this.uf_count, this.RETRY);
            if (this.uf_count > this.RETRY) {
                this.valueE.innerHTML = '&empty;';
                cla(this.valueE, 'reg_dis');
                clr(this.valueE, "reg_higher");
                clr(this.valueE, "reg_good");
                clr(this.valueE, "reg_lower");
            } else {
                this.uf_count++;
            }
            this.blink('reg_updatedf_value');
        }
        this.blink('reg_updated_value');
    };
    this.updateRegRuntime = function (item) {
        var v = "";
        if (item.output_heater === null || typeof item.output_heater === 'undefined') {
            cla(this.heaterE, "reg_dis");
            v = "&empty;";
        } else {
            v = item.output_heater;
            clr(this.heaterE, "reg_dis");
        }
        this.heaterE.innerHTML = v;

        v = "";
        if (item.output_cooler === null || typeof item.output_cooler === 'undefined') {
            cla(this.coolerE, "reg_dis");
            v = "&empty;";
        } else {
            v = item.output_cooler;
            clr(this.coolerE, "reg_dis");
        }
        this.coolerE.innerHTML = v;

        v = "";
        if (item.state === null || typeof item.state === 'undefined') {
            cla(this.stateE, "reg_dis");
            v = "&empty;";
        } else {
            v = item.state;
            clr(this.stateE, "reg_dis");
        }
        this.stateE.innerHTML = v;

        v = "";
        if (item.state_r === null || typeof item.state_r === 'undefined') {
            cla(this.stateRE, "reg_dis");
            v = "&empty;";
        } else {
            v = item.state_r;
            clr(this.stateRE, "reg_dis");
        }
        this.stateRE.innerHTML = v;
        this.blink('reg_updated_reg_runtime');
    };
    this.updateLgrRuntime = function (item) {//console.log(item);
        if (item.state === "ACT") {
            s(this.lgrStateE, "src", "client/image/history.png");
            clr(this.lgrStateE, 'reg_dis');
        } else if (item.state === null) {
            s(this.lgrStateE, "src", "f_js/image/nothing.png");
            cla(this.lgrStateE, 'reg_dis');
        } else {
            s(this.lgrStateE, "src", "client/image/history_no.png");
            clr(this.lgrStateE, 'reg_dis');
        }
        this.blink('reg_updated_lgr_runtime');
    };

    this.updateExpectedValue = function (alr, reg) {
        var goal = reg.goal;
        var delta = reg.delta;
        if (reg.goal === null || reg.delta === null) {
            goal = alr.good_value;
            delta = alr.good_delta;
        }
        var v = "";
        v = "";
        if (goal === null || delta === null) {
            cla(this.goalDeltaE, "reg_dis");
            v = "&empty;";
        } else {
            this.goal = goal;
            this.delta = delta;
            v = goal.toFixed(this.FLOAT_PRES) + "&PlusMinus;" + delta.toFixed(this.FLOAT_PRES);
            clr(this.goalDeltaE, "reg_dis");
        }
        this.goalDeltaE.innerHTML = v;
        this.blink('reg_updated_reg_init');
    };
    this.updateAlrRuntime = function (item) {
        if ((item.state === "INIT" || item.state === "WBAD" || item.state === "WCOPE" || item.state === "WGOOD") && item.ring) {
            s(this.callStateE, "src", "client/image/call.png");
            clr(this.callStateE, 'reg_dis');
        } else if (item.state === null || item.ring === null) {
            s(this.callStateE, "src", "f_js/image/nothing.png");
            cla(this.callStateE, 'reg_dis');
        } else {
            s(this.callStateE, "src", "client/image/call_no.png");
            clr(this.callStateE, 'reg_dis');
        }
        this.blink('reg_updated_alr');
    };
    a(this.l_cont, [this.heaterE, this.coolerE]);
    a(this.val_cont, [this.valueE, this.muE]);
    a(this.state_cont, [this.stateE, this.stateRE, this.goalDeltaE]);
    a(this.state1_cont, [this.lgrStateE, this.callStateE, this.goalDeltaE]);
    a(this.r_cont, [this.val_cont, this.state_cont, this.state1_cont]);
    a(this.container, [this.l_cont, this.r_cont, this.descrE]);
    cla(this.l_cont, ["reg_l_cont"]);
    cla(this.val_cont, ["reg_val_cont"]);
    cla(this.state_cont, ["reg_state_cont"]);
    cla(this.state1_cont, ["reg_state1_cont"]);
    cla(this.l_cont, ["reg_l_cont"]);
    cla(this.r_cont, ["reg_r_cont"]);
    cla([this.heaterE, this.coolerE], ["reg_em_ico"]);
    cla(this.heaterE, ["reg_heater"]);
    cla(this.coolerE, ["reg_cooler"]);
    cla(this.valueE, ["reg_value"]);
    cla([this.stateE, this.stateRE], ["reg_state"]);
    cla([this.lgrStateE, this.callStateE], ["reg_state_img"]);
    cla(this.descrE, ["reg_descr"]);
    cla(this.goalDeltaE, ["reg_goalDelta"]);
    cla(this.muE, ["reg_mu"]);
    cla([this.valueE, this.descrE], ["reg_d", "reg_dis"]);
    cla([this.heaterE, this.coolerE, this.stateE, this.stateRE], ["reg_reg_runtime"]);
    cla([this.goalDeltaE], ["reg_reg_init"]);
    cla([this.muE, this.descrE], ["reg_init"]);
    cla([this.lgrStateE], ["reg_lgr_runtime"]);
    cla([this.callStateE], ["reg_alr"]);
    cla([this.valueE], ["reg_value"]);
    cla([this.valueE, this.heaterE, this.coolerE, this.stateE, this.stateRE, this.goalDeltaE], 'reg_dis');
    cla(this.container, ["reg_block", "reg_interactive"]);
    var self = this;
    this.container.onclick = function () {
        self.click();
    };
}