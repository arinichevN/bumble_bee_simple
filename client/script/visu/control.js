function Control() {
    this.type = VISU_TYPE.MAIN;
    this.container = {};
    this.data = [
        {id: 1, name: "старт1_темп", mu: "&deg;C", place: 1, reg_peer_id: 'regonf_1', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 9, group_id: 1},
        {id: 2, name: "старт2_темп", mu: "&deg;C", place: 1, reg_peer_id: 'regonf_1', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 7, group_id: 2},
        {id: 3, name: "столп1_темп", mu: "&deg;C", place: 1, reg_peer_id: 'regonf_1', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 1, group_id: 3},
        {id: 4, name: "столп2_темп", mu: "&deg;C", place: 1, reg_peer_id: 'regonf_1', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 3, group_id: 4},
        {id: 5, name: "разведение_темп", mu: "&deg;C", place: 1, reg_peer_id: 'regonf_1', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 5, group_id: 5},
        {id: 6, name: "холодильник_темп", mu: "&deg;C", place: 1, reg_peer_id: 'null', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 11, group_id: 6},
        {id: 7, name: "старт1_влаж", mu: "%", place: 2, reg_peer_id: 'regonf_1', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 10, group_id: 1},
        {id: 8, name: "старт2_влаж", mu: "%", place: 2, reg_peer_id: 'regonf_1', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 8, group_id: 2},
        {id: 9, name: "столп1_влаж", mu: "%", place: 2, reg_peer_id: 'regonf_1', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 2, group_id: 3},
        {id: 10, name: "столп2_влаж", mu: "%", place: 2, reg_peer_id: 'regonf_1', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 4, group_id: 4},
        {id: 11, name: "разведение_влаж", mu: "%", place: 2, reg_peer_id: 'regonf_1', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 6, group_id: 5},
        {id: 12, name: "холодильник_влаж", mu: "%", place: 2, reg_peer_id: 'null', alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu22_2', remote_id: 12, group_id: 6},
        {id: 13, name: "ларь 1", mu: "&deg;C", place: 3, reg_peer_id: null, alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu18_1', remote_id: 1, group_id: 8},
        {id: 14, name: "ларь 2", mu: "&deg;C", place: 3, reg_peer_id: null, alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu18_1', remote_id: 2, group_id: 9},
        {id: 15, name: "ларь 3", mu: "&deg;C", place: 3, reg_peer_id: null, alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu18_1', remote_id: 3, group_id: 10},
        {id: 16, name: "ларь 4", mu: "&deg;C", place: 3, reg_peer_id: null, alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu18_1', remote_id: 4, group_id: 11},
        {id: 17, name: "ларь 5", mu: "&deg;C", place: 3, reg_peer_id: null, alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu18_1', remote_id: 5, group_id: 12},
        {id: 18, name: "ларь 6", mu: "&deg;C", place: 3, reg_peer_id: null, alr_peer_id: 'alr_1', lgr_peer_id: 'lgr_1', sensor_peer_id: 'gwu18_1', remote_id: 6, group_id: 13}
    ];
    this.peer = [
        {id: 'regonf_1', address: '192.168.0.103', port: 49171, timeout: 2, name: "регулятор"},
        {id: 'alr_1', address: '192.168.0.104', port: 49174, timeout: 2, name: "тревоги"},
        {id: 'lgr_1', address: '192.168.0.104', port: 49172, timeout: 2, name: "регистратор"},
        {id: 'gwu18_1', address: '192.168.0.101', port: 49161, timeout: 2, name: "модуль ввода 1"},
        {id: 'gwu22_2', address: '192.168.0.102', port: 49162, timeout: 2, name: "модуль ввода 2"}
    ];
    this.group = [
        {id: 1, name: 'старт 1'},
        {id: 2, name: 'старт 2'},
        {id: 3, name: 'столп 1'},
        {id: 4, name: 'столп 2'},
        {id: 5, name: 'разведение'},
        {id: 6, name: 'холодильник'},
       // {id: 7, name: 'морозильники температура'},
        {id: 8, name: 'ларь 1'},
        {id: 9, name: 'ларь 2'},
        {id: 10, name: 'ларь 3'},
        {id: 11, name: 'ларь 4'},
        {id: 12, name: 'ларь 5'},
        {id: 13, name: 'ларь 6'}
    ];
     
    this.sendData = []; //prepared for send data from this.data and this.peer

    this.tmr_p = {tmr: null};
    this.tmr_ga = {tmr: null};
    this.tmr_sleep = {tmr: null};
    this.tmr_u = {tmr: null};//auto update timer
    this.DELAY_U = 3000;
    this.DELAY_P = 3000;
    this.DELAY_GA = 5000;
    this.delay_sleep = 60000;
    this.delay_p = this.DELAY_P;//send ping interval
    this.delay_ga = this.DELAY_GA;//send ping interval
    this.delay_u = this.DELAY_U;//auto update min interval

    this.DELAY_FACTOR = 2000000;//factor
    this.sleep = false;
    this.ACTION =
            {
                CONTROLLER: {
                    PING: 2,
                    IM: {
                        GET_VALUE: 1
                    },
                    PROGRAM: {
                        START: 62,
                        STOP: 63,
                        RESET: 64
                    },
                    REG: {
                        GET_DATA_RUNTIME: 34,
                        GET_DATA_INIT: 35,
                        SET_GOAL: 36,
                        SET_DELTA: 37,
                        PROG_DISABLE: 38,
                        PROG_ENABLE: 39
                    },
                    ALR: {
                        GET_ALERT: 42,
                        DISABLE_ALERT: 43,
                        GET_DATA_RUNTIME: 44,
                        GET_DATA_INIT: 45,
                        SET_GOAL: 46,
                        SET_DELTA: 47,
                        SET_SMS: 48,
                        SET_RING: 49
                    },
                    LGR: {
                        GET_DATA_INIT: 53,
                        GET_DATA_RUNTIME: 54,
                        PROG_DISABLE: 55,
                        PROG_ENABLE: 56
                    }
                }
            };
    this.CATCH = {
        REGB: 1,
        EDIT: 2,
        PAGE_BLOCKER: 3
    };
    this.ALERT_TEXT = 'ТРЕВОГА';
    this.curr_peer = null;
    this.curr_peer_ind = -1;
    this.curr_ppeer = null;
    this.curr_item = null;
    this.curr_item_ind = -1;
    this.curr_item_done = true;
    this.curr_item_timeisout = true;
    this.curr_clicked = false;
    this.curr_item_edit = null;
    this.curr_editing = false;
    this.initialized = false;
    this.update = true; //editor will make it false
    this.visible = false;
    this.alertB = null;
    this.helpB = null;
    this.dataE = null;
    this.init = function () {
        try {
            var self = this;
            this.makeData();
            this.container = cvis();
            this.helpB = new NavigationButton(vhelp_regsmp, "f_js/image/help.png");
            this.alertB = cb("");
            this.peerE = cd();
            this.dataE = cd();
            this.container.onmouseover = function () {
                self.wakeUp();
            };
            this.alertB.onclick = function () {
                self.disableAlert();
            };
            this.alertB.disabled = true;
            this.alert_sound = new AudioMP3("client/sound/red_alert_full.mp3", 1);
            a(this.container, [this.dataE, this.alertB, this.helpB, this.peerE]);
            for (var i = 0; i < this.peer.length; i++) {
                var elem = new PeerButton(this.peer[i].name);
                this.peer[i].elem = elem;
                a(this.peerE, elem);
            }
            var self = this;
            for (var i = 0; i < this.group.length; i++) {
                this.group[i].elem = new GroupElem(this.group[i].name);
                a(this.dataE, this.group[i].elem);
            }
            for (var i = 0; i < this.data.length; i++) {
                this.data[i].elem = new RegButton(this.data[i].id, self, this.CATCH.REGB);
                this.data[i].elem.updateInit(this.data[i]);
                var group = this.getGroupById(this.data[i].group_id);
                a(group.elem.content, this.data[i].elem);
            }
            cla([this.dataE, this.peerE], ["cn_cont1"]);
            cla(this.peerE, 'cn_pcont');
            cla(this.alertB, ['alert_btn']);
            cla([this.helpB], ["cn_button2", "f2", "w100"]);
            page_blocker.prep(1, 1, this, this.CATCH.PAGE_BLOCKER);
            this.initialized = true;
        } catch (e) {
            alert("control: init: " + e.message);
        }
    };
    this.getName = function () {
        return trans.get(401);
    };
    this.updateStr = function () {
        try {
            document.title = trans.get(314);
            this.helpB.updateStr();
        } catch (e) {
            alert("control: updateStr: " + e.message);
        }
    };
    this.catchEdit = function (d, kind, apply) {
        try {
            switch (kind) {
                case this.CATCH.REGB:
                    var item = this.getDataById(d);
                    var f = false;
                    if (item.elem.isSelected()) {
                        f = true;
                    }
                    this.selectOneB(d);
                    if (f) {
                        cursor_blocker.enable();
                        this.curr_item_edit = item;
                        this.curr_clicked = true;
                        if (this.curr_item_done) {
                            this.sendGetProgEdit();
                        }
                    }
                    break;
                case this.CATCH.EDIT:
                    var item = this.getDataById(d.id);
                    var curr_ind = this.getDataIndById(d.id);
                    if (curr_ind === null) {
                        this.curr_clicked = false;
                        this.curr_editing = false;
                        this.curr_item_timeisout = true;
                        return;
                    }
                    if (curr_ind - 1 >= 0) {
                        this.curr_item_ind = curr_ind - 1;
                    } else {
                        this.curr_item_ind = this.data.length - 1;
                    }

                    if (!apply) {
                        this.curr_clicked = false;
                        this.curr_editing = false;
                        this.curr_item_timeisout = true;
                        return;
                    }

                    //  console.log(item.reg.goal, item.alr.good_value, d.goal);
                    //  console.log(item.reg.delta, item.alr.good_delta, d.delta);
                    if (d.goal !== null) {
                        this.setRegGoal(item, d.goal);
                        this.setAlrGoal(item, d.goal);
                    }
                    if (d.delta !== null) {
                        this.setRegDelta(item, d.delta);
                        this.setAlrDelta(item, d.delta);
                    }
//                    if (d.sms !== null && item.alr.sms !== d.sms) {
//                        this.setAlrSms(item, d.sms);
//                    }

                    if (d.ring !== null) {
                        this.setAlrRing(item, d.ring);
                    }

                    if (d.log !== null) {
                        this.setLog(item, d.log);
                    }
                    if (d.reg !== null) {
                        this.setReg(item, d.reg);
                    }
                    //    console.log(d);
                    this.curr_clicked = false;
                    this.curr_editing = false;
                    this.curr_item_timeisout = true;
                    break;
                case this.CATCH.PAGE_BLOCKER:
                    this.wakeUp();
                    break;
                default:
                    console.log("catchEdit: bad k");
                    break;
            }
        } catch (e) {
            alert("control: catchEdit: " + e.message);
        }
    };
    this.wakeUp = function () {
        this.delaySleep();
        if (this.sleep) {
            this.sleep = false;
            clearTmr(this.tmr_u);
            clearTmr(this.tmr_p);
            this.delay_u = this.DELAY_U;
            this.delay_p = this.DELAY_P;
            this.delay_ga = this.DELAY_GA;
            this.curr_item_timeisout = true;
            this.updateNextItem();
            this.pingNextPeer();
        }
    };
    this.selectOneB = function (id) {
        try {
            var done1 = false, done2 = false;
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].elem.isSelected() && this.data[i].elem.id !== id) {
                    this.data[i].elem.select();
                    done1 = true;
                }
                if (this.data[i].elem.id === id) {
                    this.data[i].elem.select();
                    done2 = true;
                }
                if (done1 && done2) {
                    break;
                }
            }
        } catch (e) {
            alert("control: selectOneB: " + e.message);
        }
    };
    this.getDataById = function (id) {
        try {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].id === id) {
                    return this.data[i];
                }
            }
            return null;
        } catch (e) {
            alert("control: getDataById: " + e.message);
        }
    };
    this.getDataIndById = function (id) {
        try {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].id === id) {
                    return i;
                }
            }
            return null;
        } catch (e) {
            alert("control: getDataById: " + e.message);
        }
    };
    this.getGroupById = function (id) {
        try {
            for (var i = 0; i < this.group.length; i++) {
                if (this.group[i].id === id) {
                    return this.group[i];
                }
            }
            return null;
        } catch (e) {
            alert("monitor: getGroupById: " + e.message);
        }
    };
    this.getPeerById = function (id) {
        try {
            for (var i = 0; i < this.peer.length; i++) {
                if (this.peer[i].id === id) {
                    return this.peer[i];
                }
            }
            return null;
        } catch (e) {
            alert("control: getPeerById: " + e.message);
        }
    };
    this.getSelectedDataItem = function () {
        try {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].elem.isSelected()) {
                    return this.data[i];
                }
            }
            return null;
        } catch (e) {
            alert("control: getSelectedDataItem: " + e.message);
        }
    };
    this.sendGetProgEdit = function () {
        this.curr_editing = true;
        this.curr_item = this.curr_item_edit;
        if (this.curr_item.reg.peer !== null) {
            this.sendGetRegRuntime(this.curr_item.reg.peer, this.curr_item.id);
        } else {
            this.abort(this.ACTION.CONTROLLER.REG.GET_DATA_RUNTIME, "no peer");
        }
    };
    this.updateNextItem = function () {
        try {
            if (this.data.length <= 0) {
                //  console.log("un:", "bad data length");
                return;
            }
            if (this.curr_clicked) {
                if (this.curr_editing) {
                    // console.log("un:", "being edited");
                    return;
                }
                this.sendGetProgEdit();
                return;
            }
            if (!this.curr_item_done) {
                // console.log("un:", "not done yet");
                return;
            }
            if (this.curr_item_ind === this.data.length - 1 && !this.curr_item_timeisout) {
                // console.log("un:", "time not passed yet");
                return;
            }
            if (this.curr_item_ind < this.data.length - 1) {
                this.curr_item_ind++;
            } else {
                this.curr_item_ind = 0;
            }
            this.curr_item = this.data[this.curr_item_ind];
            // console.log("un:", "ok");

            this.curr_item.reg.done1 = false;
            this.curr_item.reg.done2 = false;
            this.curr_item.alr.done1 = false;
            this.curr_item.alr.done2 = false;
            this.curr_item.lgr.done = false;

            this.curr_item_done = false;

            if (this.curr_item_ind === 0) {
                this.delayUpdateNextItem();
            }
            this.sendGetCurrValue();
        } catch (e) {
            alert("updateNextItem: " + e.message);
        }
    };
    this.pingNextPeer = function () {
        try {
            clearTmr(this.tmr_p);
            if (this.peer.length <= 0) {
                return;
            }
            var dowait = 0;
            if (this.curr_peer_ind < this.peer.length - 1) {
                this.curr_peer_ind++;
            } else {
                this.curr_peer_ind = 0;
                dowait = 1;
            }
            this.curr_ppeer = this.peer[this.curr_peer_ind];
            if (dowait) {
                this.delaySendP();
            } else {
                this.sendPingPeer(this.curr_ppeer);
            }

        } catch (e) {
            alert("control: pingNextPeer: " + e.message);
        }
    };
    this.sendPingPeer = function (peer) {
        var data = [
            {
                action: ['controller', 'ping'],
                param: {address: peer.address, port: peer.port}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.PING, 'json_udp_acp');
    };
    this.setAlrGoal = function (item, value) {
        if (item.alr.peer === null) {
            return;
        }
        var data = [
            {
                action: ['controller', 'alr', 'set_goal'],
                param: {item: [{p0: item.id, p1: value}], address: item.alr.peer.address, port: item.alr.peer.port}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.ALR.SET_GOAL, 'json_udp_acp');
    };
    this.setAlrDelta = function (item, value) {
        if (item.alr.peer === null) {
            return;
        }
        var data = [
            {
                action: ['controller', 'alr', 'set_delta'],
                param: {item: [{p0: item.id, p1: value}], address: item.alr.peer.address, port: item.alr.peer.port}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.ALR.SET_DELTA, 'json_udp_acp');
    };
    this.setRegGoal = function (item, value) {
        if (item.reg.peer === null) {
            return;
        }
        var data = [
            {
                action: ['controller', 'reg', 'set_goal'],
                param: {item: [{p0: item.id, p1: value}], address: item.reg.peer.address, port: item.reg.peer.port}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.REG.SET_GOAL, 'json_udp_acp');
    };
    this.setRegDelta = function (item, value) {
        if (item.reg.peer === null) {
            return;
        }
        var data = [
            {
                action: ['controller', 'reg', 'set_delta'],
                param: {item: [{p0: item.id, p1: value}], address: item.reg.peer.address, port: item.reg.peer.port}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.REG.SET_DELTA, 'json_udp_acp');
    };
    this.setReg = function (item, value) {
        if (item.reg.peer === null) {
            return;
        }
        var act = 'enable';
        var kind = this.ACTION.CONTROLLER.REG.PROG_ENABLE;
        if (!value) {
            act = 'disable';
            kind = this.ACTION.CONTROLLER.REG.PROG_DISABLE;
        }
        var data = [
            {
                action: ['controller', 'reg', act],
                param: {item: [item.id], address: item.reg.peer.address, port: item.reg.peer.port}
            }
        ];
        sendTo(this, data, kind, 'json_udp_acp');
    };
    this.setLog = function (item, value) {
        if (item.lgr.peer === null) {
            return;
        }
        var act = 'enable';
        var kind = this.ACTION.CONTROLLER.LGR.PROG_ENABLE;
        if (!value) {
            act = 'disable';
            kind = this.ACTION.CONTROLLER.LGR.PROG_DISABLE;
        }
        var data = [
            {
                action: ['controller', 'lgr', act],
                param: {item: [item.id], address: item.lgr.peer.address, port: item.lgr.peer.port}
            }
        ];
        sendTo(this, data, kind, 'json_udp_acp');
    };
    this.setAlrRing = function (item, value) {
        if (item.alr.peer === null) {
            return;
        }
        var v = 1;
        if (!value) {
            v = 0;
        }
        var data = [
            {
                action: ['controller', 'alr', 'set_ring'],
                param: {item: [{p0: item.id, p1: v}], address: item.alr.peer.address, port: item.alr.peer.port}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.ALR.SET_RING, 'json_udp_acp');
    };
    this.setAlrSms = function (item, value) {
        if (item.alr.peer === null) {
            return;
        }
        var v = 1;
        if (!value) {
            v = 0;
        }
        var data = [
            {
                action: ['controller', 'alr', 'set_sms'],
                param: {item: [{p0: item.id, p1: v}], address: item.alr.peer.address, port: item.alr.peer.port}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.ALR.SET_SMS, 'json_udp_acp');
    };
    this.disableAlert = function () {
        var peer = this.getPeerById('alr_1');
        var data = [
            {
                action: ['controller', 'alr', 'disable_alert'],
                param: {address: peer.address, port: peer.port}
            }
        ];
        cursor_blocker.enable();
        sendTo(this, data, this.ACTION.CONTROLLER.ALR.DISABLE_ALERT, 'json_udp_acp');
    };
    this.sendGetAlert = function () {
        var peer = this.getPeerById('alr_1');
        var data = [
            {
                action: ['controller', 'alr', 'get_alert'],
                param: {address: peer.address, port: peer.port}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.ALR.GET_ALERT, 'json_udp_acp');
    };
    this.sendGetCurrValue = function () {
        this.sendGetValue(this.curr_item.remote_id, this.curr_item.sensor.peer);
    };
    this.sendGetValue = function (remote_id, peer) {
        var pack = {item: [remote_id], address: peer.address, port: peer.port};
        var data = [
            {
                action: ['controller', 'im', 'get_value'],
                param: pack
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.IM.GET_VALUE, 'json_udp_acp');
    };
    this.sendGetRegRuntime = function (peer, prog_id) {
        var data = [
            {
                action: ['controller', 'reg', 'get_data_runtime'],
                param: {address: peer.address, port: peer.port, item: [prog_id]}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.REG.GET_DATA_RUNTIME, 'json_udp_acp');
    };
    this.sendGetRegInit = function (peer, prog_id) {
        var data = [
            {
                action: ['controller', 'reg', 'get_data_init'],
                param: {address: peer.address, port: peer.port, item: [prog_id]}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.REG.GET_DATA_INIT, 'json_udp_acp');
    };
    this.sendGetAlrRuntime = function (peer, prog_id) {
        var data = [
            {
                action: ['controller', 'alr', 'get_data_runtime'],
                param: {address: peer.address, port: peer.port, item: [prog_id]}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.ALR.GET_DATA_RUNTIME, 'json_udp_acp');
    };
    this.sendGetAlrInit = function (peer, prog_id) {
        var data = [
            {
                action: ['controller', 'alr', 'get_data_init'],
                param: {address: peer.address, port: peer.port, item: [prog_id]}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.ALR.GET_DATA_INIT, 'json_udp_acp');
    };
    this.sendGetLgrRuntime = function (peer, prog_id) {
        var data = [
            {
                action: ['controller', 'lgr', 'get_data_runtime'],
                param: {address: peer.address, port: peer.port, item: [prog_id]}
            }
        ];
        sendTo(this, data, this.ACTION.CONTROLLER.LGR.GET_DATA_RUNTIME, 'json_udp_acp');
    };
    this.delayUpdateNextItem = function () {
        try {
            if (this.visible) {
                clearTmr(this.tmr_u);
                this.curr_item_timeisout = false;
                var self = this;
                this.tmr_u.tmr = window.setTimeout(function () {
                    self.curr_item_timeisout = true;
                    // console.log("update time is out");
                    self.updateNextItem();
                }, this.delay_u);
            }
        } catch (e) {
            alert("control: delayUpdateNextItem: " + e.message);
        }
    };
    this.delaySendP = function () {
        try {
            if (this.visible) {
                var self = this;
                this.tmr_p.tmr = window.setTimeout(function () {
                    self.sendPingPeer(self.curr_ppeer);
                }, this.delay_p);
            }
        } catch (e) {
            alert("control: delaySendP: " + e.message);
        }
    };
    this.delayCheckAlert = function () {
        try {
            if (this.visible) {
                var self = this;
                this.tmr_ga.tmr = window.setTimeout(function () {
                    self.sendGetAlert();
                }, this.delay_ga);
            }
        } catch (e) {
            alert("control: delayCheckAlert: " + e.message);
        }
    };
    this.delaySleep = function () {
        try {
            if (this.visible) {
                clearTmr(this.tmr_sleep);
                var self = this;
                this.tmr_sleep.tmr = window.setTimeout(function () {
                    self.sleep = true;
                    self.delay_u = self.DELAY_U * self.DELAY_FACTOR;
                    self.delay_p = self.DELAY_P * self.DELAY_FACTOR;
                    page_blocker.enable();
                }, this.delay_sleep);
            }
        } catch (e) {
            alert("control: delaySleep: " + e.message);
        }
    };
    this.makeData = function () {
        for (var i = 0; i < this.group.length; i++) {
            this.group[i].elem = null;
        }
        for (var i = 0; i < this.peer.length; i++) {
            this.peer[i].sent = false;
            this.peer[i].active = false;
            this.peer[i].elem = null;
        }
        for (var i = 0; i < this.data.length; i++) {
            this.data[i].sensor = {
                peer: this.getPeerById(this.data[i].sensor_peer_id),
                value: null,
                state: null,
                active: null,
                done: false
            },
            this.data[i].reg = {
                peer: this.getPeerById(this.data[i].reg_peer_id),
                state: null,
                state_r: null,
                output_heater: null,
                output_cooler: null,
                goal: null,
                delta: null,
                done1: false,
                done2: false
            },
            this.data[i].lgr = {
                peer: this.getPeerById(this.data[i].lgr_peer_id),
                state: null,
                done: false
            },
            this.data[i].alr = {
                peer: this.getPeerById(this.data[i].alr_peer_id),
                good_value: null,
                good_delta: null,
                sms: null,
                ring: null,
                state: null,
                done1: false,
                done2: false
            }
        }

    };
    this.logDataItem = function (item) {
        var str = "имя: " + item.description + "\n" +
                "цель: " + item.goal + item.mu + "\n" +
                "режим: " + item.mode + "\n" +
                "вкл/выкл дельта: " + item.delta + "\n" +
                "ПИД нагр. Kp: " + item.h_kp + "\n" +
                "ПИД нагр. Ki: " + item.h_ki + "\n" +
                "ПИД нагр. Kd: " + item.h_kd + "\n" +
                "ПИД охл. Kp: " + item.c_kp + "\n" +
                "ПИД охл. Ki: " + item.c_ki + "\n" +
                "ПИД охл. Kd: " + item.c_kd + "\n" +
                "интервал переключения: " + intToTimeStr(item.change_gap) + "\n";

        alert(str);
    };
    this.doAfterValue = function () {
        this.curr_item.sensor.done = true;
        this.curr_item.elem.updateValue(this.curr_item.sensor.value, this.curr_item.sensor.state);
        if (this.curr_item.reg.peer !== null) {
            this.sendGetRegRuntime(this.curr_item.reg.peer, this.curr_item.id);
        } else if (this.curr_item.alr.peer !== null) {
            this.abort(this.ACTION.CONTROLLER.REG.GET_DATA_RUNTIME, "no peer");
        }
    };
    this.doAfterRegRuntime = function () {
        this.curr_item.reg.done1 = true;
        this.curr_item.elem.updateRegRuntime(this.curr_item.reg);
        if (this.curr_item.reg.peer !== null) {
            this.sendGetRegInit(this.curr_item.reg.peer, this.curr_item.id);
        } else {
            this.abort(this.ACTION.CONTROLLER.REG.GET_DATA_INIT, "no peer");
        }
    };
    this.doAfterRegInit = function () {
        this.curr_item.reg.done2 = true;
        if (this.curr_item.alr.peer !== null) {
            this.sendGetAlrInit(this.curr_item.alr.peer, this.curr_item.id);
        } else {
            this.abort(this.ACTION.CONTROLLER.ALR.GET_DATA_INIT, "no peer");
        }
    };
    this.doAfterAlrInit = function () {
        this.curr_item.alr.done2 = true;
        this.curr_item.elem.updateExpectedValue(this.curr_item.alr, this.curr_item.reg, this.curr_item.reg);
        if (this.curr_item.alr.peer !== null) {
            this.sendGetAlrRuntime(this.curr_item.alr.peer, this.curr_item.id);
        } else {
            this.abort(this.ACTION.CONTROLLER.ALR.GET_DATA_RUNTIME, "no peer");
        }
    };
    this.doAfterAlrRuntime = function () {
        this.curr_item.alr.done1 = true;
        this.curr_item.elem.updateAlrRuntime(this.curr_item.alr);
        if (this.curr_item.lgr.peer !== null) {
            this.sendGetLgrRuntime(this.curr_item.lgr.peer, this.curr_item.id);
        } else {
            this.abort(this.ACTION.CONTROLLER.LGR.GET_DATA_RUNTIME, "no peer");
        }
    };
    this.doAfterLgrRuntime = function () {
        this.curr_item.lgr.done = true;
        this.curr_item.elem.updateLgrRuntime(this.curr_item.lgr);
        this.curr_item_done = true;
        if (this.curr_editing) {
            cursor_blocker.disable();
            //console.log(this.curr_item);
            vprog_edit.prep(this.curr_item, this, this.CATCH.EDIT, this.curr_item.name);
            showV(vprog_edit);
            return;
        }
        this.updateNextItem();
    };
    this.confirm = function (action, d, dt_diff) {
        try {
            switch (action) {
                case this.ACTION.CONTROLLER.IM.GET_VALUE:
                    if (typeof d[0] !== 'undefined') {
                        var id = parseInt(d[0].id);
                        if (this.curr_item.remote_id !== id) {
                         //   console.log("bad sensor.remote_id recieved: " + id + " expected: " + this.curr_item.remote_id);
                            this.doAfterValue();
                            logger.err(269);
                            return;
                        }
                        this.curr_item.sensor.value = parseFloat(d[0].value);
                        this.curr_item.sensor.state = parseInt(d[0].state);
                    } else {
                        this.curr_item.sensor.value = null;
                        this.curr_item.sensor.state = null;
                    }
                    this.doAfterValue();
                    break;
                case this.ACTION.CONTROLLER.REG.GET_DATA_RUNTIME:
                    if (typeof d[0] !== 'undefined') {
                        var id = parseInt(d[0].id);
                        if (this.curr_item.id !== id) {
                         //   console.log("bad reg prog id recieved: " + id + " expected: " + this.curr_item.id);
                            logger.err(269);
                            this.doAfterRegRuntime();
                            return;
                        }
                        this.curr_item.reg.state = d[0].state; //INIT REG OFF
                        this.curr_item.reg.state_r = d[0].state_r; //HEATER COOLER
                        this.curr_item.reg.output_heater = parseFloat(d[0].output_heater);
                        this.curr_item.reg.output_cooler = parseFloat(d[0].output_cooler);
                    } else {
                        this.curr_item.reg.state = null; //INIT REG OFF
                        this.curr_item.reg.state_r = null; //HEATER COOLER
                        this.curr_item.reg.output_heater = null;
                        this.curr_item.reg.output_cooler = null;
                    }
                    this.doAfterRegRuntime();
                    break;
                case this.ACTION.CONTROLLER.REG.GET_DATA_INIT:
                    if (typeof d[0] !== 'undefined') {
                        var id = parseInt(d[0].id);
                        if (this.curr_item.id !== id) {
                          //  console.log("bad reg prog id recieved: " + id + " expected: " + this.curr_item.id);
                            logger.err(269);
                            this.doAfterRegInit();
                            return;
                        }
                        this.curr_item.reg.goal = parseFloat(d[0].goal);
                        this.curr_item.reg.delta = parseFloat(d[0].delta);
                    } else {
                        this.curr_item.reg.goal = null;
                        this.curr_item.reg.delta = null;
                    }
                    this.doAfterRegInit();
                    break;
                case this.ACTION.CONTROLLER.ALR.GET_DATA_RUNTIME:
                    if (typeof d[0] !== 'undefined') {
                        var id = parseInt(d[0].id);
                        if (this.curr_item.id !== id) {
                          //  console.log("bad alr prog id recieved: " + id + " expected: " + this.curr_item.id);
                            logger.err(269);
                            this.doAfterAlrRuntime();
                            return;
                        }
                        this.curr_item.alr.state = d[0].state;
                    } else {
                        this.curr_item.alr.state = null;
                    }
                    this.doAfterAlrRuntime();
                    break;
                case this.ACTION.CONTROLLER.ALR.GET_DATA_INIT:
                    if (typeof d[0] !== 'undefined') {
                        var id = parseInt(d[0].id);
                        if (this.curr_item.id !== id) {
                          //  console.log("bad alr prog id recieved: " + id + " expected: " + this.curr_item.id);
                            logger.err(269);
                            this.doAfterAlrInit();
                            return;
                        }
                        this.curr_item.alr.good_value = parseFloat(d[0].good_value);
                        this.curr_item.alr.good_delta = parseFloat(d[0].good_delta);
                        this.curr_item.alr.sms = parseInt(d[0].sms);
                        this.curr_item.alr.ring = parseInt(d[0].ring);
                    } else {
                        this.curr_item.alr.good_value = null;
                        this.curr_item.alr.good_delta = null;
                        this.curr_item.alr.sms = null;
                        this.curr_item.alr.ring = null;
                    }
                    this.doAfterAlrInit();
                    break;
                case this.ACTION.CONTROLLER.LGR.GET_DATA_RUNTIME:
                    if (typeof d[0] !== 'undefined') {
                        var id = parseInt(d[0].id);
                        if (this.curr_item.id !== id) {
                          //  console.log("bad lgr prog id recieved: " + id + " expected: " + this.curr_item.id);
                            logger.err(269);
                            this.doAfterLgrRuntime();
                            return;
                        }
                        this.curr_item.lgr.state = d[0].state;
                    } else {
                        this.curr_item.lgr.state = null;
                    }
                    this.doAfterLgrRuntime();
                    break;
                case this.ACTION.CONTROLLER.PROGRAM.RESET:
                    cursor_blocker.disable();
                    break;
                case this.ACTION.CONTROLLER.PING:
                    switch (d) {
                        case ACP.RESP.APP_BUSY:
                            this.curr_ppeer.active = true;
                            break;
                        case ACP.RESP.APP_IDLE:
                            this.curr_ppeer.active = false;
                            break;
                        default:
                            this.curr_ppeer.active = false;
                            break;
                    }
                    this.curr_ppeer.elem.update(d);
                    this.pingNextPeer();
                    break;
                case this.ACTION.CONTROLLER.ALR.GET_ALERT:
                    if (d === 'ACT') {
                        this.alertB.innerHTML = this.ALERT_TEXT;
                        cla(this.alertB, 'alert_active');
                        this.alertB.disabled = false;
                        this.alert_sound.play();
                    } else {
                        this.alertB.innerHTML = '';
                        clr(this.alertB, 'alert_active');
                        this.alertB.disabled = true;
                        this.alert_sound.pause();
                    }
                    this.delayCheckAlert();
                    break;
                case this.ACTION.CONTROLLER.REG.SET_DELTA:
                case this.ACTION.CONTROLLER.REG.SET_GOAL:
                case this.ACTION.CONTROLLER.ALR.SET_DELTA:
                case this.ACTION.CONTROLLER.ALR.SET_GOAL:
                    break;
                case this.ACTION.CONTROLLER.PROGRAM.START:
                case this.ACTION.CONTROLLER.PROGRAM.STOP:
                case this.ACTION.CONTROLLER.PROGRAM.RESET:
                case this.ACTION.CONTROLLER.REG.PROG_DISABLE:
                case this.ACTION.CONTROLLER.REG.PROG_ENABLE:
                case this.ACTION.CONTROLLER.LGR.PROG_DISABLE:
                case this.ACTION.CONTROLLER.LGR.PROG_ENABLE:
                case this.ACTION.CONTROLLER.ALR.SET_SMS:
                case this.ACTION.CONTROLLER.ALR.SET_RING:
                    cursor_blocker.disable();
                    break;
                case this.ACTION.CONTROLLER.ALR.DISABLE_ALERT:
                    cursor_blocker.disable();
                    break;
                default:
                   console.log("confirm: unknown action: ", action);
                    break;
            }

        } catch (e) {
            alert("control: confirm: " + e.message);
        }
    };
    this.abort = function (action, m, n) {
        try {
            switch (action) {
                case this.ACTION.CONTROLLER.IM.GET_VALUE:
                    this.curr_item.sensor.value = null;
                    this.curr_item.sensor.state = null;
                    this.doAfterValue();
                    break;
                case this.ACTION.CONTROLLER.REG.GET_DATA_RUNTIME:
                    this.curr_item.reg.state = null; //INIT REG OFF
                    this.curr_item.reg.state_r = null; //HEATER COOLER
                    this.curr_item.reg.output_heater = null;
                    this.curr_item.reg.output_cooler = null;
                    this.doAfterRegRuntime();
                    break;
                case this.ACTION.CONTROLLER.REG.GET_DATA_INIT:
                    this.curr_item.reg.goal = null;
                    this.curr_item.reg.delta = null;
                    this.doAfterRegInit();
                    break;
                case this.ACTION.CONTROLLER.ALR.GET_DATA_RUNTIME:
                    this.curr_item.alr.good_value = null;
                    this.curr_item.alr.good_delta = null;
                    this.curr_item.alr.sms = null;
                    this.curr_item.alr.ring = null;
                    this.doAfterAlrRuntime();
                    break;
                case this.ACTION.CONTROLLER.ALR.GET_DATA_INIT:
                    this.curr_item.alr.state = null;
                    this.doAfterAlrInit();
                    break;
                case this.ACTION.CONTROLLER.LGR.GET_DATA_RUNTIME:
                    this.curr_item.lgr.done = true;
                    this.curr_item.lgr.state = null;
                    this.doAfterLgrRuntime();
                    break;
                case this.ACTION.CONTROLLER.PING:
                    this.curr_ppeer.active = false;
                    this.curr_ppeer.elem.update(null);
                    this.pingNextPeer();
                    break;
                case this.ACTION.CONTROLLER.ALR.GET_ALERT:
                    this.alertB.disabled = true;
                    this.alertB.innerHTML = '';
                    clr(this.alertB, 'alert_active');
                    this.alertB.disabled = true;
                    this.alert_sound.pause();
                    this.delayCheckAlert();
                    break;
                case this.ACTION.CONTROLLER.ALR.SET_SMS:
                    logger.err(267);
                    break;
                case this.ACTION.CONTROLLER.ALR.SET_RING:
                    logger.err(268);
                    break;
                case this.ACTION.CONTROLLER.REG.PROG_DISABLE:
                    logger.err(264);
                    break;
                case this.ACTION.CONTROLLER.REG.PROG_ENABLE:
                    logger.err(263);
                    break;
                case this.ACTION.CONTROLLER.LGR.PROG_DISABLE:
                    logger.err(266);
                    break;
                case this.ACTION.CONTROLLER.LGR.PROG_ENABLE:
                    logger.err(265);
                    break;
                case this.ACTION.CONTROLLER.REG.SET_DELTA:
                    logger.err(260);
                    break;
                case this.ACTION.CONTROLLER.REG.SET_GOAL:
                    logger.err(259);
                    break;
                case this.ACTION.CONTROLLER.ALR.SET_DELTA:
                    logger.err(262);
                    break;
                case this.ACTION.CONTROLLER.ALR.SET_GOAL:
                    logger.err(261);
                    break;
                case this.ACTION.CONTROLLER.ALR.DISABLE_ALERT:
                    cursor_blocker.disable();
                    logger.fail();
                    break;

                default:
                    console.log("abort: unknown action: ", action);
                    break;
            }
        } catch (e) {
            alert("control: abort: " + e.message);
        }
    };
    this.show = function () {
        try {
            document.title = this.getName();
            clr(this.container, "hdn");
            this.visible = true;
            this.curr_item_timeisout = true;
            this.pingNextPeer();
            this.updateNextItem();
            this.delayCheckAlert();
            this.delaySleep();
        } catch (e) {
            alert("control: show: " + e.message);
        }
    };
    this.hide = function () {
        try {
            cla(this.container, "hdn");
            clearTmr(this.tmr_u);
            clearTmr(this.tmr_p);
            clearTmr(this.tmr_sleep);
            this.visible = false;
        } catch (e) {
            alert("control: hide: " + e.message);
        }
    }
    ;
}
var vcontrol = new Control();
visu.push(vcontrol);
