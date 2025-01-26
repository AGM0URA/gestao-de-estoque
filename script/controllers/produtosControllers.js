import Produtos from "../models/produtosModels.js";

export const getProdutos = async (request, response) => {
    const page = parseInt(request.query.page) || 1;
    const limit = parseInt(request.query.limit) || 10;
    const offset = (page - 1) * 10;

    try {
        const produtos = await Produtos.findAndCountAll({
            limit,
            offset,
        });

        const totalPaginas = Math.ceil(produtos.count / limit);
        response.status(200).json({
            totalProdutos: produtos.count,
            totalPaginas,
            paginaAtual: page,
            itemsPorPagina: limit,
            proximaPagina:
                totalPaginas === 0
                    ? null
                    : `http://localhost:3333/produtos?page=${page + 1}`,
            produtos: produtos.rows,
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erro ao buscar produtos" });
    }
};

export const createProduto = async (request, response) => {
    const { nome_produto, preco_produto, descricao_produto, quantidade_produto } = request.body;

    const newProduto = {
        nome_produto,
        preco_produto,
        descricao_produto,
        quantidade_produto,
    };

    try {
        await Produtos.create(newProduto);
        response.status(201).json({ message: "Produto criado com sucesso" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erro ao criar o produto" });
    }
};

export const updateProduto = async (request, response) => {
    const { id_produto } = request.params; 
    const { nome_produto, descricao_produto, quantidade_produto, preco_produto } = request.body;

    try {
        
        const produto = await Produtos.findOne({ where: { id_produto } });
        if (!produto) {
            return response.status(404).json({ error: "Produto não encontrado" });
        }

        
        await Produtos.update(
            { nome_produto, preco_produto, descricao_produto, quantidade_produto },
            { where: { id_produto } } 
        );

        response.status(200).json({ message: "Produto atualizado com sucesso" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erro ao atualizar o produto" });
    }
};


export const deleteProduto = async (request, response) => {
    const { id_produto } = request.params; 

    try {
        
        const produto = await Produtos.findOne({ where: { id_produto } });
        if (!produto) {
            return response.status(404).json({ error: "Produto não encontrado" });
        }

   
        await Produtos.destroy({ where: { id_produto } });
        response.status(200).json({ message: "Produto deletado com sucesso" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erro ao deletar o produto" });
    }
};
