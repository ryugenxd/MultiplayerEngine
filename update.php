<?php

require("sistem.php");
//echo($_POST['up']);
mysqli_query($connect,"UPDATE ".TB_PLAYER." SET score=".$_POST['up']." WHERE id=1");
//query("UPDATE ".TB_PLAYER." SET score={$_POST['score']} WHERE id=1");