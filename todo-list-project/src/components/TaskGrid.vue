<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <Task
        v-for="(task, i) in tasks"
        :key="task.name"
        :task="task"
        @taskDeleted="$emit('taskDeleted', i)"
        @taskStateChange="$emit('taskStateChange', i)"
      >
      </Task>
    </template>
    <p v-else class="no-task">Sua vida está em dia! ;)</p>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  components: { Task },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.task-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.task-grid .task {
  margin: 10px;
}

.no-task {
  font-size: 2rem;
  color: #aaa;
}
</style>
