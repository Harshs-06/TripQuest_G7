const express = require('express');
const {create_group,see_group,delete_group,update_group} = require("../controllers/group");
const router= express.Router() ;

router.post('/create_group',create_group);
router.get('/see_group',see_group);
router.delete('/delete_group/:gid',delete_group);
router.put('/update_group/:gid',update_group);

module.exports=router;