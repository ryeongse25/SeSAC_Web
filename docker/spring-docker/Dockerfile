FROM openjdk:17
WORKDIR /app
COPY . /app
EXPOSE 8080
RUN microdnf install findutils
CMD ["./gradlew", "build"]