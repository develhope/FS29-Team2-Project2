const tasks = [];

function addTasks(task, callback) {
  setTimeout(() => {
    if (typeof task === "string") {
      tasks.push(task);
      callback(null, "Task added successfully: " + tasks);
    } else {
      callback(new Error("Task must be a non empty string!!"), null);
    }
  }, 2500);
}

function completeTask(i, callback) {
  setTimeout(() => {
    if (i >= tasks.length || i < 0) {
      callback(new Error("Invalid task index"), null);
    } else {
      console.log(tasks[i]);
      tasks.filter((task) => task !== task[i]);
      console.log(tasks);
      callback(null, "Task completed successfully");
    }
  }, 3000);
}

function listTasks() {}

addTasks("mangiare", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
    console.log(tasks);
  }
});

completeTask(0, (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
