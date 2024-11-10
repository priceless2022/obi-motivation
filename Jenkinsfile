pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Pull code from your GitHub repository
                git url: 'https://github.com/priceless2022/obi-motivation.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                // Add build commands, like `npm install` or `make`
                echo 'Building...'
            }
        }
        stage('Test') {
            steps {
                // Add test commands, like `npm test` or `pytest`
                echo 'Running tests...'
            }
        }
    }
}

