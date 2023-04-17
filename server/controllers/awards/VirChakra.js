import Chakra from "../../models/gallantryModel/virChakra.js"

export const Vir = async (req , res) => {
  try {
    const response = Chakra.find();
    if(response)
        return res.status(200).json({msg:"All Posts" , data:response});

  } catch (error) {
    return res.status(500).json({error});
  }
}

export const VirSingle = async (req , res) => {
  try {
    const response = Chakra.find();
    if(response)
        return res.status(200).json({msg:"All Posts" , data:response});

  } catch (error) {
    return res.status(500).json({error});
  }
}


