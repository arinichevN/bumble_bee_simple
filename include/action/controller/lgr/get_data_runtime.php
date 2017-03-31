<?php

namespace controller\lgr;

class get_data_runtime {

    public static function getUser() {
        return ['stranger' => '*'];
    }

    public static function execute($p) {
        \sock\init($p['address'], $p['port']);
        \acp\sendPackI1(ACP_CMD_LGR_PROG_GET_DATA_RUNTIME, $p['item']);
        $data= \acp\getLgrDataRuntime();
        \sock\suspend();
        return $data;
    }

}
