<?php
require("sistem.php");
$q = query("SELECT * FROM ".TB_PLAYER." WHERE id=1");
echo $q[0]['score'];
