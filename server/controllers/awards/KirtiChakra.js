import Chakra from "../../models/gallantryModel/kirtiChakra.js"

export const KirtiChakra = async (req , res) => {
  try {
    const response = Chakra.find();
    if(response)
        return res.status(200).json({msg:"All Posts" , data:response});

  } catch (error) {
    return res.status(500).json({error});
  }
}

export const KirtiChakraSingle = async (req , res) => {
  try {
    const response = Chakra.find();
    if(response)
        return res.status(200).json({msg:"All Posts" , data:response});

  } catch (error) {
    return res.status(500).json({error});
  }
}


