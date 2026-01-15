FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY next.config.js postcss.config.js tailwind.config.js tsconfig.json ./
COPY app ./app
COPY components ./components
COPY lib ./lib
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
