<template>
    <el-form :model="task" style="margin-top: 20px;">
        <el-row justify="center" gutter="20">
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
        <el-row justify="center" gutter="20">
            <el-col
                :span="16" justify="center" class="list" :style="{
                borderRadius: `var(--el-border-radius-base)`
            }">
                <el-table :data="tableData" stripe :show-header=false style="width: 100%" max-height=60vh empty-text="Add a task to get started" class="table">
                    <el-table-column prop="task" label="Task"/>
                </el-table>
            </el-col>
        </el-row>
    </el-form>
</template>

<script>
import { ElForm, ElFormItem, ElButton, ElRow, ElCol } from 'element-plus';
import { reactive } from 'vue';
export default {
  name: 'TaskApp',
  components: {
    ElForm,
    ElFormItem,
    ElButton,
    ElRow,
    ElCol
  },
  setup() {
    
    const task = reactive({ content: '' })

    function addTask() {
      if (task.content) {
        console.log('Task added: ', task.content)
        tableData.push({task: task.content})
        task.content = ''
      }
    }

    const tableData = reactive([])

    return {
      task,
      addTask,
      tableData
    }
  }
}
</script>

<style>

.list {
    border: 1px solid var(--el-border-color);
    /* height: 200px; */
}

.add-button {
    width: 100%;
}

</style>