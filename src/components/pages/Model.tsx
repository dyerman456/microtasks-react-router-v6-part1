import {useParams} from "react-router-dom";
import {adidasArr, AdidasItem} from "./Adidas.tsx";
import {pumaArr, PumaItem} from "./Puma.tsx";

type CrossModels = {
  [key: string]: (AdidasItem[] | PumaItem[])
}

const crossModels: CrossModels = {
  adidas: adidasArr,
  puma: pumaArr
}

export const Model = () => {
  const {model, id} = useParams()
  const currentModel = model ?
    crossModels[model].find((el) => el.id === Number(id))
    : null

  return (
    <div style={{textAlign: 'center'}}>
      {currentModel ?
        <>
          <p>{currentModel.model}</p>
          <p>{currentModel.collection}</p>
          <p>{currentModel.price}</p>
          <img
            src={currentModel.picture}
            alt={currentModel.model}
            style={{width: '600px', height: 'auto', marginRight: '10px'}}
          />
        </>
        : <h2>Такой модели не существует</h2>
      }

    </div>
  )
}
