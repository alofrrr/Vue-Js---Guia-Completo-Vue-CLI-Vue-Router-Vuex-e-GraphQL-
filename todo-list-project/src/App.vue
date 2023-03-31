<template>
  <div id="app">
    <h1>To-do List</h1>
    <TaskProgress :progress="progress" />
    <NewTask @taskAdded="addTask" />
    <br />
    <TaskGrid
      :tasks="tasks"
      @taskDeleted="deleteTask"
      @taskStateChange="toggleTaskState"
    />
  </div>
</template>

<script>
import NewTask from "./components/NewTask.vue";
import TaskGrid from "./components/TaskGrid.vue";
import TaskProgress from "./components/TaskProgress.vue";

export default {
  components: { TaskGrid, NewTask, TaskProgress },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },
  methods: {
    addTask(task) {
      const sameTask = this.tasks.find((t) => t.name === task.name);
      if (!sameTask) {
        this.tasks.push({ ...task, pending: task.pending || true });
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTaskState(index) {
      this.tasks[index].pending = !this.tasks[index].pending;
    },
  },
  created() {
    const json = localStorage.getItem("tasks");
    const array = JSON.parse(json);
    if (Array.isArray(array)) {
      this.tasks = array;
    } else {
      this.tasks = [];
    }
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
