

type Student = {study: () => {}}

type Emp = {work: () => {}}

function activity(actor: Student | Emp) {
  if ("study" in actor) {
    return actor.study();
  } else {
    return actor.work();
  }
}