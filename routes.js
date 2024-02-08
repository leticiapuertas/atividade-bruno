import express from "express"

const routes = express.Router()

let lista = ["Alvin","Theodor"," Esquiletes","Simon"];

routes.get("/", (req, res)=>{
    
    return res.status(200).json("Hello Word")
})

routes.get("/nomes/:nome", (req, res)=>{
    let js = false
    const { nome } = req.params

    for(let i = 0; i < lista.length; i++){
        if(nome == lista[i]){
            js = true
        }
    }
    if(js == true){
        return res.status(200).json(`Oi ${nome}`)
    }
    else{
        return res.status(500).json(`Não foi encontrado`)
    }
})



export default routes