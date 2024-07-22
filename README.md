# TrucoJS

Welcome to the TrucoJS project! This is an exciting project aimed at creating a multiplayer card game using technologies like Node.js with Express, Next.js, Dragonfly and Nginx.

## Overview

The project aims to develop a multiplayer card game platform where users can register, create game lobbies, invite friends, and play card games together in real-time. The platform will provide a seamless user experience with a modern and responsive interface.

## Features

- **User Authentication:** Allow users to register, log in, and manage their profiles securely.
- **Game Lobby:** Create and join game lobbies, view available games, and invite friends to play.
- **Real-time Gameplay:** Implement real-time gameplay using WebSocket technology for smooth and interactive gaming experience.
- **Responsive UI:** Develop a responsive user interface using Next.js for a seamless experience across different devices and screen sizes.
- **Image Upload:** Allow users to upload custom avatars or profile pictures.
- **Scalability:** Design the architecture to be scalable, allowing for a large number of concurrent users and game lobbies.

## Technologies Used

- **Nginx:** High-performance web server and reverse proxy to handle client requests and serve static files.
- **Node.js + Express:** Backend framework for building RESTful APIs, managing user sessions, and handling game logic.
- **Next.js:** React framework for server-side rendering, routing, and building modern web applications with React.
- **Dragonfly:** Simple, performant, and cost-efficient in-memory data store. Dragonfly is fully compatible with Redis APIs but without the Redis management complexity.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ruandsx/trucojs.git
   ```

2. Configure environment variables:

   Create `.env` files in both the `client` and `server` directories, and add necessary environment variables such as database connection details, API keys, etc.

3. Run the docker-compose file:

   ```bash
   # Start the project in watch mode
   docker compose -f "docker-compose.dev.yml" up -d --build

   # or run as is in production
   docker compose up -d --build
   ```

4. Access the application:

   Open your browser and navigate to [`http://localhost:80`](http://localhost:80) to access the TrucoJS application.

## Contributing

We welcome contributions from the community! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/awesome-feature`).
3. Make your changes and commit them (`git commit -am 'Add awesome feature'`).
4. Push your changes to the branch (`git push origin feature/awesome-feature`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README.md according to your project's specific details and requirements. Good luck with your TrucoJS project! If you have any questions or need further assistance, don't hesitate to ask.
