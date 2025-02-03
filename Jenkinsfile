pipeline {
    agent any

    triggers {
        // Vérifie toutes les 5 minutes si des modifications ont été poussées dans le dépôt
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
        success {
            echo 'Build completed.'
        }
    }
}
