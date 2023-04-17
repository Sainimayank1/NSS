import express from "express";
import auth from "../utils/auth.js";
import {AshokaVir , AshokaSingleVir} from "../controllers/awards/AshokaChakra.js"
import {KirtiChakra,KirtiChakraSingle} from "../controllers/awards/KirtiChakra.js"
import {MahaVir,MahaVirSingle} from "../controllers/awards/MahaVirChakra.js"
import {paramVir,paramVirSingle} from "../controllers/awards/ParamVirChakra.js"
import {Vir,VirSingle} from "../controllers/awards/VirChakra.js"
import {ShauryaChakra,ShauryaChakraSingle} from "../controllers/awards/ShauryaChakra.js"

const router = express.Router();




router.get("/ashoka" , AshokaVir);
router.get("/kirti",KirtiChakra);
router.get("/mahavir" , MahaVir)
router.get("/paramvir" ,paramVir);
router.get("/virchakra" ,Vir);
router.get("/shaurya" ,ShauryaChakra);


router.get("/ashokaSingle:_id",AshokaSingleVir);
router.get("/kirtiSingle:_id",KirtiChakraSingle);
router.get("/mahavirSingle:_id",MahaVirSingle)
router.get("/paramvirSingle:_id",paramVirSingle)
router.get("/virchakraSingle:_id",VirSingle)
router.get("/shauryaSingle:_id",ShauryaChakraSingle)




export default router