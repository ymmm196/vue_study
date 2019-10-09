<template>
  <div>
    <h1>登录</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="loginForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="type">
        <el-checkbox label="七天免登陆" name="type" v-model="ruleForm.mdl"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        mdl: true
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度必须为 6 到 12 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      // 校验用户名和密码
      // console.log(this.$refs.loginForm);
      this.$refs.loginForm.validate(async valid => {
        // valid： 所有校验规则都通过后，得到true，只要有一个表单元素校验不通过则得到form
        if (valid) {
          let { username, password, mdl } = this.ruleForm;

          let { data } = await this.$axios.get(
            "http://localhost:2999/users/login",
            {
              params: {
                username,
                password,
                mdl
              }
            }
          );

          if (data.code === 1) {
            let { targetUrl } = this.$route.query;
            console.log("targetUrl:", targetUrl);
            // 判断跳转上一页还是我的
            this.$router.replace({
              path: targetUrl || "/mine"
            });

            // 把token写入localstorage
            localStorage.setItem("Authorization", data.data);
          } else {
            alert("登录失败");
          }
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>