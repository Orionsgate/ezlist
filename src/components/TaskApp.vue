<template>
    <el-form :model="task" style="margin-top: 20px;" v-on:submit.prevent="addTask">
        <el-row justify="center" gutter=20>
            <el-col :span="12" justify="center">
                <el-form-item>
                    <el-input v-model="task.content" class="task-input" placeholder="Enter task"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="4" justify="center">
                <el-form-item>
                    <el-button type="primary" @click="addTask" class="add-button">+</el-button>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
    <el-row justify="center" gutter=20>
        <el-col
            :span="16" justify="center" class="list" :style="{
            borderRadius: `var(--el-border-radius-base)`
        }">
            <TaskList :tableData="data" :done="false"></TaskList>
        </el-col>
    </el-row>
</template>

<script>
// eslint-disable-next-line
import Minus from '@element-plus/icons-vue';
import { ElForm, ElFormItem, ElButton, ElRow, ElCol } from 'element-plus';
import { reactive } from 'vue';
import TaskList from './TaskList';
export default {
  name: 'TaskApp',
  components: {
    ElForm,
    ElFormItem,
    ElButton,
    ElRow,
    ElCol,
    TaskList
  },
  methods: {
    handleCommand(command) {
      console.log(command);
      console.log(this.tableData);
      const idxToRemove = this.tableData.findIndex(obj => obj.task === command)
      this.tableData.splice(idxToRemove, 1);
    }
  },
  setup() {

    const task = reactive({ content: '' })

    function addTask() {
      if (task.content.trim()) {
        data.push({task: task.content, done: false})
        console.log(task.content)
        task.content = ''
      }
    }

    const data = reactive([]);

    return {
      task,
      addTask,
      data
    }
  }
}
</script>

<style>

.list {
    border: 1px solid var(--el-border-color);
    padding: var(--el-border-radius-base);
}

.add-button {
    width: 100%;
}

</style>