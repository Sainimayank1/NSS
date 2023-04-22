import Chakra from "../../models/gallantryModel/paramVirChakra.js"

export const paramVir = async (req , res) => {
  try {
    const response = await Chakra.find();
    if(response)
        return res.status(200).json({msg:"All Posts" , data:response});

  } catch (error) {
    return res.status(500).json({error});
  }
}


export const paramVirSingle = async (req , res) => {
  const {_id} = req.params
  try {
    const response = await Chakra.find({_id});
    if(response)
    return res.status(200).json({msg:"Post Find SuccesFully" , data:response});
    
  } catch (error) {
    return res.status(500).json({error});
  }
}

export const paramVirPost = async (req , res) => {
  const { img, userName, Rank, fatherName, resident, service, award } = req.body;
  try {
    const response = await Chakra.create({ img, userName, Rank, fatherName, resident, service, award });
    if (response)
      return res.status(200).json({ msg: "Post Create Succesfully" });

  } catch (error) {
    return res.status(500).json({ error });
  }
}