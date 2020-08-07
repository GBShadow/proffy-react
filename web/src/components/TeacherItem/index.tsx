import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
          <header>
            <img
              src="https://avatars1.githubusercontent.com/u/45005219?s=460&u=2da3fe6275a04868a53e886ac949cbf7b428265b&v=4"
              alt="Gustavo"
            />
            <div>
              <strong>Gustavo B. Sombra</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /> <br />
            Entusiasta das melhores tecnologias de química avançada, entusiasta
            das melhores tecnologias de química avançada.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 50,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;
