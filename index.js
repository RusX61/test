// У тебя есть it-компания (класс) у которой в штате есть разрабы. Сгенерь рандомное количество фронтенд и бекенд разрабов
// У каждого разраба будет его рейт (долларов в час) и грейд (Джун, мидл, сеньор). Это тоже можешь сгенерить рандомно
// В компанию будет передаваться проект, у которого будут в виде настроек список задач, и у каждой задачи будет указываться сколько 
//по времени ее делать, на какой стороне (бек/фронт) и можно ли ее делать одновременно нескольким разрабам (флаг тру фолс)
// Задача программы просчитать минимальное количество часов за которое компания сможет сделать проект и сумму которую заплатит заказчик


const getRandomInteger = (min, max) => Math.floor(Math.random () * (max - min + 1)) + min;
const getRandomIteration = (min, max, callback) => Array(getRandomInteger(min, max))
    .fill('')
    .forEach(callback);

const TYPE_SPECIALIZATION = ['backend', 'frontend'];
const DEVELOPERS_RANG = ['junior', 'middle', 'senior'];

class Task {
    id;
    inProgress = false;
    completed = false;

    constructor({
        limit = 1,
        type = TYPE_SPECIALIZATION[0],
        multi = false,
        project = null,
        id,
    }) {
        this.limit = limit;
        this.type = type;
        this.multi = multi;
        this.project = project;
        this.id = id;
    }
}

class Project {
    inProgress = false;
    completed = false;
    tasks = [];

    constructor() {
        this.createTasks();
    }

    createTask = (index = 1) => {
        const task = new Task({
            id: index,
            limit: getRandomInteger(1, 10),
            type: TYPE_SPECIALIZATION[index % 2],
            multi: !!getRandomInteger(0, 1),
            project: this,
        })

        this.tasks.push(task);
    }

    createTasks = () => {
        getRandomIteration(1, 100, (_, index) => {
            this.createTask(index + 1);
        });
    }
}

class Developer {
    tasksList = [];

    constructor(id) {
        this.id = id;
        this.specialization = TYPE_SPECIALIZATION[getRandomInteger(0, 1)];
        this.rang = DEVELOPERS_RANG[getRandomInteger(0, 2)];
        this.rate = DEVELOPERS_RANG.findIndex((item) => item === this.rang);
    }

    startWorking = () => {
        const currentTask = this.tasksList[0];

        if (currentTask.limit) {
            console.log(currentTask)
            currentTask.limit = currentTask.limit - 1;
            currentTask.inProgress = true
        } else {
            currentTask.inProgress = false;
            currentTask.completed = true;

            this.tasksList = [];
        }
    }
}

class Firma {
    employees = [];
    projects = [];

    constructor() {
        this.setEmployees();
        this.sendProjects();
    }

    setEmployees = () => {
        getRandomIteration(1, 2, (_, index) => {
            const employee = new Developer(index + 1);

            this.employees.push(employee);
        });
    }

    sendProjects = () => {
        getRandomIteration(1, 1, (_, index) => {
            const project = new Project(index + 1);

            this.projects.push(project);
        });
    }

    getFreeEmployees = () => this.employees.reduce((acc, employee) => ({
        ...acc,
        [!employee.tasksList.length && employee.specialization]: [...acc[employee.specialization], employee]
    }), {
        [TYPE_SPECIALIZATION[0]]: [],
        [TYPE_SPECIALIZATION[1]]: [],
    })

    startWorking = () => {
        const notCompletedProjects = this.projects.filter((project) => !project.completed);
        const currentProject = notCompletedProjects[0];

        currentProject.tasks.forEach((task) => {
            const freeEmployees = this.getFreeEmployees();
            const activeEmployee = freeEmployees[task.type][0];

            if (activeEmployee) {
                activeEmployee.tasksList.push(task);
            }
        })

        this.employees.forEach(employee => employee.startWorking());
    }
}

const firma = new Firma();

firma.startWorking();

firma.startWorking();