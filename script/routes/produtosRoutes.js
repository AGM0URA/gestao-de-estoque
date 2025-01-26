import { Router } from "express";
import { getProdutos,createProduto,updateProduto ,deleteProduto } from "../controllers/produtosControllers.js";

const router = Router();

router.get("/",getProdutos);
router.post("/",createProduto)
router.put("/:id_produto",updateProduto)
router.delete("/:id_produto",deleteProduto)

export default router