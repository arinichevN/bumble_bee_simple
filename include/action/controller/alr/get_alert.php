<?php

namespace controller\alr;

class get_alert {

    public static function getUser() {
        return ['stranger' => '*'];
    }

    public static function execute($p) {
        \sock\init($p['address'], $p['port']);
        \acp\sendPackBroadcast(ACP_CMD_ALR_ALARM_GET);
        $data = \acp\getString();
        \sock\suspend();
        return $data;
    }

}
