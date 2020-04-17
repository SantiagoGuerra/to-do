import ProjectList from './logic/projectList';
import Project from './logic/project';
import Task from './logic/task';


export default function seed() {
  const projectList = new ProjectList();

  const project1 = new Project('Home repair');
  projectList.addProject(project1);

  const taskP1T1 = new Task(
    'Clean the roof',
    'Remove the leaves out of the pipes',
    '20/12/28',
    'low',
    true,
  );
  project1.addTask(taskP1T1);

  const taskP1T2 = new Task(
    'Fix the door',
    'Fix noisy door',
    '20/12/28',
    'low',
  );
  project1.addTask(taskP1T2);

  const taskP1T3 = new Task(
    'Remove weeds',
    'Task Description',
    '20/12/28',
    'low',
  );
  project1.addTask(taskP1T3);


  const project2 = new Project('Tree House Construction');
  projectList.addProject(project2);

  const taskP2T1 = new Task(
    'Buy materials',
    'Task Description',
    '20/12/28',
    'low',
  );
  project2.addTask(taskP2T1);

  const taskP2T2 = new Task(
    'Build',
    'Task Description',
    '20/12/28',
    'low',
  );
  project2.addTask(taskP2T2);

  const taskP2T3 = new Task(
    'Paint',
    'Task Description',
    '20/12/28',
    'low',
  );
  project2.addTask(taskP2T3);

  const project3 = new Project('Cake');
  projectList.addProject(project3);

  const taskP3T1 = new Task(
    'Buy ingredients',
    'Task Description',
    '20/12/28',
    'low',
  );
  project3.addTask(taskP3T1);

  const taskP3T2 = new Task(
    'Put preparation in the oven',
    'Task Description',
    '20/12/28',
    'low',
  );
  project3.addTask(taskP3T2);

  const taskP3T3 = new Task(
    'Enjoy',
    'Task Description',
    '20/12/28',
    'low',
  );
  project3.addTask(taskP3T3);

  return projectList;
}
