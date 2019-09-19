<template>
  <div class="login">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <ValidationObserver tag="form" ref="loginForm">
        <ValidationProvider tag="div" name="手机号" rules="required|phone" v-slot="{ errors }">
          <van-field
            v-model="user.mobile"
            required
            clearable
            label="手机"
            placeholder="请输入手机号"
            :error-message="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider tag="div" name="验证码" rules="required" v-slot="{ errors }">
          <van-field
            v-model="user.code"
            type="password"
            label="验证码"
            placeholder="请输入验证码"
            :error-message="errors[0]"
          />
        </ValidationProvider>
      </ValidationObserver>
    </van-cell-group>
    <div class="login-btn">
      <van-button type="info" :loading="isLoginLoading" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      isLoginLoading: false
    }
  },
  methods: {
    async onLogin () {
      try {
        const isValid = await this.$refs.loginForm.validate()
        if (!isValid) {
          return
        }
        this.isLoginLoading = true
        const { data } = await login(this.user)
        console.log(data)
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        }
      }
      this.isLoginLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn {
  padding: 20px;
  .van-button {
    width: 100%;
  }
}
</style>
