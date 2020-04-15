import ProjectList from '../logic/projectList';
import Project from '../logic/project';
import Task from '../logic/task';


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
    'P1T2',
    'Project Description',
    '20/12/28',
    'low',
  );
  project1.addTask(taskP1T2);

  const taskP1T3 = new Task(
    'P1T3',
    'Project Description',
    '20/12/28',
    'low',
  );
  project1.addTask(taskP1T3);


  const project2 = new Project('Tree House Construction');
  projectList.addProject(project2);

  const taskP2T1 = new Task(
    'P2T1',
    'Project Description',
    '20/12/28',
    'low',
  );
  project2.addTask(taskP2T1);

  const taskP2T2 = new Task(
    'P2T2',
    'Project Description',
    '20/12/28',
    'low',
  );
  project2.addTask(taskP2T2);

  const taskP2T3 = new Task(
    'P2T3',
    'Project Description',
    '20/12/28',
    'low',
  );
  project2.addTask(taskP2T3);

  const project3 = new Project('Cake');
  projectList.addProject(project3);

  const taskP3T1 = new Task(
    'P3T1',
    'Project Description',
    '20/12/28',
    'low',
  );
  project3.addTask(taskP3T1);

  const taskP3T2 = new Task(
    'P3T2',
    'Project Description',
    '20/12/28',
    'low',
  );
  project3.addTask(taskP3T2);

  const taskP3T3 = new Task(
    'P3T3',
    'Project Description',
    '20/12/28',
    'low',
  );
  project3.addTask(taskP3T3);

  return projectList;
}