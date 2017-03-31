<?php

namespace controller\alr;

class get_data_runtime {

    public static function getUser() {
        return ['stranger' => '*'];
    }

    public static function execute($p) {
       \sock\init($p['address'], $p['port']);
       \acp\sendPackI1(ACP_CMD_ALR_PROG_GET_DATA_RUNTIME, $p['item']);
        $data=\acp\getAlrDataRuntime();
        \sock\suspend();
        return $data;
    }

}
