<template>
<div>
  <h2>Steps步骤条</h2>
  <p class="demo-p">引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</p>
  <el-row :gutter="20">
    <el-col :span="20">
      <h3 class="demo-h3">基础用法</h3>
      <p class="demo-p">简单的步骤条。</p>
      <div class="demo-block">
        <el-steps :space="100" :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </div>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="20">
      <h3 class="demo-h3">含状态步骤条</h3>
      <p class="demo-p">每一步骤显示出该步骤的状态。</p>
      <div class="demo-block">
        <el-steps :space="100" :active="1" finish-status="success">
          <el-step title="已完成"></el-step>
          <el-step title="进行中"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
      </div>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="20">
      <h3 class="demo-h3">有描述的步骤条</h3>
      <p class="demo-p">每个步骤有其对应的步骤状态描述。</p>
      <div class="demo-block">
        <el-steps :space="200" :active="1">
          <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </div>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="20">
      <h3 class="demo-h3">带图标的步骤条</h3>
      <p class="demo-p">步骤条内可以启用各种自定义的图标。</p>
      <div class="demo-block">
        <el-steps :space="100" :active="1">
          <el-step title="步骤 1" icon="edit"></el-step>
          <el-step title="步骤 2" icon="upload"></el-step>
          <el-step title="步骤 3" icon="picture"></el-step>
        </el-steps>
      </div>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="20">
      <h3 class="demo-h3">竖式步骤条</h3>
      <p class="demo-p">竖直方向上的步骤条。</p>
      <div class="demo-block">
        <el-steps :space="100" direction="vertical" :active="1">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
      </div>
    </el-col>
  </el-row>
    
</div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>
<style>
.demo-h3 {
  margin: 45px 0 15px;
}
.demo-p {
  font-size: 14px;
  color: #5e6d82;
  margin: 10px 0 10px;
}
.demo-block {
  border: 1px solid #eaeefb;
  border-radius: 4px;
  transition: .2s;
  margin-bottom: 24px;
  padding: 24px;
}
</style>
