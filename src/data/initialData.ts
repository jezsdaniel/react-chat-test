import {IChat} from './i-chat';

const initialChats: IChat[] = [
  {
    user: {
      _id: 1,
      name: 'Alicia',
    },
    messages: [
      {
        _id: 1,
        text: 'Hola, ¿cómo estás?',
        createdAt: new Date(2023, 1, 15, 10, 30),
        user: {
          _id: 2,
          name: 'Alicia',
        },
      },
      {
        _id: 2,
        text: '¡Hola! Estoy bien, ¿y tú?',
        createdAt: new Date(2023, 1, 15, 10, 35),
        user: {
          _id: 1,
          name: 'Dev',
        },
      },
      {
        _id: 3,
        text: '¿Qué planes tienes para hoy?',
        createdAt: new Date(2023, 1, 15, 11, 15),
        user: {
          _id: 2,
          name: 'Alicia',
        },
      },
      {
        _id: 4,
        text: 'No mucho, probablemente ver una película. ¿Tienes alguna recomendación?, me gustan las películas de acción, pero también las de comedia.',
        createdAt: new Date(2023, 1, 15, 11, 20),
        user: {
          _id: 1,
          name: 'Dev',
        },
      },
    ],
  },
  {
    user: {
      _id: 3,
      name: 'Charlie',
    },
    messages: [
      {
        _id: 5,
        text: '¡Suena genial! ¿Alguna recomendación?',
        createdAt: new Date(2023, 1, 15, 12, 0),
        user: {
          _id: 3,
          name: 'Charlie',
        },
      },
      {
        _id: 6,
        text: '¿Te gustan las películas de acción o comedia?',
        createdAt: new Date(2023, 1, 15, 12, 5),
        user: {
          _id: 1,
          name: 'Dev',
        },
      },
      {
        _id: 7,
        text: 'Prefiero las películas de acción. ¿Qué tal "John Wick"?, ¿la has visto?, es muy buena.',
        createdAt: new Date(2023, 1, 15, 12, 10),
        user: {
          _id: 3,
          name: 'Charlie',
        },
      },
    ],
  },
  {
    user: {
      _id: 4,
      name: 'David',
    },
    messages: [
      {
        _id: 8,
        text: 'Hola, ¿qué tal?',
        createdAt: new Date(2023, 1, 16, 9, 45),
        user: {
          _id: 4,
          name: 'David',
        },
      },
      {
        _id: 9,
        text: '¡Hola! Estoy bien, gracias por preguntar.',
        createdAt: new Date(2023, 1, 16, 9, 50),
        user: {
          _id: 1,
          name: 'Dev',
        },
      },
    ],
  },
  {
    user: {
      _id: 5,
      name: 'Eva',
    },
    messages: [
      {
        _id: 10,
        text: 'Buenos días, ¿qué planes tienes para hoy?',
        createdAt: new Date(2023, 1, 16, 10, 30),
        user: {
          _id: 5,
          name: 'Eva',
        },
      },
      {
        _id: 11,
        text: 'Pienso salir a dar un paseo por el parque. ¿Te gustaría acompañarme?',
        createdAt: new Date(2023, 1, 16, 10, 35),
        user: {
          _id: 1,
          name: 'Dev',
        },
      },
    ],
  },
];

export default initialChats;
