# FROM mysql
# ENV MYSQL_ROOT_PASSWORD=1234
# EXPOSE 3306

# 16 버전의 노드 설치
FROM node:16
WORKDIR /app

# 현재 위치 / 작업할 컨테이너 위치
COPY . /app

RUN npm install

EXPOSE 8000

# node index.js
CMD [ "node", "index.js" ]