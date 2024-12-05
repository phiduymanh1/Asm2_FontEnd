<template>
  <div class="screen1">
    <header class="row bg-body-tertiary p-2">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="navbar-brand" href="#">
            <a href="#"><img style="width: 100px;" src="../components/img/logo-energy-pilates.png" alt="Navbar"></a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" class="bi bi-body-text" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5m0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                  </svg> Bài viết</a>
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
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
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
    <!-- Modal đăng bài -->
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
                <input type="text" class="custom-input" v-model="newPostData.title" placeholder="Tiêu đề bài viết"
                  required>
              </div>
              <div class="mb-3">
                <label class="form-label">Nội Dung Tóm Tắt</label>
                <textarea class="custom-input" v-model="newPostData.content1" rows="3"
                  placeholder="Nhập nội dung tóm tắt" required></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label">Nội Dung</label>
                <textarea class="custom-input" v-model="newPostData.maincontent" rows="5"
                  placeholder="Nhập nội dung bài viết" required></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label">Ảnh hiện tại</label>
                <div v-if="newPostData.image">
                  <img :src="newPostData.image" alt="Current Image" class="img-fluid rounded"
                    style="max-height: 200px;">
                </div>
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
                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Đăng</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <section class="row p-5">
      <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#createPostModal"
        style="width: 350px;">
        Bạn muốn đăng gì .....
      </button>

      <!-- bai dang -->
      <article class="col-sm-12  p-5">
        <div class="container contentt">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10" v-for="post in listDataNews" :key="post.id">
              <div class="card card-custom mb-4 shadow mt-3">
                <h2 class="text-center py-3">
                  <a href="#" class="text-primary fw-bold text-decoration-none">{{ post.title }}</a>
                </h2>
                <img :src="post.image" alt="Post Image" class="img-fluid rounded" />
                <div class="card-body px-3 py-4">
                  <p class="card-text text-secondary">{{ post.content1 }}</p>
                </div>





                <div class="card-footer bg-white d-flex justify-content-center gap-3 py-3 border-top">
                  <button class="btn btn-outline-primary btn-sm px-4" @click="likePost(post.id)">
                    Like({{ post.coutLike }})
                  </button>
                  <button class="btn btn-outline-secondary btn-sm px-4">Share</button>
                  <button class="btn btn-outline-dark btn-sm px-4" @click="toggleCommentSection(post.id)">
                    Bình Luận
                  </button>
                  <button class="btn btn-outline-dark btn-sm px-4" @click="editPost(post)">Chỉnh Sửa</button>
                  <button class="btn btn-outline-danger btn-sm px-4" @click="deletePost(post.id)">Xóa</button>
                  <button type="button" class="btn btn-primary" @click="openPostModal(post)" data-bs-toggle="modal"
                    data-bs-target="#postDetailModal">
                    Xem thêm
                  </button>


                </div>

                <!-- Modal for Post Detail -->
                <div class="modal fade" id="postDetailModal" tabindex="-1" aria-labelledby="postModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header" v-if="selectedPost">
                        <h5 class="modal-title" id="postModalLabel">{{ selectedPost.title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body" v-if="selectedPost">
                        <img :src="selectedPost.image" class="img-fluid mb-3" alt="Post Image" />
                        <p>{{ selectedPost.content1 }}</p>
                        <p>{{ selectedPost.maincontent }}</p>
                      </div>
                      <div v-else>
                        <p>Đang tải dữ liệu...</p>
                      </div>
                      <div class="modal-footer" v-if="selectedPost">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- -- -->
                <div v-if="post.showComments">
                  <div v-for="(comment, index) in post.comments" :key="index" class="comment-item mb-3">
                    <div class="d-flex justify-content-between">
                      <div class="user-name">{{ comment.userName }}</div>
                      <div class="comment-time text-muted">{{ comment.time }}</div>
                    </div>
                    <div v-if="comment.isEditing" class="edit-comment">
                      <input type="text" v-model="comment.editedComment" class="custom-input" />
                      <button class="btn btn-outline-primary btn-sm mt-2"
                        @click="saveComment(post.id, index)">Lưu</button>
                      <button class="btn btn-outline-secondary btn-sm mt-2"
                        @click="cancelEdit(post.id, index)">Hủy</button>
                    </div>

                    <div v-else>
                      <p class="comment-content">{{ comment.content }}</p>
                      <button class="btn btn-outline-warning btn-sm" @click="editComment(post.id, index)">Chỉnh
                        sửa</button>

                    </div>

                  </div>
                </div>


                <div class="comment-form">
                  <input type="text" v-model="newComment" class="custom-input" placeholder="Nhập bình luận..." />
                  <button class="btn btn-primary mt-2" @click="addComment(post.id)">Bình Luận</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>


<script>

// import { Modal } from 'bootstrap';
export default {
  name: "home",
  data() {
    return {
      listDataNews: [
        {
          id: 1,
          title: "Cam rất tốt cho sức khỏe",
          content1: "Trong cam chứa vitamin P, hay còn gọi là rutin giúp mạch máu khỏe mạnh, vitamin nhóm B, dưỡng chất không thể thiếu cho hệ thần kinh",
          image: "https://media.istockphoto.com/id/185284489/vi/anh/cam.jpg?b=1&s=612x612&w=0&k=20&c=gEhpw9fEjufQadiu9LuUE4tnjD7zajA76sSBjfOXCFQ=",
          maincontent: "",
          coutLike: 10,
          comments: [
            {
              userName: "Yến nhi",
              content: "Tôi cũng rất thường hay ăn cam",
              time: "2024-11-28 14:30",
              isEditing: false,
              editedComment: "",
            },
            {
              userName: "Hoàng nhi",
              content: "Ys kien nay hay!",
              time: "2024-11-28 15:00",
              isEditing: false,
              editedComment: "",
            },
          ],
          
        },
      ],
      selectedPost: {}, // Khởi tạo với object rỗng
      newComment: "",
      selectedPostId: null,
      newPostData: {
        title: "",
        content1: "",
        maincontent: "",
        image: "",
        category: "",
        type: "",
      },
      menuOpen: false,
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newPostData.image = e.target.result; // Lưu đường dẫn ảnh vào newPostData
        };
        reader.readAsDataURL(file);
      }
    },
    openPostModal(post) {
      if (this.selectedPost !== post) {
        this.selectedPost = post; // Cập nhật bài viết được chọn
      }
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleCommentSection(postId) {
      const post = this.listDataNews.find((p) => p.id === postId);
      if (post) {
        post.showComments = !post.showComments;
      }
    },
    addComment(postId) {
      const post = this.listDataNews.find((p) => p.id === postId);
      if (post && this.newComment.trim()) {
        const currentTime = new Date().toISOString().slice(0, 19).replace("T", " ");
        post.comments.push({
          userName: this.user.name,
          content: this.newComment,
          time: currentTime,
        });
        this.newComment = "";
      }
    },
    editComment(postId, commentIndex) {
      const post = this.listDataNews.find((p) => p.id === postId);
      if (post) {
        const comment = post.comments[commentIndex];
        comment.isEditing = true;
        comment.editedComment = comment.content;
      }
    },
    saveComment(postId, commentIndex) {
      const post = this.listDataNews.find((p) => p.id === postId);
      if (post) {
        const comment = post.comments[commentIndex];
        comment.content = comment.editedComment;
        comment.isEditing = false;
      }
    },
    cancelEdit(postId, commentIndex) {
      const post = this.listDataNews.find((p) => p.id === postId);
      if (post) {
        const comment = post.comments[commentIndex];
        comment.isEditing = false;
        comment.editedComment = "";
      }
    },
    editPost(post) {
      this.newPostData = { ...post };

      this.$nextTick(() => {
        const modal = new bootstrap.Modal(document.getElementById('createPostModal'));
        modal.show();
      });
    },
    likePost(postId) {
      const post = this.listDataNews.find((p) => p.id === postId);
      if (post) {
        if (!post.liked) {
          post.coutLike += 1;
          post.liked = true;
        } else {
          post.coutLike -= 1;
          post.liked = false;
        }
      }
    },
    newPost() {
      if (this.newPostData.id) {
        // Update existing post
        const postIndex = this.listDataNews.findIndex(post => post.id === this.newPostData.id);
        if (postIndex !== -1) {
          this.listDataNews[postIndex] = { ...this.newPostData }; // Update post
        }
      } else {
        // Add new post
        this.listDataNews.push({
          id: this.listDataNews.length + 1,
          ...this.newPostData,
          coutLike: 0,
          liked: false,
          comments: []
        });
      }

      this.resetForm();
    },
    deletePost(id) {
      // Tìm và xóa bài viết trong listDataNews
      this.listDataNews = this.listDataNews.filter(post => post.id !== id);
    },
    resetForm() {
      this.newPostData = {
        title: "",
        content1: "",
        maincontent: "",
        image: "",
        category: "",
        type: "",
      };
    },
    clickProfile(event) {
      event.preventDefault();
      const userData = this.$store.getters.getUserData;
      console.log("User Data:", userData);
      if (userData) {
        this.$router.push({ name: "tcn" });
      } else {
        console.error("Không có dữ liệu user để chuyển hướng.");
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.getUserData;
    },
  },
  mounted() {
    console.log(this.user);
  },

};
</script>
<style>

.custom-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

.comment-item {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.comment-item .user-name {
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

.comment-item .comment-time {
  font-size: 12px;
  color: #999;
}

.comment-content {
  font-size: 14px;
  color: #555;
  margin-top: 10px;
}

.edit-comment input {
  width: 100%;
  margin-bottom: 10px;
}

.comment-form input {
  width: calc(100% - 90px);
  margin-bottom: 10px;
}


.comment-form,
.comment-item button {
  font-size: 14px;
  text-transform: none;
}

.comment-item button {
  margin-top: 5px;
  font-size: 14px;
}

.contentt {
  padding-top: 6.5rem;
}

.screen1 {
  background-image: url("../components/img/banner1.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  margin: 0;
  width: 100%;
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

.menu {
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 6.4rem;
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

.card-custom {
  margin: 0 auto;
  max-width: 100%;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #fff;
}


.card-custom:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-footer button:hover {
  background-color: #3498db;
  color: #fff;
  border-color: #3498db;
}

.card-text {
  line-height: 1.6;
  text-align: justify;
}

.comment-item {
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.comment-form {
  margin-top: 20px;
}

.comment-content {
  font-size: 14px;
  color: #555;
}

.comment-time {
  font-size: 12px;
}

.user-name {
  font-weight: bold;
}

.comment-form input {
  width: 100%;
  margin-bottom: 10px;
}

.comment-form button {
  width: 100%;
}
</style>