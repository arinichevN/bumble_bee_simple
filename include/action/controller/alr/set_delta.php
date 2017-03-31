<?php

namespace controller\alr;

class set_delta {

    public static function getUser() {
        return ['stranger' => '*'];
    }

    public static function execute($p) {
        \sock\init($p['address'], $p['port']);
        \acp\sendPackI1F1(ACP_CMD_ALR_PROG_SET_DELTA, $p['item']);
        \sock\suspend();
    }

}
