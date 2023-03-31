<template>
  <div
    class="task"
    :class="stateClass"
    @click="$emit('taskStateChange', task)"
  >
    <span class="close" @click.stop="$emit('taskDeleted', task)">x</span>
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>

<style>
.task {
  position: relative;
  box-sizing: border-box;
  width: 300px;
  height: 80px;
  padding: 10px;
  border-radius: 8px;
  font-size: 1.6rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pending {
  border-left: 12px solid #b73229;
  background-color: #f44336;
}

.done {
  border-left: 12px solid #2e7d32;
  background-color: #4caf50;
  color: #ddd;
  text-decoration: line-through;
}

.pending .close {
  background-color: #b73229;
}

.done .close {
  background-color: #2e7d32;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  user-select: none;
}
</style>
