let tasks = [];

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
      tasks = tasks.filter((task) => task !== tasks[i]);
      callback(null, "Task completed successfully");
    }
  }, 3500);
}

function listTasks() {
    setTimeout(() => {
        return tasks.filter(task => console.log('Task: '+ task + ' , ' + 'Indice: ' + tasks.indexOf(task)));
    }, 4000);
}

addTasks("mangiare", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});

completeTask(0, (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});

listTasks();