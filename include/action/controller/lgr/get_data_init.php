<?php

namespace controller\lgr;

class get_data_init {

    public static function getUser() {
        return ['stranger' => '*'];
    }

    public static function execute($p) {
        \sock\init($p['address'], $p['port']);
        \acp\sendPackI1(ACP_CMD_LGR_PROG_GET_DATA_INIT, $p['item']);
        $data= \acp\getLgrDataInit();
        \sock\suspend();
        return $data;
    }

}
