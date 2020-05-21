# BUILD GO APP
FROM golang:latest
WORKDIR /app
COPY . .
RUN go build -o build

# BUILD REACT APP
FROM node:latest as node
WORKDIR /app
COPY react-app .
RUN yarn build -o build

# PREPARE PRODUCTION
FROM golang:latest
WORKDIR /app
COPY --from=0 /app/build server
COPY --from=1 /app/build static

# RUN THE APP
EXPOSE 4000
CMD ["./server", "-port", "4000", "-spa", "./static"]
