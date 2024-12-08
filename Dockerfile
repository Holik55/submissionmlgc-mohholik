# Dockerfile
FROM node:18
WORKDIR /app
ENV PORT 8080
EXPOSE 8080
COPY . .
RUN npm install
# Change this URL bellow with your model URL
ENV MODEL_URL = 'https://storage.googleapis.com/model-storage-mlgcholik/model-in-prod/model.json'
CMD [ "npm", "run", "start"]