import React from 'react';
import ButtonReset from '../ButtonReset/ButtonReset';

const Results = ({ perguntas, value }) => {
  const count = () => {
    const corrects = perguntas.filter(pergunta => pergunta.resposta === value[pergunta.id]);
    const fails = perguntas.filter(pergunta => pergunta.resposta !== value[pergunta.id]);
    return {
        acertos: corrects.length,
        questoesErradas: fails
    };
  };
  return (
    <section className="p-5 pt-24 sm:pt-0">
        <div className="flex justify-between items-center">
            <span className="text-xl">
                Acertos: {count().acertos} de {perguntas.length}
            </span>
            <ButtonReset>Início</ButtonReset>
        </div>
        <div>
            {
                count().acertos ===  perguntas.length ?
                <h3 className="font-medium text-green-500 my-5 text-xl">
                    Parabéns, você acertou todas questões
                </h3>
                :
                <h3 className="font-medium text-red-500 my-5 text-xl">Questões erradas: </h3>
            }
            {
                count().questoesErradas.map((e,i) => (
                    <p className="my-5 font-medium" key={i * Math.random()}>
                        <span className="text-red-400">{`${i + 1}) ${e.pergunta}`}</span>
                        <span className="block">
                            Resposta correta: {e.resposta}
                        </span>
                    </p>
                ))
            }
        </div>
    </section>
  )
}

export default Results;