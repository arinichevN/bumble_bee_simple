<?php

namespace controller\reg;

class switch_state {

    public static function getUser() {
        return ['stranger' => '*'];
    }

    public static function execute($p) {
        \sock\init($p['address'], $p['port']);
        \acp\sendPackI1(ACP_CMD_REGSMP_PROG_SWITCH_STATE, $p['item']);
        \sock\suspend();
    }

}
