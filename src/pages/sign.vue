<template>
  <div class="screen">
    <div class="text-center diagonal-title text-white mt-3">
      <!-- Optional title or content can go here -->
    </div>
    <form class="form-sign-in text-white ms-3 " @submit.prevent="login">
      <div class="mb-4">
        <p class="text-center h1 form-label">Sign In</p>
      </div>
      <div class="mb-4">
        <label class="form-label" for="username">Tên Đăng Nhập</label>
        <input type="text" id="username" class="form-control" placeholder="Nhập tên đăng nhập" v-model="username"
          required>
      </div>
      <div class="mb-4">
        <label class="form-label" for="password">Mật Khẩu</label>
        <input type="password" id="password" class="form-control" placeholder="Nhập mật khẩu" v-model="password"
          required>
      </div>
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <div class="form-check">
          <input type="checkbox" id="rememberMe" class="form-check-input">
          <label class="form-check-label" for="rememberMe">Remember Me</label>
        </div>
        <a href="#" class="text-white">Forgot Password?</a>
      </div>
      <div class="mb-4 text-center">
        <button class="btn btn-success btn-sign" type="submit">Đăng Nhập</button>
      </div>
      <div class="text-center">
        <span>Don't Have An Account? </span>
        <a href="#" class="text-white" data-bs-toggle="modal" data-bs-target="#RegisterModal">Register Now</a>
      </div>
    </form>

    <!-- Modal Register -->
    <div class="modal fade" id="RegisterModal" tabindex="-1" aria-labelledby="RegisterModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="RegisterModalLabel">Đăng Ký Tài Khoản</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="register">
              <div class="mb-3">
                <label for="reg-username" class="form-label">Tên đăng nhập:</label>
                <input type="text" class="form-control" id="reg-username" placeholder="Nhập tên đăng nhập"
                  v-model="newUser.username" required>
              </div>
              <div class="mb-3">
                <label for="reg-email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="reg-email" placeholder="Nhập email" v-model="newUser.email"
                  required>
              </div>
              <div class="mb-3">
                <label for="reg-phone" class="form-label">Số Điện Thoại:</label>
                <input type="text" class="form-control" id="reg-phone" placeholder="Nhập Số Điện Thoại"
                  v-model="newUser.phone" required>
              </div>
              <div class="mb-3">
                <label for="reg-password" class="form-label">Mật khẩu:</label>
                <input type="password" class="form-control" id="reg-password" placeholder="Nhập mật khẩu"
                  v-model="newUser.password" required>
              </div>
              <div class="mb-3">
                <label for="reg-confirm-password" class="form-label">Xác nhận mật khẩu:</label>
                <input type="password" class="form-control" id="reg-confirm-password" placeholder="Nhập lại mật khẩu"
                  v-model="newUser.confirmPassword" required>
              </div>
              <button type="submit" class="btn btn-primary w-100">Đăng Ký</button>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger" data-bs-dismiss="modal">Đóng</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      username: '',
      password: '',
      listUser: [
        {
          id: 1,
          name: 'Phí Duy Mạnh',
          email: 'manhpdoh49571@gmail.com',
          phone: '0395346930',
          username: "manh992005",
          password: "manh992005",
          img: "https://inbat.vn/wp-content/uploads/2024/10/anh-avatar-vo-tri-8NRtxVT.jpg"
        }
      ],
      newUser: {
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    login(event) {
      event.preventDefault();
      const user = this.listUser.find(item => item.username === this.username && item.password === this.password);
      if (user) {
        this.$store.dispatch('setUserData', user);
        this.$router.push({ name: 'home' });
      } else {
        alert("Sai tài khoản hoặc mật khẩu");
      }
    },
    register(event) {
      event.preventDefault();
      if (this.newUser.password === this.newUser.confirmPassword) {
        this.listUser.push({
          id: this.listUser.length + 1,
          name: this.newUser.username,
          email: this.newUser.email,
          phone: this.newUser.phone,
          username: this.newUser.username,
          password: this.newUser.password,
        });
        alert('Đăng ký thành công!');
        this.$router.push({ name: 'login' });
      } else {
        alert("Mật khẩu xác nhận không khớp!");
      }
    }
  }
}
</script>

<style>
.screen {
  background-image: url("../components/img/banner1.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.form-sign-in {
  width: 40rem;
  max-width: 90%;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.75);
}

.form-label {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
}

.diagonal-title h1 {
  font-size: 3.5rem;
}

.form-control {
  background-color: transparent;
  color: black;
  border: 0.1rem solid rgba(255, 255, 255, 0.5);
  height: 3rem;
  font-size: 1.2rem;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.btn-sign {
  width: 100%;
  height: 3.5rem;
  font-size: 1.3rem;
  border-radius: 2rem;
}

@media (max-width: 768px) {
  .form-sign-in {
    padding: 2rem;
    width: 90%;
  }

  .form-control,
  .btn-sign {
    height: 3rem;
    font-size: 1.1rem;
  }
}
</style>
