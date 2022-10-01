"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// const Router = require("express");
const router = (0, express_1.Router)();
const controller = require("./controller/controller");
router.get("/login", controller.getLogin);
router.get("/api/chart", controller.getApiChart);
router.get("/callback", controller.getCallback);
router.post("/findTrack", controller.findTrack);
router.get("/playlists", controller.getPlaylists);
exports.default = router;
