pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "obioproject/obi-motivation"  // Replace with your Docker Hub username and image name
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling code from GitHub...'
                git url: 'https://github.com/priceless2022/obi-motivation.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                // Add specific build commands as needed, e.g., `npm install`
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Insert test commands here, e.g., `npm test` or `pytest`
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Tag Docker Image') {
            steps {
                echo 'Tagging Docker image...'
                script {
                    sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                echo 'Pushing Docker image to Docker Hub...'
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        // Log in to Docker Hub
                        sh "echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin"
                        
                        // Push Docker image to Docker Hub
                        sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}

