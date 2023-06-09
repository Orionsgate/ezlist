<template>
    <el-table :data="tableData.filter(x => x.done == done)" :show-header=false style="width: 100%" max-height=60vh empty-text="Add a task to get started" class="table">
        <el-table-column label="Task" prop="task">
            <template #default="scope">
                <div class="list-item">
                    <span class="task-text">
                        {{ scope.row.task }}
                    </span>
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
                        <span class="more-button">
                            <el-icon :size="15" color="#616161"><MoreFilled /></el-icon>
                        </span>
                        </span>
                        <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item icon="Minus" :command=scope.row.task>Delete</el-dropdown-item>
                        </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <div class="checkbox-container">
                        <el-checkbox v-model="scope.row.done" size="large" class="task-check"></el-checkbox>
                    </div>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { ElCheckbox, ElTable, ElTableColumn, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import { reactive } from 'vue';
export default {
  name: 'TaskList',
  props: {
    tableData: {
        type: reactive([]),
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
  },
  components: [
      ElCheckbox,
      ElTable,
      ElTableColumn,
      ElDropdownMenu,
      ElDropdownItem
  ],
  setup() {
    console.log("COnstructed")
  }
}
</script>

<style>
.list-item {
    display: flex;
    align-items: center;
}

.list-title {
    margin-top: 20px;
    color: var(--el-text-color-regular);
}

.task-check {
    margin-left: 10px;
}

.checkbox-container {
    display: flex;
    justify-content: end;
    flex-grow: 1;
}

.more-button {
    padding: 5px;
    display: flex;
}

.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.list-item el-table__cell td {
    border-bottom-style: none;
}

.el-table__inner-wrapper::before {
    display: none !important;
}
</style>