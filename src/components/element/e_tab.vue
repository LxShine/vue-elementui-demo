<template>
<div>
  <h2>Tabs标签页</h2>
  <p class="demo-p">分隔内容上有关联但属于不同类别的数据集合。</p>
  <el-row :gutter="20">
    <el-col :span="20">
      <h3 class="demo-h3">基础用法</h3>
      <p class="demo-p">基础的、简介的标签页。</p>
      <div class="demo-block">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="20">
      <h3 class="demo-h3">选项卡样式</h3>
      <p class="demo-p">选项卡样式的标签页。</p>
      <div class="demo-block">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="20">
      <h3 class="demo-h3">卡片化</h3>
      <p class="demo-p">卡片化的标签页。</p>
      <div class="demo-block">
        <el-tabs type="border-card">
          <el-tab-pane label="用户管理">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="20">
      <h3 class="demo-h3">自定义标签页</h3>
      <p class="demo-p">可以通过具名 slot 来实现自定义标签页的内容。</p>
      <div class="demo-block">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
            我的行程
          </el-tab-pane>
          <el-tab-pane label="消息中心">消息中心</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="20">
      <h3 class="demo-h3">动态增减标签页</h3>
      <p class="demo-p">增减标签页按钮只能在选项卡样式的标签页下使用。</p>
      <div class="demo-block">
        <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
          <el-tab-pane
            v-for="(item, index) in editableTabs" :label="item.title" :name="item.name" :key="item.name">
            {{item.content}}
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="20">
      <h3 class="demo-h3">自定义增加标签触发器</h3>
      <div class="demo-block">
        <div style="margin-bottom: 20px;">
          <el-button
            size="small"
            @click="addTab(editableTabsValue2)"
          >
            add tab
          </el-button>
        </div>
        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="(item, index) in editableTabs2" :label="item.title" :name="item.name" :key="item.name">
            {{item.content}}
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
  </el-row>
    
</div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'second',
      activeName2: 'first',
      editableTabsValue: '2',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2,
      editableTabsValue2: '2',
      editableTabs2: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      }
      if (action === 'remove') {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      });
      this.editableTabsValue2 = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    }
  }
};
</script>
<style>

</style>
