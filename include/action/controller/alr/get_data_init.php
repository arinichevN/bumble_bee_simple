<?php

namespace controller\alr;

class get_data_init {

    public static function getUser() {
        return ['stranger' => '*'];
    }

    public static function execute($p) {
        \sock\init($p['address'], $p['port']);
        \acp\sendPackI1(ACP_CMD_ALR_PROG_GET_DATA_INIT, $p['item']);
        $data= \acp\getAlrDataInit();
        \sock\suspend();
        return $data;
    }

}
