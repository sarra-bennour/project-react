const total = (students) => {
  return students
    .map(student => {
      // Ajouter le bonus de 15 points aux étudiants ayant une note inférieure à 50
      if (student.marks < 50) {
        student.marks += 15;
      }
      return student;
    })
    .filter(student => student.marks > 50)  // Filtrer ceux qui ont une note > 50
    .reduce((acc, student) => acc + student.marks, 0);  // Additionner les notes
};

export default total;