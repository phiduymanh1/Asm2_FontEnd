<template>
    <header class="row bg-body-tertiary p-2">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="navbar-brand" href="#">
                    <a href="#"><img style="width: 100px;" src="../components/img/logo-energy-pilates.png"
                            alt="Navbar"></a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-body-text" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5m0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                                </svg>
                                <router-link to="/home">Bài Viết</router-link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor"
                                    class="bi bi-caret-left-square" viewBox="0 0 16 16">
                                    <path
                                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                    <path
                                        d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082" />
                                </svg>
                                Video</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-person" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                </svg>
                                Giới thiệu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-calendar4-event" viewBox="0 0 16 16">
                                    <path
                                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                    <path
                                        d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                Sự kiện</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <a class="nav-link">Tiếng Việt </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Tiếng Anh</a>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-outline-success" @click="clickProfile">
                                <img src="../components/img/icons8-account-50 (1).png" alt="Account Icon">
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="modal fade" id="userDetailsModal" tabindex="-1" aria-labelledby="userDetailsModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="userDetailsModalLabel">Thông Tin Tài Khoản</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="updateUser">
                        <div class="mb-3">
                            <label class="form-label">Họ và Tên</label>
                            <input type="text" class="custom-input" v-model="userData.fullName"
                                placeholder="Nhập Họ Tên" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="custom-input" v-model="userData.email" placeholder="Nhập email"
                                required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Số Điện Thoại</label>
                            <input type="text" class="custom-input" v-model="userData.phone"
                                placeholder="Nhập số điện thoại" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tên Đăng Nhập</label>
                            <input type="text" class="custom-input" v-model="userData.username"
                                placeholder="Nhập tên đăng nhập" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Mật Khẩu</label>
                            <div class="input-group">
                                <input :type="passwordVisible ? 'text' : 'password'" class="custom-input"
                                    v-model="userData.password" placeholder="Nhập mật khẩu" required>
                                <button type="button" class="btn btn-outline-secondary"
                                    @click="togglePasswordVisibility">
                                    <span v-if="passwordVisible">Ẩn</span>
                                    <span v-else>Hiển Thị</span>
                                </button>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Ảnh Đại Diện</label>
                            <input type="file" class="form-control" @change="onAvatarChange" accept="image/*">
                            <img :src="avatarUrl" alt="Avatar" class="rounded-circle mt-3" width="100" height="100">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="submit" class="btn btn-primary">Cập Nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="menu" id="menu" :class="{ open: menuOpen }" ref="menu">
        <button class="btn btn-custom" data-bs-toggle="modal" data-bs-target="#createPostModal">
            <img src="../components/img/icons8-add-50.png" alt="Add Icon">
            <h6>Tạo Bài Viết Mới</h6>
        </button>
        <div class="list-menu">
            <div class="row text-center"><a href="#">Bài Đăng</a></div>
            <div class="row text-center"><a href="#">Thống Kê</a></div>
            <div class="row text-center"><a href="#">Thu Nhập</a></div>
            <div class="row text-center"><a href="#">Trang</a></div>
            <div class="row text-center"><a href="#">Bố Cục</a></div>
            <div class="row text-center"><a href="#">Chủ Đề</a></div>
            <div class="row text-center"><a href="#">Cài Đặt</a></div>
            <div class="row text-center"><a href="#">Danh Sách Đọc</a></div>
        </div>
    </div>
    <div class="modal fade" id="createPostModal" tabindex="-1" aria-labelledby="createPostModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createPostModalLabel">Tạo Bài Viết Mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="newPost">
                        <div class="mb-3">
                            <label class="form-label">Tiêu Đề</label>
                            <input type="text" class="form-control" v-model="newPostData.title"
                                placeholder="Tiêu đề bài viết" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Nội Dung Tóm Tắt</label>
                            <textarea class="form-control" v-model="newPostData.content1" rows="3"
                                placeholder="Nhập nội dung tóm tắt" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Nội Dung</label>
                            <textarea class="form-control" v-model="newPostData.maincontent" rows="5"
                                placeholder="Nhập nội dung bài viết" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Đính Kèm Ảnh</label>
                            <input type="file" class="form-control" @change="onFileChange" accept="image/*">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Thể Loại</label>
                            <select class="form-select" v-model="newPostData.category" required>
                                <option value="" disabled>Chọn thể loại</option>
                                <option value="technology">Công Nghệ</option>
                                <option value="lifestyle">Đời Sống</option>
                                <option value="education">Giáo Dục</option>
                                <option value="health">Sức Khỏe</option>
                                <option value="travel">Du Lịch</option>
                            </select>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="submit" class="btn btn-primary">Đăng Bài</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="container contentt">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow-lg">
                    <div class="card-body">
                        <div class="text-center mb-4">
                            <img :src="avatarUrl" alt="Avatar" class="rounded-circle" width="150" height="150"
                                @click="triggerFileInput">
                            <input type="file" ref="avatarInput" class="d-none" @change="onAvatarChange"
                                accept="image/*">
                            <h3 class="mt-2">Avatar</h3>
                        </div>
                        <form>
                            <h5 class="text-primary mb-4">Thông Tin Tài Khoản</h5>
                            <div class="mb-3">
                                <label for="fullName" class="form-label">Họ và Tên: {{ userData.fullName }}</label>
                                <!-- <input type="text" class="custom-input" id="fullName" v-model="userData.fullName"
                                    placeholder="Nhập Họ Tên" required> -->
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email: {{ userData.email }}</label>
                                <!-- <input type="email" class="custom-input" id="email" v-model="userData.email"
                                    placeholder="Nhập email" required> -->
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Số Điện Thoại {{ userData.phone }}</label>
                                <!-- <input type="text" class="custom-input" id="phone" v-model="userData.phone"
                                    placeholder="Nhập số điện thoại" required> -->
                            </div>
                            <div class="mb-3">
                                <label for="username" class="form-label">Tên Đăng Nhập: {{ userData.username }}</label>
                                <!-- <input type="text" class="custom-input" id="username" v-model="userData.username"
                                    placeholder="Nhập tên đăng nhập" required> -->
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Mật Khẩu: *******</label>
                                <!-- <input type="password" class="custom-input" id="password" v-model="userData.password"
                                    placeholder="Nhập mật khẩu" required> -->
                            </div>

                            <div class="d-flex justify-content-between mt-4">
                                <button type="button" class="btn custom-btn" @click="openUserDetailsModal">Xem Chi
                                    Tiết</button>
                                <button type="button" class="btn custom-btn" @click="logout">Đăng Xuất</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
form {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
}

.custom-input:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.8);
}

/* Định dạng cho tiêu đề */
h5 {
    font-weight: 600;
    font-size: 1.3rem;
}

/* Định dạng cho các nút (custom button) */
.custom-btn {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 12px 20px;
    border-radius: 30px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

/* Màu sắc cho các nút */
.custom-btn:first-child {
    background-color: #3498db;
    color: white;
}

.custom-btn:last-child {
    background-color: #2ecc71;
    color: white;
}

/* Hiệu ứng khi hover lên nút */
.custom-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Các hiệu ứng cho các input */
.custom-input {
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    padding: 12px;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
}

/* Hiệu ứng hover cho các input */
.custom-input:hover {
    border-color: #3498db;
}

body {
    background-image: url("../components/img/banner1.jpg");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
}

header {
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1050;
    padding: 0.5rem 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

a {
    text-decoration: none;
    color: #333;
}

.contentt {
    padding-top: 7.5rem;
}

.menu {
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 6.5rem;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
}

.menu.open {
    transform: translateX(0);
}

.btn-custom {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    width: 100%;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
}

.btn-custom img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.btn-custom h6 {
    margin: 0;
    color: #333;
}

.list-menu .row {
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.list-menu .row:hover {
    background-color: dimgrey;
}

.list-menu .row a {
    width: 100%;
    color: #333;
    text-decoration: none;
    font-weight: 500;
    display: block;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .col-sm-3 {
    width: auto;
}

header .col-sm-5 {
    flex-grow: 1;
    margin-left: 1rem;
}

header button img {
    width: 24px;
    height: 24px;
}

.modal-dialog {
    max-width: 90%;
}

#createPostForm {
    display: flex;
    flex-direction: column;
}

#createPostForm label {
    margin-bottom: 0.5rem;
}

#createPostForm input,
#createPostForm textarea,
#createPostForm select {
    margin-bottom: 1rem;
    width: 100%;
    box-sizing: border-box;
}

@media (min-width: 768px) {
    #createPostForm {
        flex-direction: row;
        flex-wrap: wrap;
    }

    #createPostForm>div {
        width: 50%;
        margin-right: 1rem;
    }

    #createPostForm>div:last-child {
        margin-right: 0;
    }

    .card {
        width: 100%;
        margin: 0;
    }
}

.btn-custom {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    width: 100%;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
}

.btn-custom img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.btn-custom h6 {
    margin: 0;
    color: #333;
}

.modal-content {
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.modal-header {
    background-color: #3498db;
    color: white;
    border-bottom: none;
}

.modal-title {
    font-weight: 600;
    font-size: 1.1rem;
}

.modal-body {
    padding: 25px;
}

.form-label {
    font-weight: 500;
}

.modal-footer {
    border-top: 1px solid #eee;
    justify-content: flex-end;
    padding: 20px;
}

.btn-primary {
    background-color: #2ecc71;
    border-color: #27ae60;
}

.btn-secondary {
    background-color: #e74c3c;
    border-color: #c0392b;
}
</style>
<script>
export default {
    name: "private",
    data() {
        return {
            menuOpen: false,
            avatarUrl: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg",
            userData: {
                fullName: "",
                email: "",
                phone: "",
                username: "",
                password: "",
            },
            passwordVisible: false,
            newPostData: {
                title: '',
                content1: '',
                maincontent: '',
                category: '',
                image: ''
            }
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.passwordVisible = !this.passwordVisible;
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.newPostData.image = URL.createObjectURL(file);
            }
        },
        closeModal() {
            const modalElement = document.getElementById('createPostModal');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();
        },
        newPost() {
            console.log("New post data: ", this.newPostData);
            this.closeModal();
        },
        onAvatarChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.avatarUrl = URL.createObjectURL(file);
            }
        },
        triggerFileInput() {
            this.$refs.avatarInput.click();
        },
        openUserDetailsModal() {
            const modalElement = document.getElementById('userDetailsModal');
            const modalInstance = new bootstrap.Modal(modalElement);
            modalInstance.show();
        },
        logout() {
            // Xóa thông tin người dùng từ localStorage hoặc sessionStorage
            localStorage.removeItem('user'); // Ví dụ xóa thông tin người dùng
            sessionStorage.removeItem('user'); // Nếu bạn lưu thông tin ở sessionStorage

            // Nếu có API đăng xuất, bạn có thể gọi tại đây
            // ví dụ: this.$http.post('/api/logout').then(...);

            // Chuyển hướng đến trang đăng nhập hoặc trang chủ
            this.$router.push('/'); // Chuyển hướng về trang đăng nhập
        },
        updateUser() {
            console.log("User data updated: ", this.userData);
            const modalElement = document.getElementById('userDetailsModal');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();
        }
    },

    computed: {
        user() {
            return this.$store.getters.getUserData;
        },
    },
    mounted() {
        if (this.user) {
            this.userData.fullName = this.user.name;
            this.userData.email = this.user.email;
            this.userData.phone = this.user.phone;
            this.userData.username = this.user.username;
            this.userData.password = this.user.password;
        } else {
            console.error('Dữ liệu người dùng không tồn tại.');
        }
    },
};


</script>
