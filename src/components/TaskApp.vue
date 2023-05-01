<template>
    <el-form :model="task" style="margin-top: 20px;">
        <el-row justify="center" gutter="20">
            <el-col :span="8" justify="center">
                <el-form-item label-width="80px" label="Task">
                    <el-input v-model="task.content" class="task-input"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="2" justify="center">
                <el-form-item>
                    <el-button type="primary" @click="addTask" class="add-button">Add</el-button>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row justify="center" gutter="20">
            <el-col
                :span="8" justify="center" class="list" :style="{
                borderRadius: `var(--el-border-radius-base)`
            }">
                <el-table :data="tableData" stripe :show-header=false style="width: 100%" empty-text="Add a task to get started" class="table">
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
      console.log('Task added: ', task.content) 
      task.content = ''
    }

    return {
      task,
      addTask
    }
  }
}
</script>

<style>

.list {
    border: 1px solid var(--el-border-color);
    height: 200px;
}

</style>