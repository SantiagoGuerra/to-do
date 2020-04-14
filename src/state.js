import seed from './data/seed';

const state = {
  projectList: seed(),
};

export default function initializeState() {
  return state;
}