<?php

namespace controller\alr;

class disable_alert {

    public static function getUser() {
        return ['stranger' => '*'];
    }

    public static function execute($p) {
        \sock\init($p['address'], $p['port']);
        \acp\sendPackBroadcast(ACP_CMD_ALR_ALARM_DISABLE);
        \sock\suspend();
    }

}
