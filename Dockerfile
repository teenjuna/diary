FROM golang:latest

# Copy the code.
WORKDIR /app
COPY . .

# Build the go app.
RUN mkdir /build
RUN go build -o /build/main .

# Expose 4000 port.
EXPOSE 4000

# Run the app. 
CMD ["/build/main", "-port", "4000"]
