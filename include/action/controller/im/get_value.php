<?php

namespace controller\im;

class get_value {

    public static function getUser() {
        return ['stranger' => '*'];
    }

    public static function execute($p) {
        \sock\init($p['address'], $p['port']);
        \acp\sendPackI1(ACP_CMD_GET_FTS, $p['item']);
        $data= \acp\getFTS();
        \sock\suspend();
        return $data;
    }

}
