# Download and Run the JavaScript Project Using Docker

Follow the steps below to download the Docker image of the project and run it on your local machine.

## Prerequisites

Make sure you have the following installed on your system:

1. **Docker**: [Install Docker](https://docs.docker.com/get-docker/) if it is not already installed.

2. **Git**: You will need Git to clone the repository. If Git is not installed, you can [install Git here](https://git-scm.com/downloads).

## Steps to Download and Run the Docker Image

### Step 1: Clone the Repository

git clone https://github.com/stalindavdvas/ProyectoJavascript.git

cd ProyectoJavascript

Step 2: Build the Docker Image

docker build -t proyectojavascript .

Or pull it from Docker Hub:

docker pull stalinvasco2024/proyectojavascript:latest

Step 3: Run the Docker Container

Use Docker Desktop to run the container.

Step 4: Access the Application

Open your browser:

http://localhost:80

Step 5: Test the Deployed Project

The deployed version is live on Railway:

https://proyectojavascript-production.up.railway.app/
