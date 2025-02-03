pipeline {
    agent any

    triggers {
        // Trigger the pipeline when a GitHub webhook is received
        githubPush()
    }

    stages {
        stage('Fetch Source Code') {
            steps {
                checkout scm
            }
        }

        stage('Display System Date') {
            steps {
                script {
                    def date = new Date()
                    echo "Current system date: ${date}"
                }
            }
        }
    }

    post {
        always {
            echo 'Build completed.'
        }
    }
}
