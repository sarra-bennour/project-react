pipeline {
    agent any

    triggers {
        // Déclenche l'exécution du pipeline à une fréquence spécifique
        cron('H 12 * * 1-5')  // Exécution chaque jour de la semaine à 12h (lundi à vendredi)
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
