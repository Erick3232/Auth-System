# Use a imagem oficial do Maven para compilar o projeto
FROM maven:3.8.5-openjdk-17 AS build

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo pom.xml e outros arquivos de configuração do Maven
COPY pom.xml ./

# Baixe as dependências do Maven
RUN mvn dependency:go-offline

# Copie o código-fonte do projeto
COPY src ./src

# Compile o projeto e empacote-o em um arquivo JAR
RUN mvn clean package -DskipTests

# Use a imagem oficial do OpenJDK como base para o runtime
FROM openjdk:17-jdk-slim

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo JAR do estágio de build anterior para o diretório de trabalho
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta em que o aplicativo Spring Boot será executado
EXPOSE 8080

# Comando para executar o aplicativo Spring Boot
ENTRYPOINT ["java", "-jar", "app.jar"]
