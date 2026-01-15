FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm install
COPY tsconfig.json ./
COPY src ./src
RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "start"]
