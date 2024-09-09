import { transactions } from "../dummyData/data.js";


const transactionResolver = {
    Query:{
        transactions:() =>{
            transactions
        }

    },
    Mutation:{

    }
}

export default transactionResolver;