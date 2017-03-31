<?php

namespace controller\alr;

class set_ring {

    public static function getUser() {
        return ['stranger' => '*'];
    }

    public static function execute($p) {
        \sock\init($p['address'], $p['port']);
        \acp\sendPackI2(ACP_CMD_ALR_PROG_SET_RING, $p['item']);
        \sock\suspend();
    }

}
