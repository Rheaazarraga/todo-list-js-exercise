function newTask(title, description) {

  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW:

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); //task[0]
const task2 = newTask("Do Laundry", "Make sure to wash delicates on handwash mode"); //task [1]
const tasks = [task1, task2];

// console.log([task1, task2])

task1.logState(); //Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); //Clean Cat Litter has been completed

task2.logState();
task2.markCompleted();
task2.logState();

