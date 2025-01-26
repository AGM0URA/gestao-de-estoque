import { response } from "express";
import Produtos from "../models/produtosModels.js";

export const getProdutos = async (request, response)=>{
    const page = parseInt(request.query.page)|| 1;
    const limit = parseInt(request.query.limit)||10
    const offset = (page - 1)*10;

    try{
        const produtos = await Produtos.findAndCountAll({
            limit,
            offset,
        });
        const totalPaginas = Math.ceil(produtos.conut / limit);
        response.status(200).json({
            totalProdutos: produtos.count,
            totalPaginas,
            paginaAtual: page,
            itemsProPagina: page, 
            proximaPagina:
            totalPaginas === 0
            ? null
            : 
        })


    }
}