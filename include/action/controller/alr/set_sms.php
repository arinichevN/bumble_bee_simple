<?php

namespace controller\alr;

class set_sms {

    public static function getUser() {
        return ['stranger' => '*'];
    }

    public static function execute($p) {
        \sock\init($p['address'], $p['port']);
        \acp\sendPackI2(ACP_CMD_ALR_PROG_SET_SMS, $p['item']);
        \sock\suspend();
    }

}
