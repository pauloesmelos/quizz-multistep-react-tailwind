import React from 'react';
import { GlobalContextSlide } from './components/GlobalContext/GlobalContextSlide';
import Radio from './components/Input/Radio';
import Results from './components/Results/Results';
const perguntas = [
    {
      pergunta: 'Qual a capital de Tocatins ?',
      options: [
        'Palmas',
        'Sergipe',
        'Tocantinópolis',
      ],
      resposta: 'Palmas',
      id: 'p1',
    },
    {
      pergunta: 'Quantos estados o Brasil possui ?',
      options: [
        '25',
        '24',
        '26',
      ],
      resposta: '26',
      id: 'p2',
    },
    {
      pergunta: 'Qual o estado com a menor população do Brasil ?',
      options: ['Amapa', 'Acre', 'Roraima'],
      resposta: 'Roraima',
      id: 'p3',
    },
    {
      pergunta: 'Qual a segunda cidade mais populosa do Brasil?',
      options: ['Belo Horizonte', 'Brasília', 'Rio de Janeiro'],
      resposta: 'Rio de Janeiro',
      id: 'p4',
    },
];
const Game2 = () => {
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
            num={indice}
            />
            :
            <div key={indice}></div>
        ))
       }
       {
        slideActive === perguntas.length ?
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

export default Game2;