import React, { useState, useEffect } from "react";

import { fetchModels } from "../service/sketchfabServiceRM";
import type { Model } from "../service/sketchfabServiceRM";



const ModeloLista: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);

  useEffect(() => {
    const getModels = async () => {
      const data = await fetchModels("");
      setModels(data);
    };
    getModels();
  }, []);

  return (
    <div
     className="model-container">
      {models.map((model) => (
        <div 
         key={model.id} className="model-card"
        >
          <img 
           src={model.image} alt={model.name}/>
          <h3>
            {model.name.toUpperCase()}
          </h3>
          <p>
            <strong
             >
                Status: 
            </strong>
             {model.status}
          </p>
          <p>
            <strong
             >
                Species: 
            </strong>
             {model.species}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ModeloLista;
