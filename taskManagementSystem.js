const tasks = [];

function addTasks(task, callback) {
  setTimeout(() => {
    if (typeof task === "string") {
      tasks.push(task);
      callback(null, "Task added successfully: " + tasks);
    } else {
      callback(new Error("Task must be a non empty string!!"), null);
    }
  }, 2000);
}

function completeTask(i, callback) {}

function listTasks() {}

addTasks("mangiare", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
    console.log(tasks);
  }
});
