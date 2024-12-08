# Dockerfile
FROM node:18
WORKDIR /app
ENV PORT 3000
EXPOSE 3000
COPY . .
RUN npm install
# Change this URL bellow with your model URL
ENV MODEL_URL = 'https://storage.googleapis.com/model-storage-mlgcholik/model-in-prod/model.json'
CMD [ "npm", "run", "start"]