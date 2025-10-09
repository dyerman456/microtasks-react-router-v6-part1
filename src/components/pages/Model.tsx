import {useParams} from "react-router-dom";
import {AdidasItem} from "./Adidas.tsx";

type Props = {
  arr: AdidasItem[]
}

export const Model = ({arr}: Props) => {
  const params = useParams()
  const currentModel = arr.find(el => el.id === Number(params.id))

  return (
    <div style={{textAlign: 'center'}}>
      {currentModel ?
        <>
          <p>{currentModel.model}</p>
          <p>{currentModel.collection}</p>
          <p>{currentModel.price}</p>
          <img
            src={currentModel.picture}
            style={{width: '600px', height: 'auto', marginRight: '10px'}}
          />
        </>
        : <h2>Такой модели не существует</h2>
      }

    </div>
  )
}
