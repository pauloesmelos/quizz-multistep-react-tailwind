import React from 'react';
import Radio from './components/Input/Radio';
import Results from './components/Results/Results';
import { GlobalContextSlide } from './components/GlobalContext/GlobalContextSlide';

const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
];
const Game1 = () => {
  const [resp, setResp] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: ''
  });
  const { slideActive, setSlideActive } = React.useContext(GlobalContextSlide);

  // minha solução - uma pergunta por página

  return (
    <section className="h-screen w-full bg-gray-100 flex justify-center items-center flex-col
    ">
       {
        perguntas.map((pergunta,indice) => (
            slideActive === indice ?
            <Radio
            key={indice * Math.random()}
            question={pergunta}
            value={resp}
            setValue={setResp}
            />
            :
            <div key={indice}></div>
        ))
       }
       {
        slideActive  === perguntas.length ?
        <>
            <Results value={resp} perguntas={perguntas} />
            <button 
            className="p-2 bg-[#fb523c] text-white rounded-md font-bold block my-8 w-full max-w-[200px]
            hover:bg-red-900 duration-500"
            onClick={() => setSlideActive(0)}
            >
                Reiniciar
            </button>
        </> :
        <button 
        className="p-2 bg-[#593cfb] text-white rounded-md font-bold block my-8 w-full max-w-[200px]
        hover:bg-blue-900 duration-500"
        onClick={() => setSlideActive(active => active + 1)}
        >
            Próximo
        </button>
       }
    </section>
  )
}

export default Game1;