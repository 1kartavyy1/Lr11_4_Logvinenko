// Глобальний об'єкт студент
let student = null;

// Функція для створення студента
function createStudent() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = parseInt(document.getElementById("age").value);
    const course = parseInt(document.getElementById("course").value);

    if (name && surname && !isNaN(age) && !isNaN(course)) {
        student = {
            name: name,
            surname: surname,
            age: age,
            course: course,

            // Метод зміни віку
            GetOlder: function() {
                const years = parseInt(document.getElementById("years").value);
                if (!isNaN(years) && years > 0) {
                    this.age += years;
                    updateStudentInfo();
                }
            },

            // Метод зміни прізвища
            ChangeSurname: function() {
                const newSurname = document.getElementById("newSurname").value;
                if (newSurname) {
                    this.surname = newSurname;
                    updateStudentInfo();
                }
            },

            // Метод переведення на наступний курс
            MoveToSecondCourse: function() {
                if (this.course < 4) {
                    this.course++;
                    updateStudentInfo();
                } else {
                    alert("Студент вже на максимальному курсі.");
                }
            }
        };

        // Оновлюємо інформацію про студента
        updateStudentInfo();
    } else {
        alert("Будь ласка, заповніть всі поля.");
    }
}

// Функція для оновлення даних про студента в інтерфейсі
function updateStudentInfo() {
    const studentInfo = document.getElementById("studentInfo");
    if (student) {
        studentInfo.textContent = `Ім'я: ${student.name}, Прізвище: ${student.surname}, Вік: ${student.age}, Курс: ${student.course}`;
    } else {
        studentInfo.textContent = "Студент ще не створений";
    }
}
